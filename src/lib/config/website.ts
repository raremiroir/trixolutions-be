import {
	PUBLIC_CONTACT_EMAIL,
	PUBLIC_FACEBOOK_AUTHOR_PAGE,
	PUBLIC_FACEBOOK_PAGE,
	PUBLIC_GITHUB_PAGE,
	PUBLIC_LINKEDIN_PROFILE,
	PUBLIC_SITE_URL,
} from '$env/static/public';

const facebookPageName = PUBLIC_FACEBOOK_PAGE;
const facebookAuthorPageName = PUBLIC_FACEBOOK_AUTHOR_PAGE;

const website = {
	author: 'Miro Storm',
	ogLanguage: 'nl-BE',
	siteLanguage: 'nl-BE',
	siteTitle: 'Trixolutions - Training, Coaching & Consultancy',
	siteShortTitle: 'Trixolutions',
	description:
		'Trixolutions - Opleidingen en Training in Lencioni Teamcoaching en Consultancy',
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

export { website as default };