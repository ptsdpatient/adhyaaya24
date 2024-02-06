import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.40f782a6.js","_app/immutable/chunks/index.d9bcf563.js","_app/immutable/chunks/paths.225d2381.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.6afbda2d.js","_app/immutable/chunks/index.9a7c0c1f.js","_app/immutable/chunks/store.4eb84912.js","_app/immutable/chunks/navigation.66812059.js","_app/immutable/chunks/singletons.9bc03031.js","_app/immutable/chunks/solid-resize.5cfc3844.js","_app/immutable/chunks/iconify-icon.6d541906.js","_app/immutable/chunks/stores.6981ae48.js"];
export const stylesheets = ["_app/immutable/assets/0.1674a0dd.css","_app/immutable/assets/Toaster.5032d475.css"];
export const fonts = [];
