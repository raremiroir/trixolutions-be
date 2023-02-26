
// Capitalize first letter of string
export const firstLetterCase = (string:string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
 }

// Capitalize first letter of each word in string
export const titleCase = (str:string) => {
	let splitStr = str.toLowerCase().split(' ');
	for (let i = 0; i < splitStr.length; i++) {
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}
	return splitStr.join(' ');
}


// Generates username from name
export const generateUsername = (first_name:string, last_name:string) => {
	return `${first_name.replaceAll(' ', '')}.${last_name.replaceAll(' ', '')}`
}

// Url formatter for dynamic pages
export const formatUrl = (string:string) => {
	let newString = String(string).toLowerCase();
	newString = newString.replaceAll('.', '');
	newString = newString.replaceAll('?', '');
	newString = newString.replaceAll('!', '');
	newString = newString.replaceAll(',', '');
	newString = newString.replaceAll('“', '');
	newString = newString.replaceAll('”', '');
	newString = newString.replaceAll('(', '');
	newString = newString.replaceAll(')', '');
	newString = newString.replaceAll(`'`, '');
	newString = newString.replaceAll(`ë`, 'e');
	newString = newString.replaceAll(' ', '-');
	return newString;
}