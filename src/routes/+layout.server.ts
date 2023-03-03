import type { LayoutServerLoad } from './$types'

import { cookiePrefs } from '$lib/stores';

export const load: LayoutServerLoad = ({ locals: { locale, LL }, cookies }) => {

	try {
		const cookiePrefsSet = cookies.get('cookies_prefs_set');
		const cookieFunctional = cookies.get('cookies_functional');
		const cookieExperience = cookies.get('cookies_experience');

		cookiePrefs.set({
			functional: true,
			experience: cookies.get('cookies_experience') === 'true' ? true : false,
		});
		
	} catch (err) {
		console.log(err);
	}
	// console.info(LL.log({ fileName: '+layout.server.ts' }))

	// pass locale information from "server-context" to "shared server + client context"
	return { locale }
}