import type { ParamMatcher } from '@sveltejs/kit'

// only accept valid slugs in the URL
export const match: ParamMatcher = (param) => {

   return /^(terms-conditions-sme-portfolio|algemene-voorwaarden-kmo-portfolio|conditions-generales-portefeuille-pme)$/.test(param);
}