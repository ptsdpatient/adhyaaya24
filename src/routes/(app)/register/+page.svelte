<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';
	import bg from '$lib/assets/backgrounds/register-3.jpg';
	import { enhance } from '$app/forms';
	import autoanimate from '@formkit/auto-animate';
	import 'iconify-icon';
	import type { PageData, ActionData } from './$types';
	import { toastError } from '$lib/util';
	import { openModal, closeAllModals } from 'svelte-modals';
	import EventChangeModal from '$lib/components/EventChangeModal.svelte';
	import { afterNavigate } from '$app/navigation';
	import EventCustomPropModal from '$lib/components/EventCustomPropModal.svelte';
	export let data: PageData;
	export let form: ActionData;

	let loading = false;

	let teamMemberSelected: number = -1;
	function onMemberSelect(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		const target = event.target as HTMLInputElement;
		teamMemberSelected = parseInt(target.value.replace('additional-', ''));
	}

	// function toasting() {
	// 	if (form?.errors) {
	// 		form.errors.forEach((error) => {
	// 			toastError(`Incorrect Field: ${error}`);
	// 		});
	// 		form.errors = [];
	// 	}
	// }
	function setDefaultTeamMember() {
		if (data.event.team_members.length === 1) {
			teamMemberSelected = data.event.team_members[0] - 1;
			const radio: HTMLInputElement | null = document.querySelector(
				`#additional-${teamMemberSelected}`
			);
			if (radio) {
				radio.checked = true;
			}
		} else {
			teamMemberSelected = -1;
			const radioList = document.querySelectorAll<HTMLInputElement>("[id^='additional-']");
			radioList.forEach((radio) => {
				radio.checked = false;
			});
		}
		if (data.members) {
			const sel = Number(data.members) - 1;
			const radio: HTMLInputElement | null = document.querySelector(`#additional-${sel}`);
			teamMemberSelected = sel;
			if (radio) {
				radio.checked = true;
			}
		}
	}
	afterNavigate(() => {
		if (data.select) openModal(EventChangeModal);
		// this auto-selects the team members if there is only one option
		setDefaultTeamMember();
		// if (data.select) openModal(EventChangeModal);
		// if (data.custom) openModal(EventCustomPropModal, { event_id: data.event.id})
		// else if (data.select) openModal(EventChangeModal);
	});
	afterUpdate(() => {
		// if the component requires a redirect to correct event, then we use
		if (data.custom) {
			closeAllModals();
			openModal(EventCustomPropModal, { event_id: data.event.id });
		}
		if (form?.errors) {
			form.errors.forEach((error) => {
				toastError(`Incorrect Field: ${error}`);
			});
			document.getElementById(form.errors[0])?.focus();
			form.errors = [];
		}
	});
	onMount(() => {
		setDefaultTeamMember();
	});
</script>

<svelte:head>
	<script src="/rzp/checkout.js"></script>
	<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
	<title>Registration Form | Adhyaaya'24</title>
</svelte:head>

