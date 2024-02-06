

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.45c3d9ab.js","_app/immutable/chunks/index.d9bcf563.js","_app/immutable/chunks/stores.6981ae48.js","_app/immutable/chunks/singletons.9bc03031.js","_app/immutable/chunks/index.9a7c0c1f.js","_app/immutable/chunks/paths.225d2381.js"];
export const stylesheets = [];
export const fonts = [];
