import * as universal from '../entries/pages/_page.ts.js';
import stylesheet_3 from '../stylesheets/3.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.288ae58c.js","_app/immutable/chunks/index.6031e960.js","_app/immutable/chunks/index.2d608655.js","_app/immutable/chunks/EventInfoModal.d73c2490.js","_app/immutable/chunks/navigation.32451dd4.js","_app/immutable/chunks/singletons.6858b344.js","_app/immutable/chunks/util.36820054.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.d8a9503c.js","_app/immutable/chunks/stores.76222807.js","_app/immutable/chunks/store.610523bc.js","_app/immutable/chunks/events.dca832d9.js","_app/immutable/chunks/forms.7fde8b6d.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/solid-resize.5cfc3844.js"];
export const stylesheets = ["_app/immutable/assets/2.926414d6.css","_app/immutable/assets/EventInfoModal.fbc88251.css","_app/immutable/assets/Toaster.5032d475.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/EventInfoModal.fbc88251.css": stylesheet_3
});
