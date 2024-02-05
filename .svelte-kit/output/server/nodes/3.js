import * as universal from '../entries/pages/(app)/events/_page.ts.js';
import stylesheet_7 from '../stylesheets/7.js';
import stylesheet_3 from '../stylesheets/3.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/events/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(app)/events/+page.ts";
export const imports = ["_app/immutable/nodes/3.d2095726.js","_app/immutable/chunks/events.dca832d9.js","_app/immutable/chunks/index.08bdcf37.js","_app/immutable/chunks/store.88439e5b.js","_app/immutable/chunks/index.46e90aa1.js","_app/immutable/chunks/EventInfoModal.2ee2bc05.js","_app/immutable/chunks/navigation.c8829ce2.js","_app/immutable/chunks/singletons.98eab9e0.js","_app/immutable/chunks/paths.9662ef19.js","_app/immutable/chunks/util.643080e7.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.eafa23a4.js","_app/immutable/chunks/stores.43bfe290.js"];
export const stylesheets = ["_app/immutable/assets/3.51006094.css","_app/immutable/assets/EventInfoModal.fbc88251.css","_app/immutable/assets/Toaster.5032d475.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/3.51006094.css": stylesheet_7,
	"_app/immutable/assets/EventInfoModal.fbc88251.css": stylesheet_3
});
