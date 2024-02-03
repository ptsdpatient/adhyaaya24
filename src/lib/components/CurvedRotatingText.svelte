<script lang="ts">
	export let speed = 50;
	export let size = 130;
	export let font = 0.7;
	export let text = 'Hello World';
	export let repeat = 3;
	export let separator = ' • ';
	export let classes = '';

	let array: string[] = [];
	$: array = [...Array(repeat)].map((_) => [...text].concat([...separator])).flat();
</script>

<div class="controls hidden nunu">
	<p><span>Text</span><input type="text" bind:value={text} /></p>
	<p><span>Separator</span><input type="text" bind:value={separator} /></p>
	<p><span>Repeat</span><input type="number" bind:value={repeat} min="1" /></p>
	<p><span>Circle size</span><input type="number" bind:value={size} min="100" step="10" /></p>
	<p><span>Font size</span><input type="number" bind:value={font} min="0.1" step="0.1" /></p>
	<p>
		<span>Animation duration</span><input type="number" bind:value={speed} min="10" step="10" />
	</p>
</div>

<div class="seal {classes}" style="--size: {size}px; --speed: {speed * 1000}ms; --font: {font}em">
	{#each array as char, index}
		<div class="char" style="--angle: {`${(1 / array.length) * index}turn`}">{char}</div>
	{/each}
</div>

<style>
	@keyframes rotation {
		0% {
			transform: rotate(0turn);
		}
		100% {
			transform: rotate(1turn);
		}
	}
	.controls span {
		display: block;
		margin-bottom: 0.5em;
	}
	.seal {
		position: relative;
		width: var(--size);
		height: var(--size);
		border-radius: 100%;
		animation: rotation var(--speed) linear infinite;
		font-size: var(--font);
	}
	.char {
		width: 1em;
		height: 100%;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) rotate(var(--angle, 0deg));
		text-align: center;
		text-transform: uppercase;
	}
</style>
