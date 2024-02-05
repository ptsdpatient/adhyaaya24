<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	import { openModal, modals } from 'svelte-modals';
	import EventInfoModal from '$lib/components/events/EventInfoModal.svelte';
	import { EVENTS } from '$lib/data/events';
	let technical = data.events.filter((event) => event.category === 'technical');
	let non_technical = data.events.filter((event) => event.category === 'non-technical');
	let workshops = data.events.filter((event) => event.category === 'workshops');
	import MainCards from '$lib/components/events/MainCards.svelte';
	//   import img from '$lib/assets/backgrounds/8.png';
	import EventCard from '$lib/components/events/EventCard.svelte';
	import { afterUpdate, onMount } from 'svelte';

	let blob: HTMLDivElement;
	let mouse: number[] = [0, 0];
	function onMouseMove(e: MouseEvent) {
		mouse[0] = e.clientX;
		mouse[1] = e.clientY;
		blob.animate(
			{
				top: `${mouse[1]}px`,
				left: `${mouse[0]}px`
			},
			{
				duration: 3000,
				// easing: 'ease-in-out',
				fill: 'forwards'
			}
		);
	}

	// afterUpdate(() => {
	// 	if (data.view != 'list') {
	// 		openModal(EventInfoModal, { event: EVENTS.find((e) => e.id == data.view) || EVENTS[0] });
	// 	}
	// })


	afterNavigate(() => {
		if (data.view != 'list' && $modals.length == 0) {
			openModal(EventInfoModal, { event: EVENTS.find((e) => e.id == data.view) || EVENTS[0] });
		}
	});

	onMount(() => {
		// if (data.view != 'list') {
		// 	openModal(EventInfoModal, { event: EVENTS.find((e) => e.id == data.view) || EVENTS[0] });
		// }
	});

	function convertRange(value: number, r1: number[], r2: number[]) {
		return ((value - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0];
	}

	let height: number = 0;

	import tech from '$lib/assets/icons/tech.png';
	import ntech from '$lib/assets/icons/nontech.png';
	import wksp from '$lib/assets/icons/workshops.png';
	import { dev } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
</script>

<svelte:head>
	<title>Events | Adhyaaya'24</title>
</svelte:head>

<svelte:window
	on:resize={() => {}}
	on:mousemove={(e) => {
		// onMouseMove(0, convertRange(window.scrollY, [0, height - window.innerHeight], [0, 1]));
		requestAnimationFrame(() => {
			onMouseMove(e);
		});
		// onMouseMove(e);
	}}
/>

<!-- <canvas bind:this={canvas} class="orb-canvas -z-50 fixed bg-white !h-screen !w-screen" /> -->
<!-- <img src="{img}" class="-z-50 fixed h-screen w-screen object-cover"> -->
<div id="bg" class=" fixed h-screen w-screen -z-50 overflow-clip">
	<div
		bind:this={blob}
		id="blob"
		class="fixed opacity-80 h-[30vh] w-[40vh] bg-gradient-to-tr from-red-500  via-purple-500 to-blue-500 animate-spin duration-[20000ms]"
	/>
</div>
<div id="bg-filter" class="fixed h-screen w-screen -z-40 backdrop-blur-[100px]" />
<div
	bind:clientHeight={height}
	class=" bg-black/70 backdrop-blur-sm events-container grid grid-cols-1 justify-items-stretch pt-28 min-h-[50vh] scroll-smooth"
>
	<!-- Title -->
	<div class="flex flex-col items-center justify-center">
		<h1 class="text-4xl font-bold text-center text-white myfont">Events</h1>
	</div>
	<div
		class="section-header h-full min-h-[calc(100vh-7rem)] flex items-center justify-center flex-wrap transition-all duration-500 ease-in-out gap-4 md:gap-3 pt-16"
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
		<h1 class="text-4xl font-bold text-center text-white ">Technical Events</h1>
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
		<h1 class="text-4xl font-bold text-center text-white ">Non-Tech Events</h1>
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
		<h1 class="text-4xl font-bold text-center text-white ">Workshops</h1>
	</div>
	<div
		id="workshops"
		class="h-full min-h-[50vh] flex items-center justify-center flex-wrap transition-all duration-500 ease-in-out gap-4 md:gap-10 pt-16 pb-24"
	>
		{#each workshops as w}
			<EventCard data={w} />
		{/each}
	</div>
</div>

<!-- <button class="button" on:click={() => {openModal(EventInfoModal, {event: EVENTS[0]})}}>BUTTTON</button> -->
<style>
	#blob {
		border-radius: 50% 50%;
		top: 50%;
		left: 50%;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
	#blob.animate-spin {
		animation: spin 20s linear infinite;
		translate: -50% -50%;
	}
</style>
