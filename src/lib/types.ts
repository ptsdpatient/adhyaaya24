type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;

export interface DBRegistrationTeam {
	name: string;
	phone: string;
	email: string;
}

export interface DBRegistration {
	id?: string; // Optional since the database will generate it
	created_at: string;
	name: string;
	phone: string;
	email: string;
	edu_institute: string;
	edu_year: string;
	edu_spl: string;
	team: DBRegistrationTeam[];
	event_id: string;
	amount: number;
	used: boolean;
	status: boolean;
	rzp_pid?: string;
	rzp_oid?: string;
	rzp_sig?: string;
	rzp_status: string;
	custom: JSONValue;
}

export interface PGPOSTResponse {
	id: string;
	entity: string;
	amount: number;
	amount_paid: number;
	amount_due: number;
	currency: 'INR';
	receipt: string | null;
	offer_id: string | null;
	status: string;
	attempts: number;
	notes: JSONValue[];
	created_at: number;
}

export interface PGHandlerSuccessResponse {
	razorpay_payment_id: string;
	razorpay_order_id: string;
	razorpay_signature: string;
}

export interface PGHandlerErrorResponse {
	error: {
		code: string;
		description: string;
		source: string;
		step: string;
		reason: string;
		metadata?: {
			order_id: string;
			payment_id: string;
		};
	};
}

export const PGPOSTResponseSample: PGPOSTResponse = {
	id: 'order_KUnUYh5c6C9Nvb',
	entity: 'order',
	amount: 10400,
	amount_paid: 0,
	amount_due: 10400,
	currency: 'INR',
	receipt: null,
	offer_id: null,
	status: 'created',
	attempts: 0,
	notes: [],
	created_at: 1666000629
};
