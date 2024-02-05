import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.d71b665d.js","_app/immutable/chunks/index.08bdcf37.js","_app/immutable/chunks/paths.9662ef19.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.eafa23a4.js","_app/immutable/chunks/index.46e90aa1.js","_app/immutable/chunks/store.88439e5b.js","_app/immutable/chunks/navigation.c8829ce2.js","_app/immutable/chunks/singletons.98eab9e0.js","_app/immutable/chunks/solid-resize.5cfc3844.js","_app/immutable/chunks/iconify-icon.6d541906.js","_app/immutable/chunks/stores.43bfe290.js"];
export const stylesheets = ["_app/immutable/assets/0.1674a0dd.css","_app/immutable/assets/Toaster.5032d475.css"];
export const fonts = [];
