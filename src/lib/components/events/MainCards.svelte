<script lang="ts">
	import { onMount } from 'svelte';
	import FragmentShader from './shaders/fragment.glsl?raw';
	import VertexShader from './shaders/vertex.glsl?raw';
	import NoiseShader from './shaders/noise.glsl?raw';
	import tech from '$lib/assets/icons/tech.png';
	let canvas: HTMLCanvasElement;
	let card: HTMLAnchorElement;

	// External Props
	export let href: string;
	export let title: string = 'Title';
	export let subtitle = 'Subtitle';
	export let subtext = 'Subtext';
	// export let icon = "mdi:at";
	export let icon = '';
	export let icontext = 'DevParapalli';
	export let color = 1;
	export let image = tech;

	let _bg: string;

	import * as THREE from 'three';

	const rgb = function (r: number, g: number, b: number) {
		return new THREE.Vector3(r, g, b);
	};

	const randomInteger = function (min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	export const colors = [
		{ low: rgb(0, 114, 255), high: rgb(48, 0, 255) }, // Blue
		{ low: rgb(236, 166, 15), high: rgb(233, 104, 0) }, // Yellow
		{ low: rgb(43, 75, 235), high: rgb(213, 51, 248) }, // Purple
		{ low: rgb(175, 49, 49), high: rgb(123, 16, 16) } // Red
	];

	export const createWave = async function (
		ref: HTMLAnchorElement,
		colors: { low: THREE.Vector3; high: THREE.Vector3 }[]
	) {
		const renderer = new THREE.WebGLRenderer({
			powerPreference: 'high-performance',
			antialias: true,
			alpha: true,
			canvas
		});
		renderer.setSize(card.clientWidth, card.clientHeight, true);
		renderer.setPixelRatio(window.devicePixelRatio / 2);

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, card.clientWidth / card.clientHeight, 0.1, 1000);

		const _ = colors[Math.floor(color % colors.length)];
		let low = _.low;
		let high = _.high;

		_bg = `rgba(${high.x},${high.y},${high.z},0.75)`;

		let geometry = new THREE.PlaneGeometry(600, 600, 100, 100);
		let material = new THREE.ShaderMaterial({
			uniforms: {
				u_lowColor: { type: 'v3', value: low },
				u_highColor: { type: 'v3', value: high },
				u_time: { type: 'f', value: 0 },
				u_height: { type: 'f', value: 1 },
				u_rand: { type: 'f', value: new THREE.Vector2(randomInteger(6, 10), randomInteger(8, 10)) }
			},
			fragmentShader: NoiseShader + FragmentShader,
			vertexShader: NoiseShader + VertexShader
		});
		let mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(0, 0, -300);
		mesh.material.needsUpdate = true;
		scene.add(mesh);

		let enterTimer: NodeJS.Timeout, exitTimer: NodeJS.Timeout;
		card.addEventListener('mouseenter', function (e) {
			if (typeof exitTimer !== 'undefined') {
				clearTimeout(exitTimer);
			}
			enterTimer = setInterval(function () {
				if (mesh.material.uniforms.u_height.value >= 0.5) {
					mesh.material.uniforms.u_height.value -= 0.05;
				} else {
					clearTimeout(enterTimer);
				}
			}, 10);
		});
		card.addEventListener('mouseleave', function (e) {
			if (typeof enterTimer !== 'undefined') {
				clearTimeout(enterTimer);
			}
			exitTimer = setInterval(function () {
				if (mesh.material.uniforms.u_height.value < 1) {
					mesh.material.uniforms.u_height.value += 0.05;
				} else {
					clearTimeout(exitTimer);
				}
			}, 10);
		});

		renderer.render(scene, camera);
		let t = 0;

		// Animate
		const animate = function () {
			requestAnimationFrame(animate);
			renderer.render(scene, camera);
			mesh.material.uniforms.u_time.value = t;
			t = t + 0.02;
		};
		animate();
	};

	onMount(async () => {
		createWave(card, colors);
	});
</script>

<a
	bind:this={card}
	class="album-item"
	{href}
	on:click|preventDefault={(e) => {
		const tgt = e.currentTarget.getAttribute('href');
		document.getElementById(tgt?.replace('#', '') ?? '')?.scrollIntoView({ behavior: 'smooth' });
		// window.scrollTo({top: 0, behavior: 'smooth'});
	}}
>
	<canvas bind:this={canvas} class="canvas" width="250" height="300" />
	<span class="album-details">
		<span class="icon inline-flex justify-center items-center justify-items-center"
			><iconify-icon {icon} /> {icontext}</span
		>
		<span class="title">{title}</span>
		<span class="subtitle {subtitle.length < 3 ? 'text-transparent' : ''}">{subtitle}</span>
		<span style:--bg={_bg} class="subtext">{subtext}</span>
		<img src={image} class="absolute mx-auto left-0 right-0 h-auto w-36 pt-8" alt="" />
	</span>
</a>

<style>
	.album-item {
		word-break: keep-all;
		background: black;
		box-shadow: 0 2px 30px rgba(0, 0, 0, 0.5);
		position: relative;
		/* width: 250px; */
		-webkit-user-drag: none;
		user-drag: none;
		/* height: 300px; */
		user-select: none;
		border-radius: 10px;
		white-space: nowrap;
		overflow: hidden;
		display: inline-block;
		/* margin: 0 3rem 0 0; */

		transition: all 0.2s ease-out;
		transform: scale(1);
		@apply m-auto h-80 w-64;
	}

	.album-item:hover {
		transform: scale(1.02);
	}
	.album-details {
		background: transparent;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		text-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
		padding: 1rem;
		white-space: initial;
		float: left;
		box-sizing: border-box;
		color: white;
		height: 100%;
		/* font-size: 2.5rem; */
		font-weight: 600;
		z-index: 99;
	}
	.title {
		font-weight: 900;
		display: inline-block;
		width: 100%;
		@apply text-2xl sm:text-3xl;
	}
	.subtitle {
		font-weight: 100;
		line-height: 1.25rem;
		@apply text-xl sm:text-2xl;
	}
	.subtext {
		font-size: 1.1167rem;
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 1.25rem 1rem;
		width: 100%;
		white-space: initial;
		letter-spacing: 0;
		box-sizing: border-box;
		font-weight: 400;
		background: var(--bg, rgba(0, 0, 0, 0.75));
	}
	.icon {
		font-size: 1rem;
		line-height: 1rem;
		display: block;
		padding: 0 0 0.5rem 0;
	}
	.canvas {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
