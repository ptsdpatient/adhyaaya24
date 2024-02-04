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
export const imports = ["_app/immutable/nodes/9.5cbea4a7.js","_app/immutable/chunks/index.8f2ca6db.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/events.dca832d9.js","_app/immutable/chunks/index.6031e960.js","_app/immutable/chunks/forms.d92f6bf2.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.c8575aee.js","_app/immutable/chunks/index.2d608655.js","_app/immutable/chunks/navigation.009a91b5.js","_app/immutable/chunks/index.82bf2e87.js","_app/immutable/chunks/iconify-icon.6d541906.js","_app/immutable/chunks/util.36820054.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.d8a9503c.js","_app/immutable/chunks/store.610523bc.js","_app/immutable/chunks/stores.c60431ea.js"];
export const stylesheets = ["_app/immutable/assets/9.1a496daa.css","_app/immutable/assets/Toaster.5032d475.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/9.1a496daa.css": stylesheet_6
});
