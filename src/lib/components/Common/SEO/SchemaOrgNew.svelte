<script lang="ts">
   // Import types
   import type { 
      Person, PostalAddress, 
      Country, Language,
      AggregateRating, Audience,
      ContactPoint, 
      OpeningHoursSpecification,
	   Place, Service, ServiceChannel,
	   Offer, OwnershipInfo,
	   Event, URL, WebPage, ImageObject, ListItem, 
      Article, VideoObject, Clip, 
      Blog, BlogPosting, ItemList
   } from 'schema-dts';
   import type { 
      OfferCatalog, Organization, LocalBusiness, 
      WebSite, BreadcrumbList,
   } from 'schema-dts';
   import type {
      RatingsObj, EntityMetadata, ArticleMetadata, 
      VideoMetadata, BlogPostMetadata,
      ArticlesData, VideosData, BlogPostsData, 
      ImagesData, ImageMetadata } from './SEOTypes';

      
   // Import i18n
   import type { BaseTranslation, Locales, TranslationFunctions } from '$src/i18n/i18n-types';
   import { locales, baseLocale } from "$i18n/i18n-util";
   import L from '$utils/i18node';


   // Import utils
   import { website } from "$lib/config/website";
	import { titleCase } from '$src/lib/utils';

   // Export props
   export let hasAlternateLang = true;
   
   export let sessions:any = [];
   
   export let ratings: RatingsObj;
   export let entityMeta: EntityMetadata;

   export let articles = false;
   export let articlesMeta: ArticlesData;

   export let images = false;
   export let imagesMeta: ImagesData;

   export let videos = false;
   export let videosMeta: VideosData;

   export let blogPosts = false;
   export let blogPostsMeta: BlogPostsData;

   export let blog = false;

   const accessibility = {
      api: 'ARIA',
      control: ["fullKeyboardControl", "fullMouseControl", "fullTouchControl"],
      feature: ["alternativeText", "captions", "audioDescription", "largePrint", "textToSpeech", "screenReader", "longDescription", "resizeText/CSSEnabled", "highContrast/CSSEnabled",],
      hazard: ["noFlashingHazard", "noMotionSimulationHazard", "noSoundHazard"],
      summary: {
         nl: "Deze website is voor het grootste deel toegankelijk voor mensen met een beperking. We hebben ons best gedaan om alles zo toegankelijk mogelijk te maken. Als u suggesties heeft, neem dan contact met ons op.",
         en: "This website is mostly accessible for people with disabilities. We have tried our best to make everything as accessible as possible. If you have any suggestions, please contact us.",
         fr: "Ce site Web est principalement accessible aux personnes handicapées. Nous avons fait de notre mieux pour rendre tout aussi accessible que possible. Si vous avez des suggestions, veuillez nous contacter."
      },
      mode: ["textual", "auditory", "tactile", "visual", "colorDependent", "textOnVisual", "animationOnVisual", "audioDescription", "videoDescription", "captioning", "largePrint", "textToSpeech", "screenReader" ],
      sufficient: {
         "@type": "ItemList",
         "itemListElement": [
            { "@type": "ListItem", "position": 1,
              "item": { "@type": "WebContent", "accessMode": "visual" } },
            { "@type": "ListItem", "position": 2,
              "item": { "@type": "WebContent", "accessMode": "textual" } },
            { "@type": "ListItem", "position": 3,
              "item": { "@type": "WebContent", "accessMode": "auditory" } }
         ]
      }
   }

   const definedLocales: Locales[] = hasAlternateLang ? locales : [ baseLocale ];

   const socials: URL[] = [ `https://linkedin.com/in/${website.linkedinProfile}`, website.facebookPage ]

   // Define array for storing all the schema objects
   let schemaOrgArray:any = [];
   /* ============================================= */
   /* ======= DEFINE DEFAULT SCHEMA OBJECTS ======= */
   /* ============================================= */

   // THIRD PARTIES

   // Pat Lencioni
   definedLocales.forEach((lang: Locales) => {
      const patrick_lencioni: Person = {
         "@type": "Person",
         "@id": `${website.domain}/${lang}/#person/patrick_lencioni`,
         "name": "Patrick Lencioni",
         "givenName": "Patrick",
         "familyName": "Lencioni",
         "gender": "male",
         "jobTitle": "Author",
         "url": "https://www.tablegroup.com",
         "sameAs": [
            "https://www.linkedin.com/in/patrick-lencioni-orghealth",
            "https://twitter.com/patricklencioni",
            "https://www.instagram.com/patricklencioni_",
         ],
      }
      schemaOrgArray.push(patrick_lencioni);
   })
   // Capa Pro
   definedLocales.forEach((lang: Locales) => {
      const capa_pro: Organization = {
         "@type": "Organization",
         "@id": `${website.domain}/${lang}/#capa_pro`,
         
         "name": L[lang].website.brands.capa_pro.name(),
         "alternateName": `${L[lang].website.brands.capa_pro.name()} - Patrick Lencioni`,
         "slogan": L[lang].website.brands.capa_pro.slogan(),
         "description": L[lang].website.brands.capa_pro.description(),
         
         "url": "https://www.tablegroup.com",
         "logo": `${website.domain}/images/partners/capa-pro.png`,
         "image": `${website.domain}/images/partners/capa-pro.png`,
      
         "founder": { "@id": `${website.domain}/${lang}/#person/patrick_lencioni` },
         "sameAs": [
               'https://www.linkedin.com/company/capa-pro2',
            ],
      }
      schemaOrgArray.push(capa_pro);
   })
   // Miro Storm
   definedLocales.forEach((lang: Locales) => {
      const miro_storm: Person = {
         "@type": "Person",
         "@id": `${website.domain}/${lang}/#person/miro_storm`,
         "name": "Miro Storm",
         "alternateName": "Miro Storm - Mist Media",
         "familyName": "Polfliet",
         "givenName": "Miro Storm",
         "worksFor": "https://mistmedia.be",
         "jobTitle": "Founder - Web Developer",
         "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Karel de Grote Hogeschool",
            "alternateName": "KdG",
            "url": "https://www.kdg.be",
            "logo": "https://www.kdg.be/sites/kdg.be/files/kdg-logo_english-vertical-black-rgb.png",
         },
         "image": "https://sqotemthjxsiwsufjzgz.supabase.co/storage/v1/object/public/images/team/miro_storm.png",
         "gender": "http://schema.org/Male",
         "sameAs": ["https://linkedin.com/in/mistmedia","https://github.com/raremiroir"]
      }
      schemaOrgArray.push(miro_storm);
   })
   // Mist Media
   definedLocales.forEach((lang: Locales) => {
      const mistMedia: Organization = {
         "@type": "Organization",
         "@id": `${website.domain}/${lang}/#mist_media`,
      
         "name": "Mist Media",
         "slogan": "",
         "description": "",
      
         "url": "https://mistmedia.be",
         "logo": "https://mistmedia.be/logo.png",
         "image": `${website.domain}/images/partners/mist-media.png`,
         "address": {
            "@type": "PostalAddress",
            "streetAddress": "Vekestraat 34",
            "addressLocality": "Antwerp",
            "addressRegion": "Antwerp",
            "postalCode": "2000",
            "addressCountry": "Belgium"
         },
         "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "contact",
            "telephone": "+32484340391",
            "email": "miro@mistmedia.be"
         },
         "sameAs": [ 
            "https://linkedin.com/in/mistmedia",
            "https://github.com/raremiroir" 
         ],
         "founder": { "@id": `${website.domain}/${lang}/#person/miro_storm` },
      }
      schemaOrgArray.push(mistMedia);
   })


   // IMAGE OBJECT(S)

   // Main Image
   definedLocales.forEach((lang: Locales) => {
      const mainImage: ImageObject = { 
         '@type': 'ImageObject', 
         '@id': `${website.domain}/${entityMeta.slug[lang]}/#primaryimage`,
         "inLanguage": lang === 'en' ? { "@id": `${website.domain}/${lang}/#language/en` } : lang === 'fr' ? { "@id": `${website.domain}/${lang}/#language/fr` } : { "@id": `${website.domain}/${lang}/#language/nl` },
         "url": entityMeta.image?.url ? entityMeta.image.url : `${website.domain}/logo-1920x1280.webp`,
         "contentUrl": `${website.domain}/${entityMeta.slug[lang]}`,
         "width": `${entityMeta.image?.width}`,
         "height": `${entityMeta.image?.height}`,
         "caption": entityMeta.image?.alt ? entityMeta.image.alt[lang] : 'Logo Trixolutions',
         "about": {
            "@type": "WebPage",
            "@id": `${website.domain}/${entityMeta.slug[lang]}/#webpage`,
            "url": `${website.domain}/${entityMeta.slug[lang]}`,
         },	
      };
      schemaOrgArray.push(mainImage);
   })
   // Logo
   let logoObj: {[key:string]: ImageObject} = {};
   definedLocales.forEach((lang: Locales) => {
      const logo: ImageObject = {
         "@type": "ImageObject",
         "@id": `${website.domain}/${lang}/#logo`,
         "url": `${website.domain}/logo-1920x1280.webp`,
         "contentUrl": `${website.domain}/logo-1920x1280.webp`,
         "embedUrl": `${website.domain}/logo-1920x1280.webp`,
         "inLanguage": lang === 'en' ? { "@id": `${website.domain}/${lang}/#language/en` } : lang === 'fr' ? { "@id": `${website.domain}/${lang}/#language/fr` } : { "@id": `${website.domain}/${lang}/#language/nl` },
         "width": "1920",
         "height": "1280",
         "caption": "Logo Trixolutions",
         "about": {
            "@type": "WebPage",
            "@id": `${website.domain}/${entityMeta.slug[lang]}/#webpage`,
            "url": `${website.domain}/${entityMeta.slug[lang]}`,
         },
      };
      schemaOrgArray.push(logo);
   });
   // Other Images
   if (images === true) {
      definedLocales.forEach((lang: Locales) => {
         imagesMeta.forEach((image: ImageMetadata, key: number) => {
            const imageObject: ImageObject = { 
               '@type': 'ImageObject', 
               '@id': `${website.domain}/${entityMeta.slug[lang]}/#images/${key + 1}`,
               "inLanguage": lang === 'en' ? { "@id": `${website.domain}/${lang}/#language/en` } : lang === 'fr' ? { "@id": `${website.domain}/${lang}/#language/fr` } : { "@id": `${website.domain}/${lang}/#language/nl` },
               "url": image.url,
               "contentUrl": `${website.domain}/${entityMeta.slug[lang]}`,
               "width": `${image.width}`,
               "height": `${image.height}`,
               "caption": image.alt ? image.alt[lang] : 'Trixolutions',
               "about": {
                  "@type": "WebPage",
                  "@id": `${website.domain}/${entityMeta.slug[lang]}/#webpage`,
                  "url": `${website.domain}/${entityMeta.slug[lang]}`,
               },	
            };
            schemaOrgArray.push(imageObject);
         })
      })
   }


   // AREAS
   definedLocales.forEach((lang: Locales) => {
      const areaServed: { be: Country, nl: Country } = {
         be: {
            "@type": "Country",
            "@id": `${website.domain}/${lang}/#country/be`,
            "name": L[lang].website.address.be.country(),
            "additionalType": "https://en.wikipedia.org/wiki/ISO_3166-2:BE",
            "hasMap": `${website.domain}/${lang}/contact`,
            "logo": { "@id": `${website.domain}/${lang}/#logo` }, 
         },
         nl: {
            "@type": "Country",
            "@id": `${website.domain}/${lang}/#country/nl`,
            "name": L[lang].website.address.nl.country(),
            "additionalType": "https://en.wikipedia.org/wiki/ISO_3166-2:NL",
            "hasMap": `${website.domain}/${lang}/contact`,
            "logo": { "@id": `${website.domain}/${lang}/#logo` },
         }
      }
      schemaOrgArray.push(areaServed.be, areaServed.nl);
   })

   // LANGUAGES
   definedLocales.forEach((lang: Locales) => {
      const languages: {nl: Language, fr: Language, en: Language} = {
         nl: {
            "@type": "Language",
            "@id": `${website.domain}/${lang}/#language/nl`,
            "alternateName": "Nederlands",
            "name": L[lang].website.languages.nl(),
            "description": "Dutch Language",
            "disambiguatingDescription": "Belgian Dutch Language",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1024px-Flag_of_Belgium.svg.png?20221128005359",
            "sameAs": "https://wikipedia.org/wiki/Dutch_language",
            "identifier": "nl",
         },
         fr: {
            "@type": "Language",
            "@id": `${website.domain}/${lang}/#language/fr`,
            "alternateName": "Français",
            "name": L[lang].website.languages.fr(),
            "description": "French Language",
            "disambiguatingDescription": "Belgian French Language",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png?20120916041411",
            "sameAs": "https://wikipedia.org/wiki/French_language",
            "identifier": "fr",
         },
         en: {
            "@type": "Language",
            "@id": `${website.domain}/${lang}/#language/en`,
            "alternateName": "English",
            "name": L[lang].website.languages.en(),
            "description": "English Language",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Flag_of_the_United_Kingdom.svg/1024px-Flag_of_the_United_Kingdom.svg.png?20120916041411",
            "sameAs": "https://wikipedia.org/wiki/English_language",
            "identifier": "en",
         },
      }
      schemaOrgArray.push(languages.nl, languages.fr, languages.en);
   })
   
   // CONTACT INFO
   // Opening Hours
   definedLocales.forEach((lang: Locales) => {
      const openingHours: OpeningHoursSpecification = {
         "@type": "OpeningHoursSpecification",
         "@id": `${website.domain}/${lang}/#opening-hours/normal`,
         "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ],
         "image": { '@id': `${website.domain}/${entityMeta.slug[lang]}/#primaryimage` },
         "validFrom": "2020-01-01",
         "opens": "08:00",
         "closes": "18:00",
         "name": L[lang].website.opening_hours.title(),
         "alternateName": L[lang].website.opening_hours.title(),
         "description": L[lang].website.opening_hours.description({
            start: "08:00",
            end: "18:00",
            open: L[lang].website.opening_hours.days_of_week.monday(),
            close: L[lang].website.opening_hours.days_of_week.friday(),
         }),
      }
      schemaOrgArray.push(openingHours);
   })
   // Always Open
   definedLocales.forEach((lang: Locales) => {
      const alwaysOpen: OpeningHoursSpecification = {
         "@type": "OpeningHoursSpecification",
         "@id": `${website.domain}/${lang}/#opening-hours/always-open`,
         "validFrom": "2020-01-01",
         "opens": "00:00",
         "closes": "23:59",
         "name": L[lang].website.opening_hours.title(),
         "alternateName": L[lang].website.opening_hours.title(),
         "description": L[lang].website.opening_hours.service_open(),
      }
      schemaOrgArray.push(alwaysOpen);
   })
   // Contact Point
   definedLocales.forEach((lang: Locales) => {
      const contactPoint: ContactPoint = {
         "@type": "ContactPoint",
         "@id": `${website.domain}/${lang}/#contact-point`,
         "image": { "@id": `${website.domain}/${lang}/#logo` },
         "contactType": "all",
         "email": website.contactEmail,
         "areaServed": [ { "@id": `${website.domain}/${lang}/#country/be` }, { "@id": `${website.domain}/${lang}/#country/nl` } ],
         "availableLanguage": [ { "@id": `${website.domain}/${lang}/#language/nl` }, { "@id": `${website.domain}/${lang}/#language/fr` }, { "@id": `${website.domain}/${lang}/#language/en` } ],
         "hoursAvailable": { "@id": `${website.domain}/${lang}/#opening-hours/normal` },
         "name": L[lang].nav.contact.title(),
         "description": L[lang].nav.contact.description(),
      }
      schemaOrgArray.push(contactPoint);
   })

   // ADDRESSES
   // be
   definedLocales.forEach((lang: Locales) => {
      const addressBe: PostalAddress = {
         "@type": "PostalAddress",
         "@id": `${website.domain}/${lang}/#address/be`,
         "name": L[lang].website.address.be.name(),
         "description": L[lang].website.address.be.description(),

         "addressLocality": `${L[lang].website.address.be.city()}, ${L[lang].website.address.be.province()}`,
         "addressRegion": L[lang].website.address.be.country(),
         "postalCode": L[lang].website.address.be.zip(),
         "streetAddress": `${L[lang].website.address.be.street()} ${L[lang].website.address.be.number()}, ${L[lang].website.address.be.zip()} ${L[lang].website.address.be.city()}, ${L[lang].website.address.be.country()}`,

         "areaServed": [ { "@id": `${website.domain}/${lang}/#country/be` } ],
         "availableLanguage": [ { "@id": `${website.domain}/${lang}/#language/nl` }, { "@id": `${website.domain}/${lang}/#language/fr` }, { "@id": `${website.domain}/${lang}/#language/en` } ],
         "contactType": "all",
         "email": website.contactEmail,

         "image": { "@id": `${website.domain}/${lang}/#logo` },

         "hoursAvailable": { "@id": `${website.domain}/${lang}/#opening-hours/normal` },
         
         "url": L[lang].website.address.be.url()
      }
      schemaOrgArray.push(addressBe);
   })
   // nl
   definedLocales.forEach((lang: Locales) => {
      const addressNl: PostalAddress = {
         "@type": "PostalAddress",
         "@id": `${website.domain}/${lang}/#address/nl`,
         "name": L[lang].website.address.nl.name(),
         "description": L[lang].website.address.nl.description(),

         "addressLocality": `${L[lang].website.address.nl.city()}, ${L[lang].website.address.nl.province()}`,
         "addressRegion": L[lang].website.address.nl.country(),
         "postalCode": L[lang].website.address.nl.zip(),
         "streetAddress": `${L[lang].website.address.nl.street()} ${L[lang].website.address.nl.number()}, ${L[lang].website.address.nl.zip()} ${L[lang].website.address.nl.city()}, ${L[lang].website.address.nl.country()}`,

         "areaServed": [ { "@id": `${website.domain}/${lang}/#country/nl` } ],
         "availableLanguage": [ { "@id": `${website.domain}/${lang}/#language/nl` }, { "@id": `${website.domain}/${lang}/#language/fr` }, { "@id": `${website.domain}/${lang}/#language/en` } ],
         "contactType": "all",
         "email": website.contactEmail,

         "hoursAvailable": { "@id": `${website.domain}/${lang}/#opening-hours/normal` },
         
         "url": L[lang].website.address.nl.url()
      }
      schemaOrgArray.push(addressNl);
   })
   // be_martinus
   definedLocales.forEach((lang: Locales) => {
      const addressServicesBe: PostalAddress = {
         "@type": "PostalAddress",
         "@id": `${website.domain}/${lang}/#address/be_martinus`,
         "name": `${L[lang].website.services_locations.be.name()} - ${L[lang].website.services_locations.be.city()}`,

         "addressLocality": `${L[lang].website.services_locations.be.city()}, ${L[lang].website.services_locations.be.province()}`,
         "addressRegion": L[lang].website.services_locations.be.country(),
         "postalCode": L[lang].website.services_locations.be.zip(),
         "streetAddress": `${L[lang].website.services_locations.be.street()} ${L[lang].website.services_locations.be.number()}, ${L[lang].website.services_locations.be.zip()} ${L[lang].website.services_locations.be.city()}, ${L[lang].website.services_locations.be.country()}`,

         "areaServed": [ { "@id": `${website.domain}/${lang}/#country/be` } ],
         "availableLanguage": [ { "@id": `${website.domain}/${lang}/#language/nl` }, { "@id": `${website.domain}/${lang}/#language/fr` }, { "@id": `${website.domain}/${lang}/#language/en` } ],
         "contactType": "all",
         "email": website.contactEmail,

         "hoursAvailable": { "@id": `${website.domain}/${lang}/#opening-hours/normal` },
         
         "url": L[lang].website.services_locations.be.url(),
      }
      schemaOrgArray.push(addressServicesBe);
   })

   // MEMBERS
   definedLocales.forEach((lang: Locales) => {
      const members: {[key:string]: Person} = {
         tom: {
            "@type": "Person",
            "@id": `${website.domain}/${lang}/#person/tom-van-dorst`,
            "name": "Tom Van Dorst",
            "givenName": "Tom",
            "familyName": "Van Dorst",
            "jobTitle": L[lang].website.members.tom.title(),
            "knowsLanguage": [ { "@id": `${website.domain}/${lang}/#language/nl` }, { "@id": `${website.domain}/${lang}/#language/fr` }, { "@id": `${website.domain}/${lang}/#language/en` } ],
            "url": website.domain,
            "sameAs": socials,
            "email": 'tomvandorst@trixolutions.be',
            "affiliation": [ { "@id": `${website.domain}/${lang}/#capa_pro` } ],
            "image": [
               {
                  "@type": "ImageObject",
                  "@id": `${website.domain}/${lang}/#person/tom-van-dorst/image/color`,
                  "url": `${website.domain}/assets/images/team/tom-color.webp`,
                  "width": "1920",
                  "height": "1280",
                  "caption": `Tom Van Dorst - ${L[lang].website.members.tom.title()} - Trixolutions (Color)`
               },
               {
                  "@type": "ImageObject",
                  "@id": `${website.domain}/${lang}/#person/tom-van-dorst/image/bw`,
                  "url": `${website.domain}/assets/images/team/tom-bw.webp`,
                  "width": "1920",
                  "height": "1280",
                  "caption": `Tom Van Dorst - ${L[lang].website.members.tom.title()} - Trixolutions (B/W)`
               },
            ],
         },
         tamara: {
            "@type": "Person",
            "@id": `${website.domain}/${lang}/#person/tamara-dhaese`,
            "name": "Tamara D'Haese",
            "givenName": "Tamara",
            "familyName": "D'Haese",
            "jobTitle": L[lang].website.members.tamara.title(),
            "knowsLanguage": [ { "@id": `${website.domain}/${lang}/#language/nl` }, { "@id": `${website.domain}/${lang}/#language/fr` }, { "@id": `${website.domain}/${lang}/#language/en` } ],
            "url": website.domain,
            "email": 'info@trixolutions.be',
            "image": {
               "@type": "ImageObject",
               "@id": `${website.domain}/${lang}/#person/tamara-dhaese/image`,
               "url": `${website.domain}/assets/images/team/tamara-bw.webp`,
               "width": "1920",
               "height": "1920",
               "caption": `Tamara D'Haese - ${L[lang].website.members.tamara.title()} - Trixolutions`
            }
         },
         christoph: {
            "@type": "Person",
            "@id": `${website.domain}/${lang}/#person/christoph-meunier`,
            "name": "Christoph Meunier",
            "givenName": "Christoph",
            "familyName": "Meunier",
            "jobTitle": L[lang].website.members.christoph.title(),
            "knowsLanguage": [ { "@id": `${website.domain}/${lang}/#language/nl` }, { "@id": `${website.domain}/${lang}/#language/fr` }, { "@id": `${website.domain}/${lang}/#language/en` } ],
            "url": website.domain,
            "image": {
               "@type": "ImageObject",
               "@id": `${website.domain}/${lang}/#person/christoph-meunier/image`,
               "url": `${website.domain}/assets/images/team/christoph-bw.webp`,
               "width": "1920",
               "height": "2000",
               "caption": `Christoph Meunier - ${L[lang].website.members.christoph.title()} - Trixolutions`
            }
         }
      };
      Object.values(members).forEach((member: Person) => {
         schemaOrgArray.push(member);
      })
   })

   // RATING
   definedLocales.forEach((lang: Locales) => {
      const rating: AggregateRating = {
         "@type": "AggregateRating",
         "@id": `${website.domain}/${lang}/#rating`,
         "ratingValue": `${ratings.average}`,
         "reviewCount": `${ratings.amount}`,
         "bestRating": "5",
         "worstRating": "0",
         "ratingExplanation": L[lang].website.ratings.text({amount: ratings.amount}),
         "name": titleCase(L[lang].sessions.ratings()),
      }
      schemaOrgArray.push(rating);
   })

   // AUDIENCE
   definedLocales.forEach((lang: Locales) => {
      const audience: Audience = {
         "@type": "Audience",
         "@id": `${website.domain}/${lang}/#audience`,
         "audienceType": "Business",
         "alternateName": "Businesses",
         "description": L[lang].website.audience.description(),
         "disambiguatingDescription": L[lang].website.audience.description(),
         "identifier": "https://schema.org/BusinessAudience",
         "name": "Businesses",
         "sameAs": "https://wikipedia.org/wiki/Business",
      }
      schemaOrgArray.push(audience);
   })

   // PLACES
   // BE
   definedLocales.forEach((lang: Locales) => {
      const placeBe: Place = {
         "@type": "Place",
         "@id": `${website.domain}/${lang}/#place/be`,
         "name": L[lang].website.address.be.name(),
         "alternateName": `${website.title} ${L[lang].website.address.be.country()}`,
         "description": L[lang].website.address.be.description(),
         "disambiguatingDescription": L[lang].website.address.be.description(),
         "slogan": L[lang].website.slogan(),
         "address": { "@id": `${website.domain}/${lang}/#address/be` },
         "aggregateRating": { "@id": `${website.domain}/${lang}/#rating` },
         "hasMap": `${website.domain}/${lang}/contact`,
         "keywords": [
            'Trixolutions',
            'Trixolutions.be',
            'Trixolutions.com',
            'Lencioni',
            'Teamcoaching België',
         ],
         "logo": { "@id": `${website.domain}/${lang}/#logo` },
         "image": { "@id": `${website.domain}/${lang}/#logo` },
         "longitude": 4.5084357,
         "latitude": 51.2207385,
         "geo": {
            "@type": "GeoCoordinates",
            "longitude": 4.5084357,
            "latitude": 51.2207385,
         },
         "url": website.domain,
         "sameAs": socials,
         "openingHoursSpecification": { "@id": `${website.domain}/${lang}/#opening-hours/normal` },
         "publicAccess": false,
      }
      schemaOrgArray.push(placeBe);
   })
   // NL
   definedLocales.forEach((lang: Locales) => {
      const placeNl: Place = {
         "@type": "Place",
         "@id": `${website.domain}/${lang}/#place/nl`,
         "name": L[lang].website.address.nl.name(),
         "alternateName": `${website.title} ${L[lang].website.address.nl.country()}`,
         "description": L[lang].website.address.nl.description(),
         "disambiguatingDescription": L[lang].website.address.nl.description(),
         "slogan": L[lang].website.slogan(),
         "address": { "@id": `${website.domain}/${lang}/#address/nl` },
         "aggregateRating": { "@id": `${website.domain}/${lang}/#rating` },
         "hasMap": `${website.domain}/${lang}/contact`,
         "keywords": [
            'Trixolutions',
            'Trixolutions.nl',
            'Lencioni',
            'Teamcoaching Nederland',
         ],
         "logo": { "@id": `${website.domain}/${lang}/#logo` },
         "image": { "@id": `${website.domain}/${lang}/#logo` },
         "longitude": 4.3874651,
         "latitude": 51.9804814,
         "geo": {
            "@type": "GeoCoordinates",
            "longitude": 4.3874651,
            "latitude": 51.9804814,
         },
         "url": "https://trixolutions.nl",
         "sameAs": socials,
         "openingHoursSpecification": { "@id": `${website.domain}/${lang}/#opening-hours/normal` },
         "publicAccess": false,
      }
      schemaOrgArray.push(placeNl);
   })

   // SERVICE INFO
   // Service BE
   definedLocales.forEach((lang: Locales) => {
      const placeServiceBe: Place = {
         "@type": "Place",
         "@id": `${website.domain}/${lang}/#place/service_be`,
         "name": L[lang].website.services_locations.be.name(),
         "alternateName": `${L[lang].website.services_locations.be.name()} ${L[lang].website.services_locations.be.country()}`,
         "address": { "@id": `${website.domain}/${lang}/#address/be_martinus` },
         "logo": { "@id": `${website.domain}/${lang}/#logo` },
         "image": "https://www.domeinmartinus.be/sites/default/files/styles/d7/public/2018-02/Mart-buiten-sfeer-2_1.jpg?itok=lJn4pOoB",
         "longitude": 4.6289041,
         "latitude": 51.2385543,
         "geo": {
            "@type": "GeoCoordinates",
            "longitude": 4.6289041,
            "latitude": 51.2385543,
         },
         "url": L[lang].website.services_locations.be.url(),
      }
      schemaOrgArray.push(placeServiceBe);
   })
   // Service Channels
   definedLocales.forEach((lang: Locales) => {
      const serviceChannel: {[key:string]: ServiceChannel} = {
         web: {
            "@type": "ServiceChannel",
            "@id": `${website.domain}/${lang}/#service_channel/web`,
            "name": L[lang].website.contact.types.website(),
            "description": L[lang].website.contact.types.website_description(),
            "disambiguatingDescription": L[lang].website.contact.types.website_description(),
            "serviceUrl": website.domain,
            "servicePostalAddress": { "@id": `${website.domain}/${lang}/#address/be` },
            "availableLanguage": [ { "@id": `${website.domain}/${lang}/#language/nl` }, { "@id": `${website.domain}/${lang}/#language/fr` }, { "@id": `${website.domain}/${lang}/#language/en` } ],
         },
         email: {
            "@type": "ServiceChannel",
            "@id": `${website.domain}/${lang}/#service_channel/email`,
            "name": L[lang].website.contact.types.email(),
            "description": L[lang].website.contact.types.email_description(),
            "disambiguatingDescription": website.contactEmail,
            "serviceUrl": website.domain,
            "servicePostalAddress": { "@id": `${website.domain}/${lang}/#address/be` },
            "availableLanguage": [ { "@id": `${website.domain}/${lang}/#language/nl` }, { "@id": `${website.domain}/${lang}/#language/fr` }, { "@id": `${website.domain}/${lang}/#language/en` } ],
         },
      }
      schemaOrgArray.push(serviceChannel.web, serviceChannel.email);
   })

   // SERVICES
   // Offer Extend
   definedLocales.forEach((lang: Locales) => {
      const extendOffer: Offer = {
         "@type": "Offer",
         "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#offer/extend`,

         "name": L[lang].website.services.extend.title(),
         "alternateName": L[lang].website.services.extend.title_alt(),
         "description": L[lang].website.services.extend.description(),
         "disambiguatingDescription": L[lang].website.services.extend.description_disambiguation(),
         
         "price": 490.00,
         "priceCurrency": "EUR",
         "eligibleRegion": [ { "@id": `${website.domain}/${lang}/#country/be` }, { "@id": `${website.domain}/${lang}/#country/nl` } ],
         "url": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}`,
         "itemOffered": {
            "@type": "Service",
            "name": L[lang].website.services.extend.title(),
            "alternateName": L[lang].website.services.extend.title_alt(),
            "description": L[lang].website.services.extend.description(),
            "disambiguatingDescription": L[lang].website.services.extend.description_disambiguation(),
            "image": { "@id": `${website.domain}/${lang}/#logo` },
            "logo": { "@id": `${website.domain}/${lang}/#logo` },
            "url": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}`,
         },
         "offeredBy": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L[lang].nav.about.slug()}`,
         },
         "seller": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L[lang].nav.about.slug()}`,
         },
      }
      schemaOrgArray.push(extendOffer);
   })
   // Offer Hybrid Base
   definedLocales.forEach((lang: Locales) => {
      const offerHybridBase: Offer = {
         "@type": "Offer",
         "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#offer/hybrid_base`,

         "name": L[lang].website.services.hybrid_base.title(),
         "alternateName": L[lang].website.services.hybrid_base.title_alt(),
         "description": L[lang].website.services.hybrid_base.description(),
         "disambiguatingDescription": L[lang].website.services.hybrid_base.description_disambiguation(),
         
         "image": {
            "@type": "ImageObject",
            "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#image/hybrid_base`,
            "url": `${website.domain}/images/home/lencioni-ctc.webp`,
            "caption": L[lang].website.services.hybrid_base.description_disambiguation(),
            "width": "1920",
            "height": "1280",
         },
         
         "price": 690.00,
         "priceCurrency": "EUR",
         "url": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}`,
         "itemOffered": {
            "@type": "Service",
            "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#service/hybrid_base`,
            "name": L[lang].website.services.hybrid_base.title(),
            "alternateName": L[lang].website.services.hybrid_base.title_alt(),
            "description": L[lang].website.services.hybrid_base.description(),
            "disambiguatingDescription": L[lang].website.services.hybrid_base.description_disambiguation(),
            "url": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}`,
         },

         "category": [ 'team building', 'team coaching', 'lencioni', 'trixolutions', 'teamcoaching', 'teamwork', 'workshop', 'training', 'business' ],

         "aggregateRating": { "@id": `${website.domain}/${lang}/#rating` },
         "areaServed": [ { "@id": `${website.domain}/${lang}/#country/be` }, { "@id": `${website.domain}/${lang}/#country/nl` } ],
         "eligibleRegion": [ { "@id": `${website.domain}/${lang}/#country/be` }, { "@id": `${website.domain}/${lang}/#country/nl` } ],
         "addOn": { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#offer/extend` },

         "offeredBy": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L[lang].nav.about.slug()}`,
         },
         "seller": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L[lang].nav.about.slug()}`,
         },
      }
      schemaOrgArray.push(offerHybridBase);
   })
   // Offer Hybrid Full
   definedLocales.forEach((lang: Locales) => {
      const offerHybridFull: Offer = {
         "@type": "Offer",
         "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#offer/hybrid_full`,

         "name": L[lang].website.services.hybrid_full.title(),
         "alternateName": L[lang].website.services.hybrid_full.title_alt(),
         "description": L[lang].website.services.hybrid_full.description(),
         "disambiguatingDescription": L[lang].website.services.hybrid_full.description_disambiguation(),

         "image": {
            "@type": "ImageObject",
            "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#image/hybrid_full`,
            "url": `${website.domain}/images/home/working-genius.webp`,
            "caption": L[lang].website.services.hybrid_full.description_disambiguation(),
            "width": "1080",
            "height": "720",
         },
         
         "price": 1590.00,
         "priceCurrency": "EUR",
         "url": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}`,
         "itemOffered": {
            "@type": "Service",
            "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#service/hybrid_full`,
            "name": L[lang].website.services.hybrid_full.title(),
            "alternateName": L[lang].website.services.hybrid_full.title_alt(),
            "description": L[lang].website.services.hybrid_full.description(),
            "disambiguatingDescription": L[lang].website.services.hybrid_full.description_disambiguation(),
            "url": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}`,
         },

         "category": [ 'team building', 'team coaching', 'lencioni', 'trixolutions', 'teamcoaching', 'teamwork', 'workshop', 'training', 'business' ],

         "aggregateRating": { "@id": `${website.domain}/${lang}/#rating` },
         "areaServed": [ { "@id": `${website.domain}/${lang}/#country/be` }, { "@id": `${website.domain}/${lang}/#country/nl` } ],
         "eligibleRegion": [ { "@id": `${website.domain}/${lang}/#country/be` }, { "@id": `${website.domain}/${lang}/#country/nl` } ],
         "addOn": { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#offer/extend` },

         "offeredBy": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L[lang].nav.about.slug()}`,
         },
         "seller": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L[lang].nav.about.slug()}`,
         },
      }
      schemaOrgArray.push(offerHybridFull);
   })
   // Offer Deepdive
   let offerDeepDiveObj: {[key:string]: Offer} = {};
   definedLocales.forEach((lang: Locales) => {
      const offerDeepDive: Offer = {
         "@type": "Offer",
         "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}/#offer/deepdive`,

         "name": L[lang].website.services.deepdive.title(),
         "alternateName": L[lang].website.services.deepdive.title_alt(),
         "description": L[lang].website.services.deepdive.description(),
         "disambiguatingDescription": L[lang].website.services.deepdive.description_disambiguation(),

         "image": {
            "@type": "ImageObject",
            "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}/#image/hybrid_full`,
            "url": `${website.domain}/images/home/working-genius.webp`,
            "caption": L[lang].website.services.deepdive.description_disambiguation(),
            "width": "1080",
            "height": "720",
         },
         
         "price": 490.00,
         "priceCurrency": "EUR",
         "url": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}`,
         "itemOffered": {
            "@type": "Service",
            "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}/#service/deepdive`,
            "name": L[lang].website.services.deepdive.title(),
            "alternateName": L[lang].website.services.deepdive.title_alt(),
            "description": L[lang].website.services.deepdive.description(),
            "disambiguatingDescription": L[lang].website.services.deepdive.description_disambiguation(),
            "image": { "@id": `${website.domain}/${lang}/#logo` },
            "logo": { "@id": `${website.domain}/${lang}/#logo` },
            "url": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}`,
         },

         "category": [ 'team building', 'team coaching', 'lencioni', 'trixolutions', 'teamcoaching', 'teamwork', 'workshop', 'training', 'business' ],

         "aggregateRating": { "@id": `${website.domain}/${lang}/#rating` },
         "areaServed": [ { "@id": `${website.domain}/${lang}/#country/be` }, { "@id": `${website.domain}/${lang}/#country/nl` } ],
         "eligibleRegion": [ { "@id": `${website.domain}/${lang}/#country/be` }, { "@id": `${website.domain}/${lang}/#country/nl` } ],
         "addOn": { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#offer/extend` },

         "offeredBy": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L[lang].nav.about.slug()}`,
         },
         "seller": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L[lang].nav.about.slug()}`,
         },
      }
      schemaOrgArray.push(offerDeepDive);
   })

   // Service Hybrid Base
   definedLocales.forEach((lang: Locales) => {
      const serviceHybridBase: Service = {
         "@type": "Service",
         "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#service/hybrid_base`,

         "name": L[lang].website.services.hybrid_base.title(),
         "alternateName": L[lang].website.services.hybrid_base.title_alt(),
         "description": L[lang].website.services.hybrid_base.description(),
         "disambiguatingDescription": L[lang].website.services.hybrid_base.description_disambiguation(),
         "logo": { "@id": `${website.domain}/${lang}/#logo` },
         "url": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}`,
         
         "image": {
            "@type": "ImageObject",
            "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#image/hybrid_base`,
            "url": `${website.domain}/images/home/lencioni-ctc.webp`,
            "caption": L[lang].website.services.hybrid_base.description_disambiguation(),
            "width": "1920",
            "height": "1280",
         },

         "category": [ 'team building', 'team coaching', 'lencioni', 'trixolutions', 'teamcoaching', 'teamwork', 'workshop', 'training', 'business' ],

         "provider": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L[lang].nav.about.slug()}`,
         },

         "aggregateRating": { "@id": `${website.domain}/${lang}/#rating` },
         "areaServed": [ { "@id": `${website.domain}/${lang}/#country/be` }, { "@id": `${website.domain}/${lang}/#country/nl` } ],
         "audience": { "@id": `${website.domain}/${lang}/#audience` },
         "availableChannel": [ { "@id": `${website.domain}/${lang}/#service_channel/web` }, ],
         "hoursAvailable": { "@id": `${website.domain}/${lang}/#opening-hours/always-open` },
         "serviceAudience": { "@id": `${website.domain}/${lang}/#audience` },
         "serviceArea": [ { "@id": `${website.domain}/${lang}/#country/be` }, { "@id": `${website.domain}/${lang}/#country/nl` } ],
         "serviceType": 'Teamcoaching',
         "termsOfService": `${website.domain}/${lang}/${L[lang].nav.others.terms_conditions.slug()}`,

         "offers": [ { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#offer/hybrid_base` } ],
         "brand": [ 
            { "@id": `${website.domain}/${lang}/#capa_pro` },
            {
               "@type": "Organization",
               "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization`,
               'url': `${website.domain}/${lang}/${L[lang].nav.about.slug()}`,
            } 
         ],

         "isRelatedTo": [
            {"@type": "Service", "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#service/hybrid_full`},
            {"@type": "Service", "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}/#service/deepdive`}
         ],
         "isSimilarTo": [
            {"@type": "Service", "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#service/hybrid_full`},
         ]
      }
      schemaOrgArray.push(serviceHybridBase);
   })
   // Service Hybrid Full
   definedLocales.forEach((lang: Locales) => {
      const serviceHybridFull: Service = {
         "@type": "Service",
         "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#service/hybrid_full`,

         "name": L[lang].website.services.hybrid_full.title(),
         "alternateName": L[lang].website.services.hybrid_full.title_alt(),
         "description": L[lang].website.services.hybrid_full.description(),
         "disambiguatingDescription": L[lang].website.services.hybrid_full.description_disambiguation(),
         "logo": { "@id": `${website.domain}/${lang}/#logo` },
         "url": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}`,

         "image": {
            "@type": "ImageObject",
            "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#image/hybrid_full`,
            "url": `${website.domain}/images/home/working-genius.webp`,
            "caption": L[lang].website.services.hybrid_full.description_disambiguation(),
            "width": "1080",
            "height": "720",
         },

         "category": [ 'team building', 'team coaching', 'lencioni', 'trixolutions', 'teamcoaching', 'teamwork', 'workshop', 'training', 'business' ],

         "provider": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L[lang].nav.about.slug()}`,
         },

         "aggregateRating": { "@id": `${website.domain}/${lang}/#rating` },
         "areaServed": [ { "@id": `${website.domain}/${lang}/#country/be` }, { "@id": `${website.domain}/${lang}/#country/nl` } ],
         "audience": { "@id": `${website.domain}/${lang}/#audience` },
         "availableChannel": [ { "@id": `${website.domain}/${lang}/#service_channel/web` }, ],
         "hoursAvailable": { "@id": `${website.domain}/${lang}/#opening-hours/always-open` },
         "serviceAudience": { "@id": `${website.domain}/${lang}/#audience` },
         "serviceArea": [ { "@id": `${website.domain}/${lang}/#country/be` }, { "@id": `${website.domain}/${lang}/#country/nl` } ],
         "serviceType": 'Teamcoaching',
         "termsOfService": `${website.domain}/${lang}/${L[lang].nav.others.terms_conditions.slug()}`,

         "offers": [ { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#offer/hybrid_base` } ],
         "brand": [ 
            { "@id": `${website.domain}/${lang}/#capa_pro` },
            {
               "@type": "Organization",
               "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization`,
               'url': `${website.domain}/${lang}/${L[lang].nav.about.slug()}`,
            } 
         ],

         "isRelatedTo": [
            { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#service/hybrid_base` },
            {"@type": "Service", "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}/#service/deepdive`}
         ],
         "isSimilarTo": [ { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#service/hybrid_base` } ]
      }
      schemaOrgArray.push(serviceHybridFull);
   })
   // Service DeepDive
   definedLocales.forEach((lang: Locales) => {
      const serviceDeepDive: Service = {
         "@type": "Service",
         "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}/#service/deepdive`,

         "name": L[lang].website.services.deepdive.title(),
         "alternateName": L[lang].website.services.deepdive.title_alt(),
         "description": L[lang].website.services.deepdive.description(),
         "disambiguatingDescription": L[lang].website.services.deepdive.description_disambiguation(),
         "logo": { "@id": `${website.domain}/${lang}/#logo` },
         "url": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}`,

         "image": {
            "@type": "ImageObject",
            "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}/#image/hybrid_full`,
            "url": `${website.domain}/images/home/working-genius.webp`,
            "caption": L[lang].website.services.deepdive.description_disambiguation(),
            "width": "1080",
            "height": "720",
         },

         "category": [ 'team building', 'team coaching', 'lencioni', 'trixolutions', 'teamcoaching', 'teamwork', 'workshop', 'training', 'business' ],

         "provider": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L[lang].nav.about.slug()}`,
         },

         "aggregateRating": { "@id": `${website.domain}/${lang}/#rating` },
         "areaServed": [ { "@id": `${website.domain}/${lang}/#country/be` }, { "@id": `${website.domain}/${lang}/#country/nl` } ],
         "audience": { "@id": `${website.domain}/${lang}/#audience` },
         "availableChannel": [ { "@id": `${website.domain}/${lang}/#service_channel/web` }, ],
         "hoursAvailable": { "@id": `${website.domain}/${lang}/#opening-hours/always-open` },
         "serviceAudience": { "@id": `${website.domain}/${lang}/#audience` },
         "serviceArea": [ { "@id": `${website.domain}/${lang}/#country/be` }, { "@id": `${website.domain}/${lang}/#country/nl` } ],
         "serviceType": 'Teamcoaching',
         "termsOfService": `${website.domain}/${lang}/${L[lang].nav.others.terms_conditions.slug()}`,

         "offers": [ { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}/#offer/deepdive` } ],
         "brand": [ 
            { "@id": `${website.domain}/${lang}/#capa_pro` },
            {
               "@type": "Organization",
               "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization`,
               'url': `${website.domain}/${lang}/${L[lang].nav.about.slug()}`,
            } 
         ],

         "isRelatedTo": [
            { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#service/hybrid_base` },
            { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#service/hybrid_full` }
         ],
         "isSimilarTo": []
      }
      schemaOrgArray.push(serviceDeepDive);
   })

   // OWNERSHIP INFO
   definedLocales.forEach((lang: Locales) => {
      const ownershipInfo: OwnershipInfo = {
         "@type": "OwnershipInfo",
         "@id": `${website.domain}/${lang}/#ownership-info`,
         "typeOfGood": [ { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#service/hybrid_base` }, { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#service/hybrid_full` }, { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}/#service/deepdive` } ]
      }
      schemaOrgArray.push(ownershipInfo);
   })

   // EVENTS
   let eventHybridFullObj: {[key:string]: Event} = {};
   definedLocales.forEach((lang: Locales) => {
      sessions.forEach((session:any, index:number) => {
         if (session.type === 'level_1_full') {
            if (session.language === lang) {
               const eventHybridFull: Event = {
                  "@type": "Event",
                  "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#events/lencioni_masterclass/${new Date(session.starts_on).toISOString()}`,
                  "about": [ { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#service/hybrid_full` } ],

                  "name": L[lang].website.services.hybrid_full.title_alt(),
                  "alternateName": L[lang].website.services.hybrid_full.title(),
                  "description": L[lang].website.services.hybrid_full.description(),
                  "disambiguatingDescription": L[lang].website.services.hybrid_full.description_disambiguation(),

                  "url": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}`,
                  "image": {
                     "@type": "ImageObject",
                     "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#image/hybrid_full`,
                     "url": `${website.domain}/images/home/working-genius.webp`,
                     "caption": L[lang].website.services.hybrid_full.description_disambiguation(),
                     "width": "1080",
                     "height": "720",
                  },

                  "startDate": new Date(session.starts_on).toISOString(),
                  "endDate": new Date(session.ends_on).toISOString(),
                  "duration": "P2D",
                  "performer": lang === 'fr' ? { "@id": `${website.domain}/${lang}/#person/christoph-meunier` } : { "@id": `${website.domain}/${lang}/#person/tom-van-dorst` },

                  "audience": { "@id": `${website.domain}/${lang}/#audience` },
                  "isAccessibleForFree": false,
                  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                  "eventStatus": "https://schema.org/EventScheduled",

                  
                  "location": { "@id": `${website.domain}/${lang}/#place/service_be` },
                  "offers": [ { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#offer/hybrid_base` } ],
                  "aggregateRating": { "@id": `${website.domain}/${lang}/#rating` },
                  "inLanguage": lang === 'en' ? { "@id": `${website.domain}/${lang}/#language/en` } : lang === 'fr' ? { "@id": `${website.domain}/${lang}/#language/fr` } : { "@id": `${website.domain}/${lang}/#language/nl` },
                  
                  "organizer": {
                     "@type": "Organization",
                     "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization`,
                     "url": `${website.domain}/${lang}/${L[lang].nav.about.slug()}`,
                  },
               }
               eventHybridFullObj[`${lang}-${index}`] = eventHybridFull;
            }
         }
      })
   })

   let eventDeepDiveObj: {[key:string]: Event} = {};
   definedLocales.forEach((lang: Locales) => {
      sessions.forEach((session:any, index:number) => {
         if (session.language === lang) {
            const eventDeepDive: Event = {
               "@type": "Event",
               "about": [ { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}/#service/deepdive` } ],

               "name": L[lang].website.services.deepdive.title_alt(),
               "alternateName": L[lang].website.services.deepdive.title(),
               "description": L[lang].website.services.deepdive.description(),
               "disambiguatingDescription": L[lang].website.services.deepdive.description_disambiguation(),

               "url": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}`,
               "image": {
                  "@type": "ImageObject",
                  "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}/#image/hybrid_full`,
                  "url": `${website.domain}/images/home/working-genius.webp`,
                  "caption": L[lang].website.services.deepdive.description_disambiguation(),
                  "width": "1080",
                  "height": "720",
               },

               "startDate": new Date(session.starts_on).toISOString(),
               "endDate": new Date(session.ends_on).toISOString(),
               "duration": "PT6H",
               "performer": lang === 'fr' ? { "@id": `${website.domain}/${lang}/#person/christoph-meunier` } : { "@id": `${website.domain}/${lang}/#person/tom-van-dorst` },

               "audience": { "@id": `${website.domain}/${lang}/#audience` },
               "isAccessibleForFree": false,
               "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
               "eventStatus": "https://schema.org/EventScheduled",

               
               "location": { "@id": `${website.domain}/${lang}/#place/service_be` },
               "offers": [ { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}/#offer/deepdive` } ],
               "aggregateRating": { "@id": `${website.domain}/${lang}/#rating` },
               "inLanguage": lang === 'en' ? { "@id": `${website.domain}/${lang}/#language/en` } : lang === 'fr' ? { "@id": `${website.domain}/${lang}/#language/fr` } : { "@id": `${website.domain}/${lang}/#language/nl` },
               
               "organizer": {
                  "@type": "Organization",
                  "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization`,
                  "url": `${website.domain}/${lang}/${L[lang].nav.about.slug()}`,
               },
            }
            eventDeepDiveObj[`${lang}-${index}`] = eventDeepDive;
         }
      })
   })
   
   let eventInfoSessionsObj: {[key:string]: Event} = {};
   definedLocales.forEach((lang: Locales) => {
      sessions.forEach((session:any, index:number) => {
         if (session.language === lang) {
            const eventInfoSessions: Event = {
               "@type": "Event",
               "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.info_sessions.slug()}/#events/${new Date(session.starts_on).toISOString()}`,
               "about": [ { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}/#service/deepdive` } ],

               "name": L[lang].sessions.info.title_single(),
               "alternateName": L[lang].sessions.info.title_short(),
               "description": L[lang].sessions.info.description(),
               "disambiguatingDescription": L[lang].sessions.info.description_alt(),

               "url": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.info_sessions.slug()}`,
               "image": {
                  "@type": "ImageObject",
                  "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.info_sessions.slug()}/#image/info_sessions`,
                  "url": `${website.domain}/images/home/lencioni-ctc.webp`,
                  "caption": L[lang].sessions.info.description_alt(),
                  "width": "1920",
                  "height": "1280",
               },

               "startDate": new Date(session.starts_on).toISOString(),
               "endDate": new Date(session.ends_on).toISOString(),
               "duration": "PT45M",
               "performer": lang === 'fr' ? { "@id": `${website.domain}/${lang}/#person/christoph-meunier` } : { "@id": `${website.domain}/${lang}/#person/tom-van-dorst` },

               "audience": { "@id": `${website.domain}/${lang}/#audience` },
               "isAccessibleForFree": true,
               "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
               "eventStatus": "https://schema.org/EventScheduled",

               "aggregateRating": { "@id": `${website.domain}/${lang}/#rating` },
               "inLanguage": lang === 'en' ? { "@id": `${website.domain}/${lang}/#language/en` } : lang === 'fr' ? { "@id": `${website.domain}/${lang}/#language/fr` } : { "@id": `${website.domain}/${lang}/#language/nl` },
               
               "organizer": {
                  "@type": "Organization",
                  "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization`,
                  "url": `${website.domain}/${lang}/${L[lang].nav.about.slug()}`,
               },
            }
            eventInfoSessionsObj[`${lang}-${index}`] = eventInfoSessions;
         }
      })
   })

   let allEvents: Event[] = [];
   Object.values(eventHybridFullObj).forEach((event: Event) => allEvents.push(event));
   Object.values(eventDeepDiveObj).forEach((event: Event) => allEvents.push(event));
   Object.values(eventInfoSessionsObj).forEach((event: Event) => allEvents.push(event));

   // schemaOrgArray = [...schemaOrgArray, ...allEvents];


   /* === === === === === === == === == === === === === === */
   /* === === === == == UNIVERSAL SCHEMAS == == === === === */
   /* === === === === === === == === == === === === === === */

   // OFFER CATALOG
   let offerCatalogObj: {[key:string]: OfferCatalog} = {};
   definedLocales.forEach((lang: Locales) => {
      const offerCatalog: OfferCatalog = {
         "@type": "OfferCatalog",
         "@id": `${website.domain}/${lang}/#offerCatalog`,
         "name": L[lang].website.services.title(),
         "description": L[lang].website.services.description(),
         "itemListElement": [
            {
               "@type": "OfferCatalog",
               "name": L[lang].website.services.hybrid_full.title(),
               "description": L[lang].website.services.description(),
               "itemListElement": [
                  { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#service/hybrid_base` },
                  { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#service/hybrid_full` },
               ]
            },
            {
               "@type": "OfferCatalog",
               "name": L[lang].website.services.deepdive.title(),
               "description": L[lang].website.services.deepdive.description(),
               "itemListElement": [
                  { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}/#service/deepdive` }
               ]
            }
         ]
      }
      offerCatalogObj[lang] = offerCatalog;
   })

   // ORGANIZATION
   let organizationObj: {[key:string]: Organization} = {};
   definedLocales.forEach((lang: Locales) => {
      const organization: Organization = {
         "@type": "Organization",
         "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization`,
         
         "name": L[lang].website.title(),
         "alternateName": `${L[lang].website.title()} - ${L[lang].website.tagLine()}`,
         "slogan": L[lang].website.slogan(),
         "description": L[lang].website.description_short(),
         "disambiguatingDescription": L[lang].website.description(),
         
         "url": `${website.domain}/${lang}`,
         "logo": { "@id": `${website.domain}/${lang}/#logo` },
         "image": { "@id": `${website.domain}/${lang}/#logo` },
         
         "address": { "@id": `${website.domain}/${lang}/#address/be` },
         "areaServed": [ { "@id": `${website.domain}/${lang}/#country/be` }, { "@id": `${website.domain}/${lang}/#country/nl` } ],

         "email": website.contactEmail,
         "contactPoint": { "@id": `${website.domain}/${lang}/#contact-point` },

         "founder": { "@id": `${website.domain}/${lang}/#person/tom-van-dorst` },
         "foundingLocation": { "@id": `${website.domain}/${lang}/#place/be` },
         "member": [ { "@id": `${website.domain}/${lang}/#person/tom-van-dorst` }, { "@id": `${website.domain}/${lang}/#person/christoph-meunier` }, { "@id": `${website.domain}/${lang}/#person/tamara-dhaese` } ],

         "owns": { "@id": `${website.domain}/${lang}/#ownership-info` },
         "hasOfferCatalog": { "@id": `${website.domain}/${lang}/#offerCatalog` },
         "event": allEvents,

         "aggregateRating": { "@id": `${website.domain}/${lang}/#rating` },
         "sameAs": socials,
         "brand": [ { "@id": `${website.domain}/${lang}/#capa_pro` } ],

         "knowsLanguage": [ "nl", "fr", "en" ],
         "keywords": [
            "trixolutions", 
            "teamcoaching", 
            "lencioni belgie", 
            "piramide lencioni", 
            'tom van dorst', 
            'patrick lencioni', 
            'opleidingen in teamcoaching', 
            'model van lencioni'
         ]
      }
      organizationObj[lang] = organization;
   })

   // LOCAL BUSINESS
   let localBusinessObj: {[key:string]: LocalBusiness} = {};
   definedLocales.forEach((lang: Locales) => {
      const localBusiness: LocalBusiness = {
         "@type": "LocalBusiness",
         "@id": `${website.domain}/${lang}/#localBusiness`,
         
         "legalName": "Trixolutions BV",
         "name": L[lang].website.title(),
         "alternateName": `${L[lang].website.title()} - ${L[lang].website.tagLine()}`,
         "description": L[lang].website.description_short(),
         "disambiguatingDescription": L[lang].website.description(),
         "slogan": L[lang].website.slogan(),

         "url": website.domain,
         "address": { "@id": `${website.domain}/${lang}/#address/be` },
         "location": { "@id": `${website.domain}/${lang}/#place/be` },
         "email": website.contactEmail,
         "logo": { "@id": `${website.domain}/${lang}/#logo` },
         "image": { "@id": `${website.domain}/${lang}/#logo` },
         
         "openingHours": "Mo,Tu,We,Th,Fr 08:00-18:00",
         "priceRange": "€€€",
         
         "knowsLanguage": [ "nl-BE", "fr-BE", "en-GB" ],
         "contactPoint": { "@id": `${website.domain}/${lang}/#contact-point` },
         "areaServed": [ { "@id": `${website.domain}/${lang}/#country/be` }, { "@id": `${website.domain}/${lang}/#country/nl` } ],
         "employees": [ { "@id": `${website.domain}/${lang}/#person/tom-van-dorst` }, { "@id": `${website.domain}/${lang}/#person/christoph-meunier` }, { "@id": `${website.domain}/${lang}/#person/tamara-dhaese` } ],
         "founder": { "@id": `${website.domain}/${lang}/#person/tom-van-dorst` },
         "foundingLocation": { "@id": `${website.domain}/${lang}/#place/be` },
         "member": [ { "@id": `${website.domain}/${lang}/#person/tom-van-dorst` }, { "@id": `${website.domain}/${lang}/#person/christoph-meunier` }, { "@id": `${website.domain}/${lang}/#person/tamara-dhaese` } ],

         "owns": { "@id": `${website.domain}/${lang}/#ownership-info` },
         "hasOfferCatalog": { "@id": `${website.domain}/${lang}/#offerCatalog` },
         "event": allEvents,
         "makesOffer": [ { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#offer/hybrid_base` }, { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#offer/hybrid_full` }, { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}/#offer/deepdive` } ],

         "aggregateRating": { "@id": `${website.domain}/${lang}/#rating` },
         "sameAs": socials,
         "brand": [ { "@id": `${website.domain}/${lang}/#capa_pro` }, { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` } ],
      }
      localBusinessObj[lang] = localBusiness;
   })

   // WEBSITE
   let websiteObj: {[key:string]: WebSite} = {};
   definedLocales.forEach((lang: Locales) => {
      const websiteSchema: WebSite = {
         "@type": "WebSite",
         "@id": `${website.domain}/${lang}/#website`,
         "url": `${website.domain}/${lang}`,

         "name": L[lang].website.title(),
         "alternateName": `${L[lang].website.title()} - ${L[lang].website.slogan()}`,
         "description": L[lang].website.description_short(),
         "disambiguatingDescription": L[lang].website.description(),
         "headline": L[lang].website.tagLine(),
         "alternativeHeadline": L[lang].website.slogan(),
         "text": L[lang].website.description(),
         "image": { "@id": `${website.domain}/${lang}/#logo` },

         "accessibilityAPI": accessibility.api,
         "accessibilityControl": accessibility.control,
         "accessibilityFeature": accessibility.feature,
         "accessibilityHazard": accessibility.hazard,
         "accessibilitySummary": accessibility.summary[lang],
         "accessMode": accessibility.mode,

         "accountablePerson": { "@id": `${website.domain}/${lang}/#person/tom-van-dorst` },
         "aggregateRating": { "@id": `${website.domain}/${lang}/#rating` },
         "audience": { "@id": `${website.domain}/${lang}/#audience` },

         "dateCreated": website.created_on,
         "datePublished": website.updated_on,
         "dateModified": website.updated_on,

         "creditText": L[lang].base.footer.creator(),
         "author": { "@id": `${website.domain}/${lang}/#person/tom-van-dorst` },
         "creator": { "@id": `${website.domain}/${lang}/#mist_media` },
         "contributor": [ { "@id": `${website.domain}/${lang}/#person/tom-van-dorst` }, { "@id": `${website.domain}/${lang}/#mist_media` } ],
         "editor": { "@id": `${website.domain}/${lang}/#person/miro_storm` },
         "maintainer": { "@id": `${website.domain}/${lang}/#mist_media` },
         "provider": { "@id": `${website.domain}/${lang}/#mist_media` },
         "publisher": { "@id": `${website.domain}/${lang}/#mist_media` },
         "translator": { "@id": `${website.domain}/${lang}/#mist_media` },
         "producer": { "@id": `${website.domain}/${lang}/#mist_media` },

         "sourceOrganization": { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` },
         "copyrightYear": new Date().getFullYear(),
         "copyrightHolder": { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` },
         "copyrightNotice": L[lang].base.footer.creator(),
         "countryOfOrigin": { "@id": `${website.domain}/${lang}/#country/be` },
         "locationCreated": { "@id": `${website.domain}/${lang}/#place/be` },

         "spatialCoverage": { "@id": `${website.domain}/${lang}/#place/be` },
         "isAccessibleForFree": true,
         "isFamilyFriendly": true,
         "isPartOf": [ website.domain ],
         "interactivityType": "mixed",
         "typicalAgeRange": "18-65",
         "inLanguage": lang === 'en' ? { "@id": `${website.domain}/${lang}/#language/en` } : lang === 'fr' ? { "@id": `${website.domain}/${lang}/#language/fr` } : { "@id": `${website.domain}/${lang}/#language/nl` },

         "genre": [ "business", "teamcoaching", "lencioni", "piramide lencioni", "website", "workshops" ],
         "keywords": [ "business", "teamcoaching", "lencioni", "piramide lencioni", "website", "workshops" ],

         "mentions": [ { "@id": `${website.domain}/${lang}/#capa_pro` }, { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` }, { "@id": `${website.domain}/${lang}/#person/patrick_lencioni` } ],

         "sdPublisher": { "@id": `${website.domain}/${lang}/#mist_media` },
         "sdLicense": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
         "sdDatePublished": website.updated_on,

         "mainEntity": [ { "@id": `${website.domain}/${lang}/#localBusiness` }, { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` } ],
         "offers": [ { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#offer/hybrid_base` }, { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.hybrid_traject.slug()}/#offer/hybrid_full` }, { "@id": `${website.domain}/${lang}/${L[lang].nav.open_sessions.items.deepdive.slug()}/#offer/deepdive` } ],
         "sameAs": socials,
      }
      websiteObj[lang] = websiteSchema;
   })

   const offerCatalogArr: OfferCatalog[] = Object.values(offerCatalogObj).map((offerCatalog: OfferCatalog) => offerCatalog);
   const organizationArr: Organization[] = Object.values(organizationObj).map((organization: Organization) => organization);
   const localBusinessArr: LocalBusiness[] = Object.values(localBusinessObj).map((localBusiness: LocalBusiness) => localBusiness);
   const websiteArr: WebSite[] = Object.values(websiteObj).map((website: WebSite) => website);

   schemaOrgArray = [ ...schemaOrgArray, ...offerCatalogArr, ...organizationArr, ...localBusinessArr, ...websiteArr ];

   /* === === === === === === == === == === === === === === */
   /* === === === === PAGE SPECIFIC SCHEMAS === === === === */
   /* === === === === === === == === == === === === === === */

   // BREADCRUMBS
   let breadcrumbsObj: {[key:string]: BreadcrumbList} = {};
   definedLocales.forEach((lang: Locales) => {

      let breadCrumbsPerLocale: ListItem[];
      
      const homeBreadcrumb: ListItem = {
         "@type": 'ListItem',
         "position": 1,
         "item": {
            "@type": "WebPage",
            "@id": `${website.domain}/${lang}/#webpage`,
            "name": L[lang].nav.home.title(),
            "description": L[lang].nav.home.description(),
            "url": `${website.domain}/${lang}`
         },
      }
      breadCrumbsPerLocale = [ homeBreadcrumb ];

      if (entityMeta.breadcrumb) {
         entityMeta.breadcrumb.forEach((crumb, key) => {
            let breadcrumbElement: ListItem = {
               "@type": 'ListItem',
               "position": key+2,
               "item": {
                  "@type": "WebPage",
                  "@id": `${website.domain}${crumb.slug[lang]}/#webpage`,
                  "url": `${website.domain}${crumb.slug[lang]}`,
                  "name": crumb.name[lang],
                  "description": crumb.description[lang],
               },
            }
            breadCrumbsPerLocale.push(breadcrumbElement);
         })
      }
      let breadcrumbsSchema: BreadcrumbList = {
         '@type': 'BreadcrumbList',
         '@id': `${website.domain}/${entityMeta.slug[lang]}/#breadcrumbs`,
         "itemListElement": breadCrumbsPerLocale,
      }

      breadcrumbsObj[lang] = breadcrumbsSchema;
   })

   // WEB PAGE
   // Create empty array for webpage in all defined locales
   let webPageObj: {[key:string]: WebPage} = {};
   definedLocales.forEach((lang: Locales) => {
      // Define WebPage schema for each defined locale
      const webPageSchema: WebPage = {
         "@type": "WebPage",
         "@id": `${website.domain}/${entityMeta.slug[lang]}/#webpage`,
         "url": `${website.domain}/${entityMeta.slug[lang]}`,
   
         "name": `${website.title} - ${entityMeta.name[lang]}`,
         "alternateName": `${entityMeta.name[lang]}`,
         "description": entityMeta.description[lang],
         "disambiguatingDescription": `${website.title}: ${entityMeta.description[lang]}`,
   
         "breadcrumb": { '@id': `${website.domain}/${entityMeta.slug[lang]}/#breadcrumbs` },
         "primaryImageOfPage": { '@id': `${website.domain}/${entityMeta.slug[lang]}/#primaryimage` },	
         "isPartOf": { "@id": `${website.domain}/${lang}/#website` },
         "author": entityMeta.author === 'tom' ? { "@id": `${website.domain}/${lang}/#person/tom-van-dorst` } : entityMeta.author === 'lencioni' ? { "@id": `${website.domain}/${lang}/#person/patrick_lencioni` } : { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` },
         "inLanguage": lang === 'en' ? { "@id": `${website.domain}/${lang}/#language/en` } : lang === 'fr' ? { "@id": `${website.domain}/${lang}/#language/fr` } : { "@id": `${website.domain}/${lang}/#language/nl` },
         
         "relatedLink": entityMeta.related?.map((link) => { return `${website.domain}/${lang}/${link.slug[lang]}` }),
         "significantLink": entityMeta.significant?.map((link) => { return `${website.domain}/${lang}/${link.slug[lang]}` }),
         
         "accessibilityAPI": accessibility.api,
         "accessibilityControl": accessibility.control,
         "accessibilityFeature": accessibility.feature,
         "accessibilityHazard": accessibility.hazard,
         "accessibilitySummary": accessibility.summary[lang],
         "accessMode": accessibility.mode,
         
         "accountablePerson": { "@id": `${website.domain}/${lang}/#person/tom-van-dorst` },
         "aggregateRating": { "@id": `${website.domain}/${lang}/#rating` },
         "audience": { "@id": `${website.domain}/${lang}/#audience` },
         
         "dateCreated": entityMeta.created_on,
         "datePublished": entityMeta.updated_on,
         "dateModified": entityMeta.updated_on,
         "lastReviewed": entityMeta.updated_on,
         "reviewedBy": [ { "@id": `${website.domain}/${lang}/#mist_media` }, { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` } ],
         "creditText": L[lang].base.footer.creator(),
         "creator": { "@id": `${website.domain}/${lang}/#mist_media` },
         "editor": { "@id": `${website.domain}/${lang}/#person/miro_storm` },
         "contributor": [ { "@id": `${website.domain}/${lang}/#mist_media` }, { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` } ],
         "maintainer": { "@id": `${website.domain}/${lang}/#mist_media` },
         "provider": { "@id": `${website.domain}/${lang}/#mist_media` },
         "publisher": { "@id": `${website.domain}/${lang}/#mist_media` },
         "translator": { "@id": `${website.domain}/${lang}/#mist_media` },
         "producer": { "@id": `${website.domain}/${lang}/#mist_media` },
         "countryOfOrigin": { "@id": `${website.domain}/${lang}/#country/be` },
   
         "sameAs": socials,
   
         "potentialAction": [
            // {
            //    "@type": "SearchAction",
            //    "target": `${website.domain}/${$locale}/search?q={search_term_string}`,
            //    "query-input": "required name=search_term_string"
            // },
            {
               "@type": "ReadAction",
               "target": [`${website.domain}/${entityMeta.slug[lang]}`],
               "provider": { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` }
            },
            {
               "@type": "ViewAction",
               "target": [`${website.domain}/${entityMeta.slug[lang]}`],
               "provider": { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` }
            },
            {
               "@type": "WatchAction",
               "target": [`${website.domain}/${entityMeta.slug[lang]}`],
               "provider": { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` }
            },
            {
               "@type": "ShareAction",
               "target": [`${website.domain}/${entityMeta.slug[lang]}`],
               "provider": { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` }
            },
            {
               "@type": "BookmarkAction",
               "target": [`${website.domain}/${entityMeta.slug[lang]}`],
               "provider": { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` }
            },
            {
               "@type": "SubscribeAction",
               "target": [`${website.domain}/${entityMeta.slug[lang]}`],
               "provider": { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` }
            },
         ]
      };
      // Push defined schema to array
      webPageObj[lang] = (webPageSchema);
   })

   const breadcrumbsArray = Object.values(breadcrumbsObj).map((breadcrumbs: BreadcrumbList) => breadcrumbs);
   const webPageArray = Object.values(webPageObj).map((webPage: WebPage) => webPage);

   schemaOrgArray = [ ...schemaOrgArray, ...breadcrumbsArray, ...webPageArray ]

   // === == == == ===
   // === OPTIONAL ===
   // === == == == === 

   // VIDEO
   if (videos) {
      // Create empty array for all video schemas
      let videoObj: VideoObject[] = [];
      definedLocales.forEach((lang: Locales) => {
         videosMeta.forEach((videoMeta: VideoMetadata, key: number) => {
            const videoSchema: VideoObject = {
               '@type': 'VideoObject',
               '@id': `${website.domain}/${lang}//${entityMeta.slug[lang]}/#videos/${key+1}`,
               'url': `${website.domain}/${lang}//${entityMeta.slug[lang]}`,
               
               'name': `${videoMeta.name[lang]}`,
               'alternateName': `${website.title} - ${videoMeta.name[lang]}`,
               'description': `${videoMeta.description[lang]}`,
               'disambiguatingDescription': `${videoMeta.name[lang]}: ${videoMeta.description[lang]}`,
      
               'thumbnail': {
                  '@type': 'ImageObject',
                  'url': videoMeta.thumbnail.url,
                  'width': `${videoMeta.thumbnail.width}`,
                  'height': `${videoMeta.thumbnail.height}`,
               },
               "thumbnailUrl": videoMeta.thumbnail.url,
               'videoQuality': videoMeta.quality,
      
               'contentUrl': videoMeta.url,
               'embedUrl': videoMeta.url,
               'duration': videoMeta.duration,
               'contentSize': videoMeta.size,
      
               'uploadDate': videoMeta.uploadDate,
               "dateCreated": videoMeta.uploadDate,
               "datePublished": videoMeta.uploadDate,
      
               "requiresSubscription": false,
               "isFamilyFriendly": true,
               "isAccessibleForFree": true,
               "isPartOf": { "@id": `${website.domain}/${entityMeta.slug[lang]}/#webpage` },
               "mainEntityOfPage": { "@id": `${website.domain}/${entityMeta.slug[lang]}/#webpage` },
               "author": entityMeta.author === 'tom' ? { "@id": `${website.domain}/${lang}/#person/tom-van-dorst` } : entityMeta.author === 'lencioni' ? { "@id": `${website.domain}/${lang}/#person/patrick_lencioni` } : { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` },
      
               "contributor": [ { "@id": `${website.domain}/${lang}/#mist_media` }, { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` } ],
               "copyrightHolder": { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` },
               "creditText": L[lang].base.footer.creator(),
               "editor": { "@id": `${website.domain}/${lang}/#person/miro_storm` },
               "maintainer": { "@id": `${website.domain}/${lang}/#mist_media` },
               "translator": { "@id": `${website.domain}/${lang}/#mist_media` },
               "productionCompany": { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` },
      
               "inLanguage": videoMeta.language === 'en' ? { "@id": `${website.domain}/${lang}/#language/en` } : videoMeta.language === 'fr' ? { "@id": `${website.domain}/${lang}/#language/fr` } : { "@id": `${website.domain}/${lang}/#language/nl` },
      
               "countryOfOrigin": { "@id": `${website.domain}/${lang}/#country/be` },
      
               "interactionStatistic": [
                  {
                     "@type": "InteractionCounter",
                     "interactionType": { "@type": "WatchAction" },
                     "userInteractionCount": videoMeta.views
                  }
               ],
      
               "hasPart": videoMeta.key_moments.map((item:any) => {
                  const clip:Clip = {
                     "@type": "Clip",
                     "name": item.name[lang],
                     "description": item.description[lang],
                     "startOffset": item.start,
                     "endOffset": item.end,
                     "isPartOf": { '@id': `${website.domain}/${lang}//${entityMeta.slug[lang]}/#videos/${key+1}` },
                  }
                  return clip;
               }),
            }
            videoObj.push(videoSchema);
         })
      })

      schemaOrgArray = [ ...schemaOrgArray, ...videoObj ]
   }

   // ARTICLE
   if (articles) {
      let articleObj: Article[] = [];
      definedLocales.forEach((lang: Locales) => {
         articlesMeta.forEach((articleMeta: ArticleMetadata, key: number) => {
            const articleSchema: Article = {
               '@type': 'Article',
               '@id': `${website.domain}/${lang}//${entityMeta.slug[lang]}/#articles/${key+1}`,
               'url': `${website.domain}/${lang}//${entityMeta.slug[lang]}`,
         
               "name": `${articleMeta.name[lang]}`,
               "alternateName": `${website.title} - ${articleMeta.name[lang]}`,
               "description": articleMeta.description[lang],
               "disambiguatingDescription": `${articleMeta.name[lang]}: ${articleMeta.description[lang]}`,
               "headline": `${articleMeta.name[lang]}`,

               "contributor": [ { "@id": `${website.domain}/${lang}/#mist_media` }, { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` } ],
               "creditText": L[lang].base.footer.creator(),
               "editor": { "@id": `${website.domain}/${lang}/#person/miro_storm` },
               "maintainer": { "@id": `${website.domain}/${lang}/#mist_media` },
               "copyrightHolder": { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` },
               "copyrightYear": `${new Date().getFullYear()}`,
         
               "inLanguage": lang === 'en' ? { "@id": `${website.domain}/${lang}/#language/en` } : lang === 'fr' ? { "@id": `${website.domain}/${lang}/#language/fr` } : { "@id": `${website.domain}/${lang}/#language/nl` },
               "articleBody": articleMeta.body[lang],
               "text": articleMeta.body[lang],
               "articleSection": articleMeta.tags ? articleMeta.tags[lang] : [], //blog, news, article, etc
               "wordCount": articleMeta.words,
               "abstract": articleMeta.excerpt[lang],
         
               "accessibilityAPI": accessibility.api,
               "accessibilityControl": accessibility.control,
               "accessibilityFeature": accessibility.feature,
               "accessibilityHazard": accessibility.hazard,
               "accessibilitySummary": accessibility.summary[lang],
               "accessMode": accessibility.mode,
         
               "accountablePerson": { "@id": `${website.domain}/${lang}/#person/tom-van-dorst` },
         
               "isPartOf": { "@id": `${website.domain}/${lang}//${entityMeta.slug[lang]}/#webpage`},
               "mainEntityOfPage": { "@id": `${website.domain}/${lang}//${entityMeta.slug[lang]}/#webpage`},
         
               "author": articleMeta.author === 'tom' ? { "@id": `${website.domain}/${lang}/#person/tom-van-dorst` } : articleMeta.author === 'lencioni' ? { "@id": `${website.domain}/${lang}/#person/patrick_lencioni` } : { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` },
               "datePublished": new Date(articleMeta.datePublished).toISOString(),
               "dateModified": new Date(articleMeta.dateModified).toISOString(),
               "publisher": { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` },
               "image": { '@id': `${website.domain}/${entityMeta.slug[lang]}/#primaryimage` },
            }
            articleObj.push(articleSchema);
         })
      })

      schemaOrgArray = [ ...schemaOrgArray, ...articleObj ]
   }

   // BLOG POST
   let blogPostObj: {[key: string]: BlogPosting[]} = {};
   if (blogPosts) {
      // Create empty array for all blog post schemas
      definedLocales.forEach((lang: Locales) => {

         let blogPostPerLocale: BlogPosting[] = [];
         blogPostsMeta.forEach((blogPostMeta: BlogPostMetadata, key: number) => {
            const blogPostSchema: BlogPosting = {
               '@type': 'BlogPosting',
               '@id': `${website.domain}/${lang}//${entityMeta.slug[lang]}/#blogpost/${key+1}`,
               'url': `${website.domain}/${lang}//${entityMeta.slug[lang]}`,
         
               "name": `${blogPostMeta.name[lang]}`,
               "alternateName": `${website.title} - ${blogPostMeta.name[lang]}`,
               "description": blogPostMeta.description[lang],
               "disambiguatingDescription": `${blogPostMeta.excerpt[lang]}`,
               "headline": `${blogPostMeta.name[lang]}`,
         
               "contributor": [ { "@id": `${website.domain}/${lang}/#mist_media` }, { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` } ],
               "creditText": L[lang].base.footer.creator(),
               "editor": { "@id": `${website.domain}/${lang}/#person/miro_storm` },
               "maintainer": { "@id": `${website.domain}/${lang}/#mist_media` },
         
               "inLanguage": lang === 'en' ? { "@id": `${website.domain}/${lang}/#language/en` } : lang === 'fr' ? { "@id": `${website.domain}/${lang}/#language/fr` } : { "@id": `${website.domain}/${lang}/#language/nl` },
               "articleBody": blogPostMeta.body[lang],
               "text": blogPostMeta.body[lang],
               "articleSection": blogPostMeta.tags ? blogPostMeta.tags[lang] : [], //blog, news, article, etc
               "wordCount": blogPostMeta.words,
               "abstract": blogPostMeta.excerpt[lang],
         
               "accessibilityAPI": accessibility.api,
               "accessibilityControl": accessibility.control,
               "accessibilityFeature": accessibility.feature,
               "accessibilityHazard": accessibility.hazard,
               "accessibilitySummary": accessibility.summary[lang],
               "accessMode": accessibility.mode,
         
               "accountablePerson": { "@id": `${website.domain}/${lang}/#person/tom-van-dorst` },
         
               "isPartOf": [{ "@id": `${website.domain}/${entityMeta.slug[lang]}/#webpage` }, { '@id': `${website.domain}/${lang}/${L[lang].nav.blog.slug()}/#blog` }],
               "mainEntityOfPage": { "@id": `${website.domain}/${entityMeta.slug[lang]}/#webpage` },
         
               "author": blogPostMeta.author === 'tom' ? { "@id": `${website.domain}/${lang}/#person/tom-van-dorst` } : blogPostMeta.author === 'lencioni' ? { "@id": `${website.domain}/${lang}/#person/patrick_lencioni` } : { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` },
               "datePublished": new Date(blogPostMeta.datePublished).toISOString(),
               "dateModified": new Date(blogPostMeta.dateModified).toISOString(),
               "publisher": { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` },
               "image": { '@id': `${website.domain}/${entityMeta.slug[lang]}/#primaryimage` },
            }
            blogPostPerLocale.push(blogPostSchema);
         })
         blogPostObj[lang] = blogPostPerLocale;
      })
      let blogPostArr: BlogPosting[] = [];
      Object.values(blogPostObj).forEach((blogPost: BlogPosting[]) => blogPostArr = [ ...blogPostArr, ...blogPost ]);
      schemaOrgArray = [ ...schemaOrgArray, ...blogPostArr ]
   }

   // BLOG
   if (blog) {
      let blogObj: Blog[] = [];
      definedLocales.forEach((lang: Locales) => {
         const blogSchema: Blog = {
            '@type': 'Blog',
            '@id': `${website.domain}/${lang}/${entityMeta.slug[lang]}/#blog`,
         
            "name": `${entityMeta.name[lang]}`,
            "alternateName": `${website.title} - ${entityMeta.name[lang]}`,
            "description": entityMeta.description[lang],
            "disambiguatingDescription": `${entityMeta.description[lang]}`,
            "headline": `${entityMeta.name[lang]}`,
         
            "contributor": [ { "@id": `${website.domain}/${lang}/#mist_media` }, { "@id": `${website.domain}/${lang}/${L[lang].nav.about.slug()}/#organization` } ],
            "creditText": L[lang].base.footer.creator(),
            "editor": { "@id": `${website.domain}/${lang}/#person/miro_storm` },
            "maintainer": { "@id": `${website.domain}/${lang}/#mist_media` },
         
            "inLanguage": lang === 'en' ? { "@id": `${website.domain}/${lang}/#language/en` } : lang === 'fr' ? { "@id": `${website.domain}/${lang}/#language/fr` } : { "@id": `${website.domain}/${lang}/#language/nl` },
         
            "blogPost": blogPostObj[lang],
         }
         blogObj.push(blogSchema);
      })

      schemaOrgArray = [ ...schemaOrgArray, ...blogObj ]
   }
   
   // console.log(schemaOrgArray);
   let jsonLdString = JSON.stringify(schemaOrgArray);

   let jsonLdScript = `<script type="application/ld+json">${jsonLdString}${'<'}/script>`;
</script>

<svelte:head>
   {@html jsonLdScript}
</svelte:head>