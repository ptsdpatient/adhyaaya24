import { c as create_ssr_component, f as add_attribute, e as escape, d as each, h as null_to_empty, v as validate_component } from "../../../../../../chunks/index2.js";
import { a as adhyaaya_solid_logo } from "../../../../../../chunks/solid-resize.js";
import "../../../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { E as EVENTS } from "../../../../../../chunks/events.js";
import "iconify-icon";
const CurvedRotatingText_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@keyframes svelte-qmgw91-rotation{0%{transform:rotate(0turn)}100%{transform:rotate(1turn)}}.controls.svelte-qmgw91 span.svelte-qmgw91{display:block;margin-bottom:0.5em}.seal.svelte-qmgw91.svelte-qmgw91{position:relative;width:var(--size);height:var(--size);border-radius:100%;animation:svelte-qmgw91-rotation var(--speed) linear infinite;font-size:var(--font)}.char.svelte-qmgw91.svelte-qmgw91{width:1em;height:100%;position:absolute;top:0;left:50%;transform:translateX(-50%) rotate(var(--angle, 0deg));text-align:center;text-transform:uppercase}",
  map: null
};
const CurvedRotatingText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { speed = 50 } = $$props;
  let { size = 130 } = $$props;
  let { font = 0.7 } = $$props;
  let { text = "Hello World" } = $$props;
  let { repeat = 3 } = $$props;
  let { separator = " • " } = $$props;
  let { classes = "" } = $$props;
  let array = [];
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0)
    $$bindings.speed(speed);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.font === void 0 && $$bindings.font && font !== void 0)
    $$bindings.font(font);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.repeat === void 0 && $$bindings.repeat && repeat !== void 0)
    $$bindings.repeat(repeat);
  if ($$props.separator === void 0 && $$bindings.separator && separator !== void 0)
    $$bindings.separator(separator);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  $$result.css.add(css$1);
  array = [...Array(repeat)].map((_) => [...text].concat([...separator])).flat();
  return `<div class="controls hidden nunu svelte-qmgw91"><p><span class="svelte-qmgw91">Text</span><input type="text"${add_attribute("value", text, 0)}></p>
	<p><span class="svelte-qmgw91">Separator</span><input type="text"${add_attribute("value", separator, 0)}></p>
	<p><span class="svelte-qmgw91">Repeat</span><input type="number" min="1"${add_attribute("value", repeat, 0)}></p>
	<p><span class="svelte-qmgw91">Circle size</span><input type="number" min="100" step="10"${add_attribute("value", size, 0)}></p>
	<p><span class="svelte-qmgw91">Font size</span><input type="number" min="0.1" step="0.1"${add_attribute("value", font, 0)}></p>
	<p><span class="svelte-qmgw91">Animation duration</span><input type="number" min="10" step="10"${add_attribute("value", speed, 0)}></p></div>

<div class="${"seal " + escape(classes, true) + " svelte-qmgw91"}" style="${"--size: " + escape(size, true) + "px; --speed: " + escape(speed * 1e3, true) + "ms; --font: " + escape(font, true) + "em"}">${each(array, (char, index) => {
    return `<div class="char svelte-qmgw91" style="${"--angle: " + escape(`${1 / array.length * index}turn`, true)}">${escape(char)}</div>`;
  })}
</div>`;
});
const MouseTrailer_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "li.svelte-1dx5q75.svelte-1dx5q75{font-family:'Nunito', sans-serif}li.svelte-1dx5q75>.svelte-1dx5q75{font-family:'Nunito', sans-serif}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let EVENT = EVENTS.find((e) => e.id == data.db.event_id);
  let PNG = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1oceo8a_START -->${$$result.title = `<title>Receipt for ${escape(EVENT?.name)} | Adhyaaya&#39;24</title>`, ""}<!-- HEAD_svelte-1oceo8a_END -->`, ""}

<div class="md:h-screen w-screen md:w-screen no-scroll-bar"><div class="reciept-container flex flex-col md:flex-row w-full h-full "><div class="left-half bg-black mx-auto py-0 md:py-10 md:px-0 md:pl-10 w-full md:w-3/5 "><div class="bg-white flex flex-col md:h-full overflow-y-scroll no-scroll-bar"><div class="logo mx-auto h-40 w-40 mb-8 pt-4"><img${add_attribute("src", adhyaaya_solid_logo, 0)} class="h-28" height="112" width="202" alt=""></div>
				<div class="qr"><img class="qr-code-container h-36 w-36 md:h-48 md:w-48 rounded-none p-2 mx-auto"${add_attribute("src", PNG, 0)} alt="qr-code"></div>

				<div class="reciept-number mx-auto pt-4 hidden md:block"><span class="font-bold text-gray-500 truncate text-ellipsis overflow-hidden line-clamp-1 font-mono uppercase">${escape(data.db.id)}</span></div>
				<div class="billing-info flex flex-col items-stretch pt-4 pb-10 "><div class="flex flex-row items-center pt-4 pb-4 mx-auto border-b border-black w-11/12 justify-center"><div class="event-logo h-10 w-10 mr-2 text-4xl inline-flex items-center justify-center text-black">${EVENT?.icon.includes("url::") ? `<img class="h-9 w-9"${add_attribute("src", EVENT.icon.replace("url::", ""), 0)} alt="">` : `<iconify-icon class="text-4xl"${add_attribute("icon", EVENT?.icon, 0)}></iconify-icon>`}</div>
						<div class="event-data text-lg text-gray-700">${escape(EVENT?.name)} | ${escape(EVENT?.mode.toLocaleUpperCase())}
							<br>
							${escape(EVENT?.start_date.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }))}</div></div>

					<div class="grid grid-cols-2 md:gap-x-8 even:text-left odd:text-center mx-auto pt-10"><span class="text-lg font-bold text-black">Name:</span>
						<span class="text-lg text-gray-700">${escape(data.db.name)}</span>

						<span class="text-lg font-bold text-black hidden md:block">Email:</span>
						<span class="text-lg text-gray-700 hidden md:block">${escape(data.db.email)}</span>

						<span class="text-lg font-bold text-black">Phone:</span>
						<span class="text-lg text-gray-700">${escape(data.db.phone)}</span>

						${data.db.team.length > 0 ? `<span class="text-lg font-bold text-black">Team:</span>
							<span class="text-lg text-gray-700">${escape(data.db.team.map((m) => m.name).join(", "))}</span>` : ``}

						<span class="text-lg font-bold text-black">Cost:</span>
						<span class="text-lg text-gray-700">₹${escape(data.db.amount / 100)}</span></div></div></div></div>
		<div class="right-half bg-white mx-auto py-0 md:py-10 md:px-0 md:pr-10 w-full md:w-2/5"><div class="bg-black md:h-full px-8 md:pl-6 py-8 overflow-y-scroll no-scroll-bar"><span class="instructions-header text-2xl text-white mb-2 nunu">Instructions</span>
				<ul class="space-y-1 max-w-md list-disc list-inside text-gray-400"><li class="${escape(null_to_empty(EVENT?.whatsapp_link ? "" : "hidden"), true) + " svelte-1dx5q75"}">Join the <a${add_attribute("href", EVENT?.whatsapp_link, 0)} class="text-white underline svelte-1dx5q75">WhatsApp group</a>
						for updates. (${escape(EVENT?.whatsapp_link)})
					</li>
					${EVENT?.mode == "online" ? `<li class="svelte-1dx5q75">Adhyaaya <span class="text-bold uppercase text-white underline svelte-1dx5q75">will not</span> be help
							responsible for any network lag, connectivity issues during the event, participants are
							expected to have a stable internet connection.
						</li>` : ``}
					${EVENT?.mode == "offline" ? `<li class="svelte-1dx5q75">Adhyaaya <span class="text-bold uppercase text-white underline svelte-1dx5q75">DOES NOT</span> provide
							any accommodation or transport. You will have to arrange your own.
						</li>
						<li class="svelte-1dx5q75">It is <span class="text-bold uppercase text-white underline svelte-1dx5q75">MANDATORY</span> to carry
							an identification proof and a vaccination certificate for attending offline events.
						</li>` : ``}
					${EVENT?.custom_instructions ? `${each(EVENT.custom_instructions, (ci) => {
    return `<li class="svelte-1dx5q75">${escape(ci)}
							</li>`;
  })}` : ``}
					<li class="svelte-1dx5q75">Adhyaaya reserves the right to all submissions, photos and videos taken during the
						event. You may use them for personal purposes.
					</li>
					<li class="svelte-1dx5q75">Please ensure you are a part of the Event&#39;s WhatsApp Group. All information will be
						communicated to you using it.
					</li>
					<li class="print:hidden svelte-1dx5q75">Keep this page bookmarked for future reference.</li></ul></div></div></div></div>

<button class="print:hidden fixed right-10 bottom-10 md:right-20 md:bottom-20 w-14 h-14 md:w-20 md:h-20 rounded-full bg-blue-600 text-white inline-flex items-center justify-center text-4xl md:text-6xl opacity-90 hover:opacity-100 active:opacity-80 hover:scale-105 active:scale-95 transition-all duration-200 peer"><iconify-icon icon="mdi:printer"></iconify-icon></button>
<div class="print:hidden fixed right-10 bottom-10 md:right-20 md:bottom-20 w-14 h-14 md:w-20 md:h-20 opacity-0 peer-hover:opacity-100 peer-active:opacity-100 peer-focus:opacity-100 transition-opacity duration-150 rounded-full inline-flex items-center justify-center invisible peer-hover:visible peer-active:visible pointer-events-none">${validate_component(CurvedRotatingText, "CurvedRotatingText").$$render($$result, { text: `Print` }, {}, {})}
</div>`;
});
export {
  Page as default
};
