import stylesheet_1 from '../stylesheets/1.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/contact_info/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/15.6f692f07.js","_app/immutable/chunks/index.6031e960.js"];
export const stylesheets = ["_app/immutable/assets/15.6097cb5d.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/15.6097cb5d.css": stylesheet_1
});
