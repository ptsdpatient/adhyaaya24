import { sveltekit } from '@sveltejs/kit/vite';
// import viteImageMin from 'vite-plugin-imagemin';
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		// 	viteImageMin({pngquant: {
		// 	quality: [0.5],
		// 	speed: 6,
		//   },}),
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
