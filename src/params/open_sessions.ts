import type { ParamMatcher } from '@sveltejs/kit'
import { formatRegex } from '$lib/utils';

// list of valid slugs
const validSlugs = ['open-sessions', 'open-sessies', 'sessions-ouvertes'];
const pattern = formatRegex.slugPattern(validSlugs);

// only accept valid slugs in the URL
export const match: ParamMatcher = (param) => {pattern
   return pattern.test(param);
}