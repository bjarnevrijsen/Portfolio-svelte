import vueIcon from './assets/vue.png';
import mauiIcon from './assets/maui.png';
import kotlinIcon from './assets/kotlin.png';
import mauiScreen from './assets/maui-screen.jpg';
import screenshot1 from './assets/screenshot-1.png';
import screenshot2 from './assets/screenshot-2.png';

export type Project = {
	title: string;
	descriptionShort: string;
	link: string;
	tags: string[];
	imageFrontSrc: string;
	imageSrc?: string[];
};

export type SocialLink = {
	label: string;
	href: string;
	icon: string;
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
	location: 'Diepenbeek, België',
};

export const socials: SocialLink[] = [
	{ label: 'GitHub', href: 'https://github.com/yourusername', icon: '🐙' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/bjarne-vrijsen-4283a31a2/', icon: '🔗' },
	{ label: 'Twitter', href: 'https://twitter.com/yourusername', icon: '🐦' },
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
	'C',
];

export const experiences: Experience[] = [
	{
		title: 'Wisemen',
		periode: 'Februari 2024 - Mei 2024',
		functie: 'Stagiair Frontend Developer',
		locatie: 'Diepenbeek',
		uitleg: 'Tijdens mijn stage bij Wisemen heb ik gewerkt aan een project waarbij ik een webapplicatie heb ontwikkeld. Ik heb hierbij gebruik gemaakt van Vue.js en TypeScript.',
		technieken: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Github', 'Google OAuth'],
	},
];

export const projects: Project[] = [
	{
		title: 'Wiselate',
		descriptionShort: 'Dit is mijn stageproject bij Wisemen waarbij ik een webapplicatie heb ontwikkeld voor het beheren van vertalingen.',
		link: 'https://example.com/wiselate',
		tags: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Github API', 'Google OAuth'],
		imageFrontSrc: vueIcon,
		imageSrc: [screenshot1, screenshot2, kotlinIcon, mauiScreen],
	},
	{
		title: 'Movie App',
		descriptionShort: 'Een app die ik heb gemaakt tijdens mijn opleiding in .NET MAUI met filmdata van de OMDB API.',
		link: 'https://example.com/movie-app',
		tags: ['.NET Maui', 'SQLite', 'OMDB API', 'Github'],
		imageFrontSrc: mauiIcon,
		imageSrc: [mauiScreen, screenshot1, screenshot2, kotlinIcon],
	},
];

