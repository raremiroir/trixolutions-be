import type { Site } from '$lib/types/site';
import type { DD } from '$lib/types/dd';

import {
	PUBLIC_CONTACT_EMAIL,
	PUBLIC_FACEBOOK_AUTHOR_PAGE,
	PUBLIC_FACEBOOK_PAGE,
	PUBLIC_GITHUB_PAGE,
	PUBLIC_LINKEDIN_PROFILE,
	PUBLIC_SITE_URL,
} from '$env/static/public';

import SiteCover from '$img/home/home.png';

const facebookPageName = PUBLIC_FACEBOOK_PAGE;
const facebookAuthorPageName = PUBLIC_FACEBOOK_AUTHOR_PAGE;

export const siteConfig: Site.Config = {
	url: 'https://trixolutions.be',
	title: 'Trixolutions',
	subtitle: 'Trixolutions - Training, Coaching & Consultancy',
	description: 'Trixolutions - Opleidingen en Training in Lencioni Teamcoaching en Consultancy',
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
	siteTitle: 'Trixolutions',
	siteShortTitle: 'Trixolutions',
	description: 'Trixolutions - Opleidingen en Training in Lencioni Teamcoaching en Consultancy',
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

	export const navConfig: (DD.Nav | DD.Link)[] = [
		{
			name: 'Home',
			url: '/',
		 },
		 {
			name: 'Over Ons',
			url: '/over-ons',
		 },
		 {
			name: 'Referenties',
			url: '/referenties',
		 },
		 {
			name: 'Blog',
			url: '/blog',
		 },
		 {
			name: 'Open Sessies',
			url: '/open-sessies',
			links: [
				{
					name: "Gratis Open Infosesssies", 
					url: "/gratis-open-infosessies"
				},
				{
					name: "Hybride Lencioni Leertraject",
					url: "/open-sessies/hybride-lencioni-leertraject"
				},
				{
					name: "Lencioni Deepdive - Level 2" ,
					url: "/lencioni-deepdive-level2"
				}
			]
		 },
		 {
			name: 'Contact',
			url: '/contact',
		 },
	 ];