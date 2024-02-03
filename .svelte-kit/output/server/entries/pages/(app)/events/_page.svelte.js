import { c as create_ssr_component, s as subscribe, f as add_attribute, e as escape, d as each, k as add_styles, v as validate_component } from "../../../../chunks/index2.js";
import { c as closeModal, a as closeAllModals, o as openModal, m as modals } from "../../../../chunks/store.js";
import { a as afterNavigate } from "../../../../chunks/navigation.js";
import "../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { p as page } from "../../../../chunks/stores.js";
/* empty css                                                               */import { E as EVENTS } from "../../../../chunks/events.js";
import * as THREE from "three";
const css$2 = {
  code: ".modal-wrapper.svelte-10v77i8{position:absolute;top:0;left:0;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.5);color:white}",
  map: null
};
const EventInfoModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { event } = $$props;
  let { isOpen } = $$props;
  let { date_options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  } } = $$props;
  let display_date;
  if (event.end_date.toLocaleDateString("en-IN", date_options) === event.start_date.toLocaleDateString("en-IN", date_options)) {
    date_options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    };
    display_date = event.start_date.toLocaleDateString("en-IN", date_options);
  } else {
    display_date = event.start_date.toLocaleDateString("en-IN", date_options) + " to " + event.end_date.toLocaleDateString("en-IN", date_options);
  }
  let scrollPos;
  function closeModal$1() {
    window.scrollTo({ top: scrollPos, behavior: "auto" });
    closeModal();
    closeAllModals();
  }
  afterNavigate(() => {
    closeModal$1();
  });
  if ($$props.event === void 0 && $$bindings.event && event !== void 0)
    $$bindings.event(event);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.date_options === void 0 && $$bindings.date_options && date_options !== void 0)
    $$bindings.date_options(date_options);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `${isOpen ? `<div class="modal-wrapper relative xl:h-full w-full z-[210] bg-black/50 svelte-10v77i8"><button class="h-12 w-12 p-2 backdrop-blur-2xl md:h-12 md:w-12 rounded-full border-2 font-bold border-white right-2 top-2 lg:right-10 lg:top-8 absolute transition-all duration-500 ease-in-out hover:scale-105 active:scale-95 z-50 mix-blend-difference"><div class="absolute w-[18px] h-[2px] origin-center bg-white transition-all ease-in-out duration-500" style="top: 50%; top: calc(50%); left: 50%; transform: translateX(-50%) translateY(-50%) rotate(-45deg) translateZ(0px);"></div>
			<div class="absolute w-[18px] h-[2px] origin-center bg-white transition-all ease-in-out duration-500 " style="top: 50%; top: calc(50%); left: 50%; transform: translateX(-50%) translateY(-50%) rotate(45deg) translateZ(0px);"></div></button>
		<div class="modal-container container flex justify-between flex-col xl:flex-row rounded-lg"><div class="image-container"><img${add_attribute("src", event.poster, 0)} alt="${escape(event.name, true) + " poster"}" class="rounded-t-lg lg:rounded-l-lg"></div>

			<div class="content-container flex flex-col items-baseline xl:w-2/3 px-6 pt-6 bg-black bg-opacity-50 rounded-b-lg lg:rounded-r-lg"><h2 class="event-name mx-auto text-5xl">${escape(event.name)}</h2>
				<p class="date nunu text-xl py-2">${escape(display_date)}</p>
				<p class="event-description py-2 text-lg nunu max-w-4xl">${escape(event.description)}</p>
				<p class="ec-contact py-2 nunu text-2sm">For Queries Contact:<br>
					${each(event.contact, (ec) => {
    return `<span class="nunu">${escape(ec.name)}</span> - ${escape(ec.phone)}<br>`;
  })}</p>
				<div class="player-indicator flex flex-row flex-wrap justify-evenly items-center mt-auto w-full gap-4">${event.team_members.filter((i) => i != 0).length > 1 ? `` : ``}
					${each(Array(6), (_, i) => {
    return `${event.team_members.includes(i + 1) ? `` : ``}`;
  })}
					</div>
				<div class="button-container flex lg:flex-row flex-col justify-around gap-4 w-full mt-4 mb-4 h-15"><button class="register-btn lg:w-1/2 px-5 py-2 bg-gradient-to-tr from-green-700 via-green-500 to-green-500 rounded-lg items-center uppercase hover:scale-110 active:scale-90 active:opacity-90 transition-all duration-300 ease-in-out font-normal-bold nunu">Register</button>
					<a target="_blank" rel="noreferrer"${add_attribute("href", `${$page.url.origin}/drafts/${event.id.replaceAll("::", "")}.pdf`, 0)} class="learn-more-btn text-center lg:w-1/2 px-5 py-2 bg-gradient-to-tr from-blue-500 via-cyan-500 to-black-500 rounded-lg items-center uppercase hover:scale-110 active:scale-90 active:opacity-90 transition-all duration-300 ease-in-out font-normal-bold my-auto nunu">Learn More</a></div></div></div></div>` : ``}`;
});
const FragmentShader = "vec3 rgb(float r, float g, float b) {\r\n    return vec3(r / 255., g / 255., b / 255.);\r\n}\r\nvec3 rgb(float c) {\r\n    return vec3(c / 255., c / 255., c / 255.);\r\n}\r\n\r\nuniform vec3 u_lowColor;\r\nuniform vec3 u_highColor;\r\nuniform float u_time;\r\n\r\nvarying vec2 vUv;\r\nvarying float vDistortion;\r\nvarying float xDistortion;\r\n\r\nvoid main() {\r\n    vec3 highColor = rgb(u_highColor.r, u_highColor.g, u_highColor.b);\r\n    \r\n    vec3 colorMap = rgb(u_lowColor.r, u_lowColor.g, u_lowColor.b);\r\n\r\n    colorMap = mix(colorMap, highColor, vDistortion);\r\n    \r\n    gl_FragColor = vec4(colorMap, 1.);\r\n}";
const VertexShader = "uniform float u_time;\r\nuniform float u_height;\r\nuniform vec2 u_rand;\r\n\r\nfloat xDistortion;\r\nfloat yDistortion;\r\n\r\nvarying float vDistortion;\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n    vUv = uv;\r\n    vDistortion = snoise(vUv.xx * 3. - vec2(u_time / u_rand.x, u_time / u_rand.x) + cos(vUv.yy) * u_rand.y) * u_height;\r\n    xDistortion = snoise(vUv.xx * 1.) * u_height * u_rand.x / 10.;\r\n    vec3 pos = position;\r\n    pos.z += (vDistortion * 55.);\r\n    pos.x += (xDistortion * 55.);\r\n    pos.y += (sin(vUv.y) * 55.);\r\n    \r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\r\n}";
const NoiseShader = "#define NUM_OCTAVES 5\r\n\r\nvec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\r\nvec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\r\nvec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }\r\n\r\nfloat rand(float n){return fract(sin(n) * 43758.5453123);}\r\nfloat rand(vec2 n) { \r\n    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\r\n}\r\nfloat noise(float p){\r\n    float fl = floor(p);\r\n  float fc = fract(p);\r\n    return mix(rand(fl), rand(fl + 1.0), fc);\r\n}\r\nfloat noise(vec2 n) {\r\n    const vec2 d = vec2(0.0, 1.0);\r\n  vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));\r\n    return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);\r\n}\r\n\r\nfloat snoise(vec2 v) {\r\n    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\r\n                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\r\n                        -0.577350269189626,  // -1.0 + 2.0 * C.x\r\n                        0.024390243902439); // 1.0 / 41.0\r\n    vec2 i  = floor(v + dot(v, C.yy) );\r\n    vec2 x0 = v -   i + dot(i, C.xx);\r\n    vec2 i1;\r\n    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\r\n    vec4 x12 = x0.xyxy + C.xxzz;\r\n    x12.xy -= i1;\r\n    i = mod289(i); // Avoid truncation effects in permutation\r\n    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\r\n        + i.x + vec3(0.0, i1.x, 1.0 ));\r\n\r\n    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\r\n    m = m*m ;\r\n    m = m*m ;\r\n    vec3 x = 2.0 * fract(p * C.www) - 1.0;\r\n    vec3 h = abs(x) - 0.5;\r\n    vec3 ox = floor(x + 0.5);\r\n    vec3 a0 = x - ox;\r\n    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\r\n    vec3 g;\r\n    g.x  = a0.x  * x0.x  + h.x  * x0.y;\r\n    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\r\n    return 130.0 * dot(m, g);\r\n}\r\nconst mat2 m2 = mat2(0.8,-0.6,0.6,0.8);\r\n\r\n#define NB_OCTAVES 8\r\n#define LACUNARITY 10.0\r\n#define GAIN 0.5\r\n\r\nfloat fbm(in vec2 p) {\r\n    float total = 0.0,\r\n        frequency = 1.0,\r\n        amplitude = 1.0;\r\n    \r\n    for (int i = 0; i < NB_OCTAVES; i++) {\r\n        total += snoise(p * frequency) * amplitude;\r\n        frequency *= LACUNARITY;\r\n        amplitude *= GAIN;\r\n    }    \r\n    return total;\r\n}\r\n";
const tech = "/_app/immutable/assets/tech.5dc0cc44.png";
const MainCards_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".album-item.svelte-17grcf3{word-break:keep-all;background:black;box-shadow:0 2px 30px rgba(0, 0, 0, 0.5);position:relative;-webkit-user-drag:none;user-drag:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:10px;white-space:nowrap;overflow:hidden;display:inline-block;transition:all 0.2s ease-out;transform:scale(1);margin:auto;height:20rem;width:16rem}.album-item.svelte-17grcf3:hover{transform:scale(1.02)}.album-details.svelte-17grcf3{background:transparent;position:absolute;top:0;left:0;width:100%;text-shadow:0 2px 15px rgba(0, 0, 0, 0.5);padding:1rem;white-space:initial;float:left;box-sizing:border-box;color:white;height:100%;font-weight:600;z-index:99}.title.svelte-17grcf3{font-weight:900;display:inline-block;width:100%;font-size:1.5rem;line-height:2rem}@media(min-width: 640px){.title.svelte-17grcf3{font-size:1.875rem;line-height:2.25rem}}.subtitle.svelte-17grcf3{font-weight:100;font-size:1.25rem;line-height:1.75rem}@media(min-width: 640px){.subtitle.svelte-17grcf3{font-size:1.5rem;line-height:2rem}}.subtext.svelte-17grcf3{font-size:1.1167rem;position:absolute;bottom:0;left:0;padding:1.25rem 1rem;width:100%;white-space:initial;letter-spacing:0;box-sizing:border-box;font-weight:400;background:var(--bg, rgba(0, 0, 0, 0.75))}.icon.svelte-17grcf3{font-size:1rem;line-height:1rem;display:block;padding:0 0 0.5rem 0}.canvas.svelte-17grcf3{position:absolute;top:0;left:0}",
  map: null
};
const MainCards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvas;
  let card;
  let { href } = $$props;
  let { title = "Title" } = $$props;
  let { subtitle = "Subtitle" } = $$props;
  let { subtext = "Subtext" } = $$props;
  let { icon = "" } = $$props;
  let { icontext = "DevParapalli" } = $$props;
  let { color = 1 } = $$props;
  let { image = tech } = $$props;
  let _bg;
  const rgb = function(r, g, b) {
    return new THREE.Vector3(r, g, b);
  };
  const randomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const colors = [
    {
      low: rgb(0, 114, 255),
      high: rgb(48, 0, 255)
    },
    // Blue
    {
      low: rgb(236, 166, 15),
      high: rgb(233, 104, 0)
    },
    // Yellow
    {
      low: rgb(43, 75, 235),
      high: rgb(213, 51, 248)
    },
    // Purple
    {
      low: rgb(175, 49, 49),
      high: rgb(123, 16, 16)
    }
  ];
  const createWave = async function(ref, colors2) {
    const renderer = new THREE.WebGLRenderer({
      powerPreference: "high-performance",
      antialias: true,
      alpha: true,
      canvas
    });
    renderer.setSize(card.clientWidth, card.clientHeight, true);
    renderer.setPixelRatio(window.devicePixelRatio / 2);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, card.clientWidth / card.clientHeight, 0.1, 1e3);
    const _ = colors2[Math.floor(color % colors2.length)];
    let low = _.low;
    let high = _.high;
    _bg = `rgba(${high.x},${high.y},${high.z},0.75)`;
    let geometry = new THREE.PlaneGeometry(600, 600, 100, 100);
    let material = new THREE.ShaderMaterial({
      uniforms: {
        u_lowColor: { type: "v3", value: low },
        u_highColor: { type: "v3", value: high },
        u_time: { type: "f", value: 0 },
        u_height: { type: "f", value: 1 },
        u_rand: {
          type: "f",
          value: new THREE.Vector2(randomInteger(6, 10), randomInteger(8, 10))
        }
      },
      fragmentShader: NoiseShader + FragmentShader,
      vertexShader: NoiseShader + VertexShader
    });
    let mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, -300);
    mesh.material.needsUpdate = true;
    scene.add(mesh);
    let enterTimer, exitTimer;
    card.addEventListener("mouseenter", function(e) {
      if (typeof exitTimer !== "undefined") {
        clearTimeout(exitTimer);
      }
      enterTimer = setInterval(
        function() {
          if (mesh.material.uniforms.u_height.value >= 0.5) {
            mesh.material.uniforms.u_height.value -= 0.05;
          } else {
            clearTimeout(enterTimer);
          }
        },
        10
      );
    });
    card.addEventListener("mouseleave", function(e) {
      if (typeof enterTimer !== "undefined") {
        clearTimeout(enterTimer);
      }
      exitTimer = setInterval(
        function() {
          if (mesh.material.uniforms.u_height.value < 1) {
            mesh.material.uniforms.u_height.value += 0.05;
          } else {
            clearTimeout(exitTimer);
          }
        },
        10
      );
    });
    renderer.render(scene, camera);
    let t = 0;
    const animate = function() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      mesh.material.uniforms.u_time.value = t;
      t = t + 0.02;
    };
    animate();
  };
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.subtext === void 0 && $$bindings.subtext && subtext !== void 0)
    $$bindings.subtext(subtext);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.icontext === void 0 && $$bindings.icontext && icontext !== void 0)
    $$bindings.icontext(icontext);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.createWave === void 0 && $$bindings.createWave && createWave !== void 0)
    $$bindings.createWave(createWave);
  $$result.css.add(css$1);
  return `<a class="album-item svelte-17grcf3"${add_attribute("href", href, 0)}${add_attribute("this", card, 0)}><canvas class="canvas svelte-17grcf3" width="250" height="300"${add_attribute("this", canvas, 0)}></canvas>
	<span class="album-details svelte-17grcf3"><span class="icon inline-flex justify-center items-center justify-items-center svelte-17grcf3"><iconify-icon${add_attribute("icon", icon, 0)}></iconify-icon> ${escape(icontext)}</span>
		<span class="title svelte-17grcf3">${escape(title)}</span>
		<span class="${"subtitle " + escape(subtitle.length < 3 ? "text-transparent" : "", true) + " svelte-17grcf3"}">${escape(subtitle)}</span>
		<span class="subtext svelte-17grcf3"${add_styles({ "--bg": _bg })}>${escape(subtext)}</span>
		<img${add_attribute("src", image, 0)} class="absolute mx-auto left-0 right-0 h-auto w-36 pt-8" alt=""></span>
</a>`;
});
function randomInt(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}
const EventCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<button class="p-6 border border-white rounded-lg text-white hover:bg-white hover:text-black bg-blur-xl flex flex-col items-center justify-evenly gap-4 w-52 h-64 transition-all duration-300 hover:transform"${add_styles({ "--tw-rotate": `${randomInt(-3, 3)}deg` })}>${data.icon.includes("url::") ? `<img height="150" width="150"${add_attribute("src", data.icon.replace("url::", ""), 0)} alt="" class="min-h-[150px] object-contain">` : `<iconify-icon${add_attribute("icon", data.icon, 0)} class="text-[10rem]"></iconify-icon>`}
	<span class="text-xl lg:text-2xl nunu">${escape(data.name)}</span></button>`;
});
const ntech = "/_app/immutable/assets/nontech.7b867384.png";
const wksp = "/_app/immutable/assets/workshops.3de3a172.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#blob.svelte-i28lqe{border-radius:50% 50%;top:50%;left:50%}@keyframes svelte-i28lqe-spin{to{transform:rotate(360deg)}}#blob.animate-spin.svelte-i28lqe{animation:svelte-i28lqe-spin 20s linear infinite;translate:-50% -50%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modals, $$unsubscribe_modals;
  $$unsubscribe_modals = subscribe(modals, (value) => $modals = value);
  let { data } = $$props;
  let technical = data.events.filter((event) => event.category === "technical");
  let non_technical = data.events.filter((event) => event.category === "non-technical");
  let workshops = data.events.filter((event) => event.category === "workshops");
  let blob;
  afterNavigate(() => {
    if (data.view != "list" && $modals.length == 0) {
      openModal(EventInfoModal, {
        event: EVENTS.find((e) => e.id == data.view) || EVENTS[0]
      });
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_modals();
  return `${$$result.head += `<!-- HEAD_svelte-1e88iuc_START -->${$$result.title = `<title>Events | Adhyaaya&#39;24</title>`, ""}<!-- HEAD_svelte-1e88iuc_END -->`, ""}





<div id="bg" class="fixed h-screen w-screen -z-50 overflow-clip"><div id="blob" class="fixed opacity-80 h-[30vh] w-[40vh] bg-gradient-to-tr from-red-500 via-purple-500 to-blue-500 animate-spin duration-[20000ms] svelte-i28lqe"${add_attribute("this", blob, 0)}></div></div>
<div id="bg-filter" class="fixed h-screen w-screen -z-40 backdrop-blur-[100px]"></div>
<div class="events-container grid grid-cols-1 justify-items-stretch pt-28 min-h-[50vh] scroll-smooth">
	<div class="flex flex-col items-center justify-center"><h1 class="text-4xl font-bold text-center text-white myfont">Events</h1></div>
	<div class="section-header h-full min-h-[calc(100vh-7rem)] flex items-center justify-center flex-wrap transition-all duration-500 ease-in-out gap-4 md:gap-3 pt-16">${validate_component(MainCards, "MainCards").$$render(
    $$result,
    {
      color: 3,
      href: "#technical",
      icontext: "",
      title: "Technical",
      subtitle: "Events",
      subtext: "",
      image: tech
    },
    {},
    {}
  )}
		${validate_component(MainCards, "MainCards").$$render(
    $$result,
    {
      color: 2,
      href: "#non-technical",
      icontext: "",
      title: "Non-Tech",
      subtitle: "Events",
      subtext: "",
      image: ntech
    },
    {},
    {}
  )}
		${validate_component(MainCards, "MainCards").$$render(
    $$result,
    {
      color: 0,
      href: "#workshops",
      icontext: "",
      title: "Workshops",
      subtitle: ".",
      subtext: "",
      image: wksp
    },
    {},
    {}
  )}</div>

	<div class="flex flex-col items-center justify-center pt-16"><h1 class="text-4xl font-bold text-center text-white ">Technical Events</h1></div>
	<div id="technical" class="h-full min-h-[50vh] flex items-center justify-center flex-wrap transition-all duration-500 ease-in-out gap-4 md:gap-10 pt-16">${each(technical, (t) => {
    return `${validate_component(EventCard, "EventCard").$$render($$result, { data: t }, {}, {})}`;
  })}</div>
	<div class="flex flex-col items-center justify-center pt-16"><h1 class="text-4xl font-bold text-center text-white ">Non-Tech Events</h1></div>
	<div id="non-technical" class="h-full min-h-[50vh] flex items-center justify-center flex-wrap transition-all duration-500 ease-in-out gap-4 md:gap-10 pt-16">${each(non_technical, (nt) => {
    return `${validate_component(EventCard, "EventCard").$$render($$result, { data: nt }, {}, {})}`;
  })}</div>
	<div class="flex flex-col items-center justify-center pt-16"><h1 class="text-4xl font-bold text-center text-white ">Workshops</h1></div>
	<div id="workshops" class="h-full min-h-[50vh] flex items-center justify-center flex-wrap transition-all duration-500 ease-in-out gap-4 md:gap-10 pt-16 pb-24">${each(workshops, (w) => {
    return `${validate_component(EventCard, "EventCard").$$render($$result, { data: w }, {}, {})}`;
  })}</div></div>

`;
});
export {
  Page as default
};
