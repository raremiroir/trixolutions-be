// Import svelte handles
import type { Handle, RequestEvent } from '@sveltejs/kit'
// Import i18n variables
import { detectLocale, i18n, isLocale } from '$i18n/i18n-util'
import { loadAllLocales } from '$i18n/i18n-util.sync'
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors'
// Import pocketbase hooks
import PocketBase from 'pocketbase'; 
// Import utils
import { serializeNonPOJOs } from './lib/utils'

loadAllLocales()
const L = i18n()

/** @type {import('@sveltejs/kit').Handle} */
export const handle: Handle = async ({ event, resolve }) => {
	// i18n
		// read language slug
	const [, lang] = event.url.pathname.split('/')

	// redirect to base locale if no locale slug was found
	if (!lang) {
		const locale = getPreferredLocale(event)

		return new Response(null, {
			status: 302,
			headers: { Location: `/${locale}` },
		})
	}

	// if slug is not a locale, use base locale (e.g. api endpoints)
	const locale = isLocale(lang) ? (lang as Locales) : getPreferredLocale(event)
	const LL = L[locale]

	// bind locale and translation functions to current request
	event.locals.locale = locale
	event.locals.LL = LL

	console.info(LL.log({ fileName: 'hooks.server.ts' }))

	// Create PocketBase
	event.locals.pb = new PocketBase('http://127.0.0.1:8090')
	// Load cookie if set
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')
	// Is auth valid
	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model)
	} else {
		event.locals.user = undefined
	}

	const response = await resolve(event)
	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }))

	// replace html lang attribute with correct language
	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', lang) }), response
}

const getPreferredLocale = ({ request }: RequestEvent) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request)

	return detectLocale(acceptLanguageDetector)
}