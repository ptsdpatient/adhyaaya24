import * as universal from '../entries/pages/(app)/register/_page.ts.js';
import * as server from '../entries/pages/(app)/register/_page.server.ts.js';
import stylesheet_6 from '../stylesheets/6.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/register/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(app)/register/+page.ts";
export { server };
export const server_id = "src/routes/(app)/register/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.cd6f22c9.js","_app/immutable/chunks/index.8f2ca6db.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/events.dca832d9.js","_app/immutable/chunks/index.fd2af49c.js","_app/immutable/chunks/forms.181b075a.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.1104b6fe.js","_app/immutable/chunks/index.ed35f5bc.js","_app/immutable/chunks/paths.04af984c.js","_app/immutable/chunks/navigation.547aec6e.js","_app/immutable/chunks/index.82bf2e87.js","_app/immutable/chunks/iconify-icon.6d541906.js","_app/immutable/chunks/util.942d0e35.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.ba55261f.js","_app/immutable/chunks/store.0817863e.js","_app/immutable/chunks/stores.6762eded.js"];
export const stylesheets = ["_app/immutable/assets/9.1a496daa.css","_app/immutable/assets/Toaster.5032d475.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/9.1a496daa.css": stylesheet_6
});
