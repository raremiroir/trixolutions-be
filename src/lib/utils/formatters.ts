import type { Locales } from "$i18n/i18n-types";
import { importNamespaceAsync } from "$i18n/i18n-util.async";
import { baseLocale, locales } from "$i18n/i18n-util";


// Capitalize first letter of string
export const firstLetterCase = (string:string) => {
	return string.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
 }

 export const titleCase = (str: string) => {
	return str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
 };


// Url formatter for dynamic pages
export const formatUrl = (string:string) => {
	const specialChars = /[.?!,“”()'ë'"<>%&]/g;
	const accentMap: {[key: string]: string} = {
	  'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'à': 'a', 'è': 'e', 'ì': 'i', 'ò': 'o', 'ù': 'u',
	  'â': 'a', 'ê': 'e', 'î': 'i', 'ô': 'o', 'û': 'u', 'ä': 'a', 'ë': 'e', 'ï': 'i', 'ö': 'o', 'ü': 'u',
	  'ã': 'a', 'ñ': 'n', 'õ': 'o', 'ç': 'c'
	};
	const newString = string.toLowerCase()
	  .replace(specialChars, '')	// Remove specialChars
	  .replace(/\s+/g, '-')			// Remove whitespace with -
	  .replace(/[^\x00-\x7F]/g, (char) => accentMap[char] || char); // Replace accented chars with regular chars
	return newString;
 };

 // Price formatter
export const formatPrice = (number:number) => {
	return (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


// Regex pattern formatter
export const formatRegex = {
	// slugs for param matchers
	slugPattern: function (slugs:string[]) {
		return new RegExp(`^(${slugs.join('|')})$`);
	}
}



type NavValues = {[key in Locales]: any};

let nav: any = {}
locales.forEach(async (locale: Locales) => {
	nav[locale] = await importNamespaceAsync(locale, 'nav');
})

// Param values object formatter
export const getParamValues = async (pageRef:string = 'home', depth: string[] = []) => {
	const depthAmount = depth.length;
	let paramValues:any = {};

	switch (depthAmount) {
		case 1:
			locales.forEach((locale: Locales) => {
				paramValues[locale] = nav[locale][depth[0]][pageRef].slug;
			})
			break;
		case 2:
			locales.forEach((locale: Locales) => {
				paramValues[locale] = nav[locale][depth[0]][depth[1]][pageRef].slug;
			})
			break;
		case 3:
			locales.forEach((locale: Locales) => {
				paramValues[locale] = nav[locale][depth[0]][depth[1]][depth[2]][pageRef].slug;
			})
			break;
		default:
			locales.forEach((locale: Locales) => {
				paramValues[locale] = nav[locale][pageRef].slug;
			})
			break;
	}
	
	return paramValues;
}