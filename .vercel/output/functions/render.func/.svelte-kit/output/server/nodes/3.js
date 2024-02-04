import * as universal from '../entries/pages/(app)/events/_page.ts.js';
import stylesheet_7 from '../stylesheets/7.js';
import stylesheet_1 from '../stylesheets/1.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/events/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(app)/events/+page.ts";
export const imports = ["_app/immutable/nodes/3.12c2fed6.js","_app/immutable/chunks/events.dca832d9.js","_app/immutable/chunks/index.fd2af49c.js","_app/immutable/chunks/store.0817863e.js","_app/immutable/chunks/index.ed35f5bc.js","_app/immutable/chunks/EventInfoModal.cf8af09e.js","_app/immutable/chunks/navigation.547aec6e.js","_app/immutable/chunks/singletons.1104b6fe.js","_app/immutable/chunks/paths.04af984c.js","_app/immutable/chunks/util.942d0e35.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.ba55261f.js","_app/immutable/chunks/stores.6762eded.js"];
export const stylesheets = ["_app/immutable/assets/3.b976b217.css","_app/immutable/assets/EventInfoModal.fbc88251.css","_app/immutable/assets/Toaster.5032d475.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/3.b976b217.css": stylesheet_7,
	"_app/immutable/assets/EventInfoModal.fbc88251.css": stylesheet_1
});
