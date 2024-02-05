

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fb790c9b.js","_app/immutable/chunks/index.08bdcf37.js","_app/immutable/chunks/stores.9256f03a.js","_app/immutable/chunks/singletons.a6741e84.js","_app/immutable/chunks/index.46e90aa1.js","_app/immutable/chunks/paths.e23c009c.js"];
export const stylesheets = [];
export const fonts = [];
