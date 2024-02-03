

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/timeline/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.afaa8caa.js","_app/immutable/chunks/index.6031e960.js"];
export const stylesheets = [];
export const fonts = [];
