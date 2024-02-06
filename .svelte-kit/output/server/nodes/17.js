import stylesheet_2 from '../stylesheets/2.js';

export const index = 17;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/terms_and_conditions/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/17.2f4dafc2.js","_app/immutable/chunks/index.d9bcf563.js"];
export const stylesheets = ["_app/immutable/assets/16.1a7d9c10.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/16.1a7d9c10.css": stylesheet_2
});
