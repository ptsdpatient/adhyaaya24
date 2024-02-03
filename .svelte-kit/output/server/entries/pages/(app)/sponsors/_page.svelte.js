import { c as create_ssr_component, k as add_styles, d as each, f as add_attribute, e as escape } from "../../../../chunks/index2.js";
import "@formkit/auto-animate";
const background = "/_app/immutable/assets/bg.ca369b45.jpg";
const orangebits = "/_app/immutable/assets/orangebits.3d0be576.webp";
const pythonacademy = "/_app/immutable/assets/pythonacademy.50dc955c.webp";
const unisoft = "data:image/webp;base64,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";
const paarangat = "/_app/immutable/assets/parangat.cb94d09b.webp";
const frostandfeather = "/_app/immutable/assets/frostandfeather.01a5954b.webp";
const foodisland = "/_app/immutable/assets/foodisland.650031b5.webp";
const siuk = "/_app/immutable/assets/siuk.192f1692.webp";
const niobm = "/_app/immutable/assets/niobm.64c078b1.png";
const oraipl = "/_app/immutable/assets/oraipl.6ff2ff87.jpg";
const hackerearth = "/_app/immutable/assets/hackerearth.fc96efcf.jpg";
const ie = "/_app/immutable/assets/ie.1b385ba3.png";
const droiddevs = "/_app/immutable/assets/droiddevs.655f7411.jpg";
const ets = "/_app/immutable/assets/everythingsweet.eff53ed1.png";
const stock = "/_app/immutable/assets/stock.608de2c3.png";
const SPONSORS = [
  {
    name: "Sponsor Name",
    image: "https://via.placeholder.com/600x400",
    link: "https://www.google.com",
    title: "Title Sponsor",
    category: "TITLE"
    /* TITLE */
  },
  {
    name: "Orange Bits",
    image: orangebits,
    link: "https://orangebitsindia.com/",
    title: "Tech. Sponsor",
    category: "GOLD"
    /* GOLD */
  },
  {
    name: "Python Academy",
    image: pythonacademy,
    link: "https://www.pythonacademy.in/",
    title: "Tech. Sponsor",
    category: "GOLD"
    /* GOLD */
  },
  {
    name: "Unisoft Technologies",
    image: unisoft,
    link: "http://www.unisoftindia.org/",
    title: "Tech. Sponsor",
    category: "GOLD"
    /* GOLD */
  },
  {
    name: "Paarangat Edu.",
    image: paarangat,
    link: "https://paarangatedu.com/",
    title: "Tech. Sponsor",
    category: "GOLD"
    /* GOLD */
  },
  {
    name: "Frost & Feather",
    image: frostandfeather,
    link: "https://www.instagram.com/frostandfeatherngp/",
    title: "F&B Sponsor",
    category: "GOLD"
    /* GOLD */
  },
  {
    name: "Food Island",
    image: foodisland,
    link: "https://www.instagram.com/foodislandnagpur/",
    title: "F&B Sponsor",
    category: "GOLD"
    /* GOLD */
  },
  {
    name: "SIUK",
    image: siuk,
    link: "https://www.studyin-uk.in/",
    title: "Education Sponsor",
    category: "GOLD"
    /* GOLD */
  },
  {
    name: "Niobm",
    image: niobm,
    link: "https://www.instagram.com/niobmesports/",
    title: "Gaming Sponsor",
    category: "GOLD"
    /* GOLD */
  },
  {
    name: "ORAIPL",
    image: oraipl,
    link: "https://www.oraipl.com/",
    title: "Tech. Sponsor",
    category: "GOLD"
    /* GOLD */
  },
  {
    name: "Droid Devs",
    image: droiddevs,
    link: "https://www.instagram.com/droid_devs/",
    title: "Tech. Sponsor",
    category: "GOLD"
    /* GOLD */
  },
  {
    name: "HackerEarth",
    image: hackerearth,
    link: "https://www.hackerearth.com/",
    title: "Tech. Sponsor",
    category: "GOLD"
    /* GOLD */
  },
  {
    name: "Institution of Engineers",
    image: ie,
    link: "https://www.ieindia.org/",
    title: "Tech. Sponsor",
    category: "GOLD"
    /* GOLD */
  },
  {
    name: "Every Thing Sweet",
    image: ets,
    link: "https://www.instagram.com/ets_everythingsweet/",
    title: "Food Sponsor",
    category: "GOLD"
    /* GOLD */
  },
  // {
  // 	name: 'CAAD Center',
  // 	image: caad,
  // 	link: 'https://caddcentre.com/',
  // 	title: 'Education Sponsor',
  // 	category: SponsorCategory.GOLD
  // },
  {
    name: "Stock OG",
    image: stock,
    link: "https://www.instagram.com/_stockog/",
    title: "Education Sponsor",
    category: "GOLD"
    /* GOLD */
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".bg.svelte-1hzhsse{background:var(--bg) no-repeat center fixed;background-size:cover}",
  map: null
};
function shuffle(array) {
  array = array.slice();
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  SPONSORS.find((sponsor) => sponsor.category === "TITLE");
  const SPONSORS_LIST = shuffle(SPONSORS.filter((sponsor) => sponsor.category != "TITLE"));
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-btyf80_START -->${$$result.title = `<title>Our Sponsors | Adhyaaya&#39;24</title>`, ""}<!-- HEAD_svelte-btyf80_END -->`, ""}

<div class="-z-50 fixed h-screen w-screen scale-105 overflow-clip bg svelte-1hzhsse"${add_styles({ "--bg": `url('${background}')` })}></div>

<div class="flex items-center flex-col pt-28 px-4"><div class="text-4xl font-bold text-center">Sponsors</div>

	
	<div class="mt-12 flex flex-row flex-wrap items-center gap-10 px-4">${each(SPONSORS_LIST, (sponsor) => {
    return `<a${add_attribute("href", sponsor.link, 0)} class="max-w-sm mx-auto mt-8 text-center"><img height="200" width="200"${add_attribute("src", sponsor.image, 0)}${add_attribute("alt", sponsor.title, 0)} class="bg-white rounded-md mx-auto">
				<div class="mt-2 text-lg font-bold nunu">${escape(sponsor.name)}</div>
				<div class="mt-2 text-md font-semibold">${escape(sponsor.title)}</div>
			</a>`;
  })}</div>
</div>`;
});
export {
  Page as default
};
