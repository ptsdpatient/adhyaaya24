export const prerender = false;

import type { PageLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';
import { EVENTS } from '$lib/data/events';

export const load: PageLoad = async ({ fetch, url }) => {
	const event_id = url.searchParams.get('event');
	const members = url.searchParams.get('members');
	const return_data = { event: EVENTS[0], select: true, members, custom: false };
	if (!event_id) return return_data;
	const event = EVENTS.find((e) => e.id === event_id);
	if (event && event_id.includes('::')) return { event, select: false, members, custom: true };
	else if (event) return { event, select: false, members, custom: false };
	else throw error(404, 'Event not found');
};

/*
	<div class="relative z-0 mb-6 w-full group">
		<input
			type="text"
			name="company"
			id="company"
			class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
			placeholder=" "
			required
		/>
		<label
			for="company"
			class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
			>Company (Ex. Google)</label
		>
	</div>
	<div class="relative z-0 mb-6 w-full group">
		<input
			type="select"
			name="password"
			id="password"
			class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
			placeholder=" "
			required
		/>
		<label
			for="password"
			class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
			>Password</label
		>
	</div>
*/
