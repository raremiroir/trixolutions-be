import type { Site } from '$lib/types/site';
import type { DD } from '$lib/types/dd';
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

const facebookPageName = PUBLIC_FACEBOOK_PAGE;
const facebookAuthorPageName = PUBLIC_FACEBOOK_AUTHOR_PAGE;

const siteTitle = 'Trixolutions';
const slogan = 'Training, Coaching & Consultancy';
const tagLine = 'Opleidingen en Training in Lencioni Teamcoaching en Consultancy';

export const siteConfig: Site.Config = {
	url: dev ?'http://localhost:3000' : PUBLIC_SITE_URL,
	title: siteTitle,
	subtitle: `${siteTitle} - ${slogan}`,
	description: `${siteTitle} - ${tagLine}`,
	lang: 'nl',
	timeZone: 'Europe/Brussels',
	since: 2023,
	cover: SiteCover,
	author: {
	  name: 'Mist Media',
	  status: 'Developing',
	  website: 'https://mistmedia.be',
	  github: 'https://github.com/raremiroir',
	  email: 'miro@mistmedia.be',
	  bio: `Made with 💪 by Mist Media.`,
	},
 };

export const website = {
	author: 'Miro Storm',
	ogLanguage: 'nl-BE',
	siteLanguage: 'nl-BE',
	domain: PUBLIC_DOMAIN,
	siteTitle: siteTitle,
	siteShortTitle: siteTitle,
	description: `${siteTitle} - ${tagLine}`,
	siteUrl: PUBLIC_SITE_URL,
	backgroundColor: '#F0F0EF',
	themeColor: '#0B3259',
	contactEmail: PUBLIC_CONTACT_EMAIL,
	facebookAuthorPage: `https://www.facebook.com/${facebookAuthorPageName}`,
	facebookAuthorPageName,
	facebookPage: `https://www.facebook.com/${facebookPageName}`,
	facebookPageName,
	githubPage: PUBLIC_GITHUB_PAGE,
	linkedinProfile: PUBLIC_LINKEDIN_PROFILE,
	};