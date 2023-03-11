
// Capitalize first letter of string
export const firstLetterCase = (string:string) => {
	return string.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
 }

// Capitalize first letter of each word in string
export const titleCase = (str:string) => {
	return str.replace(/\b\w/g, (c) => c.toUpperCase());
}


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
