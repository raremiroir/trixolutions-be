// Import supabase
import '$lib/db';

// Import svelte items
import type { Handle, HandleServerError, RequestEvent } from '@sveltejs/kit'
import { redirect, error } from '@sveltejs/kit';
import { randomUUID } from 'crypto';

// Import i18n
import { detectLocale, i18n, isLocale } from '$i18n/i18n-util'
import { loadAllLocales } from '$i18n/i18n-util.sync'
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors'
import type { Locales } from './i18n/i18n-types';

// Import sentry
import * as Sentry from '@sentry/node'
import { BrowserTracing } from '@sentry/tracing';


// Define all locales
const myLocales = ['nl', 'fr', 'en']
// Define main (first) slugs in urls for each locale
const mainSlugs = {
	"nl": ['open-sessies', 'contact', 'blog', 'over-ons', 'referenties'],
	"fr": ['sessions-ouvertes', 'a-propos', 'references'],
	"en": ['open-sessions', 'about-us']
}

const allSlugs = Object.values(mainSlugs).flat();

// Load locales
loadAllLocales()
const L = i18n()

// Get preferred locale function
const getPreferredLocale = ({ request }: RequestEvent) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request)

	return detectLocale(acceptLanguageDetector)
}

// Initialize Sentry
Sentry.init({
	dsn: "https://60379ddfe2fc4d5b867bba60a207fcab@o4504485227659264.ingest.sentry.io/4504712253014017",
	integrations: [new BrowserTracing],

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// Adjust this value in production
   tracesSampleRate: 1.0,
});

export const handle: Handle = async ({ event, resolve }) => {
	const params = event.params;
	if (event.url.pathname === "//") {
		throw redirect(301, `${event.url.origin}`);
	}
	const path = event.url.pathname;

	const splitPath = path.split('/');
	const firstParam = splitPath[1];
	// console.log(splitPath, firstParam)

	let locale:Locales = 'nl'
	let restPath = '';

	if (isLocale(firstParam) || (allSlugs.includes(firstParam) && firstParam !== '') || firstParam === '' || firstParam === '404') {
		if (isLocale(firstParam)) {
			// Define lang according to params
			locale = firstParam as Locales;
			restPath = splitPath.length > 2 ? splitPath.slice(2).join('/') : '';
		}
		else if(allSlugs.includes(firstParam)  && firstParam !== ''){
			Object.keys(mainSlugs).forEach(key => {
				mainSlugs[key].forEach((slug:string) => {
					if (firstParam === slug) {
						locale = `${key}` as Locales;
						restPath = splitPath.length > 2 ? splitPath.slice(2).join('/') : '';
						// Redirect to new path
						throw redirect(301, `/${locale}/${firstParam}/${restPath}`);
					}
				})
			})
		} else if (firstParam === '') {
			locale = getPreferredLocale(event);
			// Redirect to new path
			throw redirect(301, `/${locale}`);
		} else if ( firstParam === '404' ) {
			locale = getPreferredLocale(event);
			// Redirect to new path
			throw redirect(301, `/${locale}/404`);
		} else {
			throw redirect(301, `/404`);
		}

		const LL = L[locale];
		event.locals.locale = locale;
		event.locals.LL = LL;
		
		return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', locale) });

	} else if (
		path.startsWith('/api/') ||
		path === ('/sitemap.xml') ||
		path.startsWith('/admin')
	){
		return await resolve(event);
	} else {
		throw redirect(302, '/404');
	}
}

export const handleError:HandleServerError = ({ error, event }) => {
	const errorId = randomUUID();
	Sentry.captureException(error, { event, errorId });
	return {
		message: `Whoops! 🥺`,
		errorId,
	}
}