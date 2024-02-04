

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/team/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.daf32d57.js","_app/immutable/chunks/index.fd2af49c.js","_app/immutable/chunks/paths.04af984c.js"];
export const stylesheets = ["_app/immutable/assets/11.90491792.css"];
export const fonts = [];
