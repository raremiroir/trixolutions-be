import L from "$utils/i18node"
import { locales } from "$i18n/i18n-util"
import type { 
   Locales, 
} from "$i18n/i18n-types"



// Creation of Entity
export const getEntityName = (reference:string, depth: string[] = []) => {
   let nameObj:any = {};
   locales.forEach((locale: Locales) => {
      // loadNamespaceAsync(locale, 'nav');
      if (depth.length === 0) {
         nameObj[locale] = `Trixolutions - ${L[locale].nav[reference].title()}`;
      } else if (depth.length === 1) {
         nameObj[locale] = `Trixolutions - ${L[locale].nav[depth[0]][reference].title()}`;
      } else if (depth.length === 2) {
         nameObj[locale] = `Trixolutions - ${L[locale].nav[depth[0]][depth[1]][reference].title()}`;
      } else if (depth.length === 3) {
         nameObj[locale] = `Trixolutions - ${L[locale].nav[depth[0]][depth[1]][depth[2]][reference].title()}`;
      }
   })
   return nameObj;
}
export const getEntityDescription = (reference:string, depth: string[] = []) => {
   let descriptionObj:any = {};
   locales.forEach((locale: Locales) => {
      if (depth.length === 0) {
         descriptionObj[locale] = L[locale].nav[reference].description();
      } else if (depth.length === 1) {
         descriptionObj[locale] = L[locale].nav[depth[0]][reference].description();
      } else if (depth.length === 2) {
         descriptionObj[locale] = L[locale].nav[depth[0]][depth[1]][reference].description();
      } else if (depth.length === 3) {
         descriptionObj[locale] = L[locale].nav[depth[0]][depth[1]][depth[2]][reference].description();
      }
   })
   return descriptionObj;
}
export const getEntitySlug = (reference:string, depth: string[] = []) => {
   let slugObj:any = {};
   locales.forEach((locale: Locales) => {
      if (depth.length === 0) {
         slugObj[locale] = `${locale}/${L[locale].nav[reference].slug()}`;
      } else if (depth.length === 1) {
         slugObj[locale] = `${locale}/${L[locale].nav[depth[0]][reference].slug()}`;
      } else if (depth.length === 2) {
         slugObj[locale] = `${locale}/${L[locale].nav[depth[0]][depth[1]][reference].slug()}`;
      } else if (depth.length === 3) {
         slugObj[locale] = `${locale}/${L[locale].nav[depth[0]][depth[1]][depth[2]][reference].slug()}`;
      }
   })
   return slugObj;
}
export const getEntityBreadcrumb = (reference:string, depth: string[] = [], amount:number = 1, previous:string = '') => {   
   if (amount > 0) {
      let breadcrumbArr:any = [];
      for (let i = 1; i < amount+1; i++) {
         let crumbName = getEntityName(reference, depth);
         let crumbSlug = getEntitySlug(reference, depth);
         let crumbDescription = getEntityDescription(reference, depth); 
         if (i > 1) {
            crumbName = getEntityName(previous, depth); // may use previousDepth as extra parameter
            crumbSlug = getEntitySlug(previous, depth);
            crumbDescription = getEntityDescription(previous, depth); 
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

export const getBaseEntity = (reference:string, depth: string[] = [], amount:number = 1, previous:string = '') => {
   let baseEntity = {
      name: getEntityName(reference, depth),
      slug: getEntitySlug(reference, depth),
      description: getEntityDescription(reference, depth),
      breadcrumb: getEntityBreadcrumb(reference, depth, amount, previous)
   }
   return baseEntity;
}