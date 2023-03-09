// Replaces the locale slug in a URL.
//
// If the `full` argument is set to `true`, the full URL is returned as a string.
// e.g. https://mywebsite.com/en/blog/article-1 => https://mywebsite.com/de/blog/article-1
//
// Otherwise (default) the URL relative to the base is returned.
// e.g. https://mywebsite.com/en/blog/article-1 => /de/blog/article-1

import { langSelection } from '$lib/stores'

export const replaceLocaleInUrl = (url: URL, locale: string, full = true): string => {

	const [, , ...rest] = url.pathname.split('/')
	const new_pathname = `/${[locale, ...rest].join('/')}`

	const newUrl = processPathname(url, new_pathname)
	return newUrl.toString()
}
export const changeUrlToLocale = (url: URL, locale: string, full = true): string => {

	langSelection.selectLocale(locale);
	let curSlug;
	langSelection.subscribe(slug => { curSlug = slug })
	curSlug = Object(curSlug);

	const [, , ...rest] = url.pathname.split('/')
	// const new_pathname = `/${[locale, ...rest].join('/')}`
	const new_pathname = curSlug.slug ? `/${[locale, curSlug.slug].join('/')}` : `/${[locale, ...rest].join('/')}`
	
	const newUrl = processPathname(url, new_pathname);
	return newUrl.toString();
}

export const processPathname = (url:URL, new_pathname:string, full = true) => {
	if (!full) {
		return `${new_pathname}${url.search}`
	}

	const newUrl = new URL(url.toString())
	newUrl.pathname = new_pathname
	return newUrl;
}