export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["draco/draco_decoder.js","draco/draco_decoder.wasm","draco/draco_encoder.js","draco/draco_wasm_wrapper.js","draco/gltf/draco_decoder.js","draco/gltf/draco_decoder.wasm","draco/gltf/draco_encoder.js","draco/gltf/draco_wasm_wrapper.js","draco/README.md","drafts/avishkar.pdf","drafts/born-psychos.pdf","drafts/codeventure.pdf","drafts/crickbash.pdf","drafts/foodoholic.pdf","drafts/jigyasa.pdf","drafts/respawn.pdf","drafts/roborace.pdf","drafts/stargaze.pdf","drafts/vaadvivad.pdf","drafts/vp.pdf","favicon.png","fonts/Akkurat.woff","fonts/Akkurat.woff2","fonts/gravedigger.css","fonts/hemnder.woff","fonts/hemnder.woff2","fonts/My2Font.woff","fonts/My2Font.woff2","fonts/My3Font.woff","fonts/My3Font.woff2","fonts/My4Font.woff","fonts/My4Font.woff2","fonts/MyFontRegular.woff","fonts/MyFontRegular.woff2","fonts/_hemnder.woff","fonts/_hemnder.woff2","gallery/2018/0.jpg","gallery/2018/1.jpg","gallery/2018/10.jpg","gallery/2018/11.jpg","gallery/2018/2.jpg","gallery/2018/3.jpg","gallery/2018/4.jpg","gallery/2018/5.jpg","gallery/2018/6.jpg","gallery/2018/7.jpg","gallery/2018/8.jpg","gallery/2018/9.jpg","gallery/2018.jfif","gallery/2019/0.jpg","gallery/2019/1.jpg","gallery/2019/10.jpg","gallery/2019/11.jpg","gallery/2019/2.jpg","gallery/2019/3.jpg","gallery/2019/4.jpg","gallery/2019/5.jpg","gallery/2019/6.jpg","gallery/2019/7.jpg","gallery/2019/8.jpg","gallery/2019/9.jpg","gallery/2019.jpg","gallery/2020/0.jpg","gallery/2020/1.jpg","gallery/2020/10.jpg","gallery/2020/11.jpg","gallery/2020/2.jpg","gallery/2020/3.jpg","gallery/2020/4.jpg","gallery/2020/5.jpg","gallery/2020/6.jpg","gallery/2020/7.jpg","gallery/2020/8.jpg","gallery/2020/9.jpg","gallery/2020.jfif","gallery/2021/0.jpeg","gallery/2021/1.jpeg","gallery/2021/10.jpeg","gallery/2021/11.jpeg","gallery/2021/2.jpeg","gallery/2021/3.jpeg","gallery/2021/4.jpeg","gallery/2021/5.jpeg","gallery/2021/6.jpeg","gallery/2021/7.jpeg","gallery/2021/8.jpeg","gallery/2021/9.jpeg","gallery/2021.jpeg","gallery/2022/0-min.jpg","gallery/2022/1-min.jpg","gallery/2022/2-min.jpg","gallery/2022/3-min.jpg","gallery/2022/4-min.jpg","gallery/2022/5-min.jpg","inspirations/wavebg.html","meta.jpg","robots.txt","rzp/checkout.js","solid.png","_favicon.png","_meta/test.html"]),
	mimeTypes: {".js":"application/javascript",".wasm":"application/wasm",".md":"text/markdown",".pdf":"application/pdf",".png":"image/png",".woff":"font/woff",".woff2":"font/woff2",".css":"text/css",".jpg":"image/jpeg",".jpeg":"image/jpeg",".html":"text/html",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.61a7f1e2.js","app":"_app/immutable/entry/app.00415c90.js","imports":["_app/immutable/entry/start.61a7f1e2.js","_app/immutable/chunks/index.6031e960.js","_app/immutable/chunks/singletons.7ad76692.js","_app/immutable/chunks/index.2d608655.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/entry/app.00415c90.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.6031e960.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js'))
		],
		routes: [
			{
				id: "/(app)/__register",
				pattern: /^\/__register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/_index",
				pattern: /^\/_index\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(app)/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/(app)/forms/contact_us",
				pattern: /^\/forms\/contact_us\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(app)/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/legal",
				pattern: /^\/legal\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/legal/contact_info",
				pattern: /^\/legal\/contact_info\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/legal/privacy_policy",
				pattern: /^\/legal\/privacy_policy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/legal/terms_and_conditions",
				pattern: /^\/legal\/terms_and_conditions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(app)/pg/check_status",
				pattern: /^\/pg\/check_status\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/(app)/pg/check_status/_server.ts.js'))
			},
			{
				id: "/(app)/pg/[rid]/pay",
				pattern: /^\/pg\/([^/]+?)\/pay\/?$/,
				params: [{"name":"rid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(app)/pg/[rid]/success",
				pattern: /^\/pg\/([^/]+?)\/success\/?$/,
				params: [{"name":"rid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/sponsors",
				pattern: /^\/sponsors\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/team",
				pattern: /^\/team\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/timeline",
				pattern: /^\/timeline\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
