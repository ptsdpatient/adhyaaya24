import { writable } from 'svelte/store';

export const hasScrolled = writable<boolean>(false);
