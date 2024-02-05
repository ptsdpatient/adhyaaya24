

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/timeline/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.69ae9691.js","_app/immutable/chunks/index.5a650a7b.js"];
export const stylesheets = [];
export const fonts = [];
