

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/team/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.045fe5a5.js","_app/immutable/chunks/index.6031e960.js"];
export const stylesheets = ["_app/immutable/assets/11.fd9ea111.css"];
export const fonts = [];