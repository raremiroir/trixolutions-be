import type { ParamMatcher } from '@sveltejs/kit'
import { formatRegex } from '$lib/utils';

// list of valid slugs
const validSlugs = ['meetings-are-deadly', 'vergaderingen-zijn-dodelijk', 'reunions-tuent'];
const pattern = formatRegex.slugPattern(validSlugs);

// only accept valid slugs in the URL
export const match: ParamMatcher = (param) => {
   return pattern.test(param);
}