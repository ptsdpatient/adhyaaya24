export const prerender = false;

import type { AdhyaayaEvent } from '$lib/data/events';
import type { PageLoad } from './$types';
import { EVENTS } from '$lib/data/events';

export const load = (({ url }) => {
	const view = url.searchParams.get('view');
	return {
		events: EVENTS.filter((e: AdhyaayaEvent) => e.is_active),
		view: view ? view : 'list'
	};
}) satisfies PageLoad;
