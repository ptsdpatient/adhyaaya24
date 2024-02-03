import { EVENTS, type AdhyaayaEvent } from '$lib/data/events';
import { convertToJSON } from '$lib/util';
import { fail, redirect } from '@sveltejs/kit';
// import { supabase } from '$lib/supabaseClient';
import type { Actions } from './$types';
import validator from 'validator';
import type { DBRegistration } from '$lib/types';
import { dev } from '$app/environment';

export const actions: Actions = {
	default: async (event) => {
		const data = convertToJSON(await event.request.formData());
		// console.log(data);
		const event_id = data['event_id'];
		const event_data = EVENTS.find((e: AdhyaayaEvent) => e.id === event_id);

		const errors = [];
		if (!validator.isEmail(String(data['email']))) {
			errors.push('email');
		}
		if (!validator.isMobilePhone(String(data['phone']))) {
			errors.push('phone');
		}
		// if(!validator.isText(String(data['first_name']))){
		// 	errors.push('first_name');
		// }
		// if(!validator.isAlpha(String(data['last_name']))){
		// 	errors.push('last_name');
		// }
		if (String(data['first_name']).length < 3) {
			errors.push('first_name');
		}
		if (String(data['last_name']).length < 3) {
			errors.push('last_name');
		}
		// if(!validator.isAlphanumeric(String(data['year_grade']))){
		// 	errors.push('year_grade');
		// }
		// if(!validator.isAlphanumeric(String(data['branch_specialization']))){
		// 	errors.push('branch_specialization');
		// }
		if (String(data['institute']).length < 3) {
			errors.push('institute');
		}
		const number_of_additional_members = Number(String(data['members']).split('-')[1]) ?? 0;
		const team = [];
		for (let i = 1; i <= number_of_additional_members; i++) {
			if (String(data[`member-${i}-name`]).length < 3) {
				errors.push(`member-${i}-name`);
				continue;
			}
			if (!validator.isEmail(String(data[`member-${i}-email`]))) {
				errors.push(`member-${i}-email`);
				continue;
			}
			if (!validator.isMobilePhone(String(data[`member-${i}-phone`]))) {
				errors.push(`member-${i}-phone`);
				continue;
			}

			team.push({
				name: String(data[`member-${i}-name`]),
				email: String(data[`member-${i}-email`]),
				phone: String(data[`member-${i}-phone`])
			});
		}

		if (errors.length > 0) {
			dev ? console.log('Validation failed', errors) : null;
			return fail(400, { data, errors });
		}
		let amount_to_pay = 0;
		if (isNaN(number_of_additional_members)) {
			amount_to_pay = event_data?.amount[0] || 0;
		} else {
			amount_to_pay =
				event_data?.amount[event_data?.team_members.indexOf(number_of_additional_members + 1)] || 0;
		}

		// const custom_data =

		const _push_to_db: DBRegistration = {
			created_at: new Date().toISOString(),
			name: `${data['first_name']} ${data['last_name']}`,
			phone: String(data['phone']),
			email: String(data['email']),
			edu_institute: String(data['institute']),
			edu_year: String(data['year_grade']),
			edu_spl: String(data['branch_specialization']),
			team,
			event_id: String(data['event_id']),
			amount: amount_to_pay,
			used: false,
			status: String(data['branch_specialization']) !== 'EPNemGE0iQ',
			rzp_status:
				amount_to_pay === 0 || String(data['branch_specialization']) === 'EPNemGE0iQ'
					? 'PAID'
					: 'NO_PAYMENT_CREATED',
			custom: {}
		};

		const { data: db_data, error } = await supabase
			.from('registrations')
			.insert({
				..._push_to_db
			})
			.select()
			.single();

		if (error) {
			dev ? console.log('Error while inserting into db', error) : null;
			return fail(500, { error });
		}

		throw redirect(307, `pg/${db_data.id}/pay`);
	}
};

// ```
// { name: 'event_id', value: 'avishkar' },
//     { name: 'first_name', value: 'DEVANSH' },
//     { name: 'last_name', value: 'PARAPALLI' },
//     { name: 'phone', value: '8793150182' },
//     { name: 'email', value: 'parapallidev@gmail.com' },
//     { name: 'institute', value: 'ada' },
//     { name: 'year_grade', value: 'tgdf' },
//     { name: 'branch_specialization', value: 'sdadw' },
//     { name: 'members', value: 'additional-1' },
//     { name: 'member-1-name', value: 'ad' },
//     { name: 'member-1-email', value: 'ad@gmail.com' },
//     { name: 'member-1-phone', value: '8856962057' }
// ```
