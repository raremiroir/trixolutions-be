<script>  
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: 'contact'},
      {locale: 'fr', slug: 'contact'},
      {locale: 'nl', slug: 'contact'}
   ];
   // Import components
   import { 
      Main, Section, Breadcrumbs, 
      Text, Title, Button, 
      Map, Modal, 
	   SEO, Form, CardNew
   } from "$comp";
	import Icon from "@iconify/svelte";
   
   // Import features image (SEO)
   import ogSquareImageSrc from '$lib/assets/images/home/home-open-graph-square.png';
	import ogImageSrc from '$lib/assets/images/home/home-open-graph.png';
	import featuredImageSrc from '$lib/assets/images/home/home.png';
   
   // Import i18n
   import LL from '$i18n/i18n-svelte'
   import { locale } from "$i18n/i18n-svelte";
   // Import utils
	import { firstLetterCase, titleCase } from "$utils";
   // Import website config
	import { website } from '$src/lib/config/website';


	import FormBase from "$comp/Forms/FormBase.svelte";
   


   const cardProps = {
      width: 'full',

      compact: false,
      compactResponsive: true,
      equalHeight: true,

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
   $: pageSlug = `/${$locale}/${$LL.nav.contact.slug()}`
   $: pageTitle = $LL.nav.contact.title()
   $: pageDesc = $LL.nav.contact.description()
   let { author, siteUrl } = website;
	$: breadcrumbs = [{ name: pageTitle, slug: pageSlug }];
	
   $: entityMeta = {
		url: `${siteUrl}${pageSlug}`,
		faviconWidth: 512, faviconHeight: 512,
		caption: author,
	};

</script>


<SEO 
	slug="{pageSlug}"
	datePublished = '2023-01-11T12:31:00.000+0100'
	lastUpdated = '2023-01-11T12:31:00.000+0100'
	title="{pageTitle}"
	metadescription="{pageDesc}"
	{breadcrumbs} {entityMeta}
/>

<Main cta>
   <Breadcrumbs currentIcon="mdi:email-outline"/>
   <Section name="contact-us">
      <Title slot="title" type="h1">{titleCase($LL.pages.contact.title())}</Title>
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
   
            <Title slot="title" type="h3" small>{titleCase($LL.pages.contact.btn.contact_us())}!</Title>
            <!-- <ContactForm /> -->
            <Form 
               formType="contact"
               sessionType=""
               submitText={$LL.base.form.content.send_msg()}
            />
            
         </Modal>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 w-full gap-8">
         {#each places as place}
            <CardNew 
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
                  <Title type="h2" smallest class="text-center uppercase font-extrabold">
                     {firstLetterCase($LL.pages.contact.establishment())} {place.code === 'be' ? $LL.base.geo.country.belgium() : place.code === 'nl' ? $LL.base.geo.country.netherlands() : 'error' }
                  </Title>
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
            </CardNew>
         {/each}
      </div>
   </Section>
   
   <Section name="trixolutions-map">
      <Title type="h2" small slot="title">{firstLetterCase($LL.pages.contact.find_on_map())}!</Title>
      <Map/>
      <FormBase/>
   </Section>

   
</Main>