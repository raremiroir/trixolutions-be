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
   import { i18nObject } from 'typesafe-i18n';
   import nl_website from '$i18n/nl/website';
   import fr_website from '$i18n/fr/website';
   import en_website from '$i18n/en/website';
   import nl_nav from '$i18n/nl/nav';
   import fr_nav from '$i18n/fr/nav';
   import en_nav from '$i18n/en/nav';
   import nl_sessions from '$i18n/nl/sessions';
   import fr_sessions from '$i18n/fr/sessions';
   import en_sessions from '$i18n/en/sessions';
   import nl_base from '$i18n/nl/index';
   import fr_base from '$i18n/fr/index';
   import en_base from '$i18n/en/index';

   type i18nType = {
      nl: any;
      fr: any;
      en: any;
   }

   // Define i18n Objects
   const L_WEBSITE: i18nType = {
      nl: i18nObject('nl', nl_website),
      fr: i18nObject('fr', fr_website),
      en: i18nObject('en', en_website),
   }
   const L_NAV: i18nType = {
      nl: i18nObject('nl', nl_nav),
      fr: i18nObject('fr', fr_nav),
      en: i18nObject('en', en_nav),
   }
   const L_SESSIONS: i18nType = {
      nl: i18nObject('nl', nl_sessions),
      fr: i18nObject('fr', fr_sessions),
      en: i18nObject('en', en_sessions),
   }
   const L_BASE: i18nType = {
      nl: i18nObject('nl', nl_base),
      fr: i18nObject('fr', fr_base),
      en: i18nObject('en', en_base),
   }


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


   // Define array for storing all the schema objects
   let schemaOrgArray:any = [];
   /* ============================================= */
   /* ======= DEFINE DEFAULT SCHEMA OBJECTS ======= */
   /* ============================================= */

   // THIRD PARTIES
   const patrick_lencioni: Person = {
      "@type": "Person",
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

   let capaProObj: {[key:string]: Organization} = {};
   definedLocales.forEach((lang: Locales) => {
      const capa_pro: Organization = {
         "@type": "Organization",
         "@id": `https://www.tablegroup.com/#capa_pro`,
         
         "name": L_WEBSITE[lang].brands.capa_pro.name(),
         "alternateName": `${L_WEBSITE[lang].brands.capa_pro.name()} - Patrick Lencioni`,
         "slogan": L_WEBSITE[lang].brands.capa_pro.slogan(),
         "description": L_WEBSITE[lang].brands.capa_pro.description(),
         
         "url": "https://www.tablegroup.com",
         "logo": `${website.domain}/images/partners/capa-pro.png`,
         "image": `${website.domain}/images/partners/capa-pro.png`,
      
         "founder": patrick_lencioni,
         "sameAs": [
               'https://www.linkedin.com/company/capa-pro2',
            ],
      }
      capaProObj[lang] = capa_pro;
   })

   let miro_storm: Person;
   $: miro_storm = {
      "@type": "Person",
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
   let mist_media: Organization;
   $: mist_media = {
      "@type": "Organization",

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
      "founder": miro_storm,
   }


   // IMAGE OBJECT(S)
   let mainImageObj: {[key:string]: ImageObject} = {};
   definedLocales.forEach((lang: Locales) => {
      const mainImage: ImageObject = { 
         '@type': 'ImageObject', 
         '@id': `${website.domain}/${entityMeta.slug[lang]}/#primaryimage`,
         "inLanguage": lang,
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
      mainImageObj[lang] = mainImage;
   })

   let logoObj: {[key:string]: ImageObject} = {};
   definedLocales.forEach((lang: Locales) => {
      const logo: ImageObject = {
         "@type": "ImageObject",
         "@id": `${website.domain}/${lang}/#logo`,
         "url": `${website.domain}/logo-1920x1280.webp`,
         "contentUrl": `${website.domain}/logo-1920x1280.webp`,
         "embedUrl": `${website.domain}/logo-1920x1280.webp`,
         "inLanguage": lang,
         "width": "1920",
         "height": "1280",
         "caption": "Logo Trixolutions",
         "about": {
            "@type": "WebPage",
            "@id": `${website.domain}/${entityMeta.slug[lang]}/#webpage`,
            "url": `${website.domain}/${entityMeta.slug[lang]}`,
         },
      };
      logoObj[lang] = logo;
   });

   if (images === true) {
      definedLocales.forEach((lang: Locales) => {
         imagesMeta.forEach((image: ImageMetadata) => {
            const imageObject: ImageObject = { 
               '@type': 'ImageObject', 
               '@id': `${website.domain}/${entityMeta.slug[lang]}/#image`,
               "inLanguage": lang,
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
   let areaServedObj: {[key:string]: {be: Country, nl: Country}} = {};
   definedLocales.forEach((lang: Locales) => {
      const areaServed: { be: Country, nl: Country } = {
         be: {
            "@type": "Country",
            "@id": `${website.domain}/${lang}/#country/be`,
            "name": L_WEBSITE[lang].address.be.country(),
            "additionalType": "https://en.wikipedia.org/wiki/ISO_3166-2:BE",
            "hasMap": `${website.domain}/${lang}/contact`,
            "logo": logoObj[lang], 
         },
         nl: {
            "@type": "Country",
            "@id": `${website.domain}/${lang}/#country/nl`,
            "name": L_WEBSITE[lang].address.nl.country(),
            "additionalType": "https://en.wikipedia.org/wiki/ISO_3166-2:NL",
            "hasMap": `${website.domain}/${lang}/contact`,
            "logo": logoObj[lang],
         }
      }
      areaServedObj[lang] = areaServed;
   })

   // LANGUAGES
   let languagesObj: {[key:string]: {nl: Language, fr: Language, en: Language}} = {};
   definedLocales.forEach((lang: Locales) => {
      const languages: {nl: Language, fr: Language, en: Language} = {
         nl: {
            "@type": "Language",
            "@id": `${website.domain}/${lang}/#language/nl`,
            "alternateName": "Nederlands",
            "name": L_WEBSITE[lang].languages.nl(),
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
            "name": L_WEBSITE[lang].languages.fr(),
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
            "name": L_WEBSITE[lang].languages.en(),
            "description": "English Language",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Flag_of_the_United_Kingdom.svg/1024px-Flag_of_the_United_Kingdom.svg.png?20120916041411",
            "sameAs": "https://wikipedia.org/wiki/English_language",
            "identifier": "en",
         },
      }
      languagesObj[lang] = languages;
   })
   
   // CONTACT INFO
   let openingHoursObj: {[key:string]: OpeningHoursSpecification} = {};
   definedLocales.forEach((lang: Locales) => {
      const openingHours: OpeningHoursSpecification = {
         "@type": "OpeningHoursSpecification",
         "@id": `${website.domain}/${lang}/#opening-hours/normal`,
         "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ],
         "image": mainImageObj[lang],
         "validFrom": "2020-01-01",
         "opens": "08:00",
         "closes": "18:00",
         "name": L_WEBSITE[lang].opening_hours.title(),
         "alternateName": L_WEBSITE[lang].opening_hours.title(),
         "description": L_WEBSITE[lang].opening_hours.description({
            start: "08:00",
            end: "18:00",
            open: L_WEBSITE[lang].opening_hours.days_of_week.monday(),
            close: L_WEBSITE[lang].opening_hours.days_of_week.friday(),
         }),
      }
      openingHoursObj[lang] = openingHours;
   })

   let alwaysOpenObj: {[key:string]: OpeningHoursSpecification} = {};
   definedLocales.forEach((lang: Locales) => {
      const alwaysOpen: OpeningHoursSpecification = {
         "@type": "OpeningHoursSpecification",
         "@id": `${website.domain}/${lang}/#opening-hours/always-open`,
         "validFrom": "2020-01-01",
         "opens": "00:00",
         "closes": "23:59",
         "name": L_WEBSITE[lang].opening_hours.title(),
         "alternateName": L_WEBSITE[lang].opening_hours.title(),
         "description": L_WEBSITE[lang].opening_hours.service_open(),
      }
      alwaysOpenObj[lang] = alwaysOpen;
   })


   let contactPointObj: {[key:string]: ContactPoint} = {};
   definedLocales.forEach((lang: Locales) => {
      const contactPoint: ContactPoint = {
         "@type": "ContactPoint",
         "@id": `${website.domain}/${lang}/#contact-point`,
         "image": logoObj[lang],
         "contactType": "all",
         "email": website.contactEmail,
         "areaServed": [ areaServedObj[lang].be, areaServedObj[lang].nl ],
         "availableLanguage": [ languagesObj[lang].nl, languagesObj[lang].fr, languagesObj[lang].en ],
         "hoursAvailable": openingHoursObj[lang],
         "name": L_NAV[lang].contact.title(),
         "description": L_NAV[lang].contact.description(),
      }
      contactPointObj[lang] = contactPoint;
   })

   // ADDRESSES
   let addressBeObj: {[key:string]: PostalAddress} = {};
   definedLocales.forEach((lang: Locales) => {
      const addressBe: PostalAddress = {
         "@type": "PostalAddress",
         "@id": `${website.domain}/${lang}/#address/be`,
         "name": L_WEBSITE[lang].address.be.name(),
         "description": L_WEBSITE[lang].address.be.description(),

         "addressLocality": `${L_WEBSITE[lang].address.be.city()}, ${L_WEBSITE[lang].address.be.province()}`,
         "addressRegion": L_WEBSITE[lang].address.be.country(),
         "postalCode": L_WEBSITE[lang].address.be.zip(),
         "streetAddress": `${L_WEBSITE[lang].address.be.street()} ${L_WEBSITE[lang].address.be.number()}, ${L_WEBSITE[lang].address.be.zip()} ${L_WEBSITE[lang].address.be.city()}, ${L_WEBSITE[lang].address.be.country()}`,

         "areaServed": [ areaServedObj[lang].be ],
         "availableLanguage": [ languagesObj[lang].nl, languagesObj[lang].fr, languagesObj[lang].en ],
         "contactType": "all",
         "email": website.contactEmail,

         "image": logoObj[lang],

         "hoursAvailable": openingHoursObj[lang],
         
         "url": L_WEBSITE[lang].address.be.url()
      }
      addressBeObj[lang] = addressBe;
   })

   let addressNlObj: {[key:string]: PostalAddress} = {};
   definedLocales.forEach((lang: Locales) => {
      const addressNl: PostalAddress = {
         "@type": "PostalAddress",
         "@id": `${website.domain}/${lang}/#address/nl`,
         "name": L_WEBSITE[lang].address.nl.name(),
         "description": L_WEBSITE[lang].address.nl.description(),

         "addressLocality": `${L_WEBSITE[lang].address.nl.city()}, ${L_WEBSITE[lang].address.nl.province()}`,
         "addressRegion": L_WEBSITE[lang].address.nl.country(),
         "postalCode": L_WEBSITE[lang].address.nl.zip(),
         "streetAddress": `${L_WEBSITE[lang].address.nl.street()} ${L_WEBSITE[lang].address.nl.number()}, ${L_WEBSITE[lang].address.nl.zip()} ${L_WEBSITE[lang].address.nl.city()}, ${L_WEBSITE[lang].address.nl.country()}`,

         "areaServed": [ areaServedObj[lang].nl ],
         "availableLanguage": [ languagesObj[lang].nl, languagesObj[lang].fr, languagesObj[lang].en ],
         "contactType": "all",
         "email": website.contactEmail,

         "hoursAvailable": openingHoursObj[lang],
         
         "url": L_WEBSITE[lang].address.nl.url()
      }
      addressNlObj[lang] = addressNl;
   })

   let addressServicesBeObj: {[key:string]: PostalAddress} = {};
   definedLocales.forEach((lang: Locales) => {
      const addressServicesBe: PostalAddress = {
         "@type": "PostalAddress",
         "@id": `${website.domain}/${lang}/#address/be_martinus`,
         "name": `${L_WEBSITE[lang].services_locations.be.name()} - ${L_WEBSITE[lang].services_locations.be.city()}`,

         "addressLocality": `${L_WEBSITE[lang].services_locations.be.city()}, ${L_WEBSITE[lang].services_locations.be.province()}`,
         "addressRegion": L_WEBSITE[lang].services_locations.be.country(),
         "postalCode": L_WEBSITE[lang].services_locations.be.zip(),
         "streetAddress": `${L_WEBSITE[lang].services_locations.be.street()} ${L_WEBSITE[lang].services_locations.be.number()}, ${L_WEBSITE[lang].services_locations.be.zip()} ${L_WEBSITE[lang].services_locations.be.city()}, ${L_WEBSITE[lang].services_locations.be.country()}`,

         "areaServed": [ areaServedObj[lang].be ],
         "availableLanguage": [ languagesObj[lang].nl, languagesObj[lang].fr, languagesObj[lang].en ],
         "contactType": "all",
         "email": website.contactEmail,

         "hoursAvailable": openingHoursObj[lang],
         
         "url": L_WEBSITE[lang].services_locations.be.url(),
      }
      addressServicesBeObj[lang] = addressServicesBe;
   })

   // ORGANIZATION
   const socials: URL[] = [
      `https://linkedin.com/in/${website.linkedinProfile}`,
      website.facebookPage,
   ]
   let membersObj: {[key:string]: {[key:string]: Person}} = {};
   definedLocales.forEach((lang: Locales) => {
      const members: {[key:string]: Person} = {
         tom: {
            "@type": "Person",
            "@id": `${website.domain}/${lang}/#person/tom-van-dorst`,
            "name": "Tom Van Dorst",
            "givenName": "Tom",
            "familyName": "Van Dorst",
            "jobTitle": L_WEBSITE[lang].members.tom.title(),
            "knowsLanguage": [ languagesObj[lang].nl, languagesObj[lang].fr, languagesObj[lang].en ],
            "url": website.domain,
            "sameAs": socials,
            "email": 'tomvandorst@trixolutions.be',
            "affiliation": [ capaProObj[lang] ],
            "image": [
               {
                  "@type": "ImageObject",
                  "@id": `${website.domain}/${lang}/#person/tom-van-dorst/image/color`,
                  "url": `${website.domain}/assets/images/team/tom-color.webp`,
                  "width": "1920",
                  "height": "1280",
                  "caption": `Tom Van Dorst - ${L_WEBSITE[lang].members.tom.title()} - Trixolutions (Color)`
               },
               {
                  "@type": "ImageObject",
                  "@id": `${website.domain}/${lang}/#person/tom-van-dorst/image/bw`,
                  "url": `${website.domain}/assets/images/team/tom-bw.webp`,
                  "width": "1920",
                  "height": "1280",
                  "caption": `Tom Van Dorst - ${L_WEBSITE[lang].members.tom.title()} - Trixolutions (B/W)`
               },
            ],
         },
         tamara: {
            "@type": "Person",
            "@id": `${website.domain}/${lang}/#person/tamara-dhaese`,
            "name": "Tamara D'Haese",
            "givenName": "Tamara",
            "familyName": "D'Haese",
            "jobTitle": L_WEBSITE[lang].members.tamara.title(),
            "knowsLanguage": [ languagesObj[lang].nl, languagesObj[lang].fr, languagesObj[lang].en ],
            "url": website.domain,
            "email": 'info@trixolutions.be',
            "image": {
               "@type": "ImageObject",
               "@id": `${website.domain}/${lang}/#person/tamara-dhaese/image`,
               "url": `${website.domain}/assets/images/team/tamara-bw.webp`,
               "width": "1920",
               "height": "1920",
               "caption": `Tamara D'Haese - ${L_WEBSITE[lang].members.tamara.title()} - Trixolutions`
            }
         },
         christoph: {
            "@type": "Person",
            "@id": `${website.domain}/${lang}/#person/christoph-meunier`,
            "name": "Christoph Meunier",
            "givenName": "Christoph",
            "familyName": "Meunier",
            "jobTitle": L_WEBSITE[lang].members.christoph.title(),
            "knowsLanguage": [ languagesObj[lang].nl, languagesObj[lang].fr, languagesObj[lang].en ],
            "url": website.domain,
            "image": {
               "@type": "ImageObject",
               "@id": `${website.domain}/${lang}/#person/christoph-meunier/image`,
               "url": `${website.domain}/assets/images/team/christoph-bw.webp`,
               "width": "1920",
               "height": "2000",
               "caption": `Christoph Meunier - ${L_WEBSITE[lang].members.christoph.title()} - Trixolutions`
            }
         }
      };
      membersObj[lang] = members;
   })

   // RATING
   let ratingObj: {[key:string]: AggregateRating} = {};
   definedLocales.forEach((lang: Locales) => {
      const rating: AggregateRating = {
         "@type": "AggregateRating",
         "@id": `${website.domain}/${lang}/#rating`,
         "ratingValue": `${ratings.average}`,
         "reviewCount": `${ratings.amount}`,
         "bestRating": "5",
         "worstRating": "0",
         "ratingExplanation": L_WEBSITE[lang].ratings.text({amount: ratings.amount}),
         "name": titleCase(L_SESSIONS[lang].ratings()),
      }
      ratingObj[lang] = rating;
   })

   // AUDIENCE
   let audienceObj: {[key:string]: Audience} = {};
   definedLocales.forEach((lang: Locales) => {
      const audience: Audience = {
         "@type": "Audience",
         "@id": `${website.domain}/${lang}/#audience`,
         "audienceType": "Business",
         "alternateName": "Businesses",
         "description": L_WEBSITE[lang].audience.description(),
         "disambiguatingDescription": L_WEBSITE[lang].audience.description(),
         "identifier": "https://schema.org/BusinessAudience",
         "name": "Businesses",
         "sameAs": "https://wikipedia.org/wiki/Business",
      }
      audienceObj[lang] = audience;
   })


   // PRICERANGE
   let priceRangeObj: {[key:string]: any} = {};
   definedLocales.forEach((lang: Locales) => {
      const priceRange: any = {
         "@type": "PriceRange",
         "@id": `${website.domain}/${lang}/#pricerange`,
         "name": L_WEBSITE[lang].pricing.price_range(),
         "description": L_WEBSITE[lang].pricing.price_range(),
         "priceCurrency": "EUR",
         "priceRange": "€€€",
         "valueAddedTaxIncluded": true,
         "valueAddedTaxName": L_WEBSITE[lang].pricing.vat(),
         "valueAddedTaxPercentage": 21,
      }
      priceRangeObj[lang] = priceRange;
   })

   // PLACES
   let placeBeObj: {[key:string]: Place} = {};
   definedLocales.forEach((lang: Locales) => {
      const placeBe: Place = {
         "@type": "Place",
         "@id": `${website.domain}/${lang}/#place/be`,
         "name": L_WEBSITE[lang].address.be.name(),
         "alternateName": `${website.title} ${L_WEBSITE[lang].address.be.country()}`,
         "description": L_WEBSITE[lang].address.be.description(),
         "disambiguatingDescription": L_WEBSITE[lang].address.be.description(),
         "slogan": L_WEBSITE[lang].slogan(),
         "address": addressBeObj[lang],
         "aggregateRating": ratingObj[lang],
         "hasMap": `${website.domain}/${lang}/contact`,
         "keywords": [
            'Trixolutions',
            'Trixolutions.be',
            'Trixolutions.com',
            'Lencioni',
            'Teamcoaching België',
         ],
         "logo": logoObj[lang],
         "image": logoObj[lang],
         "longitude": 4.5084357,
         "latitude": 51.2207385,
         "geo": {
            "@type": "GeoCoordinates",
            "longitude": 4.5084357,
            "latitude": 51.2207385,
         },
         "url": website.domain,
         "sameAs": socials,
         "openingHoursSpecification": openingHoursObj[lang],
         "publicAccess": false,
      }
      placeBeObj[lang] = placeBe;
   })

   let placeNlObj: {[key:string]: Place} = {};
   definedLocales.forEach((lang: Locales) => {
      const placeNl: Place = {
         "@type": "Place",
         "@id": `${website.domain}/${lang}/#place/nl`,
         "name": L_WEBSITE[lang].address.nl.name(),
         "alternateName": `${website.title} ${L_WEBSITE[lang].address.nl.country()}`,
         "description": L_WEBSITE[lang].address.nl.description(),
         "disambiguatingDescription": L_WEBSITE[lang].address.nl.description(),
         "slogan": L_WEBSITE[lang].slogan(),
         "address": addressNlObj[lang],
         "aggregateRating": ratingObj[lang],
         "hasMap": `${website.domain}/${lang}/contact`,
         "keywords": [
            'Trixolutions',
            'Trixolutions.nl',
            'Lencioni',
            'Teamcoaching Nederland',
         ],
         "logo": logoObj[lang],
         "image": logoObj[lang],
         "longitude": 4.3874651,
         "latitude": 51.9804814,
         "geo": {
            "@type": "GeoCoordinates",
            "longitude": 4.3874651,
            "latitude": 51.9804814,
         },
         "url": "https://trixolutions.nl",
         "sameAs": socials,
         "openingHoursSpecification": openingHoursObj[lang],
         "publicAccess": false,
      }
      placeNlObj[lang] = placeNl;
   })

   // SERVICE INFO
   let placeServiceBeObj: {[key:string]: Place} = {};
   definedLocales.forEach((lang: Locales) => {
      const placeServiceBe: Place = {
         "@type": "Place",
         "@id": `${website.domain}/${lang}/#place/service_be`,
         "name": L_WEBSITE[lang].services_locations.be.name(),
         "alternateName": `${L_WEBSITE[lang].services_locations.be.name()} ${L_WEBSITE[lang].services_locations.be.country()}`,
         "address": addressServicesBeObj[lang],
         "logo": logoObj[lang],
         "image": "https://www.domeinmartinus.be/sites/default/files/styles/d7/public/2018-02/Mart-buiten-sfeer-2_1.jpg?itok=lJn4pOoB",
         "longitude": 4.6289041,
         "latitude": 51.2385543,
         "geo": {
            "@type": "GeoCoordinates",
            "longitude": 4.6289041,
            "latitude": 51.2385543,
         },
         "url": L_WEBSITE[lang].services_locations.be.url(),
      }
      placeServiceBeObj[lang] = placeServiceBe;
   })
   
   let serviceChannelObj: {[key:string]: {[key:string]: ServiceChannel}} = {};
   definedLocales.forEach((lang: Locales) => {
      const serviceChannel: {[key:string]: ServiceChannel} = {
         web: {
            "@type": "ServiceChannel",
            "@id": `${website.domain}/${lang}/#service_channel/web`,
            "name": L_WEBSITE[lang].contact.types.website(),
            "description": L_WEBSITE[lang].contact.types.website_description(),
            "disambiguatingDescription": L_WEBSITE[lang].contact.types.website_description(),
            "serviceUrl": website.domain,
            "servicePostalAddress": addressBeObj[lang],
            "availableLanguage": [ languagesObj[lang].nl, languagesObj[lang].fr, languagesObj[lang].en ],
         },
         email: {
            "@type": "ServiceChannel",
            "@id": `${website.domain}/${lang}/#service_channel/email`,
            "name": L_WEBSITE[lang].contact.types.email(),
            "description": L_WEBSITE[lang].contact.types.email_description(),
            "disambiguatingDescription": website.contactEmail,
            "serviceUrl": website.domain,
            "servicePostalAddress": addressBeObj[lang],
            "availableLanguage": [ languagesObj[lang].nl, languagesObj[lang].fr, languagesObj[lang].en ],
         },
      }
      serviceChannelObj[lang] = serviceChannel;
   })

   // SERVICES
   let extendOfferObj: {[key:string]: Offer} = {};
   definedLocales.forEach((lang: Locales) => {
      const extendOffer: Offer = {
         "@type": "Offer",
         "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}/#offer/extend`,

         "name": L_WEBSITE[lang].services.extend.title(),
         "alternateName": L_WEBSITE[lang].services.extend.title_alt(),
         "description": L_WEBSITE[lang].services.extend.description(),
         "disambiguatingDescription": L_WEBSITE[lang].services.extend.description_disambiguation(),
         
         "price": 490.00,
         "priceCurrency": "EUR",
         "eligibleRegion": [ areaServedObj[lang].be, areaServedObj[lang].nl ],
         "url": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}`,
         "itemOffered": {
            "@type": "Service",
            "name": L_WEBSITE[lang].services.extend.title(),
            "alternateName": L_WEBSITE[lang].services.extend.title_alt(),
            "description": L_WEBSITE[lang].services.extend.description(),
            "disambiguatingDescription": L_WEBSITE[lang].services.extend.description_disambiguation(),
            "image": logoObj[lang],
            "logo": logoObj[lang],
            "url": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}`,
         },
         "offeredBy": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L_NAV[lang].about.slug()}`,
         },
         "seller": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L_NAV[lang].about.slug()}`,
         },
      }
      extendOfferObj[lang] = extendOffer;
   })

   let offerHybridBaseObj: {[key:string]: Offer} = {};
   definedLocales.forEach((lang: Locales) => {
      const offerHybridBase: Offer = {
         "@type": "Offer",
         "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}/#offer/hybrid_base`,

         "name": L_WEBSITE[lang].services.hybrid_base.title(),
         "alternateName": L_WEBSITE[lang].services.hybrid_base.title_alt(),
         "description": L_WEBSITE[lang].services.hybrid_base.description(),
         "disambiguatingDescription": L_WEBSITE[lang].services.hybrid_base.description_disambiguation(),
         
         "image": {
            "@type": "ImageObject",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}/#image/hybrid_base`,
            "url": `${website.domain}/images/home/lencioni-ctc.webp`,
            "caption": L_WEBSITE[lang].services.hybrid_base.description_disambiguation(),
            "width": "1920",
            "height": "1280",
         },
         
         "price": 690.00,
         "priceCurrency": "EUR",
         "url": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}`,
         "itemOffered": {
            "@type": "Service",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}/#service/hybrid_base`,
            "name": L_WEBSITE[lang].services.hybrid_base.title(),
            "alternateName": L_WEBSITE[lang].services.hybrid_base.title_alt(),
            "description": L_WEBSITE[lang].services.hybrid_base.description(),
            "disambiguatingDescription": L_WEBSITE[lang].services.hybrid_base.description_disambiguation(),
            "url": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}`,
         },

         "category": [ 'team building', 'team coaching', 'lencioni', 'trixolutions', 'teamcoaching', 'teamwork', 'workshop', 'training', 'business' ],

         "aggregateRating": ratingObj[lang],
         "areaServed": [ areaServedObj[lang].be, areaServedObj[lang].nl ],
         "eligibleRegion": [ areaServedObj[lang].be, areaServedObj[lang].nl ],
         "addOn": extendOfferObj[lang],

         "offeredBy": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L_NAV[lang].about.slug()}`,
         },
         "seller": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L_NAV[lang].about.slug()}`,
         },
      }
      offerHybridBaseObj[lang] = offerHybridBase;
   })

   let offerHybridFullObj: {[key:string]: Offer} = {};
   definedLocales.forEach((lang: Locales) => {
      const offerHybridFull: Offer = {
         "@type": "Offer",
         "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}/#offer/hybrid_full`,

         "name": L_WEBSITE[lang].services.hybrid_full.title(),
         "alternateName": L_WEBSITE[lang].services.hybrid_full.title_alt(),
         "description": L_WEBSITE[lang].services.hybrid_full.description(),
         "disambiguatingDescription": L_WEBSITE[lang].services.hybrid_full.description_disambiguation(),

         "image": {
            "@type": "ImageObject",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}/#image/hybrid_full`,
            "url": `${website.domain}/images/home/working-genius.webp`,
            "caption": L_WEBSITE[lang].services.hybrid_full.description_disambiguation(),
            "width": "1080",
            "height": "720",
         },
         
         "price": 1590.00,
         "priceCurrency": "EUR",
         "url": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}`,
         "itemOffered": {
            "@type": "Service",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}/#service/hybrid_full`,
            "name": L_WEBSITE[lang].services.hybrid_full.title(),
            "alternateName": L_WEBSITE[lang].services.hybrid_full.title_alt(),
            "description": L_WEBSITE[lang].services.hybrid_full.description(),
            "disambiguatingDescription": L_WEBSITE[lang].services.hybrid_full.description_disambiguation(),
            "url": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}`,
         },

         "category": [ 'team building', 'team coaching', 'lencioni', 'trixolutions', 'teamcoaching', 'teamwork', 'workshop', 'training', 'business' ],

         "aggregateRating": ratingObj[lang],
         "areaServed": [ areaServedObj[lang].be, areaServedObj[lang].nl ],
         "eligibleRegion": [ areaServedObj[lang].be, areaServedObj[lang].nl ],
         "addOn": extendOfferObj[lang],

         "offeredBy": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L_NAV[lang].about.slug()}`,
         },
         "seller": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L_NAV[lang].about.slug()}`,
         },
      }
      offerHybridFullObj[lang] = offerHybridFull;
   })

   let offerDeepDiveObj: {[key:string]: Offer} = {};
   definedLocales.forEach((lang: Locales) => {
      const offerDeepDive: Offer = {
         "@type": "Offer",
         "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.deepdive.slug()}/#offer/deepdive`,

         "name": L_WEBSITE[lang].services.deepdive.title(),
         "alternateName": L_WEBSITE[lang].services.deepdive.title_alt(),
         "description": L_WEBSITE[lang].services.deepdive.description(),
         "disambiguatingDescription": L_WEBSITE[lang].services.deepdive.description_disambiguation(),

         "image": {
            "@type": "ImageObject",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.deepdive.slug()}/#image/hybrid_full`,
            "url": `${website.domain}/images/home/working-genius.webp`,
            "caption": L_WEBSITE[lang].services.deepdive.description_disambiguation(),
            "width": "1080",
            "height": "720",
         },
         
         "price": 490.00,
         "priceCurrency": "EUR",
         "url": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.deepdive.slug()}`,
         "itemOffered": {
            "@type": "Service",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.deepdive.slug()}/#service/deepdive`,
            "name": L_WEBSITE[lang].services.deepdive.title(),
            "alternateName": L_WEBSITE[lang].services.deepdive.title_alt(),
            "description": L_WEBSITE[lang].services.deepdive.description(),
            "disambiguatingDescription": L_WEBSITE[lang].services.deepdive.description_disambiguation(),
            "image": logoObj[lang],
            "logo": logoObj[lang],
            "url": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.deepdive.slug()}`,
         },

         "category": [ 'team building', 'team coaching', 'lencioni', 'trixolutions', 'teamcoaching', 'teamwork', 'workshop', 'training', 'business' ],

         "aggregateRating": ratingObj[lang],
         "areaServed": [ areaServedObj[lang].be, areaServedObj[lang].nl ],
         "eligibleRegion": [ areaServedObj[lang].be, areaServedObj[lang].nl ],
         "addOn": extendOfferObj[lang],

         "offeredBy": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L_NAV[lang].about.slug()}`,
         },
         "seller": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L_NAV[lang].about.slug()}`,
         },
      }
      offerDeepDiveObj[lang] = offerDeepDive;
   })

   let serviceHybridBaseObj: {[key:string]: Service} = {};
   definedLocales.forEach((lang: Locales) => {
      const serviceHybridBase: Service = {
         "@type": "Service",
         "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}/#service/hybrid_base`,

         "name": L_WEBSITE[lang].services.hybrid_base.title(),
         "alternateName": L_WEBSITE[lang].services.hybrid_base.title_alt(),
         "description": L_WEBSITE[lang].services.hybrid_base.description(),
         "disambiguatingDescription": L_WEBSITE[lang].services.hybrid_base.description_disambiguation(),
         "logo": logoObj[lang],
         "url": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}`,
         
         "image": {
            "@type": "ImageObject",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}/#image/hybrid_base`,
            "url": `${website.domain}/images/home/lencioni-ctc.webp`,
            "caption": L_WEBSITE[lang].services.hybrid_base.description_disambiguation(),
            "width": "1920",
            "height": "1280",
         },

         "category": [ 'team building', 'team coaching', 'lencioni', 'trixolutions', 'teamcoaching', 'teamwork', 'workshop', 'training', 'business' ],

         "provider": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L_NAV[lang].about.slug()}`,
         },

         "aggregateRating": ratingObj[lang],
         "areaServed": [ areaServedObj[lang].be, areaServedObj[lang].nl ],
         "audience": audienceObj[lang],
         "availableChannel": [ serviceChannelObj[lang].web ],
         "hoursAvailable": alwaysOpenObj[lang],
         "serviceAudience": audienceObj[lang],
         "serviceArea": [ areaServedObj[lang].be, areaServedObj[lang].nl ],
         "serviceType": 'Teamcoaching',
         "termsOfService": `${website.domain}/${lang}/${L_NAV[lang].others.terms_conditions.slug()}`,

         "offers": [ offerHybridBaseObj[lang] ],
         "brand": [ 
            capaProObj[lang],
            {
               "@type": "Organization",
               "@id": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}/#organization`,
               'url': `${website.domain}/${lang}/${L_NAV[lang].about.slug()}`,
            } 
         ],

         "isRelatedTo": [
            {"@type": "Service", "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}/#service/hybrid_full`},
            {"@type": "Service", "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.deepdive.slug()}/#service/deepdive`}
         ],
         "isSimilarTo": [
            {"@type": "Service", "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}/#service/hybrid_full`},
         ]
      }
      serviceHybridBaseObj[lang] = serviceHybridBase;
   })

   let serviceHybridFullObj: {[key:string]: Service} = {};
   definedLocales.forEach((lang: Locales) => {
      const serviceHybridFull: Service = {
         "@type": "Service",
         "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}/#service/hybrid_full`,

         "name": L_WEBSITE[lang].services.hybrid_full.title(),
         "alternateName": L_WEBSITE[lang].services.hybrid_full.title_alt(),
         "description": L_WEBSITE[lang].services.hybrid_full.description(),
         "disambiguatingDescription": L_WEBSITE[lang].services.hybrid_full.description_disambiguation(),
         "logo": logoObj[lang],
         "url": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}`,

         "image": {
            "@type": "ImageObject",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}/#image/hybrid_full`,
            "url": `${website.domain}/images/home/working-genius.webp`,
            "caption": L_WEBSITE[lang].services.hybrid_full.description_disambiguation(),
            "width": "1080",
            "height": "720",
         },

         "category": [ 'team building', 'team coaching', 'lencioni', 'trixolutions', 'teamcoaching', 'teamwork', 'workshop', 'training', 'business' ],

         "provider": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L_NAV[lang].about.slug()}`,
         },

         "aggregateRating": ratingObj[lang],
         "areaServed": [ areaServedObj[lang].be, areaServedObj[lang].nl ],
         "audience": audienceObj[lang],
         "availableChannel": [ serviceChannelObj[lang].web ],
         "hoursAvailable": alwaysOpenObj[lang],
         "serviceAudience": audienceObj[lang],
         "serviceArea": [ areaServedObj[lang].be, areaServedObj[lang].nl ],
         "serviceType": 'Teamcoaching',
         "termsOfService": `${website.domain}/${lang}/${L_NAV[lang].others.terms_conditions.slug()}`,

         "offers": [ offerHybridFullObj[lang] ],
         "brand": [ 
            capaProObj[lang],
            {
               "@type": "Organization",
               "@id": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}/#organization`,
               'url': `${website.domain}/${lang}/${L_NAV[lang].about.slug()}`,
            } 
         ],

         "isRelatedTo": [
            serviceHybridBaseObj[lang],
            {"@type": "Service", "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.deepdive.slug()}/#service/deepdive`}
         ],
         "isSimilarTo": [ serviceHybridBaseObj[lang] ]
      }
      serviceHybridFullObj[lang] = serviceHybridFull;
   })

   let serviceDeepDiveObj: {[key:string]: Service} = {};
   definedLocales.forEach((lang: Locales) => {
      const serviceDeepDive: Service = {
         "@type": "Service",
         "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.deepdive.slug()}/#service/deepdive`,

         "name": L_WEBSITE[lang].services.deepdive.title(),
         "alternateName": L_WEBSITE[lang].services.deepdive.title_alt(),
         "description": L_WEBSITE[lang].services.deepdive.description(),
         "disambiguatingDescription": L_WEBSITE[lang].services.deepdive.description_disambiguation(),
         "logo": logoObj[lang],
         "url": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.deepdive.slug()}`,

         "image": {
            "@type": "ImageObject",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.deepdive.slug()}/#image/hybrid_full`,
            "url": `${website.domain}/images/home/working-genius.webp`,
            "caption": L_WEBSITE[lang].services.deepdive.description_disambiguation(),
            "width": "1080",
            "height": "720",
         },

         "category": [ 'team building', 'team coaching', 'lencioni', 'trixolutions', 'teamcoaching', 'teamwork', 'workshop', 'training', 'business' ],

         "provider": {
            "@type": "Organization",
            "@id": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}/#organization`,
            'url': `${website.domain}/${lang}/${L_NAV[lang].about.slug()}`,
         },

         "aggregateRating": ratingObj[lang],
         "areaServed": [ areaServedObj[lang].be, areaServedObj[lang].nl ],
         "audience": audienceObj[lang],
         "availableChannel": [ serviceChannelObj[lang].web ],
         "hoursAvailable": alwaysOpenObj[lang],
         "serviceAudience": audienceObj[lang],
         "serviceArea": [ areaServedObj[lang].be, areaServedObj[lang].nl ],
         "serviceType": 'Teamcoaching',
         "termsOfService": `${website.domain}/${lang}/${L_NAV[lang].others.terms_conditions.slug()}`,

         "offers": [ offerDeepDiveObj[lang] ],
         "brand": [ 
            capaProObj[lang],
            {
               "@type": "Organization",
               "@id": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}/#organization`,
               'url': `${website.domain}/${lang}/${L_NAV[lang].about.slug()}`,
            } 
         ],

         "isRelatedTo": [
            serviceHybridBaseObj[lang],
            serviceHybridFullObj[lang]
         ],
         "isSimilarTo": []
      }
      serviceDeepDiveObj[lang] = serviceDeepDive;
   })

   // OWNERSHIP INFO
   let ownershipInfoObj: {[key:string]: OwnershipInfo} = {};
   definedLocales.forEach((lang: Locales) => {
      const ownershipInfo: OwnershipInfo = {
         "@type": "OwnershipInfo",
         "typeOfGood": [ serviceHybridBaseObj[lang], serviceHybridFullObj[lang], serviceDeepDiveObj[lang] ]
      }
      ownershipInfoObj[lang] = ownershipInfo;
   })

   // EVENTS
   let eventHybridFullObj: {[key:string]: Event} = {};
   definedLocales.forEach((lang: Locales) => {
      sessions.forEach((session:any, index:number) => {
         if (session.type === 'level_1_full') {
            if (session.language === lang) {
               const eventHybridFull: Event = {
                  "@type": "Event",
                  "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}/#events/lencioni_masterclass/${new Date(session.starts_on).toISOString()}`,
                  "about": [ serviceHybridFullObj[lang] ],

                  "name": L_WEBSITE[lang].services.hybrid_full.title_alt(),
                  "alternateName": L_WEBSITE[lang].services.hybrid_full.title(),
                  "description": L_WEBSITE[lang].services.hybrid_full.description(),
                  "disambiguatingDescription": L_WEBSITE[lang].services.hybrid_full.description_disambiguation(),

                  "url": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}`,
                  "image": {
                     "@type": "ImageObject",
                     "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.hybrid_traject.slug()}/#image/hybrid_full`,
                     "url": `${website.domain}/images/home/working-genius.webp`,
                     "caption": L_WEBSITE[lang].services.hybrid_full.description_disambiguation(),
                     "width": "1080",
                     "height": "720",
                  },

                  "startDate": new Date(session.starts_on).toISOString(),
                  "endDate": new Date(session.ends_on).toISOString(),
                  "duration": "P2D",
                  "performer": lang === 'fr' ? membersObj[lang].christoph : membersObj[lang].tom,

                  "audience": audienceObj[lang],
                  "isAccessibleForFree": false,
                  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                  "eventStatus": "https://schema.org/EventScheduled",

                  
                  "location": placeServiceBeObj[lang],
                  "offers": [ offerHybridFullObj[lang] ],
                  "aggregateRating": ratingObj[lang],
                  "inLanguage": lang,
                  
                  "organizer": {
                     "@type": "Organization",
                     "@id": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}/#organization`,
                     "url": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}`,
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
               "about": [ serviceDeepDiveObj[lang] ],

               "name": L_WEBSITE[lang].services.deepdive.title_alt(),
               "alternateName": L_WEBSITE[lang].services.deepdive.title(),
               "description": L_WEBSITE[lang].services.deepdive.description(),
               "disambiguatingDescription": L_WEBSITE[lang].services.deepdive.description_disambiguation(),

               "url": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.deepdive.slug()}`,
               "image": {
                  "@type": "ImageObject",
                  "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.deepdive.slug()}/#image/hybrid_full`,
                  "url": `${website.domain}/images/home/working-genius.webp`,
                  "caption": L_WEBSITE[lang].services.deepdive.description_disambiguation(),
                  "width": "1080",
                  "height": "720",
               },

               "startDate": new Date(session.starts_on).toISOString(),
               "endDate": new Date(session.ends_on).toISOString(),
               "duration": "PT6H",
               "performer": lang === 'fr' ? membersObj[lang].christoph : membersObj[lang].tom,

               "audience": audienceObj[lang],
               "isAccessibleForFree": false,
               "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
               "eventStatus": "https://schema.org/EventScheduled",

               
               "location": placeServiceBeObj[lang],
               "offers": [ offerDeepDiveObj[lang] ],
               "aggregateRating": ratingObj[lang],
               "inLanguage": lang,
               
               "organizer": {
                  "@type": "Organization",
                  "@id": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}/#organization`,
                  "url": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}`,
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
               "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.info_sessions.slug()}/#events/${new Date(session.starts_on).toISOString()}`,
               "about": [ serviceDeepDiveObj[lang] ],

               "name": L_SESSIONS[lang].info.title_single(),
               "alternateName": L_SESSIONS[lang].info.title_short(),
               "description": L_SESSIONS[lang].info.description(),
               "disambiguatingDescription": L_SESSIONS[lang].info.description_alt(),

               "url": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.info_sessions.slug()}`,
               "image": {
                  "@type": "ImageObject",
                  "@id": `${website.domain}/${lang}/${L_NAV[lang].open_sessions.items.info_sessions.slug()}/#image/info_sessions`,
                  "url": `${website.domain}/images/home/lencioni-ctc.webp`,
                  "caption": L_SESSIONS[lang].info.description_alt(),
                  "width": "1920",
                  "height": "1280",
               },

               "startDate": new Date(session.starts_on).toISOString(),
               "endDate": new Date(session.ends_on).toISOString(),
               "duration": "PT45M",
               "performer": lang === 'fr' ? membersObj[lang].christoph : membersObj[lang].tom,

               "audience": audienceObj[lang],
               "isAccessibleForFree": true,
               "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
               "eventStatus": "https://schema.org/EventScheduled",

               "aggregateRating": ratingObj[lang],
               "inLanguage": lang,
               
               "organizer": {
                  "@type": "Organization",
                  "@id": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}/#organization`,
                  "url": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}`,
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

   
   /* === === === === === === == === == === === === === === */
   /* === === === == == UNIVERSAL SCHEMAS == == === === === */
   /* === === === === === === == === == === === === === === */

   // OFFER CATALOG
   let offerCatalogObj: {[key:string]: OfferCatalog} = {};
   definedLocales.forEach((lang: Locales) => {
      const offerCatalog: OfferCatalog = {
         "@type": "OfferCatalog",
         "@id": `${website.domain}/${lang}/#offerCatalog`,
         "name": L_WEBSITE[lang].services.title(),
         "description": L_WEBSITE[lang].services.description(),
         "itemListElement": [
            {
               "@type": "OfferCatalog",
               "name": L_WEBSITE[lang].services.hybrid_full.title(),
               "description": L_WEBSITE[lang].services.description(),
               "itemListElement": [
                  serviceHybridBaseObj[lang],
                  serviceHybridFullObj[lang],
               ]
            },
            {
               "@type": "OfferCatalog",
               "name": L_WEBSITE[lang].services.deepdive.title(),
               "description": L_WEBSITE[lang].services.deepdive.description(),
               "itemListElement": [
                  serviceDeepDiveObj[lang]
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
         "@id": `${website.domain}/${lang}/${L_NAV[lang].about.slug()}/#organization`,
         
         "name": L_WEBSITE[lang].title(),
         "alternateName": `${L_WEBSITE[lang].title()} - ${L_WEBSITE[lang].tagLine()}`,
         "slogan": L_WEBSITE[lang].slogan(),
         "description": L_WEBSITE[lang].description_short(),
         "disambiguatingDescription": L_WEBSITE[lang].description(),
         
         "url": `${website.domain}/${lang}`,
         "logo": logoObj[lang],
         "image": logoObj[lang],
         
         "address": addressBeObj[lang],
         "areaServed": [ areaServedObj[lang].be, areaServedObj[lang].nl ],

         "email": website.contactEmail,
         "contactPoint": contactPointObj[lang],

         "founder": membersObj[lang].tom,
         "foundingLocation": placeBeObj[lang],
         "member": [ membersObj[lang].tom, membersObj[lang].christoph, membersObj[lang].tamara ],

         "owns": ownershipInfoObj[lang],
         "hasOfferCatalog": offerCatalogObj[lang],
         "event": allEvents,

         "aggregateRating": ratingObj[lang],
         "sameAs": socials,
         "brand": [ capaProObj[lang] ],

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
   })

   // LOCAL BUSINESS
   let localBusinessObj: {[key:string]: LocalBusiness} = {};
   definedLocales.forEach((lang: Locales) => {
      const localBusiness: LocalBusiness = {
         "@type": "LocalBusiness",
         "@id": `${website.domain}/${lang}/#localBusiness`,
         
         "legalName": "Trixolutions BV",
         "name": L_WEBSITE[lang].title(),
         "alternateName": `${L_WEBSITE[lang].title()} - ${L_WEBSITE[lang].tagLine()}`,
         "description": L_WEBSITE[lang].description_short(),
         "disambiguatingDescription": L_WEBSITE[lang].description(),
         "slogan": L_WEBSITE[lang].slogan(),

         "url": website.domain,
         "address": addressBeObj[lang],
         "location": placeBeObj[lang],
         "email": website.contactEmail,
         "logo": logoObj[lang],
         "image": logoObj[lang],
         
         "openingHours": "Mo,Tu,We,Th,Fr 08:00-18:00",
         "priceRange": priceRangeObj[lang],
         
         "knowsLanguage": [ "nl-BE", "fr-BE", "en-GB" ],
         "contactPoint": contactPointObj[lang],
         "areaServed": [ areaServedObj[lang].be, areaServedObj[lang].nl ],
         "employees": [ membersObj[lang].tom, membersObj[lang].christoph, membersObj[lang].tamara ],
         "founder": membersObj[lang].tom,
         "foundingLocation": placeBeObj[lang],
         "member": [ membersObj[lang].tom, membersObj[lang].christoph, membersObj[lang].tamara ],

         "owns": ownershipInfoObj[lang],
         "hasOfferCatalog": offerCatalogObj[lang],
         "event": allEvents,
         "makesOffer": [ offerHybridBaseObj[lang], offerHybridFullObj[lang], offerDeepDiveObj[lang] ],

         "aggregateRating": ratingObj[lang],
         "sameAs": socials,
         "brand": [ capaProObj[lang], organizationObj[lang] ],
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

         "name": L_WEBSITE[lang].title(),
         "alternateName": `${L_WEBSITE[lang].title()} - ${L_WEBSITE[lang].slogan()}`,
         "description": L_WEBSITE[lang].description_short(),
         "disambiguatingDescription": L_WEBSITE[lang].description(),
         "headline": L_WEBSITE[lang].tagLine(),
         "alternativeHeadline": L_WEBSITE[lang].slogan(),
         "text": L_WEBSITE[lang].description(),
         "image": logoObj[lang],

         "accessibilityAPI": accessibility.api,
         "accessibilityControl": accessibility.control,
         "accessibilityFeature": accessibility.feature,
         "accessibilityHazard": accessibility.hazard,
         "accessibilitySummary": accessibility.summary[lang],
         "accessMode": accessibility.mode,

         "accountablePerson": membersObj[lang].tom,
         "aggregateRating": ratingObj[lang],
         "audience": audienceObj[lang],

         "dateCreated": website.created_on,
         "datePublished": website.updated_on,
         "dateModified": website.updated_on,

         "creditText": L_BASE[lang].base.footer.creator(),
         "author": membersObj[lang].tom,
         "creator": mist_media,
         "contributor": [ membersObj[lang].tom, mist_media ],
         "editor": miro_storm,
         "maintainer": mist_media,
         "provider": mist_media,
         "publisher": mist_media,
         "translator": mist_media,
         "producer": mist_media,

         "sourceOrganization": organizationObj[lang],
         "copyrightYear": new Date().getFullYear(),
         "copyrightHolder": organizationObj[lang],
         "copyrightNotice": L_BASE[lang].base.footer.creator(),
         "countryOfOrigin": areaServedObj[lang].be,
         "locationCreated": placeBeObj[lang],

         "spatialCoverage": placeBeObj[lang],
         "isAccessibleForFree": true,
         "isFamilyFriendly": true,
         "isPartOf": [ website.domain ],
         "interactivityType": "mixed",
         "typicalAgeRange": "18-65",
         "inLanguage": lang,

         "genre": [ "business", "teamcoaching", "lencioni", "piramide lencioni", "website", "workshops" ],
         "keywords": [ "business", "teamcoaching", "lencioni", "piramide lencioni", "website", "workshops" ],

         "mentions": [ capaProObj[lang], organizationObj[lang], patrick_lencioni ],

         "sdPublisher": mist_media,
         "sdLicense": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
         "sdDatePublished": website.updated_on,

         "mainEntity": [ localBusinessObj[lang], organizationObj[lang] ],
         "offers": [ offerHybridBaseObj[lang], offerHybridFullObj[lang], offerDeepDiveObj[lang] ],
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
            "name": L_NAV[lang].home.title(),
            "description": L_NAV[lang].home.description(),
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
   
         "breadcrumb": breadcrumbsObj[lang],
         "primaryImageOfPage": mainImageObj[lang],	
         "isPartOf": websiteObj[lang],
         "author": entityMeta.author === 'tom' ? membersObj[lang].tom : entityMeta.author === 'lencioni' ? patrick_lencioni : organizationObj[lang],
         "inLanguage": lang === 'en' ? languagesObj[lang].en : lang === 'fr' ? languagesObj[lang].fr : languagesObj[lang].nl,
         
         "relatedLink": entityMeta.related?.map((link) => { return `${website.domain}/${lang}/${link.slug[lang]}` }),
         "significantLink": entityMeta.significant?.map((link) => { return `${website.domain}/${lang}/${link.slug[lang]}` }),
         
         "accessibilityAPI": accessibility.api,
         "accessibilityControl": accessibility.control,
         "accessibilityFeature": accessibility.feature,
         "accessibilityHazard": accessibility.hazard,
         "accessibilitySummary": accessibility.summary[lang],
         "accessMode": accessibility.mode,
         
         "accountablePerson": membersObj[lang].tom,
         "aggregateRating": ratingObj[lang],
         "audience": audienceObj[lang],
         
         "dateCreated": entityMeta.created_on,
         "datePublished": entityMeta.updated_on,
         "dateModified": entityMeta.updated_on,
         "lastReviewed": entityMeta.updated_on,
         "reviewedBy": [ mist_media, organizationObj[lang] ],
         "creditText": L_BASE[lang].base.footer.creator(),
         "creator": mist_media,
         "editor": miro_storm,
         "contributor": [ mist_media, organizationObj[lang] ],
         "maintainer": mist_media,
         "provider": mist_media,
         "publisher": mist_media,
         "translator": mist_media,
         "producer": mist_media,
         "countryOfOrigin": areaServedObj[lang].be,
   
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
               "provider": organizationObj[lang]
            },
            {
               "@type": "ViewAction",
               "target": [`${website.domain}/${entityMeta.slug[lang]}`],
               "provider": organizationObj[lang]
            },
            {
               "@type": "WatchAction",
               "target": [`${website.domain}/${entityMeta.slug[lang]}`],
               "provider": organizationObj[lang]
            },
            {
               "@type": "ShareAction",
               "target": [`${website.domain}/${entityMeta.slug[lang]}`],
               "provider": organizationObj[lang]
            },
            {
               "@type": "BookmarkAction",
               "target": [`${website.domain}/${entityMeta.slug[lang]}`],
               "provider": organizationObj[lang]
            },
            {
               "@type": "SubscribeAction",
               "target": [`${website.domain}/${entityMeta.slug[lang]}`],
               "provider": organizationObj[lang]
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
               "isPartOf": webPageObj[lang],
               "mainEntityOfPage": webPageObj[lang],
               "author": entityMeta.author === 'tom' ? membersObj[lang].tom : entityMeta.author === 'lencioni' ? patrick_lencioni : organizationObj[lang],
      
               "contributor": [ mist_media, organizationObj[lang] ],
               "copyrightHolder": organizationObj[lang],
               "creditText": L_BASE[lang].base.footer.creator(),
               "editor": miro_storm,
               "maintainer": mist_media,
               "translator": mist_media,
               "productionCompany": organizationObj[lang],
      
               "inLanguage": videoMeta.language === 'en' ? languagesObj[lang].en : videoMeta.language === 'fr' ? languagesObj[lang].fr : languagesObj[lang].nl,
      
               "countryOfOrigin": areaServedObj[lang].be,
      
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
                     "isPartOf": videoSchema,
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

               "contributor": [ mist_media, organizationObj[lang] ],
               "creditText": L_BASE[lang].base.footer.creator(),
               "editor": miro_storm,
               "maintainer": mist_media,
               "copyrightHolder": organizationObj[lang],
               "copyrightYear": `${new Date().getFullYear()}`,
         
               "inLanguage": lang === 'en' ? languagesObj[lang].en : lang === 'fr' ? languagesObj[lang].fr : languagesObj[lang].nl,
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
         
               "accountablePerson": membersObj[lang].tom,
         
               "isPartOf": { "@id": `${website.domain}/${lang}//${entityMeta.slug[lang]}/#webpage`},
               "mainEntityOfPage": { "@id": `${website.domain}/${lang}//${entityMeta.slug[lang]}/#webpage`},
         
               "author": articleMeta.author === 'tom' ? membersObj[lang].tom : articleMeta.author === 'lencioni' ? patrick_lencioni : organizationObj[lang],
               "datePublished": new Date(articleMeta.datePublished).toISOString(),
               "dateModified": new Date(articleMeta.dateModified).toISOString(),
               "publisher": organizationObj[lang],
               "image": mainImageObj[lang],
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
         
               "contributor": [ mist_media, organizationObj[lang] ],
               "creditText": L_BASE[lang].base.footer.creator(),
               "editor": miro_storm,
               "maintainer": mist_media,
         
               "inLanguage": lang === 'en' ? languagesObj[lang].en : lang === 'fr' ? languagesObj[lang].fr : languagesObj[lang].nl,
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
         
               "accountablePerson": membersObj[lang].tom,
         
               "isPartOf": webPageObj[lang],
               "mainEntityOfPage": webPageObj[lang],
         
               "author": blogPostMeta.author === 'tom' ? membersObj[lang].tom : blogPostMeta.author === 'lencioni' ? patrick_lencioni : organizationObj[lang],
               "datePublished": new Date(blogPostMeta.datePublished).toISOString(),
               "dateModified": new Date(blogPostMeta.dateModified).toISOString(),
               "publisher": organizationObj[lang],
               "image": mainImageObj[lang],
            }
            blogPostPerLocale.push(blogPostSchema);
         })
         blogPostObj[lang] = blogPostPerLocale;
      })

      const blogPostArr = Object.values(blogPostObj).map((blogPost: BlogPosting[]) => blogPost);
      schemaOrgArray = [ ...schemaOrgArray, ...blogPostArr ]
   }

   // BLOG
   if (blog) {
      let blogObj: Blog[] = [];
      definedLocales.forEach((lang: Locales) => {
         const blogSchema: Blog = {
            '@type': 'Blog',
            '@id': `${website.domain}/${lang}//${entityMeta.slug[lang]}/#blog`,
         
            "name": `${entityMeta.name[lang]}`,
            "alternateName": `${website.title} - ${entityMeta.name[lang]}`,
            "description": entityMeta.description[lang],
            "disambiguatingDescription": `${entityMeta.description[lang]}`,
            "headline": `${entityMeta.name[lang]}`,
         
            "contributor": [ mist_media, organizationObj[lang] ],
            "creditText": L_BASE[lang].base.footer.creator(),
            "editor": miro_storm,
            "maintainer": mist_media,
         
            "inLanguage": lang === 'en' ? languagesObj[lang].en : lang === 'fr' ? languagesObj[lang].fr : languagesObj[lang].nl,
         
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