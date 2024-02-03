import { c as create_ssr_component, l as compute_rest_props, o as createEventDispatcher, p as spread, q as escape_attribute_value, t as escape_object, f as add_attribute, v as validate_component, e as escape, d as each } from "../../../../chunks/index2.js";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject(subject1) && isObject(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
function typeOf(type, subject) {
  return typeof subject === type;
}
apply(typeOf, "function");
apply(typeOf, "string");
apply(typeOf, "undefined");
const Splide_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "options", "splide", "extensions", "transition", "hasTrack", "go", "sync"]);
  let { class: className = void 0 } = $$props;
  let { options = {} } = $$props;
  let { splide = void 0 } = $$props;
  let { extensions = void 0 } = $$props;
  let { transition = void 0 } = $$props;
  let { hasTrack = true } = $$props;
  createEventDispatcher();
  let root;
  let prevOptions = merge({}, options);
  function go(control) {
    splide?.go(control);
  }
  function sync(target) {
    splide?.sync(target);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.splide === void 0 && $$bindings.splide && splide !== void 0)
    $$bindings.splide(splide);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0)
    $$bindings.extensions(extensions);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.hasTrack === void 0 && $$bindings.hasTrack && hasTrack !== void 0)
    $$bindings.hasTrack(hasTrack);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0)
    $$bindings.go(go);
  if ($$props.sync === void 0 && $$bindings.sync && sync !== void 0)
    $$bindings.sync(sync);
  {
    if (splide && !isEqualDeep(prevOptions, options)) {
      splide.options = options;
      prevOptions = merge({}, prevOptions);
    }
  }
  return `

<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", root, 0)}>${hasTrack ? `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const SplideTrack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__track", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}><ul class="splide__list">${slots.default ? slots.default({}) : ``}</ul></div>`;
});
const SplideSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__slide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</li>`;
});
const splide_min = "";
const bg = "/_app/immutable/assets/bg.1c1f47a2.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".bg.svelte-1ptofxj{background:var(--bg);background-repeat:no-repeat;background-size:cover;background-position:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options = {
    type: "loop",
    autoplay: true,
    interval: 3e3
  };
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1vsjl03_START -->${$$result.title = `<title>Our Glorious Past | Adhyaaya&#39;24</title>`, ""}<!-- HEAD_svelte-1vsjl03_END -->`, ""}



<div style="${"--bg: url('" + escape(bg, true) + "');"}" class="fixed h-screen w-screen -z-50 bg opacity-50 svelte-1ptofxj"></div>

<div class="events-container grid grid-cols-1 justify-items-stretch pt-28 min-h-[50vh] scroll-smooth pb-16"><div class="flex flex-col items-center justify-center pb-28"><h1 class="text-4xl font-bold text-center text-white myfont">Gallery</h1></div>

	<div class="flex flex-col items-center justify-center pb-12 pt-12"><h1 class="text-2xl font-bold text-center text-white nunu">2022</h1></div>
	${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      options,
      "aria-label": "2022",
      id: "2022"
    },
    {},
    {
      default: () => {
        return `${each(Array.from({ length: 5 }), (_, i) => {
          return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `<img src="${"/gallery/2022/" + escape(i, true) + "-min.jpg"}" alt="" class="mx-auto max-h-[50vh]">
		  `;
            }
          })}`;
        })}`;
      }
    }
  )}


	<div class="flex flex-col items-center justify-center pb-12 pt-12"><h1 class="text-2xl font-bold text-center text-white nunu">2021</h1></div>
	${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      options,
      "aria-label": "2021",
      id: "2021"
    },
    {},
    {
      default: () => {
        return `${each(Array.from({ length: 11 }), (_, i) => {
          return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `<img src="${"/gallery/2021/" + escape(i, true) + ".jpeg"}" alt="" class="mx-auto max-h-[50vh]">
		  `;
            }
          })}`;
        })}`;
      }
    }
  )}
	<div class="flex flex-col items-center justify-center pb-12 pt-12"><h1 class="text-2xl font-bold text-center text-white nunu">2020</h1></div>
	
	${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      options,
      "aria-label": "2020",
      id: "2020"
    },
    {},
    {
      default: () => {
        return `${each(Array.from({ length: 11 }), (_, i) => {
          return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `<img src="${"/gallery/2020/" + escape(i, true) + ".jpg"}" alt="" class="mx-auto max-h-[50vh]">
		  `;
            }
          })}`;
        })}`;
      }
    }
  )}
	<div class="flex flex-col items-center justify-center pb-12 pt-12"><h1 class="text-2xl font-bold text-center text-white nunu">2019</h1></div>
	
	${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      options,
      "aria-label": "2019",
      id: "2019"
    },
    {},
    {
      default: () => {
        return `${each(Array.from({ length: 11 }), (_, i) => {
          return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `<img src="${"/gallery/2019/" + escape(i, true) + ".jpg"}" alt="" class="mx-auto max-h-[50vh]">
		  `;
            }
          })}`;
        })}`;
      }
    }
  )}
	<div class="flex flex-col items-center justify-center pb-12 pt-12"><h1 class="text-2xl font-bold text-center text-white nunu">2018</h1></div>
	
	${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      options,
      "aria-label": "2018",
      id: "2018"
    },
    {},
    {
      default: () => {
        return `${each(Array.from({ length: 11 }), (_, i) => {
          return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `<img src="${"/gallery/2018/" + escape(i, true) + ".jpg"}" alt="" class="mx-auto max-h-[50vh]">
		  `;
            }
          })}`;
        })}`;
      }
    }
  )}
</div>`;
});
export {
  Page as default
};
