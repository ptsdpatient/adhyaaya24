<script lang="ts">
	import { goto } from '$app/navigation';

	import { EVENTS } from '$lib/data/events';
	import { openModal } from 'svelte-modals';
	import EventInfoModal from '../events/EventInfoModal.svelte';
	export let alt = false;
	function shuffle(array: typeof EVENTS) {
		array = array.slice();
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}
</script>

<div class="slider">
	<div style="--width: {EVENTS.length}" class="slide-track {alt}" >
		{#each shuffle(EVENTS.filter((e) => e.is_active)) as event}
			<div class="slide inline-flex items-center justify-center">
				<button
					on:click={async () => {
						await goto(`/events?view=${event.id}`);
						openModal(EventInfoModal, { event });
					}}
					class="flex flex-col items-center justify-center h-full text-xl"
				>
					{#if event.icon.includes('url::')}
						<img class="h-full lg:h-12 w-9 lg:w-12 object-contain transition-transform ease-in-out duration-300 transform hover:scale-110" src={event.icon.replace('url::', '')} alt="" />
					{:else}
						<iconify-icon  class="text-6xl" icon={event.icon} />
					{/if}
					<p>{event.name}</p>
				</button>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	/* body {
  align-items: center;
  background: #E3E3E3;
  display: flex;
  height: 100vh;
  justify-content: center;
} */

	@-webkit-keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-250px * 6));
		}
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-250px * 6));
		}
	}

	@-webkit-keyframes scroll-alt {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(250px * 6));
		}
	}

	@keyframes scroll-alt {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(250px * 6));
		}
	}

	.slider {
		/* background: white; */
	
		height: 100px;
		/* margin: auto; */
		overflow: hidden;
		position: relative;
		/* width: 960px; */
		/* Change here to change the color of the background */
		@apply w-full h-40 rounded-2xl flex items-center justify-center;
	}
	.slider::before,
	.slider::after {
		/* background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%); */
		content: '';
		height: 100px;
		position: absolute;
		width: 200px;
		z-index: 2;
		@apply bg-transparent;
	}
	.slider::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}
	.slider::before {
		left: 0;
		top: 0;
	}
	.slider .slide-track {
		-webkit-animation: scroll 40s linear infinite forwards;
		animation: scroll 40s linear infinite forwards;
		display: flex;
		width: calc(250px * var(--width, 18));
	}

	.slider .slide-track.true {
		-webkit-animation: scroll-alt 40s linear infinite forwards;
		animation: scroll-alt 40s linear infinite forwards;
		display: flex;
		width: calc(250px * var(--width, 18));
	}

	.slider .slide {
		height: 100px;
		width: 250px;
	}
</style>
