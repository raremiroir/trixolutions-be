import type { ParamMatcher } from '@sveltejs/kit'

// only accept valid slugs in the URL
export const match: ParamMatcher = (param) => {

   return /^(free-open-info-sessions|gratis-open-infosessies|sessions-info-gratuites-ouvertes)$/.test(param);
}