import type { ParamMatcher } from '@sveltejs/kit'

// only accept valid slugs in the URL
export const match: ParamMatcher = (param) => {

   return /^(privacy-policy|privacybeleid|politique-de-confidentialite)$/.test(param);
}