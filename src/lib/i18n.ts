import { browser } from '$app/environment';
import { addMessages, init, locale, _ } from 'svelte-i18n';
import { derived } from 'svelte/store';

export type AppLocale = 'nl' | 'en';

const MESSAGES = {
	nl: {
		meta: {
			title: 'Bjarne Vrijsen',
			description:
				'Portfolio van Bjarne Vrijsen, frontend developer met focus op moderne webapplicaties en sterke UI.'
		},
		header: {
			about: 'Over Mij',
			projects: 'Projecten',
			experience: 'Ervaringen',
			contact: 'Contact',
			cv: 'Mijn CV',
			languageLabel: 'Taal'
		},
		hero: {
			intro: 'Hey, ik ben Bjarne Vrijsen',
			rolePrefix: 'En ik ben een',
			role: 'Software Developer',
			description:
				'Ik ben gepassioneerd in het bouwen van webapplicaties die gebruiksvriendelijk, aantrekkelijk en toegankelijk zijn.',
			viewProjects: 'Bekijk projecten',
			contact: 'Neem contact op'
		},
		about: {
			title: 'Over Mij',
			education: 'Tijdens Opleiding:',
			freeTime: 'Vrije tijd:'
		},
		experience: {
			title: 'Ervaringen'
		},
		projects: {
			title: 'Projecten',
			readMore: 'Lees Meer >',
			imageAlt: 'project afbeelding',
			closeModal: 'Sluit venster'
		},
		contact: {
			title: 'Contact',
			introPrefix: 'Stuur mij gerust een mail of een berichtje via',
			linkedinLabel: 'LinkedIn',
			introSuffix: 'als je contact wilt opnemen.',
			sendMail: 'Stuur een mail'
		},
		footer: {
			title: 'Mijn Website',
			rights: 'Alle rechten voorbehouden.'
		}
	},
	en: {
		meta: {
			title: 'Bjarne Vrijsen',
			description:
				'Portfolio of Bjarne Vrijsen, frontend developer focused on modern web applications and strong UI.'
		},
		header: {
			about: 'About Me',
			projects: 'Projects',
			experience: 'Experience',
			contact: 'Contact',
			cv: 'My Resume',
			languageLabel: 'Language'
		},
		hero: {
			intro: 'Hi, I am Bjarne Vrijsen',
			rolePrefix: 'And I am a',
			role: 'Software Developer',
			description:
				'I am passionate about building web applications that are user-friendly, attractive, and accessible.',
			viewProjects: 'View projects',
			contact: 'Get in touch'
		},
		about: {
			title: 'About Me',
			education: 'During studies:',
			freeTime: 'Free time:'
		},
		experience: {
			title: 'Experience'
		},
		projects: {
			title: 'Projects',
			readMore: 'Read More >',
			imageAlt: 'project image',
			closeModal: 'Close dialog'
		},
		contact: {
			title: 'Contact',
			introPrefix: 'Feel free to send me an email or a message on',
			linkedinLabel: 'LinkedIn',
			introSuffix: 'if you would like to get in touch.',
			sendMail: 'Send an email'
		},
		footer: {
			title: 'My Website',
			rights: 'All rights reserved.'
		}
	}
} as const;

addMessages('nl', MESSAGES.nl);
addMessages('en', MESSAGES.en);

const savedLocale = browser ? localStorage.getItem('locale') : null;
const initialLocale: AppLocale = savedLocale === 'en' ? 'en' : 'nl';

init({
	fallbackLocale: 'nl',
	initialLocale
});

export const currentLocale = derived(locale, ($locale): AppLocale => {
	return $locale === 'en' ? 'en' : 'nl';
});

export function setAppLocale(nextLocale: AppLocale) {
	locale.set(nextLocale);
	if (browser) {
		localStorage.setItem('locale', nextLocale);
		document.documentElement.lang = nextLocale;
	}
}

if (browser) {
	document.documentElement.lang = initialLocale;
}

export { _, locale };