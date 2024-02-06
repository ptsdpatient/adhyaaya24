import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // Import GLTFLoader
import drone from '$lib/assets/3d-models/drone.glb?url'
import sb_0 from '$lib/assets/3d-models/sb.glb?url'
import sb_1 from '$lib/assets/3d-models/sb_2.glb?url'
import sb_2 from '$lib/assets/3d-models/sb_3.glb?url'
import sb_4 from '$lib/assets/3d-models/sb_5.glb?url'
import sb_3 from '$lib/assets/3d-models/sb_4.glb?url'
import {page} from '$app/stores';
import type { Var } from 'svelte/types/compiler/interfaces';
import { randInt } from 'three/src/math/MathUtils.js';
export class Sketch {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private model1: THREE.Object3D;
  private model2: THREE.Object3D;
  private floatingSpeed = 0.002
  private scrollPosition = 0;
  modelLoaded=0;
  private skybox: string[] = [sb_0,sb_1, sb_2, sb_3,sb_4];
 
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
      this.model1.rotation.y=2;
      this.scene.add(this.model1);
    this.modelLoaded++;
    });

    const loader2 = new GLTFLoader();
    loader2.load(this.skybox[randInt(0,4)], (gltf) => {
      this.model2 = gltf.scene;
      if (window.innerWidth < 1024) {
        this.model2.position.set(0, 0, 5);
         
      } else {
        this.model2.position.set(0, 0, 5);
      }     
      this.model2.rotation.x=-1.3;
      this.scene.add(this.model2);
      this.model2.rotation.x=2;
      this.model2.rotation.z=2;
      this.modelLoaded++;
    });

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    ambientLight.intensity = 10;
    this.scene.add(ambientLight);

    this.animate();
    this.handleScroll
    window.addEventListener('scroll', this.handleScroll);
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
  
   handleScroll=()=>{
    this.scrollPosition = window.scrollY;
    const normalizedScroll = this.scrollPosition / (document.body.scrollHeight - window.innerHeight);
    this.model1.rotation.y =90+ normalizedScroll * Math.PI *-2;
    this.model1.position.x=(window.innerWidth < 1024)?  0: normalizedScroll*-0.4+0.4;
    
     this.model2.rotation.x =90+ normalizedScroll * Math.PI *-2;
     this.model2.rotation.z =90+ normalizedScroll * Math.PI *-2;
  }
  private animate = () => {
 
    requestAnimationFrame(this.animate);
  
    if (this.model1&&this.model2) {
      this.model1.position.y = Math.cos(Date.now() * this.floatingSpeed) * 0.01; 
      this.camera.position.y=Math.sin(90+Date.now() * this.floatingSpeed) * 0.03
    }
    

    this.renderer.render(this.scene, this.camera);
  };
}
