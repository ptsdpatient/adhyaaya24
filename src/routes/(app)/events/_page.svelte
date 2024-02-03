<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	import { openModal } from 'svelte-modals';
	import EventInfoModal from '$lib/components/events/EventInfoModal.svelte';
	import { EVENTS } from '$lib/data/events';
	let technical = data.events.filter((event) => event.category === 'technical');
	let non_technical = data.events.filter((event) => event.category === 'non-technical');
	let workshops = data.events.filter((event) => event.category === 'workshops');
	import MainCards from '$lib/components/events/MainCards.svelte';
	//   import img from '$lib/assets/backgrounds/8.png';
	import EventCard from '$lib/components/events/EventCard.svelte';
	import { afterUpdate, onMount } from 'svelte';
	import * as THREE from 'three';

	let canvas: HTMLCanvasElement;
	let mouse: THREE.Vector2;
	function onMouseMove(x: number, y: number) {
		mouse.x = x * 2 - 1;
		mouse.y = -y * 2 + 1;
	}

	// afterUpdate(() => {
	// 	if (data.view != 'list') {
	// 		openModal(EventInfoModal, { event: EVENTS.find((e) => e.id == data.view) || EVENTS[0] });
	// 	}
	// })

	onMount(() => {
		// Three JS Template

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.shadowMap.enabled = false;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		renderer.shadowMap.needsUpdate = true;

		document.getElementById('bg').appendChild(renderer.domElement);
		// window.addEventListener('resize', onWindowResize, false);
		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		}
		const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 500);
		const scene = new THREE.Scene();
		const cameraRange = 3;

		const setcolor = 0x000000;

		scene.background = new THREE.Color(setcolor);
		scene.fog = new THREE.Fog(setcolor, 2.5, 3.5);

		//-------------------------------------------------------------- SCENE

		const sceneGruop = new THREE.Object3D();
		const particularGruop = new THREE.Object3D();
		const modularGruop = new THREE.Object3D();

		function generateParticle(num, amp = 2) {
			const gmaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff, side: THREE.DoubleSide });

			const gparticular = new THREE.CircleGeometry(0.2, 5);

			for (let i = 1; i < num; i++) {
				const pscale = 0.001 + Math.abs(mathRandom(0.03));
				const particular = new THREE.Mesh(gparticular, gmaterial);
				particular.position.set(mathRandom(amp), mathRandom(amp), mathRandom(amp));
				particular.rotation.set(mathRandom(), mathRandom(), mathRandom());
				particular.scale.set(pscale, pscale, pscale);
				particular.speedValue = mathRandom(1);

				particularGruop.add(particular);
			}
		}
		generateParticle(200, 2);

		sceneGruop.add(particularGruop);
		scene.add(modularGruop);
		scene.add(sceneGruop);

		function mathRandom(num = 1) {
			const setNumber = -Math.random() * num + Math.random() * num;
			return setNumber;
		}

		//------------------------------------------------------------- INIT
		function init() {
			for (let i = 0; i < 30; i++) {
				const geometry = new THREE.IcosahedronGeometry(1);
				const material = new THREE.MeshStandardMaterial({
					shading: THREE.FlatShading,
					color: 0x0d0028,
					transparent: false,
					opacity: 0,
					wireframe: false
				});
				const cube = new THREE.Mesh(geometry, material);
				cube.speedRotation = Math.random() * 0.1;
				cube.positionX = mathRandom();
				cube.positionY = mathRandom();
				cube.positionZ = mathRandom();
				cube.castShadow = true;
				cube.receiveShadow = true;

				const newScaleValue = mathRandom(0.3);

				cube.scale.set(newScaleValue, newScaleValue, newScaleValue);
				//---
				cube.rotation.x = mathRandom((180 * Math.PI) / 180);
				cube.rotation.y = mathRandom((180 * Math.PI) / 180);
				cube.rotation.z = mathRandom((180 * Math.PI) / 180);
				//
				cube.position.set(cube.positionX, cube.positionY, cube.positionZ);
				modularGruop.add(cube);
			}
		}

		//------------------------------------------------------------- CAMERA
		camera.position.set(0, 0, cameraRange);
		let cameraValue = false;
		function cameraSet() {
			if (!cameraValue) {
				TweenMax.to(camera.position, 1, { z: cameraRange, ease: Power4.easeInOut });
				cameraValue = true;
			} else {
				TweenMax.to(camera.position, 1, { z: cameraRange, x: 0, y: 0, ease: Power4.easeInOut });
				INTERSECTED = null;
				cameraValue = false;
			}
		}

		//------------------------------------------------------------- SCENE
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
		//scene.add(ambientLight);

		const light = new THREE.SpotLight(0xffffff, 3);
		light.position.set(5, 5, 2);
		light.castShadow = true;
		light.shadow.mapSize.width = 10000;
		light.shadow.mapSize.height = light.shadow.mapSize.width;
		light.penumbra = 0.5;

		const lightBack = new THREE.PointLight(0x0fffff, 1);
		lightBack.position.set(0, -3, -1);

		scene.add(sceneGruop);
		scene.add(light);
		scene.add(lightBack);

		const rectSize = 2;
		const intensity = 100;
		const rectLight = new THREE.RectAreaLight(0x0fffff, intensity, rectSize, rectSize);
		rectLight.position.set(0, 0, 1);
		rectLight.lookAt(0, 0, 0);
		scene.add(rectLight);

		// const rectLightHelper = new THREE.RectAreaLightHelper( rectLight );
		//scene.add( rectLightHelper );

		//------------------------------------------------------------- RAYCASTER
		const raycaster = new THREE.Raycaster();
		mouse = new THREE.Vector2();
		let INTERSECTED: any;
		let intersected;

		function onMouseMove(event) {
			// event.preventDefault();
			mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
		}
		function onMouseDown(event) {
			event.preventDefault();
			// onMouseMove(event);
			raycaster.setFromCamera(mouse, camera);
			const intersected = raycaster.intersectObjects(modularGruop.children);
			if (intersected.length > 0) {
				cameraValue = false;
				if (INTERSECTED != intersected[0].object) {
					if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

					INTERSECTED = intersected[0].object;
					INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
					INTERSECTED.material.emissive.setHex(0xffff00);
					//INTERSECTED.material.map = null;
					//lightBack.position.set(INTERSECTED.position.x,INTERSECTED.position.y,INTERSECTED.position.z);

					TweenMax.to(camera.position, 1, {
						x: INTERSECTED.position.x,
						y: INTERSECTED.position.y,
						z: INTERSECTED.position.z + 3,
						ease: Power2.easeInOut
					});
				} else {
					if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
					INTERSECTED = null;
				}
			}
			dev ? console.log(intersected.length) : null;
		}

		// window.addEventListener('mousedown', onMouseDown, false);
		// window.addEventListener('mouseup', onMouseUp, false);
		// window.addEventListener('mousemove', onMouseMove, false);

		//------------------------------------------------------------- RENDER
		const uSpeed = 0.1;
		function animate() {
			const time = performance.now() * 0.0003;
			requestAnimationFrame(animate);
			//---
			for (let i = 0, l = particularGruop.children.length; i < l; i++) {
				const newObject = particularGruop.children[i];
				newObject.rotation.x += newObject.speedValue / 10;
				newObject.rotation.y += newObject.speedValue / 10;
				newObject.rotation.z += newObject.speedValue / 10;
				//---
				//newObject.position.y = Math.sin(time) * 3;
			}

			for (let i = 0, l = modularGruop.children.length; i < l; i++) {
				const newCubes = modularGruop.children[i];
				newCubes.rotation.x += 0.008;
				newCubes.rotation.y += 0.005;
				newCubes.rotation.z += 0.003;
				//---
				newCubes.position.x = Math.sin(time * newCubes.positionZ) * newCubes.positionY;
				newCubes.position.y = Math.cos(time * newCubes.positionX) * newCubes.positionZ;
				newCubes.position.z = Math.sin(time * newCubes.positionY) * newCubes.positionX;
			}
			//---
			particularGruop.rotation.y += 0.005;
			//---
			modularGruop.rotation.y -= (mouse.x * 4 + modularGruop.rotation.y) * uSpeed;
			modularGruop.rotation.x -= (-mouse.y * 4 + modularGruop.rotation.x) * uSpeed;
			camera.lookAt(scene.position);
			renderer.render(scene, camera);
		}

		animate();
		init();
	});

	function convertRange(value: number, r1: number[], r2: number[]) {
		return ((value - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0];
	}

	let height: number = 0;

	import tech from '$lib/assets/icons/tech.png';
	import ntech from '$lib/assets/icons/nontech.png';
	import wksp from '$lib/assets/icons/workshops.png';
	import { dev } from '$app/environment';
</script>

<svelte:head>
	<title>Events | Adhyaaya'24</title>
</svelte:head>

<svelte:window
	on:resize={() => {}}
	on:scroll|passive={(e) => {
		onMouseMove(0, convertRange(window.scrollY, [0, height - window.innerHeight], [0, 1]));
	}}
/>

<!-- <canvas bind:this={canvas} class="orb-canvas -z-50 fixed bg-white !h-screen !w-screen" /> -->
<!-- <img src="{img}" class="-z-50 fixed h-screen w-screen object-cover"> -->
<div id="bg" class=" fixed h-screen w-screen -z-50 overflow-clip blur-sm" />

<div
	bind:clientHeight={height}
	class="events-container grid grid-cols-1 justify-items-stretch pt-28 min-h-[50vh] scroll-smooth"
>
	<!-- Title -->
	<div class="flex flex-col items-center justify-center">
		<h1 class="text-4xl font-bold text-center text-white myfont">Events</h1>
	</div>
	<div
		class="section-header h-full min-h-[calc(100vh-7rem)] flex items-center justify-center flex-wrap transition-all duration-500 ease-in-out gap-4 md:gap-10 pt-16"
	>
		<MainCards
			color={3}
			href="#technical"
			icontext=""
			title="Technical"
			subtitle="Events"
			subtext=""
			image={tech}
		/>
		<MainCards
			color={2}
			href="#non-technical"
			icontext=""
			title="Non-Tech"
			subtitle="Events"
			subtext=""
			image={ntech}
		/>
		<MainCards
			color={0}
			href="#workshops"
			icontext=""
			title="Workshops"
			subtitle="."
			subtext=""
			image={wksp}
		/>
	</div>

	<div class="flex flex-col items-center justify-center pt-16">
		<h1 class="text-2xl font-bold text-center text-white ">Technical Events</h1>
	</div>
	<div
		id="technical"
		class="h-full min-h-[50vh] flex items-center justify-center flex-wrap transition-all duration-500 ease-in-out gap-4 md:gap-10 pt-16"
	>
		{#each technical as t}
			<EventCard data={t} />
		{/each}
	</div>
	<div class="flex flex-col items-center justify-center pt-16">
		<h1 class="text-2xl font-bold text-center text-white ">Non-Tech Events</h1>
	</div>
	<div
		id="non-technical"
		class="h-full min-h-[50vh] flex items-center justify-center flex-wrap transition-all duration-500 ease-in-out gap-4 md:gap-10 pt-16"
	>
		{#each non_technical as nt}
			<EventCard data={nt} />
		{/each}
	</div>
	<div class="flex flex-col items-center justify-center pt-16">
		<h1 class="text-2xl font-bold text-center text-white ">Workshops</h1>
	</div>
	<div
		id="workshops"
		class="h-full min-h-[50vh] flex items-center justify-center flex-wrap transition-all duration-500 ease-in-out gap-4 md:gap-10 pt-16"
	>
		{#each workshops as w}
			<EventCard data={w} />
		{/each}
	</div>
</div>

<!-- <button class="button" on:click={() => {openModal(EventInfoModal, {event: EVENTS[0]})}}>BUTTTON</button> -->
