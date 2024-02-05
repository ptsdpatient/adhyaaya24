

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.07b769b7.js","_app/immutable/chunks/index.08bdcf37.js","_app/immutable/chunks/stores.87d2cb78.js","_app/immutable/chunks/singletons.a730b04d.js","_app/immutable/chunks/index.46e90aa1.js"];
export const stylesheets = [];
export const fonts = [];
