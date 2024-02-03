<script lang="ts">
	import { goto } from '$app/navigation';
	import { EVENTS } from '$lib/data/events';
	import { closeModal } from 'svelte-modals';
	import { fade } from 'svelte/transition';
	export let isOpen: boolean;
	// export let reset_func: () => void;
	let value: string;
	import 'iconify-icon';

	function close() {
		// reset_func();
		return closeModal();
	}
</script>

{#if isOpen}
	<div class="display-modal">
		<div class="card-container">
			<div class=" card w-96 bg-base-200 shadow-xl border border-white">
				<div class="card-body">
					<div class="self-end nunu">
						<button
							on:click={close}
							class="rounded-full bg-base-300 text-4xl w-[2.25rem] h-[2.25rem]"
							><iconify-icon icon="eva:close-fill" /></button
						>
					</div>
					<h2 class="card-title hidden">Card title!</h2>
					<p>Please select the event you would like to register for.</p>
					<div class="card-actions justify-center">
						<select
							bind:value
							on:change={() => {
								if (close()) goto(`/register?event=${value}`);
								// console.log(value);
							}}
							class="select select-bordered w-full max-w-xs"
						>
							<option class="invisible hidden" disabled selected>Select Here</option>
							{#each EVENTS.filter((e) => e.is_active) as event}
								<option class="font-mono" value={event.id}>{event.name}</option>
							{/each}
						</select>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.display-modal {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		/* allow click-through to backdrop */
		pointer-events: none;
		@apply z-[200];
	}
	.card-container {
		@apply pointer-events-auto;
	}
</style>
