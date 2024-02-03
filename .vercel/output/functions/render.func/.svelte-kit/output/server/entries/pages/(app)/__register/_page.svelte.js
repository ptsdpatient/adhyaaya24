import { c as create_ssr_component, e as escape } from "../../../../chunks/index2.js";
import "iconify-icon";
const bg = "/_app/immutable/assets/register-1.10d49068.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".bg.svelte-1xzi8ty{background:linear-gradient(0deg, rgba(0, 0, 0, var(--opacity)), rgba(0, 0, 0, var(--opacity)))\r\n				center fixed no-repeat,\r\n			var(--bg) center fixed no-repeat}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="bg w-full pt-20 object-cover pb-10 min-h-screen svelte-1xzi8ty" style="${"--bg:url(" + escape(bg, true) + ");--opacity:0.75"}"><div class="header mx-auto text-4xl text-center mb-8 text-white font-bold uppercase myfont">Registration Form
	</div>
	<div class="bg-red-500/40 p-6 rounded-lg text-white text-justify mx-auto max-w-lg"><h3 class="text-xl font-bold mb-4">Payment Processor Issues</h3>
		<p class="mb-4 nunu">We&#39;re currently facing issues with our payment processor, and so have disabled registrations.
			Please stay tuned for updates. In the meantime, if you need assistance, please contact:
		</p>
		<div class="flex items-center justify-center"><div class="bg-red-500/30 p-4 rounded-full mr-4"><iconify-icon icon="uil:user" class="text-4xl"></iconify-icon></div>
			<div class="text-left"><h4 class="font-bold nunu">John Doe</h4>
				<p class="nunu">Support Manager</p>
				<p><a href="tel:555-555-5555" class="nunu">555-555-5555</a></p>
				<p><a href="mailto:john.doe@example.com" class="nunu">john.doe@example.com</a></p></div></div></div>
</div>`;
});
export {
  Page as default
};
