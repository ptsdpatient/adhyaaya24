<script lang="ts">
	import { dev } from '$app/environment';
	import { afterNavigate, goto as _goto } from '$app/navigation';
	import AdhyaayaLogoSolid from '$lib/assets/logo/solid-resize.webp';
	import { SOCIALS } from '$lib/data/socials';
	export let isMenuOpen = false;
	// export let isMenuOpen = true;
	export let nav_cb = () => {};
	afterNavigate(() => {
		isMenuOpen = false;
	});
	function goto(path: string) {
		isMenuOpen = false;
		if (nav_cb) nav_cb();
		_goto(path);
	}
	let bgX = 0,
		bgY = 0;
	function setBackgroundPosition(x = bgX, y = bgY) {
		// bgX = x;
		// bgY = y;
		// dev ? console.log(bgX, bgY) : null;
	}

	import { page } from '$app/stores';
	let scrollY: number;
</script>

<svelte:window bind:scrollY />

{#if !$page.url.pathname.includes('asdfghbjnkml.swderft')}
	<!-- bg-[#0d0028]/50 -->
<div
		class="fixed top-0 w-full min-h-16 z-[200] pointer-events-none flex flex-row px-4 md:px-10 py-4 bg-transparent {scrollY > 35 ? '':''}  items-center print:hidden transition-all duration-700"
	>
		<button
			on:click={() => {
				goto('/');
			}}
			class="logo bg-transparent {$page.url.pathname.includes('success')
				? 'invisible'
				: ''} w-20 md:w-36 pointer-events-auto py-1 px-2  rounded-lg transition-all duration-250 hover:scale-105 active:scale-95 cursor-pointer mr-auto {scrollY > 4500 ? 'opacity-0':''}"
		>
			<img src={AdhyaayaLogoSolid} alt="" />
		</button>
		
		<!-- <a
			href="/register?select=true"
			class="register text-white pointer-events-auto bg-transparent md:mr-10 mr-4 py-1 px-2 md:py-2 md:px-4 rounded-full border {isMenuOpen
				? 'border-white'
				: 'border-white/60'} text-lg hover:scale-110 active:scale-90 cursor-pointer transition-all duration-250 ease-in-out"
		>
			Register
		</a> -->
		<input id="menu-toggle" bind:checked={isMenuOpen} type="checkbox" class="hidden" />
		<label
			for="menu-toggle"
			class="menu-icon  cursor-pointer h-10 w-10 md:h-12 md:w-12 rounded-full pointer-events-auto relative transition-all duration-500 ease-in-out hover:scale-105 active:scale-95 border  {isMenuOpen
				? 'border-white'
				: 'border-white/60'}"
		>
			<div
				class="absolute w-[18px] h-[2px] origin-center bg-white transition-all ease-in-out duration-500 "
				style="{isMenuOpen
					? 'top: 50%;'
					: 'top: calc(50% - 4px);'} left: 50%; transform: translateX(-50%) translateY(-50%) {isMenuOpen
					? 'rotate(-45deg)'
					: 'rotate(0deg)'} translateZ(0px);"
			/>
			<div
				class="absolute w-[18px] h-[2px] origin-center bg-white transition-all ease-in-out duration-500"
				style="{isMenuOpen
					? 'top: 50%;'
					: 'top: calc(50% + 4px);'} left: 50%; transform: translateX(-50%) translateY(-50%) {isMenuOpen
					? 'rotate(45deg)'
					: 'rotate(0deg)'} translateZ(0px);"
			/></label
		>
	</div>
{/if}
<div
	class="menu-container {isMenuOpen} h-full bg-black/30 backdrop-blur-sm rounded-none z-[120] fixed right-0 top-0 flex flex-col print:hidden"
