

export const index = 18;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_index/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/18.373c0e80.js","_app/immutable/chunks/index.5a650a7b.js"];
export const stylesheets = ["_app/immutable/assets/18.739e3ac1.css"];
export const fonts = [];
