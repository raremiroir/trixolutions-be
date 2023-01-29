import type { ParamMatcher } from '@sveltejs/kit'

// only accept valid slugs in the URL
export const match: ParamMatcher = (param) => {

   return /^(5-dysfunctions-teamwork|5-frustraties-teamwerk|5-dysfonctions-travail-equipe)$/.test(param);
}