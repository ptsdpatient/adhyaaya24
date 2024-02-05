import { y as assign, z as now, A as loop, B as identity, c as create_ssr_component, s as subscribe, e as escape, d as each, f as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index3.js";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { randInt } from "three/src/math/MathUtils.js";
import { p as page } from "../../chunks/stores.js";
import { E as EVENTS } from "../../chunks/events.js";
import "../../chunks/Toaster.svelte_svelte_type_style_lang.js";
/* empty css                                                         */import "devalue";
import { a as adhyaaya_solid_logo } from "../../chunks/solid-resize.js";
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const drone = "/_app/immutable/assets/drone.5226bdc2.glb";
const sb_0 = "/_app/immutable/assets/sb.94b83198.glb";
const sb_1 = "/_app/immutable/assets/sb_2.ab25e8b5.glb";
const sb_2 = "/_app/immutable/assets/sb_3.3ab4e68d.glb";
const sb_3 = "/_app/immutable/assets/sb_4.966019d8.glb";
class Sketch {
  scene;
  camera;
  renderer;
  model1;
  model2;
  floatingSpeed = 2e-3;
  scrollPosition = 0;
  loaded = 0;
  skybox = [sb_0, sb_1, sb_2, sb_3];
  constructor(canvas) {
    this.scene = new THREE.Scene();
    this.model1 = new THREE.Object3D();
    this.model2 = new THREE.Object3D();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1e3);
    this.camera.position.z = 6;
    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    const loader1 = new GLTFLoader();
    loader1.load(drone, (gltf) => {
      this.model1 = gltf.scene;
      if (window.innerWidth < 1024) {
        this.model1.position.set(0, 0, 5);
        this.model1.scale.set(0.15, 0.15, 0.15);
      } else {
        this.model1.position.set(0.4, 0, 5.5);
        this.model1.scale.set(0.1, 0.1, 0.1);
      }
      this.model1.rotation.y = 2;
      this.scene.add(this.model1);
      this.loaded++;
    });
    const loader2 = new GLTFLoader();
    loader2.load(this.skybox[randInt(0, 3)], (gltf) => {
      this.model2 = gltf.scene;
      if (window.innerWidth < 1024) {
        this.model2.position.set(0, 0, 5);
      } else {
        this.model2.position.set(0, 0, 5);
      }
      this.model2.rotation.x = -1.3;
      this.scene.add(this.model2);
      this.model2.rotation.x = 2;
      this.model2.rotation.z = 2;
      this.loaded++;
    });
    const ambientLight = new THREE.AmbientLight(4210752);
    ambientLight.intensity = 10;
    this.scene.add(ambientLight);
    this.animate();
    this.handleScroll;
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      if (window.innerWidth < 1024) {
        this.model1.position.set(0, 0, 5);
        this.model1.scale.set(0.15, 0.15, 0.15);
      } else {
        this.model1.position.set(0.4, 0, 5.5);
        this.model1.scale.set(0.1, 0.1, 0.1);
      }
    });
  }
  handleScroll = () => {
    this.scrollPosition = window.scrollY;
    const normalizedScroll = this.scrollPosition / (document.body.scrollHeight - window.innerHeight);
    this.model1.rotation.y = 90 + normalizedScroll * Math.PI * -2;
    this.model1.position.x = window.innerWidth < 1024 ? 0 : normalizedScroll * -0.4 + 0.4;
    this.model2.rotation.x = 90 + normalizedScroll * Math.PI * -2;
    this.model2.rotation.z = 90 + normalizedScroll * Math.PI * -2;
  };
  animate = () => {
    requestAnimationFrame(this.animate);
    if (this.model1) {
      this.model1.position.y = Math.cos(Date.now() * this.floatingSpeed) * 0.01;
      this.camera.position.y = Math.sin(Date.now() * this.floatingSpeed) * 0.02;
    }
    this.renderer.render(this.scene, this.camera);
  };
}
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { scrollPos = 0 } = $$props;
  if ($$props.scrollPos === void 0 && $$bindings.scrollPos && scrollPos !== void 0)
    $$bindings.scrollPos(scrollPos);
  $$unsubscribe_page();
  return `${$page.url.pathname === "/" ? `<div class="wrapper w-full h-full flex items-center text-left relative"><div class="main h-full w-full ml-[8.33333333333333334%] md:ml-[16.66666666667%] mb-4 "><p class="absolute text-2xl w-4/5 md:w-2/4 md:text-4xl left-[8.33333333333333334%] md:left-[16.66666666667%] bottom-40 md:bottom-30 top-[58vh] md:top-[45vh]">Embark on an interstellar journey to higher level with Adhyaaya, where innovation meets the infinite!
		</p></div>
	
	${scrollPos < 35 ? `<div class="scroll-text absolute left-[8.33333333333333334%] md:left-[16.66666666667%] bottom-0 text-xl md:text-2xl font-normal text-white opacity-60">SCROLL TO EXPLORE
			<div class="scroll-line md:mt-2 h-[70px] md:h-[12vh] w-1 bg-blue-300/80 "></div></div>` : ``}</div>` : ``}

`;
});
const EventsCarousel_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "@keyframes svelte-rby9sr-scroll{0%{transform:translateX(0)}100%{transform:translateX(calc(-250px * 6))}}@keyframes svelte-rby9sr-scroll-alt{0%{transform:translateX(0)}100%{transform:translateX(calc(250px * 6))}}.slider.svelte-rby9sr.svelte-rby9sr{height:100px;overflow:hidden;position:relative;display:flex;height:10rem;width:100%;align-items:center;justify-content:center;border-radius:1rem}.slider.svelte-rby9sr.svelte-rby9sr::before,.slider.svelte-rby9sr.svelte-rby9sr::after{content:'';height:100px;position:absolute;width:200px;z-index:2;background-color:transparent}.slider.svelte-rby9sr.svelte-rby9sr::after{right:0;top:0;transform:rotateZ(180deg)}.slider.svelte-rby9sr.svelte-rby9sr::before{left:0;top:0}.slider.svelte-rby9sr .slide-track.svelte-rby9sr{animation:svelte-rby9sr-scroll 40s linear infinite forwards;display:flex;width:calc(250px * var(--width, 18))}.slider.svelte-rby9sr .slide-track.true.svelte-rby9sr{animation:svelte-rby9sr-scroll-alt 40s linear infinite forwards;display:flex;width:calc(250px * var(--width, 18))}.slider.svelte-rby9sr .slide.svelte-rby9sr{height:100px;width:250px}",
  map: null
};
function shuffle(array) {
  array = array.slice();
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const EventsCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { alt = false } = $$props;
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  $$result.css.add(css$5);
  return `<div class="slider svelte-rby9sr"><div style="${"--width: " + escape(EVENTS.length, true)}" class="${"slide-track " + escape(alt, true) + " svelte-rby9sr"}">${each(shuffle(EVENTS.filter((e) => e.is_active)), (event) => {
    return `<div class="slide inline-flex items-center justify-center svelte-rby9sr"><button class="flex flex-col items-center justify-center h-full text-xl">${event.icon.includes("url::") ? `<img class="h-full lg:h-12 w-9 lg:w-12 object-contain transition-transform ease-in-out duration-300 transform hover:scale-110"${add_attribute("src", event.icon.replace("url::", ""), 0)} alt="">` : `<iconify-icon class="text-6xl"${add_attribute("icon", event.icon, 0)}></iconify-icon>`}
					<p>${escape(event.name)}</p></button>
			</div>`;
  })}</div>
</div>`;
});
const Events_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "@keyframes svelte-1e82bll-move-da-button{0%,100%{background-position:left center}50%{background-position:right center}}.da-button.svelte-1e82bll{background-size:200% auto;animation:svelte-1e82bll-move-da-button 10s ease infinite}.da-button.svelte-1e82bll::before{background-size:200% auto;animation:svelte-1e82bll-move-da-button 10s ease infinite;z-index:-1;content:''}",
  map: null
};
const Events = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="mini-events-container flex flex-col h-full w-full justify-evenly items-center md:px-20 lg:px-40">${validate_component(EventsCarousel, "EventsCarousel").$$render($$result, {}, {}, {})}

	<div class="middle-container text-4xl lg:text-3xl border border-white flex items-center flex-col">
		
		<a href="/events" class="da-button bg-black/40 backdrop-blur-sm text-2xl md:text-3xl relative max-w-xs lg:max-w-lg text-center hover:bg-white hover:text-black hover:scale-[104%] active:opacity-90 inline-flex items-center justify-center text-white transition-all duration-300 border border-solid border-2 border-white rounded-md p-6 svelte-1e82bll"><span>EXPLORE OUR EVENTS</span> <iconify-icon icon="mdi:arrow-right"></iconify-icon></a>
		</div>

	${validate_component(EventsCarousel, "EventsCarousel").$$render($$result, { alt: true }, {}, {})}
