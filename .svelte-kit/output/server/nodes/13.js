import stylesheet_4 from '../stylesheets/4.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/__register/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.f1da874f.js","_app/immutable/chunks/index.6031e960.js","_app/immutable/chunks/iconify-icon.6d541906.js"];
export const stylesheets = ["_app/immutable/assets/13.1b56f4d4.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/13.1b56f4d4.css": stylesheet_4
});
