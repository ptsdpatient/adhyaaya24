<script>
	import { fade } from 'svelte/transition';
</script>

<div out:fade>
	<h1>Adhyaaya'24</h1>
	<section>
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
	</section>
</div>

<style>
	h1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: 0;
		padding: 0;
		z-index: 1;
		font-family: sans-serif;
		text-transform: uppercase;
		font-size: 10em;
		color: #fff;
		mix-blend-mode: difference;
	}
	section {
		position: relative;
		width: 100%;
		height: 100vh;
		background: #fff;
		display: flex;
	}
	section div {
		width: 10%;
		height: 100%;
		background: #000;
		transform: scaleY(0);
		animation: animate 3.4s linear forwards;
	}

	section div:nth-child(odd) {
		transform-origin: top;
	}
	section div:nth-child(even) {
		transform-origin: bottom;
	}
	section div:nth-child(1) {
		animation-delay: 0s;
	}
	section div:nth-child(2) {
		animation-delay: 0.4s;
	}
	section div:nth-child(3) {
		animation-delay: 0.8s;
	}
	section div:nth-child(4) {
		animation-delay: 1.2s;
	}
	section div:nth-child(5) {
		animation-delay: 1.6s;
	}
	section div:nth-child(6) {
		animation-delay: 2s;
	}
	section div:nth-child(7) {
		animation-delay: 2.4s;
	}
	section div:nth-child(8) {
		animation-delay: 2.8s;
	}
	section div:nth-child(9) {
		animation-delay: 3.2s;
	}
	section div:nth-child(10) {
		animation-delay: 3.6s;
	}

	@keyframes animate {
		0% {
			transform: scaleY(0);
		}
		10%,
		90% {
			transform: scaleY(1);
		}
	}
</style>
