import { e as error } from "../../../../../../chunks/index.js";
const prerender = false;
const load = async ({ params, fetch }) => {
  const { data } = await supabase.from("registrations").select("*").eq("id", params.rid).single();
  if (!data)
    throw error(404, "Registration ID not found");
  return { db: data };
};
export {
  load,
  prerender
};
