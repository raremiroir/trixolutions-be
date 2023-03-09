import L from "$i18n/i18n-node"
import { locales } from "$i18n/i18n-util"
import type { 
   Locales, 
} from "$i18n/i18n-types"


// Creation of Entity
export const getEntityName = (reference:string) => {
   let nameObj:any = {};
   locales.forEach((locale: Locales) => {
      // loadNamespaceAsync(locale, 'nav');
      nameObj[locale] = `Trixolutions - ${L[locale].nav[reference].title()}`;
   })
   return nameObj;
}
export const getEntityDescription = (reference:string) => {
   let descriptionObj:any = {};
   locales.forEach((locale: Locales) => {
      descriptionObj[locale] = L[locale].nav[reference].description();
   })
   return descriptionObj;
}
export const getEntitySlug = (reference:string) => {
   let slugObj:any = {};
   locales.forEach((locale: Locales) => {
      slugObj[locale] = `${locale}/${L[locale].nav[reference].slug()}`;
   })
   return slugObj;
}
export const getEntityBreadcrumb = (reference:string, amount:number = 1, previous:string = '') => {   
   if (amount > 0) {
      let breadcrumbArr:any = [];
      for (let i = 1; i < amount+1; i++) {
         let crumbName = getEntityName(reference);
         let crumbSlug = getEntitySlug(reference);
         let crumbDescription = getEntityDescription(reference); 
         if (i > 1) {
            crumbName = getEntityName(previous);
            crumbSlug = getEntitySlug(previous);
            crumbDescription = getEntityDescription(previous); 
         }
         let breadcrumbObj = {
            name: crumbName,
            slug: crumbSlug,
            description: crumbDescription
         };
         breadcrumbArr.push(breadcrumbObj);
      }
      return breadcrumbArr;
   } 
   else {
      return [];
   }
}

export const getBaseEntity = (reference:string, amount:number = 1, previous:string = '') => {
   let baseEntity = {
      name: getEntityName(reference),
      slug: getEntitySlug(reference),
      description: getEntityDescription(reference),
      breadcrumb: getEntityBreadcrumb(reference, amount, previous)
   }
   return baseEntity;
}