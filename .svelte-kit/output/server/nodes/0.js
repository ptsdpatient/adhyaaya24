import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.45f00b08.js","_app/immutable/chunks/index.fd2af49c.js","_app/immutable/chunks/paths.04af984c.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.ba55261f.js","_app/immutable/chunks/index.ed35f5bc.js","_app/immutable/chunks/store.0817863e.js","_app/immutable/chunks/navigation.547aec6e.js","_app/immutable/chunks/singletons.1104b6fe.js","_app/immutable/chunks/solid-resize.5cfc3844.js","_app/immutable/chunks/iconify-icon.6d541906.js","_app/immutable/chunks/stores.6762eded.js"];
export const stylesheets = ["_app/immutable/assets/0.4d4da13a.css","_app/immutable/assets/Toaster.5032d475.css"];
export const fonts = [];
