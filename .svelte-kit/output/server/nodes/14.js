

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/14.60f264b9.js","_app/immutable/chunks/index.d9bcf563.js"];
export const stylesheets = [];
export const fonts = [];
