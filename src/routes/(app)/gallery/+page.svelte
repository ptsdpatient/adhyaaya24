<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import bg from './bg.jpg?url';
let options = {
	type: 'loop',
	autoplay: true,
	interval: 3000,
}
</script>

<svelte:head>
	<title>Our Glorious Past | Adhyaaya'24</title>
</svelte:head>

<!-- zoomwall.js -->

<div style="--bg: url('{bg}');" class="fixed h-screen w-screen -z-50 bg opacity-50"></div>

<div
	class="events-container grid grid-cols-1 justify-items-stretch pt-28 min-h-[50vh] scroll-smooth pb-16"
>
	<div class="flex flex-col items-center justify-center pb-28">
		<h1 class="text-4xl font-bold text-center text-white myfont">Gallery</h1>
	</div>

	<div class="flex flex-col items-center justify-center pb-12 pt-12">
		<h1 class="text-2xl font-bold text-center text-white nunu">2022</h1>
	</div>
	<Splide {options} aria-label="2022" id="2022">
		{#each Array.from({length: 5}) as _, i}
			<SplideSlide>
			<img src="/gallery/2022/{i}-min.jpg" alt="" class="mx-auto max-h-[50vh]" />
		  </SplideSlide>
		{/each}
	  </Splide>


	<div class="flex flex-col items-center justify-center pb-12 pt-12">
		<h1 class="text-2xl font-bold text-center text-white nunu">2021</h1>
	</div>
	<Splide {options} aria-label="2021" id="2021">
		{#each Array.from({length: 11}) as _, i}
			<SplideSlide>
			<img src="/gallery/2021/{i}.jpeg" alt="" class="mx-auto max-h-[50vh]" />
		  </SplideSlide>
		{/each}
	  </Splide>
	<div class="flex flex-col items-center justify-center pb-12 pt-12">
		<h1 class="text-2xl font-bold text-center text-white nunu">2020</h1>
	</div>
	<!-- <div class="zoomwall" id="2020">
		<img src="/gallery/2020/0.jpg" alt="" />
		<img src="/gallery/2020/1.jpg" alt="" />
		<img src="/gallery/2020/2.jpg" alt="" />
		<img src="/gallery/2020/3.jpg" alt="" />
		<img src="/gallery/2020/4.jpg" alt="" />
		<img src="/gallery/2020/5.jpg" alt="" />
		<img src="/gallery/2020/6.jpg" alt="" />
		<img src="/gallery/2020/7.jpg" alt="" />
		<img src="/gallery/2020/8.jpg" alt="" />
		<img src="/gallery/2020/9.jpg" alt="" />
		<img src="/gallery/2020/10.jpg" alt="" />
		<img src="/gallery/2020/11.jpg" alt="" />
	</div> -->
	<Splide {options} aria-label="2020" id="2020">
		{#each Array.from({length: 11}) as _, i}
			<SplideSlide>
			<img src="/gallery/2020/{i}.jpg" alt="" class="mx-auto max-h-[50vh]" />
		  </SplideSlide>
		{/each}
	  </Splide>
	<div class="flex flex-col items-center justify-center pb-12 pt-12">
		<h1 class="text-2xl font-bold text-center text-white nunu">2019</h1>
	</div>
	<!-- <div class="zoomwall" id="2019">
		<img src="/gallery/2019/0.jpg" alt="" />
		<img src="/gallery/2019/1.jpg" alt="" />
		<img src="/gallery/2019/2.jpg" alt="" />
		<img src="/gallery/2019/3.jpg" alt="" />
		<img src="/gallery/2019/4.jpg" alt="" />
		<img src="/gallery/2019/5.jpg" alt="" />
		<img src="/gallery/2019/6.jpg" alt="" />
		<img src="/gallery/2019/7.jpg" alt="" />
		<img src="/gallery/2019/8.jpg" alt="" />
		<img src="/gallery/2019/9.jpg" alt="" />
		<img src="/gallery/2019/10.jpg" alt="" />
		<img src="/gallery/2019/11.jpg" alt="" />
	</div> -->
	<Splide {options} aria-label="2019" id="2019">
		{#each Array.from({length: 11}) as _, i}
			<SplideSlide>
			<img src="/gallery/2019/{i}.jpg" alt="" class="mx-auto max-h-[50vh]" />
		  </SplideSlide>
		{/each}
	  </Splide>
	<div class="flex flex-col items-center justify-center pb-12 pt-12">
		<h1 class="text-2xl font-bold text-center text-white nunu">2018</h1>
	</div>
	<!-- <div class="zoomwall" id="2018">
		<img src="/gallery/2018/0.jpg" alt="" />
		<img src="/gallery/2018/1.jpg" alt="" />
		<img src="/gallery/2018/2.jpg" alt="" />
		<img src="/gallery/2018/3.jpg" alt="" />
		<img src="/gallery/2018/4.jpg" alt="" />
		<img src="/gallery/2018/5.jpg" alt="" />
		<img src="/gallery/2018/6.jpg" alt="" />
		<img src="/gallery/2018/7.jpg" alt="" />
		<img src="/gallery/2018/8.jpg" alt="" />
		<img src="/gallery/2018/9.jpg" alt="" />
		<img src="/gallery/2018/10.jpg" alt="" />
		<img src="/gallery/2018/11.jpg" alt="" />
	</div> -->
	<Splide {options} aria-label="2018" id="2018">
		{#each Array.from({length: 11}) as _, i}
			<SplideSlide>
			<img src="/gallery/2018/{i}.jpg" alt="" class="mx-auto max-h-[50vh]" />
		  </SplideSlide>
		{/each}
	  </Splide>
</div>



<style>
	/* @import 'zoomwall.js/lib/zoomwall.css'; */

	.zoomwall {
		font-size: 0;
		overflow: hidden;
	}

	.zoomwall img {
		display: inline-block;
		width: auto;
		height: 15vw;
		opacity: 1;
		vertical-align: top;
		transform-origin: 0% 0%;
		transition-property: transform, opacity;
		transition-duration: 0.3s;
		transition-timing-function: ease-out;
		padding-left: 1rem;
		padding-bottom: 1rem;
	}

	.zoomwall.lightbox img {
		opacity: 0.3;
		transition-timing-function: ease-in;
	}

	.zoomwall.lightbox img.active {
		opacity: 1;
	}


	.bg {
		background: var(--bg);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
</style>
