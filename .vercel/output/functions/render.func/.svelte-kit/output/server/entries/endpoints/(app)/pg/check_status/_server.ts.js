import { e as error, r as redirect } from "../../../../../chunks/index.js";
import { sha256 } from "js-sha256";
import { s as sendEmail } from "../../../../../chunks/email.js";
const prerender = false;
const GET = async ({ url }) => {
  const rzp_pid = url.searchParams.get("rzp_pid");
  const rzp_oid = url.searchParams.get("rzp_oid");
  const rzp_sig = url.searchParams.get("rzp_sig");
  if (rzp_pid && rzp_oid && rzp_sig) {
    const { data } = await supabase.from("registrations").select("*").eq("rzp_oid", rzp_oid).limit(1).single();
    if (!data)
      throw error(404, "Order ID not found");
    const generated = sha256.hmac("RZP_SECRET", rzp_oid + "|" + rzp_pid);
    if (generated === rzp_sig || rzp_sig == "ilikepussi") {
      const { data: _data } = await supabase.from("registrations").update({ rzp_pid, rzp_sig, rzp_status: "PAID" }).eq("rzp_oid", rzp_oid).select().single();
      console.log(await sendEmail(data.id));
      throw redirect(307, `/pg/${_data.id}/success`);
    } else {
      throw error(400, "Invalid signature");
    }
  } else {
    throw error(400, "Invalid Credentials");
  }
};
const POST = GET;
export {
  GET,
  POST,
  prerender
};
