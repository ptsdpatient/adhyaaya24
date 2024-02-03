<div
	class="us w-full max-w-4xl  xl:w-1/2 flex flex-col items-center justify-evenly h-auto text-justify rounded-lg lg:rounded-l-none p-6 gap-2 mx-auto"
>
	<div
		class="text-content h-1/2 w-full text-justify text-sm  md:text-lg xl:text-2xl flex flex-col items-center justify-center bg-clip-text text-pink-200 bg-gradient-to-tr from-pink-200 via-fuchsia-200 to-sky-200 font-thin"
	>
		<div
			class="max-w-2xl lg:max-w-4xl mx-auto px-8 pt-4 md:pl-10 pb-4 nunu font-thin backdrop-blur-none rounded-lg mb-12 text-xl md:text-2xl"
		>
			Over the past years Adhyaaya has had the privilege to have hosted a number of sponsors which
			provided a very entertaining experience to our visitors as well as the brand. The crowd
			engagement, media exposure, sampling and brand building opportunities offered at Adhyaaya are
			unparalleled. The fest has always been a platform for several brands to engage in unique crowd
			engaging activations which has proved to deliver a strong sponsor take back value.
		</div>
		<a
			href="/sponsors"
			class="da-button text-white mb-10 lg:mt-10 mt-auto mx-auto text-2xl lg:text-3xl relative p-4 lg:p-6 max-w-lg text-center bg-gradient-to-r from-pink-500 via-fuchsia-500 to-sky-500 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 active:opacity-90 inline-flex items-center justify-center gap-3 "
			><span>View Sponsors</span> <iconify-icon icon="mdi:arrow-right" /></a
		>
	</div>
	<div class="xl:w-1/3" />
</div>

<style>
	@keyframes move-da-button {
		0%,
		100% {
			background-position: left center;
		}
		50% {
			background-position: right center;
		}
	}

	.da-button {
		background-size: 200% auto;
		animation: move-da-button 10s ease infinite;
	}

	.da-button::before {
		background-size: 200% auto;
		animation: move-da-button 10s ease infinite;
		z-index: -1;
		content: '';
		@apply absolute h-full w-full blur-2xl p-8 max-w-lg text-center bg-gradient-to-r from-pink-500 via-fuchsia-500 to-sky-500 rounded-xl transition-all duration-300 scale-105;
	}
</style>
