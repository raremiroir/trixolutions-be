import type { ParamMatcher } from '@sveltejs/kit'

// only accept valid slugs in the URL
export const match: ParamMatcher = (param) => {

   return /^(hybrid-lencioni-learning-track|hybride-lencioni-leertraject|traject-hybride-lencioni)$/.test(param);
}