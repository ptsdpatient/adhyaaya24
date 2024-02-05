import { c as create_ssr_component, s as subscribe, f as add_attribute, v as validate_component, d as each } from "../../../../chunks/index2.js";
import { o as openModal, m as modals } from "../../../../chunks/store.js";
import { E as EventInfoModal, t as tech, n as ntech, w as wksp, M as MainCards, a as EventCard } from "../../../../chunks/workshops.js";
import { E as EVENTS } from "../../../../chunks/events.js";
import { a as afterNavigate } from "../../../../chunks/navigation.js";
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
<div class="bg-black/70 backdrop-blur-sm events-container grid grid-cols-1 justify-items-stretch pt-28 min-h-[50vh] scroll-smooth">
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
