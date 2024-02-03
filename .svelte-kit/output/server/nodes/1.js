

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b7d0f183.js","_app/immutable/chunks/index.6031e960.js","_app/immutable/chunks/stores.b0c89f50.js","_app/immutable/chunks/singletons.7ad76692.js","_app/immutable/chunks/index.2d608655.js"];
export const stylesheets = [];
export const fonts = [];
