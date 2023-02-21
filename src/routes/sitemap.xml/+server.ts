import type { RequestHandler } from '@sveltejs/kit';
import { pages } from '$lib/constants/pages'; // or wherever your relevant data is
import { siteConfig } from '$lib/config/website'; // or wherever your relevant data is

import type { Locales } from '$i18n/i18n-types';

interface Page {
	[key: string]: any;
	slug: string;
	priority: number;
	altLocalePages: Object;
};

interface SitemapItem {
	url: string;
	priority: number;
	altLocales: Object;
}

type Pages = Record<string, Page>;
type SitemapObject = Record<string, SitemapItem[]>;
type SitemapItemArray = SitemapItem[];

const locales: Locales[] = ['nl', 'fr', 'en'];
const localeCodes = {
	nl: 'nl-BE',
   fr: 'fr-BE',
   en: 'en-GB',
}
const url = siteConfig.url;

const generateSitemapObject = (pages: Pages): SitemapObject => {
	let sitemapObject: SitemapObject = {};

	locales.forEach((locale) => {
		let localePages: SitemapItemArray = [];

		Object.keys(pages)
		.forEach((url) => {
			if (url.startsWith(`/${locale}`)) {
				localePages.push({
					url: url,
					priority: pages[url].priority,
					altLocales: pages[url].altLocalePages,
				});
			}
		})
		sitemapObject[locale] = localePages;
	});
	return sitemapObject;
}

// TODO add blogposts

const generateSitemap = (sitemapObject: SitemapObject) => {

	const today = new Date().toISOString().split('T')[0];

	const lastmod = today;
	const changefreq = 'monthly';

	let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
	xml += `<urlset 
		xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
		xmlns:xhtml="https://www.w3.org/1999/xhtml"
		xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
		xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
		xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
		xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">\n`;
	

	// Iterate through locales
	locales.forEach(locale => {

		xml += `<url>\n`;
		xml += `	<loc>${url}/${locale}</loc>\n`;
		xml += `	<lastmod>${lastmod}</lastmod>\n`;
		xml += `	<changefreq>${changefreq}</changefreq>\n`;
		xml += `	<priority>1</priority>\n`;
		xml += ` <xhtml rel='alternate' hrefLang='${localeCodes[locale]}' href='${url}/${locale}'/>`
		locales.forEach(lang => {
			if (locale !== lang) {
				xml += ` <xhtml rel='alternate' hrefLang='${localeCodes[lang]}' href='${url}/${lang}'/>`
			}
		});
		xml += `</url>\n`;

		// Iterate trough sitemap object
		Object.keys(sitemapObject).forEach(key => {
			if (key === locale) {

				const obj = sitemapObject[key];
				obj.forEach(page => {

					const urlSplit = page.url.split('/');
					const pathName = urlSplit[urlSplit.length - 1];

					xml += `<url>\n`;
					xml += `	<loc>${url}${page.url}</loc>\n`;
					xml += `	<lastmod>${lastmod}</lastmod>\n`;
					xml += `	<changefreq>${changefreq}</changefreq>\n`;
					xml += `	<priority>${page.priority}</priority>\n`;
					xml += ` <xhtml rel='alternate' hrefLang='${localeCodes[locale]}' href='${url}${page.url}'/>`
			
					Object.keys(page.altLocales).forEach(lang => {
						xml += `	<xhtml rel='alternate' hrefLang='${localeCodes[lang]}' href='${url}${page.altLocales[lang]}'/>`
					})
					xml += `</url>\n`;
				})
			}
		})

	})
	xml += `</urlset>\n`;
	return xml;
}

const sitemapObject = generateSitemapObject(pages as Pages);
// console.log(sitemapObject);
const sitemap = generateSitemap(sitemapObject);
// console.log(sitemap)

export const GET: RequestHandler = async () => {

	return new Response(sitemap,
	{
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	})
};