<div class="bg w-full pt-20 object-contain pb-10 min-h-screen" style="--bg:url({bg});--opacity: 0.4">
	<div class="header mx-auto text-4xl text-center mb-8 text-white font-bold uppercase font-mono">
		Registration Form
	</div>
	{#if form?.errors}
		<div class="mx-auto w-full flex flex-col">
			<!-- <span class="hidden">{toasting()}</span> -->
			<span class="mx-auto">Please correct the following errors:</span>
			<ol class="mx-auto">
				{#each form.errors as error}
					<li>{error}</li>
				{/each}
			</ol>
		</div>
	{/if}
	


	{#if data.event.is_open ?? true}
	<form
	use:enhance={({form, data, action, cancel}) => {
		loading = true;
		return async ({result, update}) => {
			update();
			setTimeout(() => {
				loading = false;
			}, 1000);
		}
	}}
	use:autoanimate
	class="registration-form container max-w-3xl mx-auto px-10 py-10 bg-black/50 rounded-lg"
	method="POST"
>
	<div
		class="details-container w-full flex flex-col md:flex-row pb-4 mb-2 border-b-2 border-b-white/30"
	>
		<div class="event-details grid grid-cols-2">
			<span>Event Name:</span>
			<span>{data.event.name}</span>
			<span>Event Date:</span>
			<span>{data.event.start_date.toLocaleDateString('en-IN')}</span>
			<span>Event Fees:</span>
			<!-- ${data.event.team_members[i] > 1 ? 's' : ''} -->
			<span
				>{#each data.event.amount.map((e, i) => `₹${e / 100} - ${data.event.team_members[i]} ${data.event.team_members[i] > 1 ? 'ppl.' : 'pers.'}`) as fee}
					{fee}
					<br />
				{/each}</span
			>
			<button
				on:click|preventDefault={(e) => {
					openModal(EventChangeModal);
					// teamMemberSelected = 0;
					// setDefaultTeamMember();
				}}
				type="button"
				class="text-left col-span-2 hover:text-white uppercase font-mono underline px-2"
				>Change Event</button
			>
		</div>
		<div class="ml-auto">
			<div class="text-8xl flex items-center justify-center h-full w-full">
				{#if data.event.icon.includes('url::')}
					<img class="h-9 w-9" src={data.event.icon.replace('url::', '')} alt="" />
				{:else}
					<iconify-icon class="text-8xl" icon={data.event.icon} />
				{/if}
			</div>
		</div>
	</div>
	<input type="hidden" name="event_id" value={data.event.id} />
	<div class="grid md:grid-cols-2 md:gap-6">
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="text"
				name="first_name"
				id="first_name"
				class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none  border-gray-400  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
				value={form?.data?.first_name ?? ''}
			/>
			<label
				for="first_name"
				class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>First name</label
			>
		</div>
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="text"
				name="last_name"
				id="last_name"
				class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none text-white border-gray-400  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
				value={form?.data?.last_name ?? ''}
			/>
			<label
				for="last_name"
				class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Last name</label
			>
		</div>
	</div>
	<div class="grid md:grid-cols-2 md:gap-6">
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="tel"
				minlength="10"
				maxlength="10"
				name="phone"
				id="phone"
				class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none text-white border-gray-400  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
				value={form?.data?.phone ?? ''}
			/>
			<label
				for="phone"
				class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Phone number (10-digits)</label
			>
		</div>
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="email"
				name="email"
				id="email"
				class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none text-white border-gray-400  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
				value={form?.data?.email ?? ''}
			/>
			<label
				for="email"
				class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Email address</label
			>
		</div>
	</div>
	<div class="grid md:grid-cols-3 md:gap-4">
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="text"
				name="institute"
				id="institute"
				class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none text-white border-gray-400  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
				value={form?.data?.institute ?? ''}
			/>
			<label
				for="institute"
				class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>College/School</label
			>
		</div>
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="text"
				name="year_grade"
				id="year_grade"
				class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none text-white border-gray-400  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
				value={form?.data?.year_grade ?? ''}
			/>
			<label
				for="year_grade"
				class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Year/Grade</label
			>
		</div>
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="text"
				name="branch_specialization"
				id="branch_specialization"
				class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none text-white border-gray-400  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				value={form?.data?.branch_specialization ?? ''}
			/>
			<label
				for="branch_specialization"
				class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Branch</label
			>
		</div>
	</div>

	{#if data.event.team_members.length > 1 || !data.event.team_members.includes(1)}
		<h3 class="mb-6 text-base font-medium  text-gray-200">
			How many additional members are in your team? (ie. excluding you)
		</h3>

		<ul class="flex flex-row justify-between gap-6 w-full mb-6 flex-wrap">
			{#each data.event.team_members as item}
				{#if data.event.team_members.includes(item)}
					<li class="w-full max-w-[5rem]">
						<input
							type="radio"
							id="additional-{item - 1}"
							name="members"
							value="additional-{item - 1}"
							class="hidden peer"
							required
							on:click={onMemberSelect}
						/>
						<label
							for="additional-{item - 1}"
							class="inline-flex justify-center items-center p-2 w-full rounded-lg border  cursor-pointer hover:text-gray-300 border-gray-700  peer-checked:border-blue-600 peer-checked:text-blue-600  text-gray-200 bg-gray-800 hover:bg-gray-700"
						>
							<div class="block">
								<div class="w-full text-sm font-bold">{item - 1}</div>
							</div>
						</label>
					</li>
				{/if}
			{/each}
		</ul>
	{/if}

	{#if teamMemberSelected > 0}
		<h4 class="mb-2 text-base font-medium text-white ">
			Please enter their details below.
		</h4>
		{#each Array.from(Array(teamMemberSelected).keys(), (_, index) => index + 1) as item}
			<div class="grid md:grid-cols-3 md:gap-4">
				<div class="relative z-0 mb-6 w-full group">
					<input
						type="text"
						name="member-{item}-name"
						id="member-{item}-name"
						class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none text-white border-gray-400  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						value={form?.data?.[`member-${item}-name`] ?? ''}
					/>
					<label
						for="member-{item}-name"
						class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>Member {item} Name</label
					>
				</div>
				<div class="relative z-0 mb-6 w-full group">
					<input
						type="email"
						name="member-{item}-email"
						id="member-{item}-email"
						class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none text-white border-gray-400  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						value={form?.data?.[`member-${item}-email`] ?? ''}
					/>
					<label
						for="member-{item}-email"
						class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>Member {item} Email</label
					>
				</div>
				<div class="relative z-0 mb-6 w-full group">
					<input
						type="tel"
						minlength="10"
						maxlength="10"
						name="member-{item}-phone"
						id="member-{item}-phone"
						class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none text-white border-gray-400  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						value={form?.data?.[`member-${item}-phone`] ?? ''}
					/>
					<label
						for="member-{item}-phone"
						class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>Member {item} Phone</label
					>
				</div>
			</div>
		{/each}
	{/if}
	{#if teamMemberSelected > -1}
		<button
			type="submit"
			disabled={loading}
			class="text-white   focus:ring-4 focus:outline-none  font-medium rounded-lg uppercase w-full px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 {loading
				? 'opacity-50 cursor-not-allowed btn-disabled loading'
				: ''}}"
			>Register (₹{data.event.amount[
				data.event.team_members.find((e) => {
					e == teamMemberSelected + 1;
				}) ?? 0
			] / 100})</button
		>
	{:else}
		<button disabled>Please select a choice above</button>
	{/if}
	<hr class="border border-white/60 mt-4" />
	<div class="mx-auto text-sm px-10">
		<br />By registering you agree to receive transactional (receipts etc.) emails from Adhyaaya.
		Please see our <a class="underline text-white"  href="/legal/privacy_policy" >Privacy Policy</a>
		for info on how your data is handled and
		<a class="underline text-white" href="/legal/terms_and_conditions">Terms and Conditions</a> for
		more info.
	</div>
</form>
	{:else}
	<div class="bg-red-500/40 p-6 rounded-lg text-white text-justify mx-auto max-w-lg">
		<h3 class="text-xl font-bold mb-4">Registration Closed</h3>
		<p class="mb-4 nunu">
			The registrations for this event are currently closed. Please contact the event coordinators or use the details below
		</p>
		<p class="mx-auto text-center mb-4">
			<button on:click={() => {
				openModal(EventChangeModal);
			}} class="btn btn-outline mx-auto">Click here to register for another event</button>
		</p>
		<div class="flex items-center justify-center">
			<div class="bg-red-500/30 p-4 rounded-full mr-4">
				<iconify-icon icon="uil:user" class="text-4xl" />
			</div>
			<div class="text-left">
				<h4 class="font-bold nunu">Swarali Prayagi</h4>
				<p class="nunu">CSE Coordinator</p>
				<p><a href="tel:8446563859" class="nunu">8446563859</a></p>
				<p><a href="mailto:ssprayagi@gcoen.ac.in" class="nunu">ssprayagi@gcoen.ac.in</a></p>
			</div>
		</div>
	</div>
	{/if}

</div>

<style lang="postcss">
	.bg {
		background: linear-gradient(0deg, rgba(0, 0, 0, var(--opacity)), rgba(0, 0, 0, var(--opacity)))
				center fixed no-repeat,
			var(--bg) center fixed no-repeat;
		background-size: cover;
	}

	ol {
		@apply mx-auto;
	}

	* {
		font-family: 'Nunito', sans-serif;
	}

	.header {
		font-family: 'My Font';
	}
</style>
