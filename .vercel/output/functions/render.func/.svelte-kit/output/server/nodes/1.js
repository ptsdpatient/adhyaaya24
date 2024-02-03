

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a66f2877.js","_app/immutable/chunks/index.6031e960.js","_app/immutable/chunks/stores.3aa5b28c.js","_app/immutable/chunks/singletons.b566d0c0.js","_app/immutable/chunks/index.2d608655.js"];
export const stylesheets = [];
export const fonts = [];
