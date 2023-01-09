<script>
   
   import { Button, Main, SectionWrapper, Breadcrumbs, Link, P, Title } from "$comp/core";
   import { Map, Card } from "$comp/common";
	import Icon from "@iconify/svelte";
	import { firstLetterCase, titleCase } from "$utils";
   
   // Import i18n
   import LL from '$i18n/i18n-svelte'
   import { locale } from "$src/i18n/i18n-svelte";
   
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

   $: console.log($locale);

</script>

<Breadcrumbs/>
<Main cta>
   <SectionWrapper name="contact-us">
      <Title slot="title" type="h1">{titleCase($LL.pages.contact.title())}</Title>
      <div class="flex flex-row gap-8 items-center justify-center">
         <Button size="xxl" color="primary" lowercase>
            <div class="flex flex-row gap-2 items-center">
               <Icon icon="material-symbols:mark-email-read-rounded" color="#f6ece7" width="40" />
               {titleCase($LL.pages.contact.btn.contact_us())}!
            </div>
         </Button>
      </div>
      <div class="flex flex-row gap-8">
         {#each places as place}
            <Card textCenter>
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