export const prerender = false;
// import { supabase } from '$lib/supabaseClient';
import type { DBRegistration } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	const { data } = await supabase.from('registrations').select('*').eq('id', params.rid).single();

	if (!data) throw error(404, 'Registration ID not found');

	return { db: data as DBRegistration };
}) satisfies PageLoad;
