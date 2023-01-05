
// Capitalize first letter of string
export const firstLetterCase = (string) => {
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
export const generateUsername = (first_name, last_name) => {
	return `${first_name.replaceAll(' ', '')}.${last_name.replaceAll(' ', '')}`
}

// Url formatter for dynamic pages
export const formatUrl = (string) => {
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