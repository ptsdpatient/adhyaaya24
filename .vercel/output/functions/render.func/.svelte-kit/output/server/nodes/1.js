

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.bb97e88a.js","_app/immutable/chunks/index.fd2af49c.js","_app/immutable/chunks/stores.6762eded.js","_app/immutable/chunks/singletons.1104b6fe.js","_app/immutable/chunks/index.ed35f5bc.js","_app/immutable/chunks/paths.04af984c.js"];
export const stylesheets = [];
export const fonts = [];
