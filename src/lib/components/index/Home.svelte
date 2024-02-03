<script lang="ts">
	// import {hasScrolled} from '$lib/stores/UI';
	import { slide } from 'svelte/transition';
	import {page} from '$app/stores';
	export let scrollPos = 0;
	let animate = false;

</script>

{#if $page.url.pathname === '/'}
<div class="wrapper w-full h-full flex items-center text-left relative">
	<div class="main w-full ml-[8.33333333333333334%] md:ml-[16.66666666667%]">
		<div
			class="big-text w-5/6 md:w-7/12 text-3xl xl:text-5xl 2xl:text-6xl bg-clip-text text-transparent hemnder font-bold leading-[3.5rem] xl:leading-[5.5rem] 2xl:leading-[7rem]"
		>
		Embark on an interstellar journey to space with Adhyaaya where innovation meets the infinite!
		</div>
	</div>
	
	{#if scrollPos < 35}
		<div
			in:slide={{delay: 300, duration: 800}} out:slide={{delay: 0, duration: 300}}
			class="scroll-text absolute left-[8.33333333333333334%] md:left-[16.66666666667%] bottom-0 text-2xl font-normal text-white opacity-60"
		>
			SCROLL TO EXPLORE
			<div class="scroll-line mt-2 h-24 w-1 bg-blue-300/80 " />
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
		background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);

		@apply transition-all duration-300 ease-in-out;
	}

	.big-text:hover {
		background-position: 0% 0%;
	}
</style>
