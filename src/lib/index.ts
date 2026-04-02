import vueIcon from './assets/vue.png';
import mauiIcon from './assets/maui.png';
import kotlinIcon from './assets/kotlin.png';
import mauiScreen from './assets/maui-screen.jpg';
import screenshot1 from './assets/screenshot-1.png';
import screenshot2 from './assets/screenshot-2.png';
import type { AppLocale } from './i18n';

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

export const aboutParagraphsByLocale: Record<AppLocale, string[]> = {
	nl: [
		'Ik ben Bjarne Vrijsen, recent afgestudeerd in Elektronica-ICT aan de UCLL met als afstudeerrichting ICT met een sterke focus op front-end ontwikkeling en moderne webtechnologieen.',
		'Tijdens mijn studie heb ik veel ervaring opgedaan met frameworks zoals Vue.js en TypeScript, en heb ik verschillende projecten gerealiseerd, waaronder applicaties in .NET MAUI en Kotlin.',
		'Op dit moment ben ik op zoek naar een uitdagende rol als front-end developer waar ik mijn technische vaardigheden verder kan ontwikkelen en kan bijdragen aan innovatieve, gebruiksvriendelijke digitale oplossingen.'
	],
	en: [
		'I am Bjarne Vrijsen, a recent Electronics-ICT graduate from UCLL, specialized in ICT with a strong focus on front-end development and modern web technologies.',
		'During my studies, I gained extensive experience with frameworks such as Vue.js and TypeScript, and built multiple projects including applications in .NET MAUI and Kotlin.',
		'I am currently looking for a challenging front-end developer role where I can further grow my technical skills and contribute to innovative, user-friendly digital solutions.'
	]
};

export const freeTimeSkillsByLocale: Record<AppLocale, string[]> = {
	nl: ['Godot', 'Java', 'Python', 'React'],
	en: ['Godot', 'Java', 'Python', 'React']
};

export const experiencesByLocale: Record<AppLocale, Experience[]> = {
	nl: [
		{
			title: 'Wisemen',
			periode: 'Februari 2024 - Mei 2024',
			functie: 'Stagiair Frontend Developer',
			locatie: 'Diepenbeek',
			uitleg:
				'Tijdens mijn stage bij Wisemen werkte ik aan een project waarin ik een webapplicatie ontwikkelde met Vue.js en TypeScript.',
			technieken: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'GitHub', 'Google OAuth']
		}
	],
	en: [
		{
			title: 'Wisemen',
			periode: 'February 2024 - May 2024',
			functie: 'Frontend Developer Intern',
			locatie: 'Diepenbeek',
			uitleg:
				'During my internship at Wisemen, I worked on a project where I developed a web application using Vue.js and TypeScript.',
			technieken: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'GitHub', 'Google OAuth']
		}
	]
};

export const projectsByLocale: Record<AppLocale, Project[]> = {
	nl: [
		{
			title: 'Wiselate',
			descriptionShort:
				'Dit is mijn stageproject bij Wisemen waarin ik een webapplicatie ontwikkelde om websitevertalingen eenvoudiger te beheren.',
			descriptionLong: [
				'Tijdens mijn stage bij Wisemen werkte ik aan een project waarbij ik een webapplicatie ontwikkelde met Vue.js en TypeScript.',
				'Het doel van het project was om vertalingen voor een website eenvoudig te beheren. Hiervoor werd de GitHub API gebruikt om JSON-bestanden uit een bestaand project op te halen en vertalingen te bewerken of toe te voegen.',
				'Daarnaast gebruikte ik Tailwind CSS voor de styling van de applicatie. Voor de backend maakte ik gebruik van Supabase om gebruikers op te slaan.',
				'Ik gebruikte ook GitHub voor versiebeheer en Google OAuth voor authenticatie.'
			],
			link: 'https://example.com/wiselate',
			tags: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'GitHub API', 'Google OAuth'],
			imageFrontSrc: vueIcon,
			imageSrc: [screenshot2, screenshot1, kotlinIcon, mauiScreen]
		},
		{
			title: 'Movie App',
			descriptionShort:
				'Een app die ik tijdens mijn opleiding in .NET MAUI maakte. De app toont een overzicht van de populairste films en series van het moment.',
			descriptionLong: [
				'Tijdens mijn opleiding ontwikkelde ik een mobiele applicatie in .NET MAUI die de populairste films en series toont.',
				'De applicatie haalt data op via de OMDB API en toont die in een overzichtelijke lijst. De gebruiker kan doorklikken op een film voor meer details.',
				'Ik gebruikte ook SQLite om data lokaal op te slaan, zodat de app bruikbaar blijft zonder internetverbinding.',
				'Daarnaast kunnen gebruikers zoeken naar films en series en deze toevoegen aan hun favorieten. Dankzij .NET MAUI werkt de app op zowel Android als iOS.'
			],
			link: 'https://example.com/movie-app',
			tags: ['.NET MAUI', 'SQLite', 'OMDB API', 'GitHub'],
			imageFrontSrc: mauiIcon,
			imageSrc: [mauiScreen, screenshot1, screenshot2, kotlinIcon]
		}
	],
	en: [
		{
			title: 'Wiselate',
			descriptionShort:
				'This is my internship project at Wisemen where I developed a web app to make website translation management easier.',
			descriptionLong: [
				'During my internship at Wisemen, I worked on a project where I developed a web application using Vue.js and TypeScript.',
				'The goal of the project was to simplify translation management for websites. We used the GitHub API to retrieve JSON files from an existing project and update or add translations.',
				'I also used Tailwind CSS for styling. For the backend, I used Supabase to manage user data.',
				'I used GitHub for version control and Google OAuth for user authentication.'
			],
			link: 'https://example.com/wiselate',
			tags: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'GitHub API', 'Google OAuth'],
			imageFrontSrc: vueIcon,
			imageSrc: [screenshot2, screenshot1, kotlinIcon, mauiScreen]
		},
		{
			title: 'Movie App',
			descriptionShort:
				'An app I built during my studies in .NET MAUI. It shows an overview of currently popular movies and series.',
			descriptionLong: [
				'During my studies, I built a mobile app in .NET MAUI that displays popular movies and series.',
				'The app fetches data from the OMDB API and presents it in a clear list view. Users can open a movie to see more details.',
				'I also used SQLite to store data locally, allowing users to keep using the app without an internet connection.',
				'Users can search for movies and series and add them to favorites. Built with .NET MAUI, the app runs on both Android and iOS.'
			],
			link: 'https://example.com/movie-app',
			tags: ['.NET MAUI', 'SQLite', 'OMDB API', 'GitHub'],
			imageFrontSrc: mauiIcon,
			imageSrc: [mauiScreen, screenshot1, screenshot2, kotlinIcon]
		}
	]
};

export const experiences = experiencesByLocale.nl;
export const projects = projectsByLocale.nl;

