<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
	import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
	import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

	let camera: THREE.PerspectiveCamera;
	let scene: THREE.Scene;
	let renderer: THREE.WebGLRenderer;
	let composer: EffectComposer;
	let spheres: THREE.Mesh[] = [];

	onMount(async () => {
		camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
		camera.position.z = 400;

		scene = new THREE.Scene();

		for (let i = 0; i < 100; i++) {
			const sphere = new THREE.Mesh(
				new THREE.SphereGeometry(10, 16, 8),
				new THREE.MeshBasicMaterial({ color: 0x6f3cc7 })
			);
			sphere.position.x = Math.random() * 800 - 400;
			sphere.position.y = Math.random() * 800 - 400;
			sphere.position.z = Math.random() * 800 - 400;
			scene.add(sphere);
			spheres.push(sphere);
		}

		renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1;
		renderer.outputEncoding = THREE.sRGBEncoding;
		document.body.appendChild(renderer.domElement);

		// add bloom effect
		composer = new EffectComposer(renderer);
		const renderPass = new RenderPass(scene, camera);
		composer.addPass(renderPass);
		const bloomPass = new UnrealBloomPass(
			new THREE.Vector2(window.innerWidth, window.innerHeight),
			1.5,
			0.4,
			0.85
		);
		bloomPass.threshold = 1;
		bloomPass.strength = 1.5;
		bloomPass.radius = 0;
		composer.addPass(bloomPass);

		animate();
	});

	function animate() {
		requestAnimationFrame(animate);
		spheres.forEach((sphere) => {
			sphere.rotation.x += 0.01;
			sphere.rotation.y += 0.01;
		});
		composer.render();
	}

	window.addEventListener(
		'resize',
		function () {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		},
		false
	);
</script>
