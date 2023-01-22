<script>  
   // Import features image (SEO)
   import ogSquareImageSrc from '$lib/assets/images/home/home-open-graph-square.jpg';
	import ogImageSrc from '$lib/assets/images/home/home-open-graph.jpg';
	import featuredImageSrc from '$lib/assets/images/home/home.jpg';
   
   // Import i18n
   import LL from '$i18n/i18n-svelte'
   import { locale } from "$i18n/i18n-svelte";
   
   // Import utils
	import { firstLetterCase, titleCase } from "$utils";
   
   // Import components
   import { 
      Main, Section, Breadcrumbs, 
      Link, Text, Title, Button, 
      Map, Card, Modal, 
      ContactForm, 
	  SEO
   } from "$comp";
	import Icon from "@iconify/svelte";

   // Import website config
	import { website } from '$src/lib/config/website';
   
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
   const { author, siteUrl } = website;
	let title = 'Contact';
	const breadcrumbs = [{ name: 'Contact', slug: `/${$locale}/contact` }];
	let metadescription = 'Contact Trixolutions';
   
	const featuredImageAlt = 'Contact Trixolutions';
	const featuredImage = {
		url: featuredImageSrc, alt: featuredImageAlt,
		width: 672, height: 448,
		caption: 'Contact Trixolutions',
	};
	const ogImage = { url: ogImageSrc, alt: featuredImageAlt, };
	const ogSquareImage = { url: ogSquareImageSrc, alt: featuredImageAlt, };
	
   const entityMeta = {
		url: `${siteUrl}/${$locale}/contact`,
		faviconWidth: 512, faviconHeight: 512,
		caption: author,
	};
	
   const seoProps = {
      slug: `${$locale}/contact`,
		datePublished: '2023-01-11T12:31:00.000+0100',
		lastUpdated: '2023-01-11T12:31:00.000+0100',
		title, entityMeta,
		breadcrumbs, metadescription,
		featuredImage, ogImage, ogSquareImage,
	};

</script>


<SEO {...seoProps}/>

<Main cta>
   <Breadcrumbs currentIcon="mdi:email-outline"/>
   <Section name="contact-us">
      <Title slot="title" type="h1">{titleCase($LL.pages.contact.title())}</Title>
      <div class="flex flex-row gap-8 items-center justify-center">
         
         <Modal width="min-w-[60%] max-w-[95%] xl:min-w-[40%] xl:max-w-[50%]">
            <Button
               ariaLabel="{$LL.pages.contact.btn.contact_us()}"
               slot="trigger" 
               size="xxl" color="primary" 
               lowercase>
               <div class="flex flex-row gap-2 items-center">
                  <Icon icon="material-symbols:mark-email-read-rounded" color="#f6ece7" width="40" />
                  {titleCase($LL.pages.contact.btn.contact_us())}!
               </div>
            </Button>
   
            <Title slot="title" type="h3" small>{titleCase($LL.pages.contact.btn.contact_us())}!</Title>
            <ContactForm />
            
         </Modal>
      </div>
      <div class="grid grid-cols-2 w-full gap-8">
         {#each places as place}
            <Card textCenter class="col-span-1">
               <div slot="prepend-inner" class="w-full flex items-center justify-center">
                  <div class="border-4 border-primary w-fit h-fit rounded-full m-0 p-0">
                     <Icon icon="emojione:flag-for-{place.code === 'be' ? 'belgium' : place.code === 'nl' ? 'netherlands' : 'usa' }" width="140" />
                  </div>
               </div>
               <Title slot="title" type="h2" smallest class="text-center uppercase font-extrabold">
                  {firstLetterCase($LL.pages.contact.establishment())} {place.code === 'be' ? $LL.base.geo.country.belgium() : place.code === 'nl' ? $LL.base.geo.country.netherlands() : 'error' }
               </Title>
               <Text semibold center>
                  {@html place.address}<br/>
                  {place.code === 'be' ? $LL.base.geo.city.antwerp() : place.code === 'nl' ? place.place : 'error' }
               </Text>
               <div class="w-full flex items-center justify-center" slot="append-inner">
                  <Button ariaLabel="Mail {place.email}" size="xl" color="primary" lowercase href="mailto:{place.email}">
                     <div class="flex flex-row gap-2 items-center">
                        <Icon icon="material-symbols:mail-rounded" color="#f6ece7" width="24" />
                        {place.email}
                     </div>
                  </Button>
               </div>
            </Card>
         {/each}
      </div>
   </Section>
   
   <Section name="trixolutions-map">
      <Title type="h2" small slot="title">{firstLetterCase($LL.pages.contact.find_on_map())}!</Title>
      <div class="w-full h-140">
         <Map/>
      </div>
   </Section>

   
</Main>