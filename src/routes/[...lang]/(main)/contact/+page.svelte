<script>
   
   import ogSquareImageSrc from '$lib/assets/images/home/home-open-graph-square.jpg';
	import ogImageSrc from '$lib/assets/images/home/home-open-graph.jpg';
	import featuredImageSrc from '$lib/assets/images/home/home.jpg';
   
   // Import i18n
   import LL from '$i18n/i18n-svelte'
   import { locale } from "$i18n/i18n-svelte";
	import { firstLetterCase, titleCase } from "$utils";
   
   import { 
      Main, SectionWrapper, Breadcrumbs, 
      Link, P, Title, Button, 
      Map, Card, Modal, 
      ContactForm, 
	  SEO
   } from "$comp";
	import Icon from "@iconify/svelte";

	import website from '$src/lib/config/website';
   
   
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

   
   const { author, siteUrl } = website;
	let title = 'Home';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: '',
		},
	];
	let metadescription =
		'SvelteKit MDsvex Blog Starter - starter code by Rodney Lab to help you get going on your next blog site';
	const featuredImageAlt =
		'picture of a person with long, curly hair, wearing a red had taking a picture with an analogue camera';
	const featuredImage = {
		url: featuredImageSrc,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: 'Home page',
	};
	const ogImage = {
		url: ogImageSrc,
		alt: featuredImageAlt,
	};
	const ogSquareImage = {
		url: ogSquareImageSrc,
		alt: featuredImageAlt,
	};
	const entityMeta = {
		url: `${siteUrl}/`,
		faviconWidth: 512,
		faviconHeight: 512,
		caption: author,
	};
	const seoProps = {
		title,
		slug: '',
		entityMeta,
		datePublished: '2023-01-11T12:31:00.000+0100',
		lastUpdated: '2023-01-11T12:31:00.000+0100',
		breadcrumbs,
		metadescription,
		featuredImage,
		ogImage,
		ogSquareImage,
	};

</script>


<SEO {...seoProps}/>

<Breadcrumbs/>
<Main cta>
   <SectionWrapper name="contact-us">
      <Title slot="title" type="h1">{titleCase($LL.pages.contact.title())}</Title>
      <div class="flex flex-row gap-8 items-center justify-center">
         
         <Modal width="min-w-[60%] max-w-[95%] xl:min-w-[40%] xl:max-w-[50%]">
            <Button
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
               <P large thickness="font-semibold" center>
                  {@html place.address}<br/>
                  {place.code === 'be' ? $LL.base.geo.city.antwerp() : place.code === 'nl' ? place.place : 'error' }
               </P>
               <div class="w-full flex items-center justify-center" slot="append-inner">
                  <Link href="mailto:{place.email}">
                     <Button size="xl" color="primary" lowercase>
                        <div class="flex flex-row gap-2 items-center">
                           <Icon icon="material-symbols:mail-rounded" color="#f6ece7" width="24" />
                           {place.email}
                        </div>
                     </Button>
                  </Link>
               </div>
            </Card>
         {/each}
      </div>
   </SectionWrapper>
   
   <SectionWrapper name="trixolutions-map">
      <Title type="h2" small slot="title">{firstLetterCase($LL.pages.contact.find_on_map())}!</Title>
      <div class="w-full h-140">
         <Map/>
      </div>
   </SectionWrapper>

   
</Main>