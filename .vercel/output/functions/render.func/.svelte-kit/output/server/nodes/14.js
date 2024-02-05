

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/14.257843d8.js","_app/immutable/chunks/index.08bdcf37.js"];
export const stylesheets = [];
export const fonts = [];
