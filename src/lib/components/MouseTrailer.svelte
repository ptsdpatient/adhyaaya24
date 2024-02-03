<script lang="ts">
	import 'iconify-icon';
	let trailerRef: HTMLDivElement;
	let interacting = false;
	let icon = '';

	const handleMouseMove = (e: MouseEvent) => {
		const interactable = e.target as HTMLElement;
		const x = e.clientX - trailerRef.offsetWidth / 2;
		const y = e.clientY - trailerRef.offsetHeight / 2;
		const elem = interactable.closest(
			'a, button, input, textarea, select, details, summary, [contenteditable="true"], .interactable, .cursor-pointer, .cursor-pointer *, span, img'
		);
		if (elem !== null) {
			interacting = true;
		} else {
			interacting = false;
		}
		trailerRef.dataset.interaction = interacting ? 'interacting' : 'default';
		if (interacting) {
			// icon = 'mdi:arrow-top-right';
			// console.log(elem?.tagName)
			switch (elem?.tagName.toLowerCase()) {
				case 'a':
					if (elem?.hasAttribute('href')) {
						icon = 'mdi:link-variant';
					} else {
						icon = 'mdi:link-variant-off';
					}
					break;

				default:
					break;
			}
		} else {
			icon = '';
		}
		const keyframes = {
			transform: `translate(${x}px, ${y}px) scale(${interacting ? 2 : 1})`
		};
		trailerRef.animate(keyframes, {
			duration: 800,
			fill: 'forwards'
		});
	};
</script>

<svelte:window on:mousemove={handleMouseMove} />

<div
	id="mouse-trailer"
	class="mouse-trailer flex items-center justify-center text-xl pointer-events-none"
	bind:this={trailerRef}
>
	<iconify-icon class="icon transition-all duration-500 ease-in-out text-black" {icon} />
</div>

<style global>
	/* * {
        cursor: none;
    } */
	.mouse-trailer {
		height: 20px;
		width: 20px;
		background-color: white;
		mix-blend-mode: difference;
		border-radius: 20px;

		position: fixed;
		left: 0px;
		top: 0px;
		z-index: 10000;

		pointer-events: none;
		opacity: 0;
		transition: opacity 500ms ease;

		display: grid;
		place-items: center;
	}

	body:hover .mouse-trailer {
		opacity: 1;
	}

	.mouse-trailer > .icon {
		opacity: 0;
	}
	.mouse-trailer[data-interaction='interacting'] > .icon {
		opacity: 1;
	}
</style>
