<script>
	import '../app.postcss';
	// import { supabase } from '$lib/supabaseClient';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { Toaster } from 'svelte-french-toast';
	import { Modals, closeModal } from 'svelte-modals';
	import Nav from '$lib/components/Nav.svelte';
	// import Loader from '$lib/components/Loader.svelte'
	// import MouseTrailer from '$lib/components/MouseTrailer.svelte';
	// let loaded = true;
	// onMount(() => {
	// 	const {
	// 		data: { subscription }
	// 	// } = supabase.auth.onAuthStateChange(() => {
	// 		invalidate('supabase:auth');
	// 	});

	// 	return () => {
	// 		subscription.unsubscribe();
	// 	};
	// });
</script>

<Nav />

<slot />

<Toaster />
<!-- Using this causes massive lag spikes, maybe use it where needed such as receipt -->
<!-- <MouseTrailer /> -->

<Modals>
	<button slot="backdrop" class="backdrop" on:click={closeModal} />
</Modals>

<style>
	.backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
	}
</style>
