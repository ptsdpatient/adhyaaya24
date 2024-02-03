<script lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/pagination';
	// import 'swiper/css/mousewheel';

	// import required modules
	import { Pagination, Mousewheel, Keyboard, FreeMode } from 'swiper';
	import type { PaginationOptions } from 'swiper/types';
	import Loader from '$lib/components/Loader.svelte';
	import { onMount, SvelteComponent } from 'svelte';
	import { tweened } from 'svelte/motion';
	import Sketch from '$lib/components/DNA/Sketch';
	// import Nav from '$lib/components/Nav.svelte';

	import Home from '$lib/components/index/Home.svelte';
	import Events from '$lib/components/index/Events.svelte';
	import ContactUs from '$lib/components/index/ContactUs.svelte';
	import AboutUs from '$lib/components/index/AboutUs.svelte';
	import Sponsors from '$lib/components/index/Sponsors.svelte';
	// import Footer from '$lib/components/index/Footer.svelte';

	// import {cubicInOut} from 'svelte/easing';
	import { hasScrolled } from '$lib/stores/UI';

	let sketch: Sketch;
	const duration = tweened(0, { duration: 1500 });

	let slide_index = 0;
	let _Swiper: Swiper;

	// const scrollPosition = tweened(0.25, { duration: 1500, easing: cubicInOut });

	function onProgress(e: CustomEvent<[swiper: any, progress: number]>) {
		const [_, progress] = e.detail;
		slide_index = Math.trunc(progress * PAGES.length - 0.001);
		if (slide_index >= 1) {
			hasScrolled.set(true);
		}
		duration.set(0.5);
		setTimeout(() => {
			duration.set(0);
		}, 1000);
		// if (_Swiper) _Swiper.slideTo(slide_index, 1000, true);
		// scrollPosition.set(scrollMapping(progress));
	}
	function changePage(index: number) {
		if (_Swiper) _Swiper.slideTo(index, 1000, true);
	}
	function onSwiper(e: any) {
		const [swiper] = e.detail as any as [Swiper];
		_Swiper = swiper;
	}

	const PAGES: { name: string }[] = [
		{ name: 'Home' },
		{ name: 'Events' },
		{ name: 'About Us' },
		{ name: 'Sponsors' },
		{ name: 'Contact Us' },
		{ name: 'Sitemap' }
	];

	let pagination: PaginationOptions = {
		type: 'progressbar',
		progressbarOpposite: false
		// progressbarClass: 'hidden',
		// progressbarOppositeClass: 'hidden',
	};

	// function scrollMapping(percentScroll: number) {
	// const positionRange = (6 - (-1));
	// return (percentScroll * positionRange) + (-1);
	// }

	let loaded = false;

	// $: {
	// 	if (sketch) {
	// 		sketch.camera.position.set(-2, $scrollPosition, 5);
	// 	}
	// }

	//DNA BG thingy
	// import Sketch from '$lib/components/DNA/Sketch.svelte';
	import dna from '$lib/assets/3d-models/dna.glb?url';
	import { fade } from 'svelte/transition';

	onMount(async () => {
		const canvas = document.getElementById('dna-bg') ?? document.createElement('canvas');
		sketch = new Sketch(canvas);
		sketch.loadObjects();
		duration.set(2.5);
		// setTimeout(() => {
		// 	duration.set(0);
		// }, 2500);
		function animate() {
			if (sketch) {
				sketch.duration += $duration;
			}
			requestAnimationFrame(animate);
		}
		animate();

		setTimeout(() => {
			loaded = true;
			duration.set(0);
		}, 1000);
	});
</script>

<svelte:head>
	<!-- <link rel="preload" href="{dna}" as="fetch">
	<link rel="preload" href="/draco/draco_decoder.wasm" as="fetch" crossorigin="use-credentials">
	<link rel="preload" href="/draco/draco_wasm_wrapper.js" as="script" crossorigin="use-credentials">
	<link rel="preload" href="/draco/draco_decoder.js" as="script" type="text/script"> -->
	<title>Adhyaaya'24</title>
</svelte:head>

<div id="dna-bg" class="fixed h-screen w-screen -z-50 bg-[#0d0028]" />

