import { u as onDestroy, c as create_ssr_component, k as add_styles, e as escape, v as validate_component, m as missing_component, p as spread, t as escape_object, w as merge_ssr_styles, f as add_attribute, s as subscribe, d as each, x as is_promise, n as noop } from "../../chunks/index2.js";
import { u as useToasterStore, t as toast, s as startPause, e as endPause, a as update, p as prefersReducedMotion } from "../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { m as modals, t as transitioning, e as exitBeforeEnter } from "../../chunks/store.js";
import { a as afterNavigate } from "../../chunks/navigation.js";
import { a as adhyaaya_solid_logo } from "../../chunks/solid-resize.js";
import "iconify-icon";
import { p as page } from "../../chunks/stores.js";
const app = "";
function calculateOffset(toast2, $toasts, opts) {
  const { reverseOrder, gutter = 8, defaultPosition } = opts || {};
  const relevantToasts = $toasts.filter((t) => (t.position || defaultPosition) === (toast2.position || defaultPosition) && t.height);
  const toastIndex = relevantToasts.findIndex((t) => t.id === toast2.id);
  const toastsBefore = relevantToasts.filter((toast3, i) => i < toastIndex && toast3.visible).length;
  const offset = relevantToasts.filter((t) => t.visible).slice(...reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]).reduce((acc, t) => acc + (t.height || 0) + gutter, 0);
  return offset;
}
const handlers = {
  startPause() {
    startPause(Date.now());
  },
  endPause() {
    endPause(Date.now());
  },
  updateHeight: (toastId, height) => {
    update({ id: toastId, height });
  },
  calculateOffset
};
function useToaster(toastOptions) {
  const { toasts, pausedAt } = useToasterStore(toastOptions);
  const timeouts = /* @__PURE__ */ new Map();
  let _pausedAt;
  const unsubscribes = [
    pausedAt.subscribe(($pausedAt) => {
      if ($pausedAt) {
        for (const [, timeoutId] of timeouts) {
          clearTimeout(timeoutId);
        }
        timeouts.clear();
      }
      _pausedAt = $pausedAt;
    }),
    toasts.subscribe(($toasts) => {
      if (_pausedAt) {
        return;
      }
      const now = Date.now();
      for (const t of $toasts) {
        if (timeouts.has(t.id)) {
          continue;
        }
        if (t.duration === Infinity) {
          continue;
        }
        const durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);
        if (durationLeft < 0) {
          if (t.visible) {
            toast.dismiss(t.id);
          }
          return null;
        }
        timeouts.set(t.id, setTimeout(() => toast.dismiss(t.id), durationLeft));
      }
    })
  ];
  onDestroy(() => {
    for (const unsubscribe of unsubscribes) {
      unsubscribe();
    }
  });
  return { toasts, handlers };
}
const css$9 = {
  code: "div.svelte-lzwg39{width:20px;opacity:0;height:20px;border-radius:10px;background:var(--primary, #61d345);position:relative;transform:rotate(45deg);animation:svelte-lzwg39-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation-delay:100ms}div.svelte-lzwg39::after{content:'';box-sizing:border-box;animation:svelte-lzwg39-checkmarkAnimation 0.2s ease-out forwards;opacity:0;animation-delay:200ms;position:absolute;border-right:2px solid;border-bottom:2px solid;border-color:var(--secondary, #fff);bottom:6px;left:6px;height:10px;width:6px}@keyframes svelte-lzwg39-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@keyframes svelte-lzwg39-checkmarkAnimation{0%{height:0;width:0;opacity:0}40%{height:0;width:6px;opacity:1}100%{opacity:1;height:10px}}",
  map: null
};
const CheckmarkIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#61d345" } = $$props;
  let { secondary = "#fff" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$9);
  return `


<div class="svelte-lzwg39"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const css$8 = {
  code: "div.svelte-10jnndo{width:20px;opacity:0;height:20px;border-radius:10px;background:var(--primary, #ff4b4b);position:relative;transform:rotate(45deg);animation:svelte-10jnndo-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation-delay:100ms}div.svelte-10jnndo::after,div.svelte-10jnndo::before{content:'';animation:svelte-10jnndo-firstLineAnimation 0.15s ease-out forwards;animation-delay:150ms;position:absolute;border-radius:3px;opacity:0;background:var(--secondary, #fff);bottom:9px;left:4px;height:2px;width:12px}div.svelte-10jnndo:before{animation:svelte-10jnndo-secondLineAnimation 0.15s ease-out forwards;animation-delay:180ms;transform:rotate(90deg)}@keyframes svelte-10jnndo-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@keyframes svelte-10jnndo-firstLineAnimation{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes svelte-10jnndo-secondLineAnimation{from{transform:scale(0) rotate(90deg);opacity:0}to{transform:scale(1) rotate(90deg);opacity:1}}",
  map: null
};
const ErrorIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#ff4b4b" } = $$props;
  let { secondary = "#fff" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$8);
  return `


