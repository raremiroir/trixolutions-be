import type { ParamMatcher } from '@sveltejs/kit'

// only accept valid slugs in the URL
export const match: ParamMatcher = (param) => {

   return /^(meetings-are-deadly|vergaderingen-zijn-dodelijk|reunions-tuent)$/.test(param);
}