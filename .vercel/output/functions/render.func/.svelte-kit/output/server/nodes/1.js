

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fe21f062.js","_app/immutable/chunks/index.6031e960.js","_app/immutable/chunks/stores.5af82e6b.js","_app/immutable/chunks/singletons.c629fa27.js","_app/immutable/chunks/index.2d608655.js"];
export const stylesheets = [];
export const fonts = [];
