import * as client_hooks from '../../../src/hooks.client.ts';

export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')
];

export const server_loads = [0];

export const dictionary = {
		"/": [2],
		"/(app)/__register": [13],
		"/_index": [18],
		"/(app)/events": [3],
		"/(app)/forms/contact_us": [~4],
		"/(app)/gallery": [5],
		"/(app)/guide": [6],
		"/legal": [14],
		"/legal/contact_info": [15],
		"/legal/privacy_policy": [16],
		"/legal/terms_and_conditions": [17],
		"/(app)/pg/[rid]/pay": [~7],
		"/(app)/pg/[rid]/success": [8],
		"/(app)/register": [~9],
		"/(app)/sponsors": [10],
		"/(app)/team": [11],
		"/(app)/timeline": [12]
	};

export const hooks = {
	handleError: client_hooks.handleError || (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';