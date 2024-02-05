import * as universal from '../entries/pages/_page.ts.js';
import stylesheet_4 from '../stylesheets/4.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.cf27a99c.js","_app/immutable/chunks/index.5a650a7b.js","_app/immutable/chunks/index.b47e1f6f.js","_app/immutable/chunks/EventInfoModal.d5392bbb.js","_app/immutable/chunks/navigation.f3b45ef7.js","_app/immutable/chunks/singletons.91f6a688.js","_app/immutable/chunks/util.9e6ebd6b.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.bf485d9e.js","_app/immutable/chunks/stores.4dab0611.js","_app/immutable/chunks/store.1d84e5ac.js","_app/immutable/chunks/events.dca832d9.js","_app/immutable/chunks/forms.887158f9.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/solid-resize.5cfc3844.js"];
export const stylesheets = ["_app/immutable/assets/2.bda62ad6.css","_app/immutable/assets/EventInfoModal.fbc88251.css","_app/immutable/assets/Toaster.5032d475.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/EventInfoModal.fbc88251.css": stylesheet_4
});
