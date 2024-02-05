

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/gallery/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.5b463aa2.js","_app/immutable/chunks/index.5a650a7b.js"];
export const stylesheets = ["_app/immutable/assets/5.25a3e9a0.css"];
export const fonts = [];
