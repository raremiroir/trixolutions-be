<script lang="ts">  
   // Import i18n
   import { locales } from "$i18n/i18n-util";
   import type { Locales } from "$i18n/i18n-types";
   import LL from "$i18n/i18n-svelte";
   
   const pageName = 'contact';
   
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   locales.forEach((locale:Locales, key) => {
      $currentPageMap[key] = {
         locale: locale,
         slug: pageName
      }
   })

   // Import components
   import { 
      Main, Section, Breadcrumbs, 
      Text, Button, 
      Modal, Mapbox, 
	   SEO, CardBase, ContactForm, 
      H2, H1, H3, Reveal
   } from "$comp";
	import Icon from "@iconify/svelte";
   
   // Import features image (SEO)
   import ogSquareImageSrc from '$lib/assets/images/home/home-open-graph-square.png';
	import ogImageSrc from '$lib/assets/images/home/home-open-graph.png';
	import featuredImageSrc from '$lib/assets/images/home/home.png';
   
   import { getBaseEntity } from "$lib/utils/seo";

   // Import utils
	import { firstLetterCase, titleCase } from "$utils";
   // Import website config
	import { website } from '$src/lib/config/website';

   const cardProps = {
      hoverFx: 'minimal',
   }
   
   // Define Company establishments
   const places = [
      {
         code: "be",
         address: 'Krommelei 1 <br/>2110 Wijnegem',
         place: 'Antwerpen',
         email: 'info@trixolutions.be',
      },
      {
         code: "nl",
         address: 'Vakwerkhuis<br/>Professor Snijdersstraat 2',
         place: '2628 RA Delft',
         email: 'info@trixolutions.nl'
      },
   ]

   // SEO
   // !TODO: ADD MORE INFO + OG:PERSON
   $: openGraph = {
      title: $LL.nav.contact.title(),
      description: $LL.nav.contact.description(),
		slug: $LL.nav.contact.slug(),
      tags: ['contact', 'trixolutions', 'teamcoaching'],
   }
   $: schemaOrg = {
      entity: getBaseEntity('contact'),
      sessions: [],
   }
</script>


<SEO {openGraph} {schemaOrg} />

<Main cta>
   <Breadcrumbs currentIcon="mdi:email-outline"/>
   <Section name="contact-us">
      <H1 slot="title">{titleCase($LL.pages.contact.title())}</H1>
      <Reveal>
         <div class="flex flex-row gap-8 items-center justify-center">
            <Modal width="min-w-[60%] max-w-[95%] xl:min-w-[40%] xl:max-w-[50%]">
               <Button
                  ariaLabel="{$LL.pages.contact.btn.contact_us()}"
                  slot="trigger" 
                  size="xxl" color="primary">
                  <div class="flex flex-row gap-2 items-center">
                     <Icon icon="material-symbols:mark-email-read-rounded" color="#f6ece7" width="40" />
                     {titleCase($LL.pages.contact.btn.contact_us())}!
                  </div>
               </Button>
      
               <H3 slot="title" small>{titleCase($LL.pages.contact.btn.contact_us())}!</H3>
               <ContactForm />
            </Modal>
         </div>
      </Reveal>
      <Reveal>
         <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
            {#each places as place}
               <CardBase 
                  title="{firstLetterCase($LL.pages.contact.establishment())} {place.code === 'be' ? $LL.base.geo.country.belgium() : place.code === 'nl' ? $LL.base.geo.country.netherlands() : 'error' }"
                  height='h-88 sm:h-96 md:h-92 lg:h-96'
                  class="col-span-1"
                  {...cardProps}
               >
                  <div slot="title" class="w-full items-center flex flex-col gap-4">
                     <div class="w-full flex items-center justify-center">
                        <div class="border-4 border-primary w-fit h-fit rounded-full m-0 p-0">
                           <Icon icon="emojione:flag-for-{place.code === 'be' ? 'belgium' : place.code === 'nl' ? 'netherlands' : 'usa' }" width="140" />
                        </div>
                     </div>
                     <H2 smallest class="text-center uppercase font-extrabold">
                        {firstLetterCase($LL.pages.contact.establishment())} {place.code === 'be' ? $LL.base.geo.country.belgium() : place.code === 'nl' ? $LL.base.geo.country.netherlands() : 'error' }
                     </H2>
                  </div>
                  <Text semibold center>
                     {@html place.address}<br/>
                     {place.code === 'be' ? $LL.base.geo.city.antwerp() : place.code === 'nl' ? place.place : 'error' }
                  </Text>
                  
                  <div class="w-full flex items-center justify-center" slot="append">
                     <Button ariaLabel="Mail {place.email}" size="xl" color="primary" lowercase href="mailto:{place.email}">
                        <div class="flex flex-row gap-2 items-center">
                           <Icon icon="material-symbols:mail-rounded" color="#f6ece7" width="24" />
                           {place.email}
                        </div>
                     </Button>
                  </div>
               </CardBase>
            {/each}
         </div>
      </Reveal>
   </Section>
   
   <Section name="trixolutions-map">
      <H2 small slot="title">{firstLetterCase($LL.pages.contact.find_on_map())}!</H2>
      <!-- <Reveal> -->
         <Mapbox/>
      <!-- </Reveal> -->
   </Section>

   
</Main>