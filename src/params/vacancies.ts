import type { ParamMatcher } from '@sveltejs/kit'

// only accept valid slugs in the URL
export const match: ParamMatcher = (param) => {

   return /^(vacancies|vacatures|postes-vacants)$/.test(param);
}