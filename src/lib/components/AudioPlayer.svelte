<script>
	import { onMount } from 'svelte';
	import background from '$lib/assets/audio/background.mp3';
	onMount(() => {});
</script>

<div class="hidden">
	<audio src={background} />
</div>
