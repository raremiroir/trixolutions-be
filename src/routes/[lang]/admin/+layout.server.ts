import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = ({ locals: { locale, LL }, locals }) => {
	// console.info(LL.log({ fileName: '+layout.server.ts' }))
	// console.log(locals);

	if (locals.user) {
		return {
			user: locals.user,
			locale
		}
	}

	// pass locale information from "server-context" to "shared server + client context"
	return { 
		user: undefined,
		locale 
	}
}