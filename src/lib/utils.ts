const { randomBytes } = await import('node:crypto')

// Capitalize first letter of each word in string
export const titleCase = (str:any) => {
	str = String(str).toLowerCase();
	let splitStr = str.split(' ');
	for (let i = 0; i < splitStr.length; i++) {
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}
	return splitStr.join(' ');
}

// Full day/month Date format
export const formatDateMonthFull = (date:any) => {
	let dateString = String(date).substring(0, 10);
	let year = dateString.substring(0, dateString.indexOf('-'));
	let month = dateString.substring((dateString.indexOf('-') + 1), dateString.indexOf('-') + 3);
	let day = dateString.substring((dateString.indexOf('-') + 4));
	day = day.charAt(0) === '0' ? day.replace('0', '') : day;
	month = month === '1' || month === '01' ? 'Januari'
	: month === '2' || month === '02' ? 'Februari'
	: month === '3' || month === '03' ? 'Maart'
	: month === '4' || month === '04' ? 'April'
	: month === '5' || month === '05' ? 'Mei'
	: month === '6' || month === '06' ? 'Juni'
	: month === '7' || month === '07' ? 'Juli'
	: month === '8' || month === '08' ? 'Augustus'
	: month === '9' || month === '09' ? 'September'
	: month === '10' ? 'Oktober'
	: month === '11' ? 'November'
	: month === '12' ? 'December'
	: month;

	return `${day} ${month}`;
}
// Short d/m Date format
export const formatDateShort = (date:any) => {
	let dateString = String(date).substring(0, 10);
	let month = dateString.substring((dateString.indexOf('-') + 1), dateString.indexOf('-') + 3);
	let day = dateString.substring((dateString.indexOf('-') + 4));

	return `${day}/${month}`;
}
// Short d/m/yyyy format
export const formatDateFull = (date:any) => {
	let dateString = String(date).substring(0, 10);
	let year = dateString.substring(0, dateString.indexOf('-'));
	let month = dateString.substring((dateString.indexOf('-') + 1), dateString.indexOf('-') + 3);
	let day = dateString.substring((dateString.indexOf('-') + 4));

	return `${day}/${month}/${year}`;
}
// Hour format
export const formatTime = (date:any) => {
	let dateString = String(date).substring(11, 20);
	let hour = dateString.substring(0, dateString.indexOf(':'));
	let minute = dateString.substring((dateString.indexOf(':') + 1), dateString.indexOf(':') + 3);
	return `${hour}:${minute}`;
}
// Year format
export const formatYear = (date:any) => {
	let dateString = String(date).substring(0, 10);
	let year = dateString.substring(0, dateString.indexOf('-'));

	return `${year}`;
}

// Generates username from name
export const generateUsername = (first_name:string, last_name:string) => {
	return `${first_name.replaceAll(' ', '')}.${last_name.replaceAll(' ', '')}`
}

// Price formatter
export const formatPrice = (number:number) => {
	return (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Url formatter for dynamic pages
export const formatUrl = (string:string) => {

	let newString = string ? string : ''; 

	newString = replaceAll(newString, '-', '');
	newString = replaceAll(newString, /\?/, '');
	newString = replaceAll(newString, /\…/, '');
	newString = replaceAll(newString, /\./, '');

	newString = replaceAll(newString, ' ', '-');
	newString = newString.toLowerCase();

	return newString;
}

// Replace all override
function replaceAll(str:string, find:any, replace:string) {
	return str.replace(new RegExp((find), 'g'), replace);
 }