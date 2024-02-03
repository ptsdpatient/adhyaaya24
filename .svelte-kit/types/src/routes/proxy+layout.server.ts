// @ts-nocheck
import type { LayoutServerLoad } from './$types';
// import { getServerSession } from '@supabase/auth-helpers-sveltekit';

export const load = async (event: Parameters<LayoutServerLoad>[0]) => {
	return {
		// session: await getServerSession(event)
	};
};