<!-- {#if !loaded}
	<div
		transition:fade
		class="loader h-screen w-screen bg-[#0d0028] fixed z-[9999] flex items-center justify-center"
	>
		<div class="preloader">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				style="margin: auto; background: transparent; display: block;"
				width="200px"
				height="200px"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid"
			>
				<circle cx="6.451612903225806" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.5s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="0s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.5s"
					/>
				</circle><circle cx="6.451612903225806" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.5s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.5s"
					/>
				</circle><circle cx="16.129032258064512" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.7s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.2s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.7s"
					/>
				</circle><circle cx="16.129032258064512" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.7s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.2s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.7s"
					/>
				</circle><circle cx="25.806451612903224" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.9s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.4s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.9s"
					/>
				</circle><circle cx="25.806451612903224" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.9s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.4s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.9s"
					/>
				</circle><circle cx="35.48387096774193" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.1s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.6s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.1s"
					/>
				</circle><circle cx="35.48387096774193" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.1s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.6s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.1s"
					/>
				</circle><circle cx="45.16129032258064" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.3s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-0.8s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.3s"
					/>
				</circle><circle cx="45.16129032258064" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.3s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.8s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.3s"
					/>
				</circle><circle cx="54.838709677419345" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.5s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.5s"
					/>
				</circle><circle cx="54.838709677419345" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.5s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-2s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.5s"
					/>
				</circle><circle cx="64.51612903225805" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.7s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.2s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.7s"
					/>
				</circle><circle cx="64.51612903225805" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.7s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.2s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.7s"
					/>
				</circle><circle cx="74.19354838709677" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.9s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.4s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.9s"
					/>
				</circle><circle cx="74.19354838709677" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.9s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.4s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.9s"
					/>
				</circle><circle cx="83.87096774193547" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.1s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.6s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.1s"
					/>
				</circle><circle cx="83.87096774193547" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-3.1s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.6s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.1s"
					/>
				</circle><circle cx="93.54838709677418" cy="50" r="3" fill="#941946">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.3s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-1.8s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#941946;#243f7d;#941946"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.3s"
					/>
				</circle><circle cx="93.54838709677418" cy="50" r="3" fill="#1fdfdf">
					<animate
						attributeName="r"
						times="0;0.5;1"
						values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
						dur="2s"
						repeatCount="indefinite"
						begin="-3.3s"
					/>
					<animate
						attributeName="cy"
						keyTimes="0;0.5;1"
						values="32;68;32"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.8s"
						keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
						calcMode="spline"
					/>
					<animate
						attributeName="fill"
						keyTimes="0;0.5;1"
						values="#1fdfdf;#164ba3;#1fdfdf"
						dur="2s"
						repeatCount="indefinite"
						begin="-2.3s"
					/>
				</circle>
			</svg>
		</div>
	</div>
{/if} -->

<div
	class="pagination-container absolute invisible md:visible left-4 md:left-10 top-1/2 flex flex-col gap-1 md:gap-2 z-50 -translate-y-1/2"
>
	<button
		on:click={() => {
			changePage(0);
		}}
		class="uppercase mono cursor-pointer text-xs px-2 py-0 max-w-xs w-full md:text-base relative after:absolute after:w-0 after:h-full after:bg-white after:mix-blend-difference after:top-0 after:left-0  after:transition-all after:duration-300 after:ease-in-out {0 ==
		slide_index
			? 'text-white after:w-full'
			: ''}">Home</button
	>
	<button
		on:click={() => {
			changePage(1);
		}}
		class="uppercase mono cursor-pointer text-xs px-2 py-0 max-w-xs w-full md:text-base relative after:absolute after:w-0 after:h-full after:bg-white after:mix-blend-difference after:top-0 after:left-0  after:transition-all after:duration-300 after:ease-in-out {1 ==
		slide_index
			? 'text-white after:w-full'
			: ''}">Events</button
	>
	<button
		on:click={() => {
			changePage(2);
		}}
		class="uppercase mono cursor-pointer text-xs px-2 py-0 max-w-xs w-full md:text-base relative after:absolute after:w-0 after:h-full after:bg-white after:mix-blend-difference after:top-0 after:left-0  after:transition-all after:duration-300 after:ease-in-out {2 ==
		slide_index
			? 'text-white after:w-full'
			: ''}">About Us</button
	>
	<button
		on:click={() => {
			changePage(3);
		}}
		class="uppercase mono cursor-pointer text-xs px-2 py-0 max-w-xs w-full md:text-base relative after:absolute after:w-0 after:h-full after:bg-white after:mix-blend-difference after:top-0 after:left-0  after:transition-all after:duration-300 after:ease-in-out {3 ==
		slide_index
			? 'text-white after:w-full'
			: ''}">Sponsors</button
	>
	<button
		on:click={() => {
			changePage(4);
		}}
		class="uppercase mono cursor-pointer text-xs px-2 py-0 max-w-xs w-full md:text-base relative after:absolute after:w-0 after:h-full after:bg-white after:mix-blend-difference after:top-0 after:left-0  after:transition-all after:duration-300 after:ease-in-out {4 ==
		slide_index
			? 'text-white after:w-full'
			: ''}">Contact Us</button
	>
	<button
		on:click={() => {
			changePage(5);
		}}
		class="uppercase mono cursor-pointer text-xs px-2 py-0 max-w-xs w-full md:text-base relative after:absolute after:w-0 after:h-full after:bg-white after:mix-blend-difference after:top-0 after:left-0  after:transition-all after:duration-300 after:ease-in-out {5 ==
		slide_index
			? 'text-white after:w-full'
			: ''}">Sitemap</button
	>
</div>

<Swiper
	class="swiper-v"
	direction={'vertical'}
	spaceBetween={0}
	{pagination}
	slidesPerGroup={1}
	freeMode={{ enabled: true, sticky: true, momentum: true, momentumRatio: 1 }}
	mousewheel={{ forceToAxis: true, sensitivity: 2.5 }}
	modules={[Pagination, Mousewheel, Keyboard, FreeMode]}
	on:progress={onProgress}
	on:swiper={onSwiper}
>
	<SwiperSlide>
		<Home />
	</SwiperSlide>
	<SwiperSlide>
		<Events />
	</SwiperSlide>
	<SwiperSlide>
		<AboutUs />
	</SwiperSlide>
	<SwiperSlide>
		<Sponsors />
	</SwiperSlide>
	<SwiperSlide>
		<ContactUs />
	</SwiperSlide>
	
</Swiper>

<!-- <Nav /> -->
<style>
	#dna-bg {
		filter: saturate(1.2) brightness(1.1) contrast(1.2);
	}

	.preloader {
		display: flex;
	}

	.loader {
		/* background: #000; */
		/* color: #3df1f1; */
		font: 1em Dosis, sans-serif;
		line-height: 1.5;
		perspective: 40em;
		position: fixed;
		z-index: 9999;
		@apply h-screen w-screen;
	}

	.preloader {
		/* animation: tiltSpin 8s linear infinite; */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: auto;
		width: 17em;
		height: 17em;
	}
</style>
