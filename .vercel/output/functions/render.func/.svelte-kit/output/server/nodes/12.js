

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/timeline/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.43dc3feb.js","_app/immutable/chunks/index.08bdcf37.js"];
export const stylesheets = [];
export const fonts = [];
