import 'iconify-icon';

export interface AdhyaayaSocials {
	icon: string;
	link: string;
	name: string;
	bg: string;
	text: string;
}
export const SOCIALS: AdhyaayaSocials[] = [
	{
		icon: 'mdi:email',
		link: 'mailto:adhyaaya.gcoen@gmail.com',
		name: 'Email',
		bg: 'bg-[#d44638]',
		text: 'text-white'
	},
	{
		icon: 'mdi:linkedin',
		link: 'https://www.linkedin.com/company/adhyaaya/',
		name: 'Email',
		bg: 'bg-[#0A66C2]',
		text: 'text-white'
	},
	{
		icon: 'mdi:instagram',
		link: 'https://instagram.com/adhyaaya.gcoen',
		name: 'Email',
		bg: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
		text: 'text-white'
	},
	{
		icon: 'mdi:youtube',
		link: 'https://www.youtube.com/@ADHYAAYAGCOEN',
		name: 'Email',
		bg: 'bg-[#ff0000]',
		text: 'text-white'
	}
];
