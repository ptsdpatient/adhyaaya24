export const prerender = false;

import type { PageServerLoad } from './$types';
// import { events } from "$lib/data/events";
import { error, redirect } from '@sveltejs/kit';
// import { supabase } from '$lib/supabaseClient';
// import { RZP_SECRET } from '$env/static/private';
// import { PUBLIC_RZP_KEY } from '$env/static/public';
import type { DBRegistration, PGPOSTResponse } from '$lib/types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	let { data } = await supabase.from('registrations').select('*').eq('id', params.rid).single();
	if (!data) throw error(404, 'Registration ID not found');
	// POST TO RZP
	if (data['rzp_status'] === 'PAID')
		// Incase of paid already, redirect to success page.
		throw redirect(307, '/pg/' + params.rid + '/success');

	const _req = await fetch('https://api.razorpay.com/v1/orders', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Basic ' + btoa("PUBLIC_RZP_KEY" + ':' + "RZP_SECRET")
		},
		credentials: 'include',
		body: JSON.stringify({
			amount: data.amount,
			currency: 'INR'
		})
	});
	const _data = await _req.json();
	({ data } = await supabase
		.from('registrations')
		.update({ rzp_oid: _data.id })
		.eq('id', data.id)
		.select()
		.single());
	if (data && _data) return { db: data as DBRegistration, pg: _data as PGPOSTResponse };
	else throw error(404, 'Error while creating order');
};
