import { E as EVENTS } from "../../../../chunks/events.js";
const prerender = false;
const load = ({ url }) => {
  const view = url.searchParams.get("view");
  return {
    events: EVENTS.filter((e) => e.is_active),
    view: view ? view : "list"
  };
};
export {
  load,
  prerender
};
