import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.5e347212.js","_app/immutable/chunks/index.6031e960.js","_app/immutable/chunks/singletons.b566d0c0.js","_app/immutable/chunks/index.2d608655.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.d8a9503c.js","_app/immutable/chunks/store.610523bc.js","_app/immutable/chunks/navigation.35355dc9.js","_app/immutable/chunks/solid-resize.5cfc3844.js","_app/immutable/chunks/iconify-icon.6d541906.js","_app/immutable/chunks/stores.3aa5b28c.js"];
export const stylesheets = ["_app/immutable/assets/0.42c4c67b.css","_app/immutable/assets/Toaster.5032d475.css"];
export const fonts = [];