</div>`;
});
const ContactUs_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".section.svelte-neitl1{-webkit-backdrop-filter:blur(0px);backdrop-filter:blur(0px)}.card-title.svelte-neitl1{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}",
  map: null
};
const ContactUs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="h-auto md:h-auto h-[200vh] w-full flex flex-col justify-between"><div class="w-full h-[100vh] "><div class="w-full md:w-5/6 m-auto md:h-full flex flex-col md:flex-row justify-center items-center p-10 text-white"><div class="section md:w-1/2 md:h-full w-full h-5/6 py-3 md:py-0 rounded-lg md:rounded-r-none md:border border-white svelte-neitl1"><form class="p-2 md:p-10 h-full w-full flex flex-col items-center justify-evenly" method="POST" action="/forms/contact_us">
			<div class="relative z-0 mb-3 w-full group"><input type="text" name="name" id="name" class="nunu block py-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 appearance-none border-gray-400 focus:outline-none focus:ring-0 peer text-xl" placeholder=" " required>
				<label for="name" class="peer-focus:font-medium absolute text-xl text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label></div>
			<div class="relative z-0 mb-3 w-full group"><input type="email" name="email" id="email" class="nunu block py-2 px-0 w-full text-xl text-white bg-transparent border-0 border-b-2 appearance-none border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required>
				<label for="email" class="peer-focus:font-medium absolute text-xl text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label></div>
			<div class="relative z-0 mb-2 w-full group pb-10"><textarea name="message" id="message" class="nunu block py-2 px-0 w-full text-xl text-white bg-transparent border-0 border-b-2 appearance-none border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required></textarea>
				<label for="message" class="peer-focus:font-medium absolute text-xl text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label></div>
			<button ${""} class="btn btn-outline btn-block bg-black/25 hover:scale-105 hover:bg-white active:opacity-90 active:scale-95 text-xl" type="submit">Submit</button>
			<div class="info-container w-full flex-col items-center justify-center px-4 xl:px-10 hidden lg:flex pt-4"></div></form></div>
	<div id="center-console" class="section w-full md:w-1/2 m-auto h-auto md:h-full flex flex-col items-center justify-between py-3 md:py-0 rounded-lg rounded-l-none md:border-l-0 md:border md:border-white p-6 svelte-neitl1"><h3 class="text-5xl pt-0 md:pt-7">Contact Us</h3>
		<div class="contact-info px-4 pt-2 flex flex-col gap-1 items-start"><div class="card card-compact mx-auto shadow-xl container"><div class="card-body"><h2 class="card-title nunu svelte-neitl1">For Technical Queries,</h2>
					<p class="nunu text-2xl">Mohit Deotare</p>
					<a href="https://api.whatsapp.com/send?phone=+7517345309&text=Hello!" class="nunu inline-flex items-center gap-2 text-lg"><iconify-icon icon="mdi:whatsapp"></iconify-icon>75173 45309</a>
					<a href="mailto:pavandeotare1@gmail.com" class="nunu inline-flex items-center gap-2 overflow-clip text-ellipsis text-lg"><iconify-icon icon="mdi:email-outline"></iconify-icon>pavandeotare1@gmail.com</a></div></div>
			
			<div class="card card-compact mx-auto shadow-xl w-full"><div class="card-body "><h2 class="card-title nunu svelte-neitl1">For Event-Related Queries,</h2>
					<p class="nunu text-2xl">Sushrut Kohale</p>
					<a href="tel:+919096831236" class="inline-flex items-center gap-2 nunu text-lg"><iconify-icon icon="mdi:phone-outline"></iconify-icon> 97666 55788</a>
					<a href="mailto:sushrutkohale123@gmail.com" class="inline-flex items-center gap-2 nunu text-lg"><iconify-icon icon="mdi:email-outline"></iconify-icon>sushrutkohale123@gmail.com</a></div></div>
			</div>
		<div class="contact-links"></div></div></div></div>




	<div class="w-full md:h-[100vh] h-[150vh]"><div class="section md:p-6 md:gap-8 h-full w-full md:h-full md:w-full flex flex-col justify-end md:flex-row svelte-neitl1"><div class="section w-5/6 md:h-full h-1/5 md:w-1/3 mx-auto py-3 md:py-0 rounded-lg md:border border-white svelte-neitl1"><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/YiVULH51pJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
			<div class="section bg-black/20 backdrop-blur-sm w-5/6 md:h-full h-auto md:w-1/3 mx-auto flex flex-col items-center py-3 md:py-0 bg-black/40 rounded-lg md:border md:border-white pd-10 svelte-neitl1"><div class="flex flex-col w-4/6 items-stretch pd-0 p-4 pb-0 pt-4 gap-2"><div class="heading pt-0 text-3xl btn btn-ghost btn-lg transition-none hover:scale-100 active:scale-100 hover:bg-opacity-0 cursor-auto border-0 border-b-2 rounded-b-none border-white hover:text-white ">Sitemap
				</div>
				<a href="/" class="btn btn-ghost btn-sm text-xl text-white font-normal hover:bg-white hover:text-black transition-all duration-300 ease-in-out">Home</a>
				<a href="/events" class="btn btn-sm btn-ghost text-xl text-white font-normal hover:bg-white hover:text-black transition-all duration-300 ease-in-out">Events</a>
				<a data-sveltekit-reload href="/team" class="btn btn-sm btn-ghost text-xl text-white font-normal hover:bg-white hover:text-black transition-all duration-300 ease-in-out">Team</a>
				<a href="/sponsors" class="btn btn-sm btn-ghost text-xl text-white font-normal hover:bg-white hover:text-black transition-all duration-300 ease-in-out">Sponsors</a>
				<a href="/gallery" data-sveltekit-reload class="btn btn-sm btn-ghost text-xl text-white font-normal hover:bg-white hover:text-black transition-all duration-300 ease-in-out">Gallery</a></div>
			<div class="flex flex-col w-4/6 pt-4 items-stretch justify-evenly gap-1"><div class="heading transition-all duration-300 ease-in-out text-3xl btn btn-ghost btn-lg transition-none hover:scale-100 active:scale-100 hover:bg-opacity-0 cursor-auto border-0 border-b-2 rounded-b-none border-white hover:text-white ">Legal
				</div>
				<a href="/legal/terms_and_conditions" class="btn btn-sm transition-all duration-300 ease-in-out btn-ghost text-white text-xl font-normal hover:bg-white hover:text-black">T &amp; C</a>
				<a href="/legal/privacy_policy" class="btn btn-sm btn-ghost text-white text-xl font-normal hover:bg-white hover:text-black">Privacy Policy</a>
				<a href="/legal/contact_info" class="btn btn-sm transition-all duration-300 ease-in-out btn-ghost text-white text-xl font-normal hover:bg-white hover:text-black">Legal Contact</a></div></div>
	
			<div class="section w-5/6 h-1/5 md:h-full md:w-1/3 mx-auto flex flex-col items-center justify-between py-3 md:py-0 rounded-lg md:border md:border-white svelte-neitl1"><div class="h-5/6 w-full bg-black/50"><iframe title="Google Map for GCOEN" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.525563997084!2d79.05785451517583!3d21.051661192371412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4be5e617378eb%3A0x682e0bc768d22adb!2sGovernment%20Engineering%20College%2CNagpur!5e0!3m2!1sen!2sin!4v1674120640996!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="h-full w-full z-[220] rounded-lg"></iframe></div>
			<div class="h-1/6 w-full flex flex-row items-center justify-evenly py-8 text-white"><a href="mailto:adhyaaya.gcoen@gmail.com" class="email h-8 w-8 lg:h-12 lg:w-12 bg-red-500 rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"><iconify-icon icon="mdi:email-outline"></iconify-icon></a>
				<a href="https://www.linkedin.com/company/adhyaaya/" class="linkedin h-8 w-8 lg:h-12 lg:w-12 bg-blue-600 rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"><iconify-icon icon="mdi:linkedin"></iconify-icon></a>
				<a href="https://instagram.com/adhyaaya.gcoen" class="instagram h-8 w-8 bg-pink-600 lg:h-12 lg:w-12 rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"><iconify-icon icon="mdi:instagram"></iconify-icon></a>
				<a href="https://www.youtube.com/@ADHYAAYAGCOEN" class="youtube h-8 w-8 lg:h-12 lg:w-12 bg-red-600 rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"><iconify-icon icon="mdi:youtube"></iconify-icon></a></div></div></div></div></div>	

`;
});
const gcoen = "/_app/immutable/assets/gcoen-knockout-resize.f1397a58.webp";
const AboutUs_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".team-button.svelte-1e6fhy2::before{content:'';z-index:-1}",
  map: null
};
const AboutUs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="about-us-container md:w-5/6 flex flex-col items-center justify-evenly md:py-10 mx-auto px-2"><div class="title h-1/6 pb-10"><span class="text-4xl lg:text-6xl text-white opacity-90">About Us</span></div>
	<div class="content flex flex-col w-full h-4/6 gap-20"><div class="us w-full max-w-2xl xl:w-1/2 flex flex-col items-center justify-evenly h-auto text-justify backdrop-blur-none bg-opacity-0 rounded-lg lg:rounded-l-none p-6 gap-2 mx-auto"><img loading="lazy"${add_attribute("src", adhyaaya_solid_logo, 0)} class="h-28" height="112" width="202" alt="">
			<p class="max-w-lg md:text-2xl nunu">Adhyaaya is a premier technical festival, hosting a variety of events for students and
				professionals to showcase their talents in technology and the sciences. The annual
				symposium, organized by the Government College of Engineering in Nagpur, features lectures
				from renowned experts and attracts participants from across the region. Join us at Adhyaaya
				for a journey of innovation and creativity.
			</p>
			<a data-sveltekit-reload href="/team" class="team-button bg-black/20 backdrop-blur-sm relative text-white px-5 py-3 text-3xl border border-solid border-white rounded-lg inline-flex items-center uppercase gap-2 hover:scale-110 hover:bg-white hover:text-black active:scale-90 active:opacity-90 transition-all duration-300 ease-in-out mb-8 svelte-1e6fhy2">Meet The Team <iconify-icon icon="mdi:arrow-right"></iconify-icon></a></div>
		<div class="us w-full max-w-2xl xl:w-1/2 flex flex-col items-center justify-evenly h-auto text-justify backdrop-blur-none rounded-lg lg:rounded-l-none p-6 gap-2 mx-auto"><img loading="lazy"${add_attribute("src", gcoen, 0)} class="h-28" height="112" width="355" alt="">
			<p class="max-w-lg md:text-2xl nunu">Government College of Engineering, Nagpur is a premier engineering institute established in
				2016, affiliated to Rashtrasant Tukadoji Maharaj Nagpur University and mentored by
				Visvesvaraya National Institute of Technology. The campus is situated at New Khapri, Nagpur,
				providing a top-notch engineering education to its students.
			</p>
			<a data-sveltekit-reload href="https://gcoen.ac.in/" target="_blank" rel="noreferrer" class="team-button font-bold bg-black/20 backdrop-blur-sm relative text-white text-3xl text-3xl border border-solid border-white rounded-lg hover:scale-110 hover:bg-white hover:text-black py-3 px-5 rounded-lg inline-flex items-center uppercase gap-2 hover:scale-110 active:scale-90 active:opacity-90 transition-all duration-300 ease-in-out mb-4 mt-4 svelte-1e6fhy2">Our College <iconify-icon icon="mdi:arrow-right"></iconify-icon></a></div></div>
	<div class="flex flex-col items-center justify-center pt-10"><lite-youtube-embed videoid="DeRLoZuCKfs"></lite-youtube-embed>
		<lite-youtube videoid="DeRLoZuCKfs" playlabel="Adhyaaya'20 Aftermovie" class="w-[80vw] lg:w-[50vw] rounded-lg"></lite-youtube></div>
	<div class="gallery-button flex flex-col items-center justify-evenly text-justify pt-8"><a data-sveltekit-reload href="/gallery" class="gallery-button bg-black/20 backdrop-blur-sm relative text-white px-5 py-3 text-3xl border border-solid border-white rounded-lg inline-flex items-center uppercase gap-2 hover:scale-110 hover:bg-white hover:text-black active:scale-90 active:opacity-90 transition-all duration-300 ease-in-out mb-8">Image Gallery <iconify-icon icon="mdi:arrow-right"></iconify-icon></a></div>
