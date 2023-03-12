import en_nav from '$i18n/en/nav';
import fr_nav from '$i18n/fr/nav';
import nl_nav from '$i18n/nl/nav';
import type { Locales } from '$src/i18n/i18n-types';
import { baseLocale, locales } from '$i18n/i18n-util';
import { getParamValues } from '../utils';

interface navObject {
  [key: string]: any;
}
interface pagesObject {
  [key: string]: {
    altLocalePages: any;
    priority: Number;
  }
}
interface altLocalePagesObject {
  [key: string]: {
    [key in Locales]: string;
  };
}



let pages:pagesObject = {};

const nav:navObject = { 
  en: en_nav, 
  fr: fr_nav, 
  nl: nl_nav 
}

locales.forEach((locale: Locales) => {

  let currentNav = nav[locale];
  try {

    Object.keys(currentNav).forEach((key) => {
      // others and explore must be handled differently

      if (key === 'explore') {
        const exploreMap = currentNav.explore;
    
        // get categories from explore map
        Object.keys(exploreMap).forEach((category) => {
          if (exploreMap[category].items) {
            const catItems = exploreMap[category].items;
            // Iterate over category items
            Object.keys(catItems).forEach((item) => {
  
              let altLocalePages:any = {};
              locales.forEach((lang) => {
                if (lang !== locale) {  
                  altLocalePages[lang] = `/${lang}/${nav[lang].explore[category].items[item].slug}`;
                }
              })
  
              pages[String(`/${locale}/${catItems[item].slug}`)] = {
                altLocalePages: altLocalePages,
                priority: 0.5 
              };
            })
          }
        });
      } else if (key === 'others') {
        const othersMap = currentNav.others;
  
        Object.keys(othersMap).forEach((item) => {
          
          let altLocalePages:any = {};
          locales.forEach((lang) => {
            if (lang !== locale) {
              altLocalePages[lang] = `/${lang}/${nav[lang].others[item].slug}`;
            }
          })
  
          pages[`/${locale}/${othersMap[item].slug}`] = {
            altLocalePages: altLocalePages,
            priority: 0.2
          };
        });
      } else if (key !== 'home') {

        let altLocalePages:any = {};

        locales.forEach((lang) => {
          if (lang !== locale) {
            altLocalePages[String(lang)] = `/${lang}/${nav[lang][key].slug}`;
          }
        })

        pages[String(`/${locale}/${currentNav[key].slug}`)] = {
          altLocalePages: altLocalePages,
          priority: 0.7
        };

        
        if (currentNav[key].items) {
          Object.keys(currentNav[key].items).forEach((item) => {

            let altLocaleSubPages:any = {};
            locales.forEach((lang) => {
              if (lang !== locale) {
                altLocaleSubPages[lang] = `/${lang}/${nav[lang][key].items[item].slug}`;
              }
            })
  
            pages[`/${locale}/${currentNav[key].items[item].slug}`] = {
              altLocalePages: altLocaleSubPages,
              priority: 0.8
            };
          })
        }
      }
    });
  } catch (e) {
    console.error(e);
  }
});
// console.log(pages);

let pagesPerLocale: altLocalePagesObject = {};
Object.keys(nav[baseLocale]).forEach(async key => {
  if (key !== 'others' && key !== 'explore') {
    const paramValues = await getParamValues(key);
    pagesPerLocale[key] = paramValues;
  }

  if (key === 'open_sessions') {
    Object.keys(nav[baseLocale].open_sessions.items).forEach(async (item) => {
      const paramValues = await getParamValues(item, ['open_sessions', 'items']);
      pagesPerLocale[item] = paramValues;
    })
  }

  if (key === 'others') {
    Object.keys(nav[baseLocale].others).forEach(async (item) => {
      const paramValues = await getParamValues(item, ['others']).catch(e => console.error(e));
      pagesPerLocale[item] = paramValues;
    })
  }

  if (key === 'explore') {
    Object.keys(nav[baseLocale].explore.training_leadership_teamcoaching.items).forEach(async (item) => {
      const paramValues = await getParamValues(item, ['explore', 'training_leadership_teamcoaching', 'items']);
      pagesPerLocale[item] = paramValues;
    })
  }
})


export { pages, pagesPerLocale };