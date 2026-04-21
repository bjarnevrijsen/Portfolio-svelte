import vueIcon from './assets/vue.png';
import mauiIcon from './assets/maui.png';
import kotlinIcon from './assets/kotlin.png';
import mauiScreen from './assets/maui-screen.jpg';
import screenshot1 from './assets/screenshot-1.png';
import screenshot2 from './assets/screenshot-2.png';

export type Project = {
	title: string;
	descriptionShort: string;
	descriptionLong: string[];
	link: string;
	tags: string[];
	imageFrontSrc: string;
	imageSrc?: string[];
};

export type SocialLink = {
	label: string;
	href: string;
	icon: 'github' | 'linkedin' | 'email';
};

export type Experience = {
	title: string;
	periode: string;
	functie: string;
	locatie: string;
	uitleg: string;
	technieken: string[];
};

export const contact = {
	email: 'bjarne.vrijsen6@hotmail.com',
	location: 'Diepenbeek, België'
};

export const socials: SocialLink[] = [
	{ label: 'Email', href: `mailto:${contact.email}`, icon: 'email' },
	{ label: 'GitHub', href: 'https://github.com/bjarnevrijsen', icon: 'github' },
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/bjarne-vrijsen-4283a31a2/',
		icon: 'linkedin'
	}
];

export const skills = [
	'JavaScript',
	'TypeScript',
	'HTML',
	'CSS',
	'Vue.js',
	'Tailwind CSS',
	'Supabase',
	'Git/Github',
	'C#',
	'Kotlin',
	'.NET Maui',
	'SQL',
	'Node.js',
	'PHP',
	'C'
];

export const aboutParagraphKeys = [
	'about.paragraphs.intro',
	'about.paragraphs.study',
	'about.paragraphs.career'
];

export const freeTimeSkillKeys = [
	'about.freeTimeSkills.godot',
	'about.freeTimeSkills.java',
	'about.freeTimeSkills.python',
	'about.freeTimeSkills.react'
];

export const projects: Project[] = [
	{
		title: 'projects.items.wiselate.title',
		descriptionShort: 'projects.items.wiselate.descriptionShort',
		descriptionLong: [
			'projects.items.wiselate.descriptionLong.first',
			'projects.items.wiselate.descriptionLong.second',
			'projects.items.wiselate.descriptionLong.third',
			'projects.items.wiselate.descriptionLong.fourth'
		],
		link: 'https://example.com/wiselate',
		tags: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'GitHub API', 'Google OAuth'],
		imageFrontSrc: vueIcon,
		imageSrc: [screenshot2, screenshot1, kotlinIcon, mauiScreen]
	},
	{
		title: 'projects.items.movieApp.title',
		descriptionShort: 'projects.items.movieApp.descriptionShort',
		descriptionLong: [
			'projects.items.movieApp.descriptionLong.first',
			'projects.items.movieApp.descriptionLong.second',
			'projects.items.movieApp.descriptionLong.third',
			'projects.items.movieApp.descriptionLong.fourth'
		],
		link: 'https://example.com/movie-app',
		tags: ['.NET MAUI', 'SQLite', 'OMDB API', 'GitHub'],
		imageFrontSrc: mauiIcon,
		imageSrc: [mauiScreen, screenshot1, screenshot2, kotlinIcon]
	}
];
