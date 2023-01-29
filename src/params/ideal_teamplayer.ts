import type { ParamMatcher } from '@sveltejs/kit'

// only accept valid slugs in the URL
export const match: ParamMatcher = (param) => {

   return /^(ideal-team-player|ideale-teamplayer|coequipier-ideal)$/.test(param);
}