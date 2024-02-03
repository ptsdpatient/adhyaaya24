import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // Import GLTFLoader
import drone from '$lib/assets/3d-models/drone.glb?url'
import nova from '$lib/assets/3d-models/ms.glb?url'
import type { Var } from 'svelte/types/compiler/interfaces';
export class Sketch {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private model1: THREE.Object3D;
  private model2: THREE.Object3D;
  private floatingSpeed = 0.002
  private scrollPosition = 0;
  private mixer:THREE.AnimationMixer;
  
  loaded=false;
  constructor(canvas: HTMLCanvasElement) {
    
    // Create a scene
    this.scene = new THREE.Scene();
    this.model1 = new THREE.Object3D();
    this.model2 = new THREE.Object3D();
    // Create a camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 6;

    // Create a renderer
    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Load the GLB model
    const loader1 = new GLTFLoader();
    loader1.load(drone, (gltf) => {
      this.model1 = gltf.scene;
      
      if (window.innerWidth < 1024) {
        this.model1.position.set(0, 0, 5);
        this.model1.scale.set(0.15,0.15,0.15)
         
      } else {
        this.model1.position.set(0.4, 0,5.5);
        this.model1.scale.set(0.1,0.1,0.1)
      }     
      
      this.scene.add(this.model1);
    this.loaded=true;
    });

    const loader2 = new GLTFLoader();
    loader2.load(nova, (gltf) => {
      this.model2 = gltf.scene;
      if (window.innerWidth < 1024) {
        this.model2.position.set(0, 0, 5);
         
      } else {
        this.model2.position.set(0, 0, 5);
      }     
      this.model2.rotation.x=-1.3;
      this.scene.add(this.model2);
      const animationAction = this.mixer.clipAction(gltf.animations[1]); 
        animationAction.play();
    this.loaded=true;
    });

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    ambientLight.intensity = 10;
    this.scene.add(ambientLight);

    this.animate();

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      if (window.innerWidth < 1024) {
        this.model1.position.set(0, 0, 5);
        this.model1.scale.set(0.15,0.15,0.15)
         
      } else {
        this.model1.position.set(0.4, 0,5.5);
        this.model1.scale.set(0.1,0.1,0.1)
      }     
    });
  }
  
  private handleScroll = () => {
    this.scrollPosition = window.scrollY;
    const normalizedScroll = this.scrollPosition / (document.body.scrollHeight - window.innerHeight);
    this.model1.rotation.y =90+ normalizedScroll * Math.PI *-2;
    // this.model2.rotation.y =90+ normalizedScroll * Math.PI *-2;
     this.model2.rotation.x =90+ normalizedScroll * Math.PI *-2;
     this.model2.rotation.z =90+ normalizedScroll * Math.PI *-2;
  };
  private animate = () => {
    this.handleScroll();
    requestAnimationFrame(this.animate);
    if (this.mixer) this.mixer.update(0.01);
    if (this.model1) {
     // this.model.rotation.x += 0.005;
      this.model1.position.y = Math.cos(Date.now() * this.floatingSpeed) * 0.01; 
      this.camera.position.y=Math.sin(Date.now() * this.floatingSpeed) * 0.02
    }
    if (this.model2) {
      // this.model.rotation.x += 0.005;
      //  this.model1.position.y = Math.sin(Date.now() * this.floatingSpeed) * 0.3; 
          
          
     }

    this.renderer.render(this.scene, this.camera);
  };
}