<div class="svelte-10jnndo"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const css$7 = {
  code: "div.svelte-bj4lu8{width:12px;height:12px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--secondary, #e0e0e0);border-right-color:var(--primary, #616161);animation:svelte-bj4lu8-rotate 1s linear infinite}@keyframes svelte-bj4lu8-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
  map: null
};
const LoaderIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#616161" } = $$props;
  let { secondary = "#e0e0e0" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$7);
  return `


<div class="svelte-bj4lu8"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const css$6 = {
  code: ".indicator.svelte-1c92bpz{position:relative;display:flex;justify-content:center;align-items:center;min-width:20px;min-height:20px}.status.svelte-1c92bpz{position:absolute}.animated.svelte-1c92bpz{position:relative;transform:scale(0.6);opacity:0.4;min-width:20px;animation:svelte-1c92bpz-enter 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards}@keyframes svelte-1c92bpz-enter{from{transform:scale(0.6);opacity:0.4}to{transform:scale(1);opacity:1}}",
  map: null
};
const ToastIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let type;
  let icon;
  let iconTheme;
  let { toast: toast2 } = $$props;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  $$result.css.add(css$6);
  ({ type, icon, iconTheme } = toast2);
  return `${typeof icon === "string" ? `<div class="animated svelte-1c92bpz">${escape(icon)}</div>` : `${typeof icon !== "undefined" ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : `${type !== "blank" ? `<div class="indicator svelte-1c92bpz">${validate_component(LoaderIcon, "LoaderIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})}
		${type !== "loading" ? `<div class="status svelte-1c92bpz">${type === "error" ? `${validate_component(ErrorIcon, "ErrorIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})}` : `${validate_component(CheckmarkIcon, "CheckmarkIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})}`}</div>` : ``}</div>` : ``}`}`}`;
});
const css$5 = {
  code: ".message.svelte-o805t1{display:flex;justify-content:center;margin:4px 10px;color:inherit;flex:1 1 auto;white-space:pre-line}",
  map: null
};
const ToastMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toast: toast2 } = $$props;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  $$result.css.add(css$5);
  return `<div${spread([{ class: "message" }, escape_object(toast2.ariaProps)], { classes: "svelte-o805t1" })}>${typeof toast2.message === "string" ? `${escape(toast2.message)}` : `${validate_component(toast2.message || missing_component, "svelte:component").$$render($$result, { toast: toast2 }, {}, {})}`}
