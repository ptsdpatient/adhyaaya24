import stylesheet_8 from '../stylesheets/8.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/sponsors/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.664ce7a5.js","_app/immutable/chunks/index.fd2af49c.js","_app/immutable/chunks/index.82bf2e87.js"];
export const stylesheets = ["_app/immutable/assets/10.0fbda1fe.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/10.0fbda1fe.css": stylesheet_8
});
