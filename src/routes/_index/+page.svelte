<script lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/pagination';

	// import required modules
	import { Pagination, Mousewheel } from 'swiper';
	import { dev } from '$app/environment';

	let vSwiper: Swiper;
	let hSwiper: Swiper;

	let state = {
		lastH: 0,
		currentH: 0,
		lastV: 0,
		currentV: 0
	};

	function onHorizontalSwiper(e: CustomEvent<void>) {
		const [swiper] = e.detail as any as [Swiper];
		hSwiper = swiper;
	}

	function onHorizontalProgress(
		e: CustomEvent<[swiper: import('swiper/svelte/swiper-svelte').default, progress: number]>
	) {
		const [swiper, progress] = e.detail;
		// update state
		state.lastH = state.currentH;
		state.currentH = progress;
		dev ? console.log(state) : null;

		// if slide moves from 0 to 0.3333, then disable horizontal scroll
		if (state.lastH == 0 && state.currentH == 1 / 3) {
			hSwiper.mousewheel.disable();
			vSwiper.mousewheel.enable();
		}
		// if slide moves from 0.6666 to 0.3333, then disable horizontal scroll
		if (state.lastH == 2 / 3 && state.currentH == 1 / 3) {
			hSwiper.mousewheel.disable();
			vSwiper.mousewheel.enable();
		}
	}

	function onVerticalSwiper(e: CustomEvent<void>) {
		const [swiper] = e.detail as any as [Swiper];
		vSwiper = swiper;
	}

	function onVerticalProgress(
		e: CustomEvent<[swiper: import('swiper/svelte/swiper-svelte').default, progress: number]>
	) {
		const [swiper, progress] = e.detail;
		// update state
		state.lastV = state.currentV;
		state.currentV = progress;
		dev ? console.log(state) : null;

		if (state.lastV == 3 / 4 && state.currentV == 1) {
			setTimeout(() => {
				hSwiper.mousewheel.enable();
				vSwiper.mousewheel.disable();
			}, 250);
		}

		if (state.lastV == 1 / 4 && state.currentV == 0) {
			setTimeout(() => {
				hSwiper.mousewheel.enable();
				vSwiper.mousewheel.disable();
			}, 250);
		}
	}
</script>

<Swiper
	class="mySwiper swiper-h"
	spaceBetween={50}
	pagination={{
		clickable: true
	}}
	mousewheel={{ forceToAxis: false }}
	modules={[Pagination, Mousewheel]}
	on:swiper={onHorizontalSwiper}
	on:progress={onHorizontalProgress}
>
	<SwiperSlide>Horizontal Slide 1</SwiperSlide>
	<SwiperSlide>
		<Swiper
			class="mySwiper2 swiper-v"
			direction={'vertical'}
			spaceBetween={50}
			pagination={{
				clickable: true
			}}
			mousewheel={{ forceToAxis: false }}
			modules={[Pagination, Mousewheel]}
			on:swiper={onVerticalSwiper}
			on:progress={onVerticalProgress}
		>
			<SwiperSlide>Vertical Slide 1</SwiperSlide>
			<SwiperSlide>Vertical Slide 2</SwiperSlide>
			<SwiperSlide>Vertical Slide 3</SwiperSlide>
			<SwiperSlide>Vertical Slide 4</SwiperSlide>
			<SwiperSlide>Vertical Slide 5</SwiperSlide>
		</Swiper>
	</SwiperSlide>
	<SwiperSlide>Horizontal Slide 3</SwiperSlide>
	<SwiperSlide>Horizontal Slide 4</SwiperSlide>
</Swiper>
