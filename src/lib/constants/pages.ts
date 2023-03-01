import en_nav from '$i18n/en/nav';
import fr_nav from '$i18n/fr/nav';
import nl_nav from '$i18n/nl/nav';

const locales = ['en', 'fr', 'nl'];


interface navObject {
  [key: string]: any;
}
interface pagesObject {
  [key: string]: {
    altLocalePages: any;
    priority: Number;
  }
}

let pages:pagesObject = {};

const nav:navObject = { 
  en: en_nav, 
  fr: fr_nav, 
  nl: nl_nav 
}

locales.forEach((locale) => {

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

        console.log('key: ', key);

        let altLocalePages:any = {};

        locales.forEach((lang) => {
          if (lang !== locale) {
            console.log('alt lang: ', lang);
            altLocalePages[String(lang)] = `/${lang}/${nav[lang][key].slug}`;
          }
        })

        console.log('got it')
        pages[String(`/${locale}/${currentNav[key].slug}`)] = {
          altLocalePages: altLocalePages,
          priority: 0.7
        };

        console.log(pages);
        
        if (currentNav[key].items) {
          Object.keys(currentNav[key].items).forEach((item) => {

            console.log('item: ', item);
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


export { pages };