</div>`;
});
const css$4 = {
  code: "@keyframes svelte-15lyehg-enterAnimation{0%{transform:translate3d(0, calc(var(--factor) * -200%), 0) scale(0.6);opacity:0.5}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes svelte-15lyehg-exitAnimation{0%{transform:translate3d(0, 0, -1px) scale(1);opacity:1}100%{transform:translate3d(0, calc(var(--factor) * -150%), -1px) scale(0.6);opacity:0}}@keyframes svelte-15lyehg-fadeInAnimation{0%{opacity:0}100%{opacity:1}}@keyframes svelte-15lyehg-fadeOutAnimation{0%{opacity:1}100%{opacity:0}}.base.svelte-15lyehg{display:flex;align-items:center;background:#fff;color:#363636;line-height:1.3;will-change:transform;box-shadow:0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);max-width:350px;pointer-events:auto;padding:8px 10px;border-radius:8px}.transparent.svelte-15lyehg{opacity:0}.enter.svelte-15lyehg{animation:svelte-15lyehg-enterAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards}.exit.svelte-15lyehg{animation:svelte-15lyehg-exitAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards}.fadeIn.svelte-15lyehg{animation:svelte-15lyehg-fadeInAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards}.fadeOut.svelte-15lyehg{animation:svelte-15lyehg-fadeOutAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards}",
  map: null
};
const ToastBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toast: toast2 } = $$props;
  let { position = void 0 } = $$props;
  let { style = "" } = $$props;
  let { Component = void 0 } = $$props;
  let factor;
  let animation;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.Component === void 0 && $$bindings.Component && Component !== void 0)
    $$bindings.Component(Component);
  $$result.css.add(css$4);
  {
    {
      const top = (toast2.position || position || "top-center").includes("top");
      factor = top ? 1 : -1;
      const [enter, exit] = prefersReducedMotion() ? ["fadeIn", "fadeOut"] : ["enter", "exit"];
      animation = toast2.visible ? enter : exit;
    }
  }
  return `<div class="${"base " + escape(toast2.height ? animation : "transparent", true) + " " + escape(toast2.className || "", true) + " svelte-15lyehg"}"${add_styles(merge_ssr_styles(escape(style, true) + "; " + escape(toast2.style, true), { "--factor": factor }))}>${Component ? `${validate_component(Component || missing_component, "svelte:component").$$render($$result, {}, {}, {
    message: () => {
      return `${validate_component(ToastMessage, "ToastMessage").$$render($$result, { toast: toast2, slot: "message" }, {}, {})}`;
    },
    icon: () => {
      return `${validate_component(ToastIcon, "ToastIcon").$$render($$result, { toast: toast2, slot: "icon" }, {}, {})}`;
    }
  })}` : `${slots.default ? slots.default({ ToastIcon, ToastMessage, toast: toast2 }) : `
			${validate_component(ToastIcon, "ToastIcon").$$render($$result, { toast: toast2 }, {}, {})}
			${validate_component(ToastMessage, "ToastMessage").$$render($$result, { toast: toast2 }, {}, {})}
		`}`}
</div>`;
});
const css$3 = {
  code: ".wrapper.svelte-1pakgpd{left:0;right:0;display:flex;position:absolute;transform:translateY(calc(var(--offset, 16px) * var(--factor) * 1px))}.transition.svelte-1pakgpd{transition:all 230ms cubic-bezier(0.21, 1.02, 0.73, 1)}.active.svelte-1pakgpd{z-index:9999}.active.svelte-1pakgpd>*{pointer-events:auto}",
  map: null
};
const ToastWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let top;
  let bottom;
  let factor;
  let justifyContent;
  let { toast: toast2 } = $$props;
  let { setHeight } = $$props;
  let wrapperEl;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  if ($$props.setHeight === void 0 && $$bindings.setHeight && setHeight !== void 0)
    $$bindings.setHeight(setHeight);
  $$result.css.add(css$3);
  top = toast2.position?.includes("top") ? 0 : null;
  bottom = toast2.position?.includes("bottom") ? 0 : null;
  factor = toast2.position?.includes("top") ? 1 : -1;
  justifyContent = toast2.position?.includes("center") && "center" || (toast2.position?.includes("right") || toast2.position?.includes("end")) && "flex-end" || null;
  return `<div class="${[
    "wrapper svelte-1pakgpd",
    (toast2.visible ? "active" : "") + " " + (!prefersReducedMotion() ? "transition" : "")
  ].join(" ").trim()}"${add_styles({
    "--factor": factor,
    "--offset": toast2.offset,
    top,
    bottom,
    "justify-content": justifyContent
  })}${add_attribute("this", wrapperEl, 0)}>${toast2.type === "custom" ? `${validate_component(ToastMessage, "ToastMessage").$$render($$result, { toast: toast2 }, {}, {})}` : `${slots.default ? slots.default({ toast: toast2 }) : `
			${validate_component(ToastBar, "ToastBar").$$render($$result, { toast: toast2, position: toast2.position }, {}, {})}
		`}`}
