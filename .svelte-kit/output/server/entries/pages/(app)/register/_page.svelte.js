import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../../../chunks/index2.js";
import "devalue";
import { a as afterNavigate } from "../../../../chunks/navigation.js";
import "@formkit/auto-animate";
import "iconify-icon";
import "../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { o as openModal } from "../../../../chunks/store.js";
import { E as EVENTS } from "../../../../chunks/events.js";
const bg = "/_app/immutable/assets/register-3.146a5dcb.jpg";
const EventChangeModal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".display-modal.svelte-ms57m8{position:fixed;top:0;bottom:0;right:0;left:0;display:flex;justify-content:center;align-items:center;pointer-events:none;z-index:200}.card-container.svelte-ms57m8{pointer-events:auto}",
  map: null
};
const EventChangeModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  $$result.css.add(css$1);
  return `${isOpen ? `<div class="display-modal svelte-ms57m8"><div class="card-container svelte-ms57m8"><div class="card w-96 bg-base-200 shadow-xl border border-white"><div class="card-body"><div class="self-end nunu"><button class="rounded-full bg-base-300 text-4xl w-[2.25rem] h-[2.25rem]"><iconify-icon icon="eva:close-fill"></iconify-icon></button></div>
					<h2 class="card-title hidden">Card title!</h2>
					<p>Please select the event you would like to register for.</p>
					<div class="card-actions justify-center"><select class="select select-bordered w-full max-w-xs"><option class="invisible hidden" disabled selected value="Select Here">Select Here</option>${each(EVENTS.filter((e) => e.is_active), (event) => {
    return `<option class="font-mono"${add_attribute("value", event.id, 0)}>${escape(event.name)}</option>`;
  })}</select></div></div></div></div></div>` : ``}`;
});
const EventCustomPropModal_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".bg.svelte-rboqf9{background:linear-gradient(0deg, rgba(0, 0, 0, var(--opacity)), rgba(0, 0, 0, var(--opacity)))\r\n				center fixed no-repeat,\r\n			var(--bg) center fixed no-repeat;background-size:cover}ol.svelte-rboqf9{margin-left:auto;margin-right:auto}.svelte-rboqf9{font-family:'Nunito', sans-serif}.header.svelte-rboqf9{font-family:'My Font'}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let teamMemberSelected = -1;
  function setDefaultTeamMember() {
    if (data.event.team_members.length === 1) {
      teamMemberSelected = data.event.team_members[0] - 1;
      const radio = document.querySelector(`#additional-${teamMemberSelected}`);
      if (radio) {
        radio.checked = true;
      }
    } else {
      teamMemberSelected = -1;
      const radioList = document.querySelectorAll("[id^='additional-']");
      radioList.forEach((radio) => {
        radio.checked = false;
      });
    }
    if (data.members) {
      const sel = Number(data.members) - 1;
      const radio = document.querySelector(`#additional-${sel}`);
      teamMemberSelected = sel;
      if (radio) {
        radio.checked = true;
      }
    }
  }
  afterNavigate(() => {
    if (data.select)
      openModal(EventChangeModal);
    setDefaultTeamMember();
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1dcl70p_START --><script src="/rzp/checkout.js" class="svelte-rboqf9"><\/script><script src="https://checkout.razorpay.com/v1/checkout.js" class="svelte-rboqf9"><\/script>${$$result.title = `<title>Registration Form | Adhyaaya&#39;24</title>`, ""}<!-- HEAD_svelte-1dcl70p_END -->`, ""}

<div class="bg w-full pt-20 object-contain pb-10 min-h-screen svelte-rboqf9" style="${"--bg:url(" + escape(bg, true) + ");--opacity: 0.4"}"><div class="header mx-auto text-4xl text-center mb-8 text-white font-bold uppercase font-mono svelte-rboqf9">Registration Form
	</div>
	${form?.errors ? `<div class="mx-auto w-full flex flex-col svelte-rboqf9">
			<span class="mx-auto svelte-rboqf9">Please correct the following errors:</span>
			<ol class="mx-auto svelte-rboqf9">${each(form.errors, (error) => {
    return `<li class="svelte-rboqf9">${escape(error)}</li>`;
  })}</ol></div>` : ``}
	


	${data.event.is_open ?? true ? `<form class="registration-form container max-w-3xl mx-auto px-10 py-10 bg-black/50 rounded-lg svelte-rboqf9" method="POST"><div class="details-container w-full flex flex-col md:flex-row pb-4 mb-2 border-b-2 border-b-white/30 svelte-rboqf9"><div class="event-details grid grid-cols-2 svelte-rboqf9"><span class="svelte-rboqf9">Event Name:</span>
			<span class="svelte-rboqf9">${escape(data.event.name)}</span>
			<span class="svelte-rboqf9">Event Date:</span>
			<span class="svelte-rboqf9">${escape(data.event.start_date.toLocaleDateString("en-IN"))}</span>
			<span class="svelte-rboqf9">Event Fees:</span>
			
			<span class="svelte-rboqf9">${each(data.event.amount.map((e, i) => `₹${e / 100} - ${data.event.team_members[i]} ${data.event.team_members[i] > 1 ? "ppl." : "pers."}`), (fee) => {
    return `
					${escape(fee)}
					<br class="svelte-rboqf9">
				`;
  })}</span>
			<button type="button" class="text-left col-span-2 hover:text-white uppercase font-mono underline px-2 svelte-rboqf9">Change Event</button></div>
		<div class="ml-auto svelte-rboqf9"><div class="text-8xl flex items-center justify-center h-full w-full svelte-rboqf9">${data.event.icon.includes("url::") ? `<img class="h-9 w-9 svelte-rboqf9"${add_attribute("src", data.event.icon.replace("url::", ""), 0)} alt="">` : `<iconify-icon class="text-8xl svelte-rboqf9"${add_attribute("icon", data.event.icon, 0)}></iconify-icon>`}</div></div></div>
	<input type="hidden" name="event_id"${add_attribute("value", data.event.id, 0)} class="svelte-rboqf9">
	<div class="grid md:grid-cols-2 md:gap-6 svelte-rboqf9"><div class="relative z-0 mb-6 w-full group svelte-rboqf9"><input type="text" name="first_name" id="first_name" class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer svelte-rboqf9" placeholder=" " required${add_attribute("value", form?.data?.first_name ?? "", 0)}>
			<label for="first_name" class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 svelte-rboqf9">First name</label></div>
		<div class="relative z-0 mb-6 w-full group svelte-rboqf9"><input type="text" name="last_name" id="last_name" class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer svelte-rboqf9" placeholder=" " required${add_attribute("value", form?.data?.last_name ?? "", 0)}>
			<label for="last_name" class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 svelte-rboqf9">Last name</label></div></div>
	<div class="grid md:grid-cols-2 md:gap-6 svelte-rboqf9"><div class="relative z-0 mb-6 w-full group svelte-rboqf9"><input type="tel" minlength="10" maxlength="10" name="phone" id="phone" class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer svelte-rboqf9" placeholder=" " required${add_attribute("value", form?.data?.phone ?? "", 0)}>
			<label for="phone" class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 svelte-rboqf9">Phone number (10-digits)</label></div>
		<div class="relative z-0 mb-6 w-full group svelte-rboqf9"><input type="email" name="email" id="email" class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer svelte-rboqf9" placeholder=" " required${add_attribute("value", form?.data?.email ?? "", 0)}>
			<label for="email" class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 svelte-rboqf9">Email address</label></div></div>
	<div class="grid md:grid-cols-3 md:gap-4 svelte-rboqf9"><div class="relative z-0 mb-6 w-full group svelte-rboqf9"><input type="text" name="institute" id="institute" class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer svelte-rboqf9" placeholder=" " required${add_attribute("value", form?.data?.institute ?? "", 0)}>
			<label for="institute" class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 svelte-rboqf9">College/School</label></div>
		<div class="relative z-0 mb-6 w-full group svelte-rboqf9"><input type="text" name="year_grade" id="year_grade" class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer svelte-rboqf9" placeholder=" " required${add_attribute("value", form?.data?.year_grade ?? "", 0)}>
			<label for="year_grade" class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 svelte-rboqf9">Year/Grade</label></div>
		<div class="relative z-0 mb-6 w-full group svelte-rboqf9"><input type="text" name="branch_specialization" id="branch_specialization" class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer svelte-rboqf9" placeholder=" "${add_attribute("value", form?.data?.branch_specialization ?? "", 0)}>
			<label for="branch_specialization" class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 svelte-rboqf9">Branch</label></div></div>

	${data.event.team_members.length > 1 || !data.event.team_members.includes(1) ? `<h3 class="mb-6 text-base font-medium text-gray-200 svelte-rboqf9">How many additional members are in your team? (ie. excluding you)
		</h3>

		<ul class="flex flex-row justify-between gap-6 w-full mb-6 flex-wrap svelte-rboqf9">${each(data.event.team_members, (item) => {
    return `${data.event.team_members.includes(item) ? `<li class="w-full max-w-[5rem] svelte-rboqf9"><input type="radio" id="${"additional-" + escape(item - 1, true)}" name="members" value="${"additional-" + escape(item - 1, true)}" class="hidden peer svelte-rboqf9" required>
						<label for="${"additional-" + escape(item - 1, true)}" class="inline-flex justify-center items-center p-2 w-full rounded-lg border cursor-pointer hover:text-gray-300 border-gray-700 peer-checked:border-blue-600 peer-checked:text-blue-600 text-gray-200 bg-gray-800 hover:bg-gray-700 svelte-rboqf9"><div class="block svelte-rboqf9"><div class="w-full text-sm font-bold svelte-rboqf9">${escape(item - 1)}</div>
							</div></label>
					</li>` : ``}`;
  })}</ul>` : ``}

	${teamMemberSelected > 0 ? `<h4 class="mb-2 text-base font-medium text-white  svelte-rboqf9">Please enter their details below.
		</h4>
		${each(Array.from(Array(teamMemberSelected).keys(), (_, index) => index + 1), (item) => {
    return `<div class="grid md:grid-cols-3 md:gap-4 svelte-rboqf9"><div class="relative z-0 mb-6 w-full group svelte-rboqf9"><input type="text" name="${"member-" + escape(item, true) + "-name"}" id="${"member-" + escape(item, true) + "-name"}" class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer svelte-rboqf9" placeholder=" " required${add_attribute("value", form?.data?.[`member-${item}-name`] ?? "", 0)}>
					<label for="${"member-" + escape(item, true) + "-name"}" class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 svelte-rboqf9">Member ${escape(item)} Name</label></div>
				<div class="relative z-0 mb-6 w-full group svelte-rboqf9"><input type="email" name="${"member-" + escape(item, true) + "-email"}" id="${"member-" + escape(item, true) + "-email"}" class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer svelte-rboqf9" placeholder=" " required${add_attribute("value", form?.data?.[`member-${item}-email`] ?? "", 0)}>
					<label for="${"member-" + escape(item, true) + "-email"}" class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 svelte-rboqf9">Member ${escape(item)} Email</label></div>
				<div class="relative z-0 mb-6 w-full group svelte-rboqf9"><input type="tel" minlength="10" maxlength="10" name="${"member-" + escape(item, true) + "-phone"}" id="${"member-" + escape(item, true) + "-phone"}" class="nunu block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer svelte-rboqf9" placeholder=" " required${add_attribute("value", form?.data?.[`member-${item}-phone`] ?? "", 0)}>
					<label for="${"member-" + escape(item, true) + "-phone"}" class="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 svelte-rboqf9">Member ${escape(item)} Phone</label></div>
			</div>`;
  })}` : ``}
	${teamMemberSelected > -1 ? `<button type="submit" ${""} class="${"text-white focus:ring-4 focus:outline-none font-medium rounded-lg uppercase w-full px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 " + escape(
    "",
    true
  ) + "} svelte-rboqf9"}">Register (₹${escape(data.event.amount[data.event.team_members.find((e) => {
  }) ?? 0] / 100)})</button>` : `<button disabled class="svelte-rboqf9">Please select a choice above</button>`}
	<hr class="border border-white/60 mt-4 svelte-rboqf9">
	<div class="mx-auto text-sm px-10 svelte-rboqf9"><br class="svelte-rboqf9">By registering you agree to receive transactional (receipts etc.) emails from Adhyaaya.
		Please see our <a class="underline text-white svelte-rboqf9" href="/legal/privacy_policy">Privacy Policy</a>
		for info on how your data is handled and
		<a class="underline text-white svelte-rboqf9" href="/legal/terms_and_conditions">Terms and Conditions</a> for
		more info.
	</div></form>` : `<div class="bg-red-500/40 p-6 rounded-lg text-white text-justify mx-auto max-w-lg svelte-rboqf9"><h3 class="text-xl font-bold mb-4 svelte-rboqf9">Registration Closed</h3>
		<p class="mb-4 nunu svelte-rboqf9">The registrations for this event are currently closed. Please contact the event coordinators or use the details below
		</p>
		<p class="mx-auto text-center mb-4 svelte-rboqf9"><button class="btn btn-outline mx-auto svelte-rboqf9">Click here to register for another event</button></p>
		<div class="flex items-center justify-center svelte-rboqf9"><div class="bg-red-500/30 p-4 rounded-full mr-4 svelte-rboqf9"><iconify-icon icon="uil:user" class="text-4xl svelte-rboqf9"></iconify-icon></div>
			<div class="text-left svelte-rboqf9"><h4 class="font-bold nunu svelte-rboqf9">Swarali Prayagi</h4>
				<p class="nunu svelte-rboqf9">CSE Coordinator</p>
				<p class="svelte-rboqf9"><a href="tel:8446563859" class="nunu svelte-rboqf9">8446563859</a></p>
				<p class="svelte-rboqf9"><a href="mailto:ssprayagi@gcoen.ac.in" class="nunu svelte-rboqf9">ssprayagi@gcoen.ac.in</a></p></div></div></div>`}

</div>`;
});
export {
  Page as default
};
