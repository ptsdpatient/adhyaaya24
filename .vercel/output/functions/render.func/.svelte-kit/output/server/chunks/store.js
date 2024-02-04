import { w as writable } from "./index3.js";
import { g as get_store_value } from "./index2.js";
const exitBeforeEnter = writable(false);
const transitioning = writable(null);
const modals = writable([]);
const action = writable(null);
function closeAllModals() {
  const modalsLength = get_store_value(modals).length;
  const currentModal = get_store_value(modals)[modalsLength - 1];
  if (currentModal?.callbacks?.onBeforeClose) {
    if (currentModal?.callbacks?.onBeforeClose() === false) {
      return false;
    }
  }
  modals.set([]);
  return true;
}
function closeModals(amount = 1) {
  const modalsLength = get_store_value(modals).length;
  const currentModal = get_store_value(modals)[modalsLength - 1];
  if (get_store_value(transitioning)) {
    return false;
  }
  if (currentModal?.callbacks?.onBeforeClose) {
    if (currentModal?.callbacks?.onBeforeClose() === false) {
      return false;
    }
  }
  if (get_store_value(exitBeforeEnter) && modalsLength > 0) {
    transitioning.set(true);
  }
  exitBeforeEnter.set(false);
  action.set("pop");
  pop(amount);
  return true;
}
function closeModal() {
  return closeModals(1);
}
function openModal(component, props, options) {
  if (get_store_value(transitioning)) {
    return;
  }
  action.set("push");
  if (get_store_value(exitBeforeEnter) && get_store_value(modals).length) {
    transitioning.set(true);
  }
  exitBeforeEnter.set(false);
  if (options?.replace) {
    modals.update((prev) => [...prev.slice(0, prev.length - 1), { component, props }]);
  } else {
    modals.update((prev) => [...prev, { component, props }]);
  }
}
function pop(amount = 1) {
  modals.update((prev) => prev.slice(0, Math.max(0, prev.length - amount)));
}
export {
  closeAllModals as a,
  closeModal as c,
  exitBeforeEnter as e,
  modals as m,
  openModal as o,
  transitioning as t
};
