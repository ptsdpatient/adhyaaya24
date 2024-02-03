

export const index = 18;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_index/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/18.b19ff971.js","_app/immutable/chunks/index.6031e960.js"];
export const stylesheets = ["_app/immutable/assets/18.739e3ac1.css"];
export const fonts = [];
