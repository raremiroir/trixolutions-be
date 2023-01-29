import type { ParamMatcher } from '@sveltejs/kit'

// only accept valid slugs in the URL
export const match: ParamMatcher = (param) => {

   return /^(terms-conditions|algemene-voorwaarden|conditions-generales)$/.test(param);
}