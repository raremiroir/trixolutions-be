import type { ParamMatcher } from '@sveltejs/kit'

// only accept valid slugs in the URL
export const match: ParamMatcher = (param) => {

   return /^(lencioni-deepdive-level-2|lencioni-deepdive-niveau-2)$/.test(param);
}