import * as universal from '../entries/pages/_page.ts.js';
import stylesheet_3 from '../stylesheets/3.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.503322e4.js","_app/immutable/chunks/index.08bdcf37.js","_app/immutable/chunks/index.46e90aa1.js","_app/immutable/chunks/EventInfoModal.9a9f4ae0.js","_app/immutable/chunks/navigation.d0d66b54.js","_app/immutable/chunks/singletons.a6741e84.js","_app/immutable/chunks/paths.e23c009c.js","_app/immutable/chunks/util.643080e7.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.eafa23a4.js","_app/immutable/chunks/stores.9256f03a.js","_app/immutable/chunks/store.88439e5b.js","_app/immutable/chunks/events.dca832d9.js","_app/immutable/chunks/forms.65e50a0f.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/solid-resize.5cfc3844.js"];
export const stylesheets = ["_app/immutable/assets/2.bda62ad6.css","_app/immutable/assets/EventInfoModal.fbc88251.css","_app/immutable/assets/Toaster.5032d475.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/EventInfoModal.fbc88251.css": stylesheet_3
});
