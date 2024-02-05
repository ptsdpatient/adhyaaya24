

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4e6e8fd2.js","_app/immutable/chunks/index.08bdcf37.js","_app/immutable/chunks/stores.43bfe290.js","_app/immutable/chunks/singletons.98eab9e0.js","_app/immutable/chunks/index.46e90aa1.js","_app/immutable/chunks/paths.9662ef19.js"];
export const stylesheets = [];
export const fonts = [];