</div>`;
});
const Sponsors_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@keyframes svelte-rnku6n-move-da-button{0%,100%{background-position:left center}50%{background-position:right center}}.da-button.svelte-rnku6n{background-size:200% auto;animation:svelte-rnku6n-move-da-button 10s ease infinite}.da-button.svelte-rnku6n::before{background-size:200% auto;animation:svelte-rnku6n-move-da-button 10s ease infinite;z-index:-1;content:''}",
  map: null
};
const Sponsors = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="us w-full max-w-4xl xl:w-1/2 flex flex-col items-center justify-evenly h-auto text-justify rounded-lg lg:rounded-l-none p-6 gap-2 mx-auto"><div class="text-content h-1/2 w-full text-justify text-sm md:text-lg xl:text-2xl flex flex-col items-center justify-center bg-clip-text "><div class="max-w-2xl lg:max-w-4xl mx-auto px-8 pt-4 md:pl-10 pb-4 nunu backdrop-blur-none rounded-lg mb-12 text-xl md:text-2xl font-bold">Over the past years Adhyaaya has had the privilege to have hosted a number of sponsors which
			provided a very entertaining experience to our visitors as well as the brand. The crowd
			engagement, media exposure, sampling and brand building opportunities offered at Adhyaaya are
			unparalleled. The fest has always been a platform for several brands to engage in unique crowd
			engaging activations which has proved to deliver a strong sponsor take back value.
		</div>
		<a href="/sponsors" class="da-button bg-black/20 backdrop-blur-sm team-button relative text-white px-5 py-3 text-3xl border border-solid border-white rounded-lg inline-flex items-center uppercase gap-2 hover:scale-110 hover:bg-white hover:text-black active:scale-90 active:opacity-90 transition-all duration-300 ease-in-out mb-8 svelte-rnku6n"><span>View Sponsors</span> <iconify-icon icon="mdi:arrow-right"></iconify-icon></a></div>
	<div class="xl:w-1/3"></div>
</div>`;
});
const loadingAnimation = "/_app/immutable/assets/load.7cddbf5b.gif";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".loader.svelte-1m3van4{font:1em Dosis, sans-serif;line-height:1.5;perspective:40em;z-index:9999;height:100vh;width:100vw}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const duration = tweened(0, { duration: 1500 });
  let loaded = false;
  let scrollY;
  if (typeof window !== "undefined") {
    const canvas = document.getElementById("mascotid");
    new Sketch(canvas);
  }
  setTimeout(
    () => {
      loaded = true;
      duration.set(0);
    },
    2500
  );
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-i7tcdq_START --><link rel="preload"><link rel="preload" href="/draco/draco_decoder.wasm"><link rel="preload" href="/draco/draco_wasm_wrapper.js"><link rel="preload" href="/draco/draco_decoder.js">${$$result.title = `<title>Adhyaaya&#39;24</title>`, ""}<!-- HEAD_svelte-i7tcdq_END -->`, ""}





 ${!loaded ? `<div class="loader md:h-full md:w-full bg-[black] fixed z-[9999] svelte-1m3van4"><img${add_attribute("src", loadingAnimation, 0)} class="h-full w-full absolute" height="100%" width="100%" alt="transition animation">
	</div>` : ``} 



${validate_component(Home, "Home").$$render($$result, { scrollPos: scrollY }, {}, {})}
${validate_component(Events, "Events").$$render($$result, {}, {}, {})}
${validate_component(AboutUs, "AboutUs").$$render($$result, {}, {}, {})}
${validate_component(Sponsors, "Sponsors").$$render($$result, {}, {}, {})}
${validate_component(ContactUs, "ContactUs").$$render($$result, {}, {}, {})}

`;
});
export {
  Page as default
};
