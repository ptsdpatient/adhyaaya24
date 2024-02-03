const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const lineClamp = require('@tailwindcss/line-clamp');
const aspectRatio = require('@tailwindcss/aspect-ratio');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
			  '3xl': '1600px',
			},
		  },
	},
	daisyui: {
		themes: [
			{
				adhyaaya23: {
					primary: '#ffffff',
					secondary: '#ffd700',
					accent: '#222A51',
					neutral: '#191D24',
					'base-100': '#000000',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#f2b8b5',
					error: '#b32613'
				}
			}
		]
	},
	plugins: [forms, typography, lineClamp, aspectRatio, daisyui]
};

module.exports = config;
