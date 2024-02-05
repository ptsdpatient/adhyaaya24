

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ca4dc8c0.js","_app/immutable/chunks/index.5a650a7b.js","_app/immutable/chunks/stores.4dab0611.js","_app/immutable/chunks/singletons.91f6a688.js","_app/immutable/chunks/index.b47e1f6f.js"];
export const stylesheets = [];
export const fonts = [];
