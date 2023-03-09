import type { Site } from '$lib/types/site';
import { dev } from '$app/environment'

import {
	PUBLIC_CONTACT_EMAIL,
	PUBLIC_FACEBOOK_AUTHOR_PAGE,
	PUBLIC_FACEBOOK_PAGE,
	PUBLIC_GITHUB_PAGE,
	PUBLIC_LINKEDIN_PROFILE,
	PUBLIC_SITE_URL,
	PUBLIC_DOMAIN
} from '$env/static/public';

import SiteCover from '$img/home/home.png';
import SiteIcon from '$lib/assets/logo/icon-dark-512.png'
import type { WebsiteConfig } from './types';

const facebookPageName = PUBLIC_FACEBOOK_PAGE;
const facebookAuthorPageName = PUBLIC_FACEBOOK_AUTHOR_PAGE;

const siteTitle = 'Trixolutions';
const slogan = 'Training, Coaching & Consultancy';
const tagLine = 'Opleidingen en Training in Lencioni Teamcoaching en Consultancy';

export const website:WebsiteConfig = {

	title: siteTitle,
	slogan: slogan,
	tagLine: tagLine,
	description: `${siteTitle} - ${tagLine}`,

	logo: SiteCover,
	icon: SiteIcon,

	lang: 'nl',
	ogLanguage: 'nl-BE',
	siteLanguage: 'nl-BE',

	since: 2023,
	timeZone: 'Europe/Brussels',

	siteUrl: PUBLIC_SITE_URL,
	domain: PUBLIC_DOMAIN,

	created_on: '2022-10-01',
	updated_on: '2023-03-10',

	themeColor: '#0B3259',
	backgroundColor: '#F0F0EF',

	founder: {
		name: 'Tom van Dorst',
		title: 'CEO / Trainer',
		status: 'Owner',
		email: 'tomvandorst@trixolutions.be'
	},

	author: {
		name: 'Mist Media',
		status: 'Developing',
		website: 'https://mistmedia.be',
		github: 'https://github.com/raremiroir',
		email: 'miro@mistmedia.be',
		bio: `Made with 💪 by Mist Media.`,
	},

	contactEmail: PUBLIC_CONTACT_EMAIL,

	facebookAuthorPage: `https://www.facebook.com/${facebookAuthorPageName}`,
	facebookAuthorPageName: siteTitle,
	facebookPage: `https://www.facebook.com/${facebookPageName}`,
	facebookPageName: siteTitle,
	githubPage: PUBLIC_GITHUB_PAGE,
	linkedinProfile: `https://linkedin.com/${PUBLIC_LINKEDIN_PROFILE}`,

	address: {
		street: 'Krommelei',
		number: '14',
		postalCode: '2110',
		city: 'Wijnegem',
		province: 'Antwerp',
		country: 'Belgium'
	}
};


export const siteConfig: Site.Config = {
	url: dev ?'http://localhost:3000' : website.siteUrl,
	title: website.title,
	subtitle: website.description,
	description: website.description,
	lang: website.lang,
	timeZone: website.timeZone,
	since: website.since,
	cover: SiteCover,
	author: {
	  name: website.author.name,
	  status: website.author.status,
	  website: website.author.website,
	  github: website.author.github,
	  email: website.author.email,
	  bio: website.author.bio,
	},
 };
