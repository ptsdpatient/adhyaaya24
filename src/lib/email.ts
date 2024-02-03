import { getEmailHTML, type EmailData } from '$lib/data/email';
import NodeMailer from 'nodemailer';
// import { supabase } from '$lib/supabaseClient';
import type { DBRegistration } from '$lib/types';
import { EVENTS } from '$lib/data/events';
// import { SMTP_USER, SMTP_PASS, SG_KEY } from '$env/static/private';
import { dev } from '$app/environment';

export async function _sendEmail(
	to: string,
	subject: string,
	html: string,
	text: string,
	// from = "Adhyaaya'23 | GCOEN <registrations@adhyaaya.org>",
	from = "Registrations @ Adhyaaya'23 <noreply.adhyaaya.gcoen@gmail.com>"
	// replyTo = 'registrations@adhyaaya.org',
) {
	const transporter = NodeMailer.createTransport({
		service: 'gmail',
		host: 'smtp.gmail.com',
		auth: {
			// user: SMTP_USER,
			// pass: SMTP_PASS
			user: "SMTP_USER",
			pass: "SMTP_PASS"
		}
	});

	return await transporter.sendMail({
		from,
		to,
		subject,
		html,
		text
		// replyTo
	});
}

export async function sendEmail(registration_id: string) {
	const { data: registration, error } = (await supabase
		.from('registrations')
		.select('*')
		.eq('id', registration_id)
		.single()) as { data: DBRegistration; error: any };

	if (error) {
		console.error(error);
		return;
	}
	const event = EVENTS.find((e) => e.id === registration.event_id);

	const html = getEmailHTML({
		rid: registration.id ?? 'Pending',
		name: registration.name,
		// email: registration.email,
		phone: registration.phone,
		event: event?.name ?? 'Adhyaaya',
		members: registration.team.map((m) => m.name).join(', '),
		amount: '₹' + String(registration.amount / 100),
		mode: event?.mode.toLocaleUpperCase() ?? 'OFFLINE',
		date:
			event?.start_date.toLocaleDateString('en-IN', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			}) ?? 'Pending',
		ec: event?.contact.map((e) => `${e.name}<br />${e.phone}<br />`).join('') ?? 'Pending',
		contact: '+919876543210',
		qr: registration.id ?? 'Pending',
		receipt: `${dev ? 'http://localhost:5173' : 'https://www.adhyaaya.org'}/pg/${
			registration.id
		}/success`
	});
	const text = `Hi ${registration.name},\n\nThank you for registering for Adhyaaya'23. We are glad to have you on board. We will be sending you more details about the event soon.\nPlease note the registration id: ${registration.id}\n\nRegards,\nTeam Adhyaaya'23`;

	return await _sendEmail(registration.email, "Adhyaaya'23 Registration", html, text);
}

export async function sendAPIEmail(registration_id: string) {
	const { data: registration, error } = (await supabase
		.from('registrations')
		.select('*')
		.eq('id', registration_id)
		.single()) as { data: DBRegistration; error: any };

	if (error) {
		console.error(error);
		return;
	}
	const event = EVENTS.find((e) => e.id === registration.event_id);

	const html = getEmailHTML({
		rid: registration.id ?? 'Pending',
		name: registration.name,
		// email: registration.email,
		phone: registration.phone,
		event: event?.name ?? 'Adhyaaya',
		members: registration.team.map((m) => m.name).join(', '),
		amount: '₹' + String(registration.amount / 100),
		mode: event?.mode.toLocaleUpperCase() ?? 'OFFLINE',
		date:
			event?.start_date.toLocaleDateString('en-IN', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			}) ?? 'Pending',
		ec: event?.contact.map((e) => `${e.name}<br />${e.phone}<br />`).join('') ?? 'Pending',
		contact: '+919876543210',
		qr: registration.id ?? 'Pending',
		receipt: `${dev ? 'http://localhost:5173' : 'https://www.adhyaaya.org'}/pg/${
			registration.id
		}/success`
	});
	const text = `Hi ${registration.name},\n\nThank you for registering for Adhyaaya'23. We are glad to have you on board. We will be sending you more details about the event soon.\nPlease note the registration id: ${registration.id}\n\nRegards,\nTeam Adhyaaya'23`;

	const sgMail = (await import('@sendgrid/mail')).default;
	sgMail.setApiKey("SG_KEY");
	const msg = {
		to: registration.email,
		from: 'registrations@adhyaaya.org',
		subject: `Adhyaaya'23 Registration : ${registration.event_id}`,
		text,
		html
	};
	return sgMail.send(msg);
}
