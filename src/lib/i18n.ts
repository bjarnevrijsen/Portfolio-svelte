import { browser } from '$app/environment';
import { addMessages, init, locale, _ } from 'svelte-i18n';
import { derived } from 'svelte/store';
import nl from '../locales/nl.json';
import en from '../locales/en.json';

export type AppLocale = 'nl' | 'en';

addMessages('nl', nl);
addMessages('en', en);

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