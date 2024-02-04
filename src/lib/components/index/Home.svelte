<script lang="ts">
	// import {hasScrolled} from '$lib/stores/UI';
	import { slide } from 'svelte/transition';
	import {page} from '$app/stores';
	export let scrollPos = 0;
	let animate = false;

</script>

{#if $page.url.pathname === '/'}
<div class="wrapper w-full h-full flex items-center text-left relative">
	<div class="main h-full w-full ml-[8.33333333333333334%] md:ml-[16.66666666667%] mb-4 ">
		
		<p class="absolute text-2xl w-4/5 md:w-2/4 md:text-4xl left-[8.33333333333333334%] md:left-[16.66666666667%] bottom-40 md:bottom-30 top-[58vh] md:top-[45vh]">Embark on an interstellar journey to higher level with Adhyaaya, where innovation meets the infinite!
		</p>
	</div>
	
	{#if scrollPos < 35}
		<div
			in:slide={{delay: 300, duration: 800}} out:slide={{delay: 0, duration: 300}}
			class="scroll-text absolute left-[8.33333333333333334%] md:left-[16.66666666667%] bottom-0 text-xl md:text-2xl font-normal text-white opacity-60"
		>
			SCROLL TO EXPLORE
			<div class="scroll-line md:mt-2 h-[70px] md:h-[12vh] w-1 bg-blue-300/80 " />
		</div>
	{/if}
</div>
{/if}

<!-- {@debug hasScrolled, $hasScrolled} -->
<style>
	.big-text {
		background-size: 200% 200%;
		background-position: 100% 100%;
		/* background-color: #FA8BFF; */
		/* background-image: linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%); */
		/* background-image: linear-gradient(45deg, #FA8BFF 0%, #ffffff 52%, #2BFF88 90%); */

		/* background-color: #74EBD5;
    background-image: linear-gradient(45deg, #74EBD5 0%, #9FACE6 100%); */

		/* background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 40%, #FFCC70 100%); */

		background-color: #8ec5fc;
		
		
		@apply transition-all duration-300 ease-in-out;
	}

	.big-text:hover {
		
	}
</style>
