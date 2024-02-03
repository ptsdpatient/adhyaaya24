import { e as error, r as redirect } from "../../../../../../chunks/index.js";
const prerender = false;
const load = async ({ params, fetch }) => {
  let { data } = await supabase.from("registrations").select("*").eq("id", params.rid).single();
  if (!data)
    throw error(404, "Registration ID not found");
  if (data["rzp_status"] === "PAID")
    throw redirect(307, "/pg/" + params.rid + "/success");
  const _req = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa("PUBLIC_RZP_KEY:RZP_SECRET")
    },
    credentials: "include",
    body: JSON.stringify({
      amount: data.amount,
      currency: "INR"
    })
  });
  const _data = await _req.json();
  ({ data } = await supabase.from("registrations").update({ rzp_oid: _data.id }).eq("id", data.id).select().single());
  if (data && _data)
    return { db: data, pg: _data };
  else
    throw error(404, "Error while creating order");
};
export {
  load,
  prerender
};
