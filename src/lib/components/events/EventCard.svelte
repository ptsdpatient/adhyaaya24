<script lang="ts">
	import type { AdhyaayaEvent } from '$lib/data/events';
	import { openModal } from 'svelte-modals';
	import EventInfoModal from '$lib/components/events/EventInfoModal.svelte';
	// import { preloadData } from '$app/navigation';

	export let data: AdhyaayaEvent;

	function randomInt(min: number, max: number) {
		return Math.round(Math.random() * (max - min + 1)) + min;
	}

</script>

<button
	on:mouseover={() => {
		if (document.getElementById(`${data.id}-preload`)) return;
		const link = document.createElement('link');
		link.id = `${data.id}-preload`
		link.rel = 'preload';
		link.href = data.poster;
		document.head.appendChild(link);
		fetch(data.poster);
	}}
	on:focus={() => {
		if (document.getElementById(`${data.id}-preload`)) return;
		const link = document.createElement('link');
		link.id = `${data.id}-preload`
		link.rel = 'preload';
		link.href = data.poster;
		document.head.appendChild(link);
		fetch(data.poster);
	}}
	on:click={() => {
		openModal(EventInfoModal, { event: data });
	}}
	style:--tw-rotate='{randomInt(-3, 3)}deg'
	class="p-6 border border-white rounded-lg text-white bg-white/10 hover:bg-white/20 bg-blur-xl flex flex-col items-center justify-evenly gap-4 w-52 h-64 transition-all duration-300 hover:transform"
>
	{#if data.icon.includes('url::')}
		<img
			height="150"
			width="150"
			src={data.icon.replace('url::', '')}
			alt=""
			class="min-h-[150px] object-contain"
		/>
	{:else}
		<iconify-icon icon={data.icon} class="text-[10rem]" />
	{/if}
	<span class="text-xl lg:text-2xl nunu">{data.name}</span>
</button>
