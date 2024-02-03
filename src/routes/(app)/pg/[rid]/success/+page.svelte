<script lang="ts">
	import type { PageData } from './$types';
	// import qr from '$lib/assets/qr-code.png'
	import adhyaaya_solid_logo from '$lib/assets/logo/solid-resize.webp';
	import { dev } from '$app/environment';
	import { getQRCode } from '$lib/util';
	import { onMount } from 'svelte';
	import { EVENTS } from '$lib/data/events';
	import 'iconify-icon';
	import CurvedRotatingText from '$lib/components/CurvedRotatingText.svelte';
	import MouseTrailer from '$lib/components/MouseTrailer.svelte';
	export let data: PageData;
	const url_start = dev ? 'http://localhost:5173' : 'https://adhyaaya.org';

	let EVENT = EVENTS.find((e) => e.id == data.db.event_id);

	let PNG = '';
	onMount(async () => {
		PNG = await getQRCode(`${url_start}/pg/${data.db.id}/success`);
		setTimeout(() => {
			alert('Please join the WhatsApp group. The link is given in the instructions.');
		}, 100);
	});
</script>

<svelte:head>
	<title>Receipt for {EVENT?.name} | Adhyaaya'24</title>
</svelte:head>

<div class="md:h-screen w-screen md:w-screen no-scroll-bar">
	<div class="reciept-container flex flex-col md:flex-row w-full h-full ">
		<div class="left-half bg-black mx-auto py-0 md:py-10 md:px-0 md:pl-10 w-full md:w-3/5 ">
			<div class="bg-white flex flex-col md:h-full overflow-y-scroll no-scroll-bar">
				<div class="logo mx-auto h-40 w-40 mb-8 pt-4">
					<img src={adhyaaya_solid_logo} class="h-28" height="112" width="202" alt="" />
				</div>
				<div class="qr">
					<img
						class="qr-code-container h-36 w-36 md:h-48 md:w-48 rounded-none p-2 mx-auto"
						src={PNG}
						alt="qr-code"
					/>
				</div>

				<div class="reciept-number mx-auto pt-4 hidden md:block">
					<span
						class=" font-bold text-gray-500 truncate text-ellipsis overflow-hidden line-clamp-1 font-mono uppercase"
						>{data.db.id}</span
					>
				</div>
				<div class="billing-info flex flex-col items-stretch pt-4 pb-10 ">
					<div
						class="flex flex-row items-center pt-4 pb-4 mx-auto border-b border-black w-11/12 justify-center"
					>
						<div
							class="event-logo h-10 w-10 mr-2 text-4xl inline-flex items-center justify-center text-black"
						>
							{#if EVENT?.icon.includes('url::')}
								<img class="h-9 w-9" src={EVENT.icon.replace('url::', '')} alt="" />
							{:else}
								<iconify-icon class="text-4xl" icon={EVENT?.icon} />
							{/if}
						</div>
						<div class="event-data text-lg text-gray-700">
							{EVENT?.name} | {EVENT?.mode.toLocaleUpperCase()}
							<br />
							{EVENT?.start_date.toLocaleDateString('en-IN', {
								weekday: 'long',
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</div>
					</div>

					<div class="grid grid-cols-2  md:gap-x-8 even:text-left odd:text-center mx-auto pt-10">
						<span class="text-lg font-bold text-black">Name:</span>
						<span class="text-lg text-gray-700">{data.db.name}</span>

						<span class="text-lg font-bold text-black hidden md:block">Email:</span>
						<span class="text-lg text-gray-700 hidden md:block">{data.db.email}</span>

						<span class="text-lg font-bold text-black">Phone:</span>
						<span class="text-lg text-gray-700">{data.db.phone}</span>

						{#if data.db.team.length > 0}
							<span class="text-lg font-bold text-black">Team:</span>
							<span class="text-lg text-gray-700">{data.db.team.map((m) => m.name).join(', ')}</span
							>
						{/if}

						<span class="text-lg font-bold text-black">Cost:</span>
						<span class="text-lg text-gray-700">₹{data.db.amount / 100}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="right-half bg-white mx-auto py-0 md:py-10 md:px-0 md:pr-10  w-full md:w-2/5">
			<div class="bg-black md:h-full px-8 md:pl-6 py-8 overflow-y-scroll no-scroll-bar">
				<span class="instructions-header text-2xl text-white mb-2 nunu">Instructions</span>
				<ul class="space-y-1 max-w-md list-disc list-inside text-gray-400">
					<li class={EVENT?.whatsapp_link ? '' : 'hidden'}>
						Join the <a href={EVENT?.whatsapp_link} class="text-white underline">WhatsApp group</a>
						for updates. ({EVENT?.whatsapp_link})
					</li>
					{#if EVENT?.mode == 'online'}
						<li>
							Adhyaaya <span class="text-bold uppercase text-white underline">will not</span> be help
							responsible for any network lag, connectivity issues during the event, participants are
							expected to have a stable internet connection.
						</li>
					{/if}
					{#if EVENT?.mode == 'offline'}
						<li>
							Adhyaaya <span class="text-bold uppercase text-white underline">DOES NOT</span> provide
							any accommodation or transport. You will have to arrange your own.
						</li>
						<li>
							It is <span class="text-bold uppercase text-white underline">MANDATORY</span> to carry
							an identification proof and a vaccination certificate for attending offline events.
						</li>
					{/if}
					{#if EVENT?.custom_instructions}
						{#each EVENT.custom_instructions as ci}
							<li>
								{ci}
							</li>
						{/each}
					{/if}
					<li>
						Adhyaaya reserves the right to all submissions, photos and videos taken during the
						event. You may use them for personal purposes.
					</li>
					<li>
						Please ensure you are a part of the Event's WhatsApp Group. All information will be
						communicated to you using it.
					</li>
					<li class="print:hidden">Keep this page bookmarked for future reference.</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<button
	on:click={() => {
		window.print();
	}}
	class="print:hidden fixed right-10 bottom-10 md:right-20 md:bottom-20 w-14 h-14 md:w-20 md:h-20 rounded-full bg-blue-600 text-white inline-flex items-center justify-center text-4xl md:text-6xl opacity-90 hover:opacity-100 active:opacity-80 hover:scale-105 active:scale-95 transition-all duration-200 peer"
	><iconify-icon icon="mdi:printer" /></button
>
<div
	class="print:hidden fixed right-10 bottom-10 md:right-20 md:bottom-20 w-14 h-14 md:w-20 md:h-20 opacity-0 peer-hover:opacity-100 peer-active:opacity-100 peer-focus:opacity-100 transition-opacity duration-150 rounded-full inline-flex items-center justify-center invisible peer-hover:visible peer-active:visible pointer-events-none"
>
	<CurvedRotatingText text={`Print`} />
</div>

<style>
	li {
		font-family: 'Nunito', sans-serif;
	}
	li > * {
		font-family: 'Nunito', sans-serif;
	}
</style>