>
	{#if isMenuOpen}
		<div class="{isMenuOpen} header h-16 md:h-24 lg:h-36 w-full" />
		<div class="{isMenuOpen} menu flex flex-col w-full">
			<div
				class="menu-items w-fit flex flex-col justify-evenly h-full z-[150] scale-90 md:scale-100"
			>
				<a
					href="/"
					on:focus={() => {
						setBackgroundPosition(bgX, 0);
					}}
					on:mouseover={() => {
						setBackgroundPosition(bgX, 0);
					}}
					class="menu-item">Home</a
				>
				<a
					href="/events"
					on:focus={() => {
						setBackgroundPosition(bgX, -25);
					}}
					on:mouseover={() => {
						setBackgroundPosition(bgX, -25);
					}}
					class="menu-item">Events</a
				>
				<a
					href="/timeline"
					on:focus={() => {
						setBackgroundPosition(bgX, -50);
					}}
					on:mouseover={() => {
						setBackgroundPosition(bgX, -50);
					}}
					class="menu-item">Timeline</a
				>
				<!-- <a
					href="/guide"
					on:focus={() => {
						setBackgroundPosition(bgX, -50);
					}}
					on:mouseover={() => {
						setBackgroundPosition(bgX, -50);
					}}
					class="menu-item">Guidelines</a
				> -->
				<a
					data-sveltekit-reload
					href="/teams"
					on:focus={() => {
						setBackgroundPosition(bgX, -75);
					}}
					on:click={()=>goto("/teams")}
					on:mouseover={() => {
						setBackgroundPosition(bgX, -75);
					}}
					class="menu-item">Team</a
				>
				<a
					href="/sponsors"
					on:focus={() => {
						setBackgroundPosition(bgX, -100);
					}}
					on:mouseover={() => {
						setBackgroundPosition(bgX, -100);
					}}
					class="menu-item">Sponsors</a
				>
				<a
					data-sveltekit-reload
					href="/gallery"
					on:focus={() => {
						setBackgroundPosition(bgX, -125);
					}}
					on:mouseover={() => {
						setBackgroundPosition(bgX, -125);
					}}
					class="menu-item">Gallery</a
				>
				<div
					on:focus={() => {
						setBackgroundPosition(bgX, -150);
					}}
					on:mouseover={() => {
						setBackgroundPosition(bgX, -150);
					}}
					class="menu-item-container flex flex-col md:flex-row gap-2 md:gap-14  md:pt-10"
				>
					<a
						href="/legal/privacy_policy"
						on:focus={() => {
							setBackgroundPosition(0, bgY);
						}}
						on:mouseover={() => {
							setBackgroundPosition(0, bgY);
						}}
						class="submenu-item text-base ">Privacy Policy</a
					>
					<a
						href="/legal/terms_and_conditions"
						on:focus={() => {
							setBackgroundPosition(-25, bgY);
						}}
						on:mouseover={() => {
							setBackgroundPosition(-25, bgY);
						}}
						class="submenu-item text-base">Terms and Conditions</a
					>
					<a
						href="/legal/contact_info"
						on:focus={() => {
							setBackgroundPosition(-50, bgY);
						}}
						on:mouseover={() => {
							setBackgroundPosition(-50, bgY);
						}}
						class="submenu-item text-base">Contact Info</a
					>
				</div>
			</div>
			<div style="--bgX: {bgX}%;--bgY: {bgY}%" class="menu-background-pattern z-[133]" />
			<div style="--bgX: {bgX}%;--bgY: {bgY}%" class="menu-background-pattern mbp-0 z-[130]" />
			<div style="--bgX: {bgX}%;--bgY: {bgY}%" class="menu-background-pattern mbp-1 z-[131]" />
			<div style="--bgX: {bgX}%;--bgY: {bgY}%" class="menu-background-pattern mbp-2 z-[132]" />
		</div>
		<div
			class=" {isMenuOpen} social w-full flex items-center self-end justify-end py-6 pb-32 md:pb-6 mt-auto z-[140]"
		>
			{#each SOCIALS as social}
				<a
					rel="noreferrer"
					target="_blank"
					href={social.link}
					class="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white mx-auto md:ml-0 md:mr-10 inline-flex items-center justify-center text-2xl md:text-3xl cursor-pointer {social.text} {social.bg} hover:scale-105 active:scale-95 active:opacity-90 transition-all duration-200 ease-in-out"
				>
					<iconify-icon icon={social.icon} />
				</a>
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss">
	.menu-container {
		@apply w-0 transition-all duration-500 ease-in-out;
	}

	.menu-container.true {
		@apply w-full;
	}

	.false {
		@apply w-0;
	}
	* {
		@apply overflow-clip;
	}

	.menu {
		@apply text-white w-fit;
	}

	.menu-items:hover > .menu-item {
		
	}

	.menu-item-container {
		@apply pl-[10vw] lg:pl-[15vw] opacity-100 transition-all duration-500 ease-in-out whitespace-nowrap leading-4;
	}

	.submenu-item {
		@apply transition-all duration-500 ease-in-out uppercase;
	}

	.menu-items:hover > .menu-item-container > .submenu-item {
		
	}

	.menu-item {
		@apply text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl py-3 pl-[10vw] lg:pl-[15vw] opacity-100 transition-all duration-500 ease-in-out whitespace-nowrap line-clamp-1 xl:leading-4 w-fit;
	}

	.menu-item:hover {
		@apply scale-[110%];
	}

	.menu-background-pattern {
		height: 100vh;
		width: 100vw;
		display: none;
		background-image: radial-gradient(rgba(255, 255, 255, 0.25) 9%, transparent 9%);
		background-position: var(--bgX, 0%) var(--bgY, 0%);
		background-size: 12vmin 12vmin;
		position: absolute;
		top: 0;
		left: 0;
		@apply transition-all duration-1000 ease-in-out;
	}

	.menu-background-pattern.mbp-0 {
		background-image: radial-gradient(rgba(255, 0, 0, 0.25) 9%, transparent 9%);
		background-position: var(--bgX, 0%) calc(var(--bgY, 0%) + 0.15%);
	}

	.menu-background-pattern.mbp-1 {
		background-image: radial-gradient(rgba(0, 255, 0, 0.25) 9%, transparent 9%);
		background-position: var(--bgX, 0%) calc(var(--bgY, 0%) - 0.15%);
	}

	.menu-background-pattern.mbp-2 {
		background-image: radial-gradient(rgba(0, 0, 255, 0.25) 9%, transparent 9%);
		background-position: calc(var(--bgX, 0%) - 0.15%) var(--bgY, 0%);
	}

	.menu-items:hover ~ .menu-background-pattern {
		background-size: 11vmin 11vmin;
		opacity: 0.5;
	}
</style>
