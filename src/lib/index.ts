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
		functie: 'Stagiare Frontend Developer',
		locatie: 'Diepenbeek',
		uitleg: 'Tijdens mijn stage bij Wisemen heb ik gewerkt aan een project waarbij ik een webapplicatie heb ontwikkeld. Ik heb hierbij gebruik gemaakt van Vue.js en TypeScript.',
		technieken: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Tailwind CSS', 'Github', 'Google OAuth'],
	},
];

export const projects: Project[] = [
	{
		title: 'Wiselate',
		descriptionShort: 'Dit is mijn Stage project bij Wisemen waarbij ik een webapplicatie heb ontwikkeld voor het beheren van vertalingen voor een website te vergemakkelijken.',
		descriptionLong: [
			'Tijdens mijn stage bij Wisemen heb ik gewerkt aan een project waarbij ik een webapplicatie heb ontwikkeld. Ik heb hier voornamelijk gebruik gemaakt van Vue.js en TypeScript.',
			'De bedoeling van het project was om een webapplicatie te maken voor het beheren van vertalingen voor een website te vergemakkelijken, hiervoor werd de Github API gebruikt om de JSON bestanden uit een bestaand project te halen en deze gebruiken om de vertalingen aan te passen of toe te voegen.',
			'Daarnaast heb ik ook gebruik gemaakt van Tailwind CSS voor de styling van de applicatie. Voor de backend van de applicatie heb ik gebruik gemaakt van Supabase voor het opslaan van gebruikers.',
			'Verder heb ik ook gebruik gemaakt van Github voor het versiebeheer van de applicatie en Google OAuth voor de authenticatie van de gebruikers.',
		],
		link: 'https://example.com/wiselate',
		tags: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Github API', 'Google OAuth'],
		imageFrontSrc: vueIcon,
		imageSrc: [screenshot2, screenshot1, kotlinIcon, mauiScreen],
	},
	{
		title: 'Movie App',
		descriptionShort: 'Een app die ik gemaakt heb tijdens mijn opleiding in .NET MAUI. De app geeft een overzicht van de populairste films en series van het moment.',
		descriptionLong: [
			'Tijdens mijn opleiding heb ik een applicatie gemaakt in .NET MAUI. Deze applicatie is een mobiele applicatie die een overzicht geeft van de populairste films en series van het moment. De applicatie haalt de data op via de OMDB API wat een gratis API is die gegevens van films kan ophalen en toont deze in een overzichtelijke lijst. De gebruiker kan doorklikken op een film om meer informatie te zien over de film.',
			'In de App heb ik ook gebruikt gemaakt van SQLite om de data lokaal op te slaan. Hierdoor kan de gebruiker de app ook gebruiken zonder internetverbinding.',
			'Verder kun je in de app ook zoeken naar films en series en deze toevoegen aan je favorieten lijst. De app is gemaakt in .NET MAUI wat een cross-platform framework is waarmee je een applicatie kan maken voor zowel Android als iOS.',
		],
		link: 'https://example.com/movie-app',
		tags: ['.NET Maui', 'SQLite', 'OMDB API', 'Github'],
		imageFrontSrc: mauiIcon,
		imageSrc: [mauiScreen, screenshot1, screenshot2, kotlinIcon],
	},
];

