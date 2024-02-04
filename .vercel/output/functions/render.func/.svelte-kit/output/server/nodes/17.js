import stylesheet_3 from '../stylesheets/3.js';

export const index = 17;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/terms_and_conditions/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/17.cc5a3e37.js","_app/immutable/chunks/index.fd2af49c.js"];
export const stylesheets = ["_app/immutable/assets/16.1a7d9c10.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/16.1a7d9c10.css": stylesheet_3
});
