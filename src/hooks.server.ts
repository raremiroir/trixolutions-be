import '$lib/db';

import { detectLocale, i18n, isLocale } from '$i18n/i18n-util'
import { loadAllLocales } from '$i18n/i18n-util.sync'
import { error, type Handle, type RequestEvent } from '@sveltejs/kit'
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors'
import type { Locales } from './i18n/i18n-types';


// Define all locales
const myLocales = ['nl', 'fr', 'en']
// Define main (first) slugs in urls for each locale
const mainSlugs = {
	nl: ['open-sessies', 'contact', 'blog', 'over-ons', 'referenties'],
	fr: ['sessions-ouvertes', 'a-propos', 'references'],
	en: ['open-sessions', 'about-us']
}


loadAllLocales()
const L = i18n()

export const handle: Handle = async ({ event, resolve }) => {

	console.log(event.params)
	let lang = event.params.lang as Locales;
	let subPath;
	let rest;
	if (lang) {
		[, , subPath, ...rest] = event.url.pathname.split('/')
	} else {
		[, subPath, ...rest] = event.url.pathname.split('/')
	}
	// read language slug, subpath and rest path
	
	// console.log('lang param:', lang)
	// console.log('subPath:', subPath)
	// console.log('restPath:', ...rest)

	let locale = lang as Locales;
	if (!lang || !isLocale(lang) || lang === undefined) {

      const restString = [...rest].join('/')

      locale = isLocale(lang) ? (lang as Locales) : getPreferredLocale(event)
		// console.log('preferred locale: ', locale);
      let new_path = `/${locale}`

      // Check if subpath exists
      if (subPath) {
         // Check if subpath has a dutch string
         if (mainSlugs.nl.includes(subPath)) {
            locale = 'nl';
				lang = 'nl'
         // Check if subpath has a french string
         } else if (mainSlugs.fr.includes(subPath)) {
            locale = 'fr';
				lang = 'fr'
         // Check if subpath has an english string
         } else if (mainSlugs.en.includes(subPath)) {
            locale = 'en';
				lang = 'en'
         } else {
				return new Response(null, {
					status: 302,
					headers: { Location: `/${locale}` },
				})
			}
			event.params.lang = lang;
         // If the reststring is empty, dont append it, otherwise append it to the new path
         if (restString !== ('/' || '')) {
            new_path = `/${locale}/${subPath}/${restString}`
         } else {
            new_path = `/${locale}/${subPath}`
         }
      }
		// console.log('detected locale: ', locale);
		// console.log('new path: ', new_path);
		
      // Redirect to new path
		return new Response(null, {
					status: 301,
					headers: { Location: `${new_path}` },
				})
   } else {
		locale = lang as Locales;
	}
	locale = locale as Locales;

	// if slug is not a locale, use base locale (e.g. api endpoints)
	const LL = L[locale]

	// bind locale and translation functions to current request
	event.locals.locale = locale
	event.locals.LL = LL


	// replace html lang attribute with correct language
	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', locale) })
}

const getPreferredLocale = ({ request }: RequestEvent) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request)

	return detectLocale(acceptLanguageDetector)
}