</div>`;
});
const css$2 = {
  code: ".toaster.svelte-jyff3d{--default-offset:16px;position:fixed;z-index:9999;top:var(--default-offset);left:var(--default-offset);right:var(--default-offset);bottom:var(--default-offset);pointer-events:none}",
  map: null
};
const Toaster = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toasts, $$unsubscribe_toasts;
  let { reverseOrder = false } = $$props;
  let { position = "top-center" } = $$props;
  let { toastOptions = void 0 } = $$props;
  let { gutter = 8 } = $$props;
  let { containerStyle = void 0 } = $$props;
  let { containerClassName = void 0 } = $$props;
  const { toasts, handlers: handlers2 } = useToaster(toastOptions);
  $$unsubscribe_toasts = subscribe(toasts, (value) => $toasts = value);
  let _toasts;
  if ($$props.reverseOrder === void 0 && $$bindings.reverseOrder && reverseOrder !== void 0)
    $$bindings.reverseOrder(reverseOrder);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.toastOptions === void 0 && $$bindings.toastOptions && toastOptions !== void 0)
    $$bindings.toastOptions(toastOptions);
  if ($$props.gutter === void 0 && $$bindings.gutter && gutter !== void 0)
    $$bindings.gutter(gutter);
  if ($$props.containerStyle === void 0 && $$bindings.containerStyle && containerStyle !== void 0)
    $$bindings.containerStyle(containerStyle);
  if ($$props.containerClassName === void 0 && $$bindings.containerClassName && containerClassName !== void 0)
    $$bindings.containerClassName(containerClassName);
  $$result.css.add(css$2);
  _toasts = $toasts.map((toast2) => ({
    ...toast2,
    position: toast2.position || position,
    offset: handlers2.calculateOffset(toast2, $toasts, {
      reverseOrder,
      gutter,
      defaultPosition: position
    })
  }));
  $$unsubscribe_toasts();
  return `<div class="${"toaster " + escape(containerClassName || "", true) + " svelte-jyff3d"}"${add_attribute("style", containerStyle, 0)} role="alert">${each(_toasts, (toast2) => {
    return `${validate_component(ToastWrapper, "ToastWrapper").$$render(
      $$result,
      {
        toast: toast2,
        setHeight: (height) => handlers2.updateHeight(toast2.id, height)
      },
      {},
      {}
    )}`;
  })}
</div>`;
});
function isLazyModal(component) {
  return typeof component.prototype === "undefined";
}
async function getComponent(component) {
  return component().then((res) => res.default);
}
const Modals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modals, $$unsubscribe_modals;
  let $transitioning, $$unsubscribe_transitioning;
  let $$unsubscribe_exitBeforeEnter;
  $$unsubscribe_modals = subscribe(modals, (value) => $modals = value);
  $$unsubscribe_transitioning = subscribe(transitioning, (value) => $transitioning = value);
  $$unsubscribe_exitBeforeEnter = subscribe(exitBeforeEnter, (value) => value);
  $$unsubscribe_modals();
  $$unsubscribe_transitioning();
  $$unsubscribe_exitBeforeEnter();
  return `${$modals.length > 0 ? `${slots.backdrop ? slots.backdrop({}) : ``}` : ``}

