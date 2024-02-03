import { c as create_ssr_component, j as setContext, v as validate_component, m as missing_component } from "./index2.js";
let base = "";
let assets = base;
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function set_building() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page);
    }
    $$rendered = `



${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}

${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  track_server_fetches: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\r\n<html lang="en" data-theme="adhyaaya23">\r\n	<head>\r\n		<meta charset="utf-8" />\r\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\r\n		<link rel="stylesheet" href="/fonts/gravedigger.css" />\r\n		<meta name="google-site-verification" content="5ZyAnlo1xsl5bDf52VJ-jUV0Q-pZOZP0mNwA_kxF578" />\r\n		<meta\r\n			name="description"\r\n			content="Adhyaaya is a technical festival conducted by students of Government College of Engineering, Nagpur. It includes events in technical, non-technical and workshops categories."\r\n		/>\r\n		<meta\r\n			name="keywords"\r\n			content="Adhyaaya, Technical Festival, Nagpur, Government College of Engineering, Workshops, Technical Events, Non-Technical Events"\r\n		/>\r\n		<meta name="author" content="Dev Parapalli" />\r\n		<meta name="viewport" content="width=device-width" />\r\n\r\n		<meta\r\n			property="og:title"\r\n			content="Adhyaaya - A Technical Festival by Government College of Engineering, Nagpur"\r\n		/>\r\n		<meta\r\n			property="og:description"\r\n			content="Adhyaaya is a technical festival conducted by students of Government College of Engineering, Nagpur. It includes events in technical, non-technical and workshops categories."\r\n		/>\r\n		<meta property="og:url" content="https://adhyaaya.org" />\r\n		<meta property="og:type" content="website" />\r\n		<meta property="og:image" content="/meta.jpg" />\r\n		<meta property="og:email" content="adhyaaya@gcoen.ac.in" />\r\n		<meta property="og:site_name" content="Adhyaaya" />\r\n\r\n		<meta name="twitter:card" content="summary_large_image" />\r\n		<meta\r\n			name="twitter:title"\r\n			content="Adhyaaya - A Technical Festival by Government College of Engineering, Nagpur"\r\n		/>\r\n		<meta\r\n			name="twitter:description"\r\n			content="Adhyaaya is a technical festival conducted by students of Government College of Engineering, Nagpur. It includes events in technical, non-technical and workshops categories."\r\n		/>\r\n		<meta name="twitter:image" content="/meta.jpg" />\r\n		<meta name="twitter:site" content="@adhyaaya" />\r\n\r\n		<meta name="theme-color" content="#0d0028" />\r\n\r\n		<link rel="preconnect" href="https://fonts.googleapis.com" />\r\n		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\r\n		<link\r\n			href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"\r\n			rel="stylesheet"\r\n		/>\r\n\r\n		' + head + '\r\n	</head>\r\n	<body\r\n		class="h-full w-full"\r\n		data-sveltekit-preload-data="hover"\r\n		data-sveltekit-preload-code="hover"\r\n	>\r\n		<canvas id="mascotid" class="h-full w-full fixed"></canvas>\r\n		\r\n		<div style="display: contents">' + body + "</div>\r\n	</body>\r\n</html>\r\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "155zmxe"
};
function get_hooks() {
  return import("./hooks.server.js");
}
export {
  assets as a,
  base as b,
  set_public_env as c,
  set_assets as d,
  set_building as e,
  get_hooks as g,
  options as o,
  public_env as p,
  reset as r,
  set_private_env as s
};
