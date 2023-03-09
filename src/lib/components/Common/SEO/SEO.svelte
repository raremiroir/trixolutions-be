
<script lang="ts">
   // Import types
   import type { RatingsObj, OGProps, SOProps, ImageMetadata, MediaObject } from "./SEOTypes";

   // Import SEO components
   import SchemaOrgNew from "./SchemaOrgNew.svelte";
   import OpenGraph from "./OpenGraph.svelte";

   // Import i18n
   import { locale } from "$i18n/i18n-svelte";
   // Import website constants
   import { website } from "$lib/config/website";

   // ================== //

   // Export default props
   export let createdOn = website.created_on;
   export let updatedOn = website.updated_on;
   export let hasAlternateLang = true;
   export let ratings: RatingsObj = { amount: 7, average: 4.8 }

   // Export OG props
   export let openGraph: OGProps;
   $: openGraph;
   
   // Export Schema.org props
   export let schemaOrg: SOProps;
   $: schemaOrg;

   
   
   
   const websiteLogo: ImageMetadata = {
      url: `${website.domain}/logo-1920x1280.webp`,
      alt: {nl: 'Trixolutions Logo', en: 'Trixolutions Logo', fr: 'Trixolutions Logo'},
      width: 1920,
      height: 1280,
   }

   $: url = `${website.domain}/${$locale}/${openGraph.slug}`;

   // Define SEO Component Props
   $: openGraphProps = {
      siteTitle: website.title,
      pageTitle: `Trixolutions - ${openGraph.title}`,
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

      images: schemaOrg.entity.image ? [{
         url: schemaOrg.entity.image.url,
         alt: schemaOrg.entity.image.alt ? schemaOrg.entity.image.alt[$locale] : '',
         dimensions: { width: schemaOrg.entity.image.width ? schemaOrg.entity.image.width : 640, height: schemaOrg.entity.image.height ? schemaOrg.entity.image.height : 480 }
         }] : [{
            url: websiteLogo.url,
            alt: `Trixolutions - ${openGraph.title}`,
            dimensions: { width: websiteLogo.width, height: websiteLogo.height }
         }],
      squareImages: [],
      audios: [],
      videos: [],

      person: {},
   }
   $: schemaOrgProps = {
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