${slots.default ? slots.default({}) : `
  ${each($modals, (modal, i) => {
    return `
    ${isLazyModal(modal.component) ? `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return `
        ${slots.loading ? slots.loading({}) : ``}
      `;
      }
      return function(component) {
        return `
        ${validate_component(component || missing_component, "svelte:component").$$render(
          $$result,
          Object.assign(
            {},
            {
              isOpen: i === $modals.length - 1 && !$transitioning
            },
            modal.props
          ),
          {},
          {}
        )}
      `;
      }(__value);
    }(getComponent(modal.component))}` : `
      ${validate_component(modal.component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        {
          isOpen: i === $modals.length - 1 && !$transitioning
        },
        modal.props
      ),
      {},
      {}
    )}`}`;
  })}
`}`;
});
const SOCIALS = [
  {
    icon: "mdi:email",
    link: "mailto:adhyaaya.gcoen@gmail.com",
    name: "Email",
    bg: "bg-[#d44638]",
    text: "text-white"
  },
  {
    icon: "mdi:linkedin",
    link: "https://www.linkedin.com/company/adhyaaya/",
    name: "Email",
    bg: "bg-[#0A66C2]",
    text: "text-white"
  },
  {
    icon: "mdi:instagram",
    link: "https://instagram.com/adhyaaya.gcoen",
    name: "Email",
    bg: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
    text: "text-white"
  },
  {
    icon: "mdi:youtube",
    link: "https://www.youtube.com/@ADHYAAYAGCOEN",
    name: "Email",
    bg: "bg-[#ff0000]",
    text: "text-white"
  }
];
const Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".menu-container.svelte-1996ugl.svelte-1996ugl.svelte-1996ugl{width:0px;transition-property:all;transition-duration:500ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.menu-container.true.svelte-1996ugl.svelte-1996ugl.svelte-1996ugl{width:100%}.false.svelte-1996ugl.svelte-1996ugl.svelte-1996ugl{width:0px}.svelte-1996ugl.svelte-1996ugl.svelte-1996ugl{overflow:clip}.menu.svelte-1996ugl.svelte-1996ugl.svelte-1996ugl{width:-moz-fit-content;width:fit-content;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.menu-items.svelte-1996ugl:hover>.menu-item.svelte-1996ugl.svelte-1996ugl{opacity:0.3}.menu-items.svelte-1996ugl:hover>.menu-item.svelte-1996ugl.svelte-1996ugl:hover{opacity:1}.menu-item-container.svelte-1996ugl.svelte-1996ugl.svelte-1996ugl{white-space:nowrap;padding-left:10vw;line-height:1rem;opacity:1;transition-property:all;transition-duration:500ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}@media(min-width: 1024px){.menu-item-container.svelte-1996ugl.svelte-1996ugl.svelte-1996ugl{padding-left:15vw}}.submenu-item.svelte-1996ugl.svelte-1996ugl.svelte-1996ugl{text-transform:uppercase;transition-property:all;transition-duration:500ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.menu-items.svelte-1996ugl:hover>.menu-item-container.svelte-1996ugl>.submenu-item.svelte-1996ugl{opacity:0.3}.menu-items.svelte-1996ugl:hover>.menu-item-container.svelte-1996ugl>.submenu-item.svelte-1996ugl:hover{opacity:1}.menu-item.svelte-1996ugl.svelte-1996ugl.svelte-1996ugl{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;width:-moz-fit-content;width:fit-content;white-space:nowrap;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:10vw;font-size:2.25rem;line-height:2.5rem;opacity:1;transition-property:all;transition-duration:500ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}@media(min-width: 1024px){.menu-item.svelte-1996ugl.svelte-1996ugl.svelte-1996ugl{padding-left:15vw}}@media(min-width: 1280px){.menu-item.svelte-1996ugl.svelte-1996ugl.svelte-1996ugl{font-size:3rem;line-height:1;line-height:1rem}}@media(min-width: 1536px){.menu-item.svelte-1996ugl.svelte-1996ugl.svelte-1996ugl{font-size:3.75rem;line-height:1}}@media(min-width: 1600px){.menu-item.svelte-1996ugl.svelte-1996ugl.svelte-1996ugl{font-size:4.5rem;line-height:1}}.menu-item.svelte-1996ugl.svelte-1996ugl.svelte-1996ugl:hover{opacity:1}.menu-background-pattern.svelte-1996ugl.svelte-1996ugl.svelte-1996ugl{height:100vh;width:100vw;display:none;background-image:radial-gradient(rgba(255, 255, 255, 0.25) 9%, transparent 9%);background-position:var(--bgX, 0%) var(--bgY, 0%);background-size:12vmin 12vmin;position:absolute;top:0;left:0;transition-property:all;transition-duration:1000ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.menu-background-pattern.mbp-0.svelte-1996ugl.svelte-1996ugl.svelte-1996ugl{background-image:radial-gradient(rgba(255, 0, 0, 0.25) 9%, transparent 9%);background-position:var(--bgX, 0%) calc(var(--bgY, 0%) + 0.15%)}.menu-background-pattern.mbp-1.svelte-1996ugl.svelte-1996ugl.svelte-1996ugl{background-image:radial-gradient(rgba(0, 255, 0, 0.25) 9%, transparent 9%);background-position:var(--bgX, 0%) calc(var(--bgY, 0%) - 0.15%)}.menu-background-pattern.mbp-2.svelte-1996ugl.svelte-1996ugl.svelte-1996ugl{background-image:radial-gradient(rgba(0, 0, 255, 0.25) 9%, transparent 9%);background-position:calc(var(--bgX, 0%) - 0.15%) var(--bgY, 0%)}.menu-items.svelte-1996ugl:hover~.menu-background-pattern.svelte-1996ugl.svelte-1996ugl{background-size:11vmin 11vmin;opacity:0.5}",
  map: null
};
let bgX = 0, bgY = 0;
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { isMenuOpen = false } = $$props;
  let { nav_cb = () => {
  } } = $$props;
  afterNavigate(() => {
    isMenuOpen = false;
  });
  if ($$props.isMenuOpen === void 0 && $$bindings.isMenuOpen && isMenuOpen !== void 0)
    $$bindings.isMenuOpen(isMenuOpen);
  if ($$props.nav_cb === void 0 && $$bindings.nav_cb && nav_cb !== void 0)
    $$bindings.nav_cb(nav_cb);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `

