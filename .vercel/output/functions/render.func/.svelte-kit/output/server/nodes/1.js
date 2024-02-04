

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.84b06991.js","_app/immutable/chunks/index.6031e960.js","_app/immutable/chunks/stores.c60431ea.js","_app/immutable/chunks/singletons.c8575aee.js","_app/immutable/chunks/index.2d608655.js"];
export const stylesheets = [];
export const fonts = [];
