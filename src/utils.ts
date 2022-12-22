// replaces the locale slug in a relative url
// e.g. /en/blog/article-1 => /de/blog/article-1
export const replaceLocaleInUrl = ({ pathname, search }: Location, locale: string): string => {
	const [, , ...rest] = pathname.split('/')
	return `/${[locale, ...rest].join('/')}${search}`
}

// Capitalize first letter of each word in string
export const titleCase = (str:string) => {
	let splitStr = str.toLowerCase().split(' ');
	for (let i = 0; i < splitStr.length; i++) {
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}
	return splitStr.join(' ');
}

// Date format
export const formatDateMonthFull = (date:string) => {
	let day = date.substring(0, date.indexOf('/'));
	let month = date.substring((date.indexOf('/') + 1), date.indexOf('/', date.indexOf('/') + 1));
	// let year = date.substring(date.indexOf('/', date.indexOf('/') + 1) + 1);
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