${!$page.url.pathname.includes("asdfghbjnkml.swderft") ? `
<div class="${"fixed top-0 w-full min-h-16 z-[200] pointer-events-none flex flex-row px-4 md:px-10 py-4 bg-transparent " + escape("", true) + " items-center print:hidden transition-all duration-700 svelte-1996ugl"}"><button class="${"logo bg-transparent " + escape(
    $page.url.pathname.includes("success") ? "invisible" : "",
    true
  ) + " w-20 md:w-36 pointer-events-auto py-1 px-2 rounded-lg transition-all duration-250 hover:scale-105 active:scale-95 cursor-pointer mr-auto " + escape("", true) + " svelte-1996ugl"}"><img${add_attribute("src", adhyaaya_solid_logo, 0)} alt="" class="svelte-1996ugl"></button>
		
		
		<input id="menu-toggle" type="checkbox" class="hidden svelte-1996ugl"${add_attribute("checked", isMenuOpen, 1)}>
		<label for="menu-toggle" class="${"menu-icon cursor-pointer h-10 w-10 md:h-12 md:w-12 rounded-full pointer-events-auto relative transition-all duration-500 ease-in-out hover:scale-105 active:scale-95 border " + escape(isMenuOpen ? "border-white" : "border-white/60", true) + " svelte-1996ugl"}"><div class="absolute w-[18px] h-[2px] origin-center bg-white transition-all ease-in-out duration-500  svelte-1996ugl" style="${escape(isMenuOpen ? "top: 50%;" : "top: calc(50% - 4px);", true) + " left: 50%; transform: translateX(-50%) translateY(-50%) " + escape(isMenuOpen ? "rotate(-45deg)" : "rotate(0deg)", true) + " translateZ(0px);"}"></div>
			<div class="absolute w-[18px] h-[2px] origin-center bg-white transition-all ease-in-out duration-500 svelte-1996ugl" style="${escape(isMenuOpen ? "top: 50%;" : "top: calc(50% + 4px);", true) + " left: 50%; transform: translateX(-50%) translateY(-50%) " + escape(isMenuOpen ? "rotate(45deg)" : "rotate(0deg)", true) + " translateZ(0px);"}"></div></label></div>` : ``}
