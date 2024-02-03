
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\r\n<html lang=\"en\" data-theme=\"adhyaaya23\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\r\n\t\t<link rel=\"stylesheet\" href=\"/fonts/gravedigger.css\" />\r\n\t\t<meta name=\"google-site-verification\" content=\"5ZyAnlo1xsl5bDf52VJ-jUV0Q-pZOZP0mNwA_kxF578\" />\r\n\t\t<meta\r\n\t\t\tname=\"description\"\r\n\t\t\tcontent=\"Adhyaaya is a technical festival conducted by students of Government College of Engineering, Nagpur. It includes events in technical, non-technical and workshops categories.\"\r\n\t\t/>\r\n\t\t<meta\r\n\t\t\tname=\"keywords\"\r\n\t\t\tcontent=\"Adhyaaya, Technical Festival, Nagpur, Government College of Engineering, Workshops, Technical Events, Non-Technical Events\"\r\n\t\t/>\r\n\t\t<meta name=\"author\" content=\"Dev Parapalli\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\r\n\r\n\t\t<meta\r\n\t\t\tproperty=\"og:title\"\r\n\t\t\tcontent=\"Adhyaaya - A Technical Festival by Government College of Engineering, Nagpur\"\r\n\t\t/>\r\n\t\t<meta\r\n\t\t\tproperty=\"og:description\"\r\n\t\t\tcontent=\"Adhyaaya is a technical festival conducted by students of Government College of Engineering, Nagpur. It includes events in technical, non-technical and workshops categories.\"\r\n\t\t/>\r\n\t\t<meta property=\"og:url\" content=\"https://adhyaaya.org\" />\r\n\t\t<meta property=\"og:type\" content=\"website\" />\r\n\t\t<meta property=\"og:image\" content=\"/meta.jpg\" />\r\n\t\t<meta property=\"og:email\" content=\"adhyaaya@gcoen.ac.in\" />\r\n\t\t<meta property=\"og:site_name\" content=\"Adhyaaya\" />\r\n\r\n\t\t<meta name=\"twitter:card\" content=\"summary_large_image\" />\r\n\t\t<meta\r\n\t\t\tname=\"twitter:title\"\r\n\t\t\tcontent=\"Adhyaaya - A Technical Festival by Government College of Engineering, Nagpur\"\r\n\t\t/>\r\n\t\t<meta\r\n\t\t\tname=\"twitter:description\"\r\n\t\t\tcontent=\"Adhyaaya is a technical festival conducted by students of Government College of Engineering, Nagpur. It includes events in technical, non-technical and workshops categories.\"\r\n\t\t/>\r\n\t\t<meta name=\"twitter:image\" content=\"/meta.jpg\" />\r\n\t\t<meta name=\"twitter:site\" content=\"@adhyaaya\" />\r\n\r\n\t\t<meta name=\"theme-color\" content=\"#0d0028\" />\r\n\r\n\t\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\r\n\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\r\n\t\t<link\r\n\t\t\thref=\"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap\"\r\n\t\t\trel=\"stylesheet\"\r\n\t\t/>\r\n\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body\r\n\t\tclass=\"h-full w-full\"\r\n\t\tdata-sveltekit-preload-data=\"hover\"\r\n\t\tdata-sveltekit-preload-code=\"hover\"\r\n\t>\r\n\t\t<canvas id=\"mascotid\" class=\"h-full w-full fixed\"></canvas>\r\n\t\t\r\n\t\t<div style=\"display: contents\">" + body + "</div>\r\n\t</body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "155zmxe"
};

export function get_hooks() {
	return import("../../../src/hooks.server.ts");
}

export { set_assets, set_building, set_private_env, set_public_env };