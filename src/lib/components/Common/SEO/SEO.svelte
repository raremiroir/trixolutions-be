<script lang="ts">
   // Import types
   import type { RatingsObj, OGProps, SOProps, ImageMetadata } from "./SEOTypes";

   // Import SEO components
   import SchemaOrgNew from "./SchemaOrgNew.svelte";
   import OpenGraph from "./OpenGraph.svelte";

   // Import i18n
   import { locale } from "$i18n/i18n-svelte";
   // Import website constants
   import { website } from "$lib/config/website";

   // ================== //

   // Export default props
   export let createdOn = "";
   export let updatedOn = "";
   export let slug = '';
   export let hasAlternateLang = true;
   export let ratings: RatingsObj = { amount: 7, average: 4.8 }

   // Export OG props
   export let openGraph: OGProps = {
      title: '',
      description: '',
      type: "website", // website, article, blog, event ...

      tags: [''],
   }
   
   // Export Schema.org props
   export let schemaOrg: SOProps;
   
   
   const websiteLogo: ImageMetadata = {
      url: `${website.domain}/logo-1920x1280.webp`,
      alt: {nl: 'Trixolutions Logo', en: 'Trixolutions Logo', fr: 'Trixolutions Logo'},
      width: 1920,
      height: 1280,
   }

   $: url = `${website.domain}/${$locale}/${slug}`;

   // Define SEO Component Props
   const openGraphProps = {
      siteTitle: website.title,
      pageTitle: openGraph.title,
      metadescription: openGraph.description,
      url: url,
      
      article: openGraph.type === 'article' ? true : false,
      tags: openGraph.tags,
      type: openGraph.type,

      datePublished: createdOn,
      lastUpdated: updatedOn,

      facebookAuthorPage: website.facebookAuthorPage,
      facebookPage: website.facebookPage,
      linkedinProfile: website.linkedinProfile,

      ogLanguage: $locale,
      hasAlternateLang: hasAlternateLang,

      images: false,
      squareImages: false,
      audios: false,
      videos: false,

      person: false,
   }
   const schemaOrgProps = {
      hasAlternateLang: hasAlternateLang,
      sessions: schemaOrg.sessions,

      entityMeta: {
         name: schemaOrg.entity.name,
         description: schemaOrg.entity.description,
         slug: schemaOrg.entity.slug,
         author: schemaOrg.entity.author ? schemaOrg.entity.author : 'Trixolutions',
         image: schemaOrg.entity.image ? schemaOrg.entity.image : websiteLogo,
         created_on: createdOn,
         updated_on: updatedOn,
         related: schemaOrg.entity.related ? schemaOrg.entity.related : [],
         significant: schemaOrg.entity.significant ? schemaOrg.entity.significant : [],
         breadcrumb: schemaOrg.entity.breadcrumb,
      },
      ratings: ratings,

      images: schemaOrg.images ? true : false,
      imagesMeta: schemaOrg.images ? schemaOrg.images : [],
      articles: schemaOrg.articles ? true : false,
      articlesMeta: schemaOrg.articles ? schemaOrg.articles : [],
      videos: schemaOrg.videos ? true : false,
      videosMeta: schemaOrg.videos ? schemaOrg.videos : [],
      blogPosts: schemaOrg.blogPosts ? true : false,
      blogPostsMeta: schemaOrg.blogPosts ? schemaOrg.blogPosts : [],
      blog: schemaOrg.blog ? true : false,
   }
</script>


<OpenGraph {...openGraphProps} />
<SchemaOrgNew {...schemaOrgProps} />