<div class="${"menu-container " + escape(isMenuOpen, true) + " h-full bg-[#0d0028]/95 rounded-none z-[120] fixed right-0 top-0 flex flex-col print:hidden svelte-1996ugl"}">${isMenuOpen ? `<div class="${escape(isMenuOpen, true) + " header h-16 md:h-24 lg:h-36 w-full svelte-1996ugl"}"></div>
		<div class="${escape(isMenuOpen, true) + " menu flex flex-col w-full svelte-1996ugl"}"><div class="menu-items w-fit flex flex-col justify-evenly h-full z-[150] scale-90 md:scale-100 svelte-1996ugl"><a href="/" class="menu-item svelte-1996ugl">Home</a>
				<a href="/events" class="menu-item svelte-1996ugl">Events</a>
				<a href="/timeline" class="menu-item svelte-1996ugl">Timeline</a>
				
				<a data-sveltekit-reload href="/team" class="menu-item svelte-1996ugl">Team</a>
				<a href="/sponsors" class="menu-item svelte-1996ugl">Sponsors</a>
				<a data-sveltekit-reload href="/gallery" class="menu-item svelte-1996ugl">Gallery</a>
				<div class="menu-item-container flex flex-col md:flex-row gap-2 md:gap-14 md:pt-10 svelte-1996ugl"><a href="/legal/privacy_policy" class="submenu-item text-base  svelte-1996ugl">Privacy Policy</a>
					<a href="/legal/terms_and_conditions" class="submenu-item text-base svelte-1996ugl">Terms and Conditions</a>
					<a href="/legal/contact_info" class="submenu-item text-base svelte-1996ugl">Contact Info</a></div></div>
			<div style="${"--bgX: " + escape(bgX, true) + "%;--bgY: " + escape(bgY, true) + "%"}" class="menu-background-pattern z-[133] svelte-1996ugl"></div>
			<div style="${"--bgX: " + escape(bgX, true) + "%;--bgY: " + escape(bgY, true) + "%"}" class="menu-background-pattern mbp-0 z-[130] svelte-1996ugl"></div>
			<div style="${"--bgX: " + escape(bgX, true) + "%;--bgY: " + escape(bgY, true) + "%"}" class="menu-background-pattern mbp-1 z-[131] svelte-1996ugl"></div>
			<div style="${"--bgX: " + escape(bgX, true) + "%;--bgY: " + escape(bgY, true) + "%"}" class="menu-background-pattern mbp-2 z-[132] svelte-1996ugl"></div></div>
		<div class="${"" + escape(isMenuOpen, true) + " social w-full flex items-center self-end justify-end py-6 pb-32 md:pb-6 mt-auto z-[140] svelte-1996ugl"}">${each(SOCIALS, (social) => {
    return `<a rel="noreferrer" target="_blank"${add_attribute("href", social.link, 0)} class="${"h-10 w-10 md:h-12 md:w-12 rounded-full border border-white mx-auto md:ml-0 md:mr-10 inline-flex items-center justify-center text-2xl md:text-3xl cursor-pointer " + escape(social.text, true) + " " + escape(social.bg, true) + " hover:scale-105 active:scale-95 active:opacity-90 transition-all duration-200 ease-in-out svelte-1996ugl"}"><iconify-icon${add_attribute("icon", social.icon, 0)} class="svelte-1996ugl"></iconify-icon>
				</a>`;
  })}</div>` : ``}
</div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".backdrop.svelte-wg93kf{position:fixed;top:0;bottom:0;right:0;left:0;background:rgba(0, 0, 0, 0.5)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}

${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})}



${validate_component(Modals, "Modals").$$render($$result, {}, {}, {
    backdrop: () => {
      return `<button slot="backdrop" class="backdrop svelte-wg93kf"></button>`;
    }
  })}`;
});
export {
  Layout as default
};
