import type { ParamMatcher } from '@sveltejs/kit'

// only accept valid slugs in the URL
export const match: ParamMatcher = (param) => {

   return /^(open-sessions|open-sessies|sessions-ouvertes)$/.test(param);
}