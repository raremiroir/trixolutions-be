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