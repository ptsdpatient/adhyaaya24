import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.4110f6a1.js","_app/immutable/chunks/index.6031e960.js","_app/immutable/chunks/singletons.6858b344.js","_app/immutable/chunks/index.2d608655.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.d8a9503c.js","_app/immutable/chunks/store.610523bc.js","_app/immutable/chunks/navigation.32451dd4.js","_app/immutable/chunks/solid-resize.5cfc3844.js","_app/immutable/chunks/iconify-icon.6d541906.js","_app/immutable/chunks/stores.76222807.js"];
export const stylesheets = ["_app/immutable/assets/0.9d8cf4db.css","_app/immutable/assets/Toaster.5032d475.css"];
export const fonts = [];
