

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b96c3a2a.js","_app/immutable/chunks/index.6031e960.js","_app/immutable/chunks/stores.b8f57d4d.js","_app/immutable/chunks/singletons.1e817eea.js","_app/immutable/chunks/index.2d608655.js"];
export const stylesheets = [];
export const fonts = [];
