import { c as create_ssr_component } from "../../../../../../chunks/index2.js";
import { g as goto } from "../../../../../../chunks/navigation.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  ({
    key: "PUBLIC_RZP_KEY",
    // Enter the Key ID generated from the Dashboard
    amount: data.db.amount,
    // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Adhyaaya'23 | GCOEN",
    description: `Payment by ${data.db.name} for ${data.db.event_id}, of amount ${data.db.amount / 100}`,
    image: "https://adhyaaya.org/favicon.png",
    order_id: data.pg.id,
    //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    // "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    prefill: {
      name: data.db.name,
      email: data.db.email,
      contact: data.db.phone
    },
    notes: {
      address: "Government College of Engineering, Nagpur - 440010"
    },
    theme: { color: "#3399cc" },
    handler(e) {
      goto(`/pg/check_status?rzp_pid=${e.razorpay_payment_id}&rzp_oid=${data.pg.id}&rzp_sig=${e.razorpay_signature}`);
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `


${$$result.head += `<!-- HEAD_svelte-1hhtlpe_START --><script src="/rzp/checkout.js"><\/script><script src="https://checkout.razorpay.com/v1/checkout.js"><\/script>${$$result.title = `<title>Payment Gateway | Adhyaaya&#39;24</title>`, ""}<!-- HEAD_svelte-1hhtlpe_END -->`, ""}

<div class="h-full-w-full flex items-center justify-center"><div class="flex flex-col items-center justify-center"><div class="text-2xl font-bold">Redirecting to payment gateway...</div>
		<div class="text-xl font-bold">Please do not close this tab.</div>
		<div class="text-2xl font-bold">Incase it does not redirect, please <a href="" class="uppercase font-bold">click here</a></div></div></div>`;
});
export {
  Page as default
};
