import { e as error } from "../../../../chunks/index.js";
import { E as EVENTS } from "../../../../chunks/events.js";
const prerender = false;
const load = async ({ fetch, url }) => {
  const event_id = url.searchParams.get("event");
  const members = url.searchParams.get("members");
  const return_data = { event: EVENTS[0], select: true, members, custom: false };
  if (!event_id)
    return return_data;
  const event = EVENTS.find((e) => e.id === event_id);
  if (event && event_id.includes("::"))
    return { event, select: false, members, custom: true };
  else if (event)
    return { event, select: false, members, custom: false };
  else
    throw error(404, "Event not found");
};
export {
  load,
  prerender
};
