export type WebsiteConfig = {
   title: string;
   slogan: string;
   tagLine: string;
   description: string;

   logo: string;
   icon: string;
   
   lang: 'nl'|'fr'|'en';
   ogLanguage: 'nl-BE'|'fr-BE'|'en-GB';
   siteLanguage: 'nl-BE'|'fr-BE'|'en-GB';

   since: number;
   timeZone: string;
   
   siteUrl: string;
   domain: string;

   themeColor: string;
   backgroundColor: string;

   created_on: string;
   updated_on: string;

   founder: {
		name: string;
      title: string,
		status: string;
		email: string;
	};
   
   author: {
      name: string;
      status: string;
      website: string;
      github: string;
      email: string;
      bio: string;
   }

   contactEmail: string;

   facebookAuthorPage: string;
   facebookAuthorPageName: string;
   facebookPage: string;
   facebookPageName: string;
   githubPage: string;
   linkedinProfile: string;

   address: {
      street: string;
      number: string;
      postalCode: string;
      city: string;
      province: string;
      country: string;
   }

}