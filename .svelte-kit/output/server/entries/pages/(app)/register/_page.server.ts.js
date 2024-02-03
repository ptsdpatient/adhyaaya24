import { E as EVENTS } from "../../../../chunks/events.js";
import "../../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { f as fail, r as redirect } from "../../../../chunks/index.js";
import validator from "validator";
function convertToJSON(body) {
  return [...body.entries()].reduce((data, [k, v]) => {
    let value = v;
    if (v === "true")
      value = true;
    if (v === "false")
      value = false;
    if (!isNaN(Number(v)))
      value = Number(v);
    if (k in data) {
      const val = data[k];
      value = Array.isArray(val) ? [...val, value] : [val, value];
    }
    data[k] = value;
    return data;
  }, {});
}
const actions = {
  default: async (event) => {
    const data = convertToJSON(await event.request.formData());
    const event_id = data["event_id"];
    const event_data = EVENTS.find((e) => e.id === event_id);
    const errors = [];
    if (!validator.isEmail(String(data["email"]))) {
      errors.push("email");
    }
    if (!validator.isMobilePhone(String(data["phone"]))) {
      errors.push("phone");
    }
    if (String(data["first_name"]).length < 3) {
      errors.push("first_name");
    }
    if (String(data["last_name"]).length < 3) {
      errors.push("last_name");
    }
    if (String(data["institute"]).length < 3) {
      errors.push("institute");
    }
    const number_of_additional_members = Number(String(data["members"]).split("-")[1]) ?? 0;
    const team = [];
    for (let i = 1; i <= number_of_additional_members; i++) {
      if (String(data[`member-${i}-name`]).length < 3) {
        errors.push(`member-${i}-name`);
        continue;
      }
      if (!validator.isEmail(String(data[`member-${i}-email`]))) {
        errors.push(`member-${i}-email`);
        continue;
      }
      if (!validator.isMobilePhone(String(data[`member-${i}-phone`]))) {
        errors.push(`member-${i}-phone`);
        continue;
      }
      team.push({
        name: String(data[`member-${i}-name`]),
        email: String(data[`member-${i}-email`]),
        phone: String(data[`member-${i}-phone`])
      });
    }
    if (errors.length > 0) {
      return fail(400, { data, errors });
    }
    let amount_to_pay = 0;
    if (isNaN(number_of_additional_members)) {
      amount_to_pay = event_data?.amount[0] || 0;
    } else {
      amount_to_pay = event_data?.amount[event_data?.team_members.indexOf(number_of_additional_members + 1)] || 0;
    }
    const _push_to_db = {
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      name: `${data["first_name"]} ${data["last_name"]}`,
      phone: String(data["phone"]),
      email: String(data["email"]),
      edu_institute: String(data["institute"]),
      edu_year: String(data["year_grade"]),
      edu_spl: String(data["branch_specialization"]),
      team,
      event_id: String(data["event_id"]),
      amount: amount_to_pay,
      used: false,
      status: String(data["branch_specialization"]) !== "EPNemGE0iQ",
      rzp_status: amount_to_pay === 0 || String(data["branch_specialization"]) === "EPNemGE0iQ" ? "PAID" : "NO_PAYMENT_CREATED",
      custom: {}
    };
    const { data: db_data, error } = await supabase.from("registrations").insert({
      ..._push_to_db
    }).select().single();
    if (error) {
      return fail(500, { error });
    }
    throw redirect(307, `pg/${db_data.id}/pay`);
  }
};
export {
  actions
};
