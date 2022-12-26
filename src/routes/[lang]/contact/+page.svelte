<script>
	import Button           from "$comp/Core/Button/Button.svelte";
	import Main             from "$comp/Base/Wrapper/Main.svelte";
   import SectionWrapper   from "$comp/Base/Wrapper/SectionWrapper.svelte";
	import Map              from "$comp/Base/Media/Map.svelte";
	import Image            from "$comp/Base/Media/Image.svelte";
	import Breadcrumbs      from "$src/lib/components/Core/Breadcrumbs/Breadcrumbs.svelte";
	import Card             from "$comp/Common/Card/Card.svelte";
	import Link             from "$comp/Common/Link/Link.svelte";
	import P                from "$comp/Common/Text/P.svelte";
	import Title            from "$comp/Common/Text/Title.svelte";
	import Tabs             from "$comp/Other/Tabs/Tabs.svelte";
	import Tab              from "$comp/Other/Tabs/Tab.svelte";
	import TabPanel         from "$comp/Other/Tabs/TabPanel.svelte";
	import Icon             from "@iconify/svelte";


   const places = [
      {
         country: 'België',
         address: 'Krommelei 14',
         address2: '2110 Wijnegem',
         place: 'Antwerpen',
         email: 'info@trixolutions.be',
      },
      {
         country: 'Nederland',
         address: 'Vakwerkhuis',
         address2: 'Professor Snijdersstraat 2',
         place: '2628 RA Delft',
         email: 'info@trixolutions.nl'
      },
   ]

</script>

<Main>
   <Breadcrumbs/>
   <SectionWrapper name="contact-us">
      <Title type="h1">Contact</Title>
      <div class="flex flex-row gap-8">
         {#each places as place}
            <Card titleType="h2" titleSmallest centerTitle>
               <div slot="prepend-inner" class="w-full flex items-center justify-center">
                  <div class="border-4 border-primary w-fit h-fit rounded-full m-0 p-0">
                     <Icon icon="emojione:flag-for-{place.country === 'België' ? 'belgium' : place.country === 'Nederland' ? 'netherlands' : 'usa' }" width="140" />
                  </div>
               </div>
               <span slot="title" class="uppercase font-extrabold">Vestiging {place.country}</span>
               <P large thickness="font-semibold" center>
                  {place.address}<br/>
                  {place.address2},<br/>
                  {place.place}
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

      <div class="flex flex-row gap-8 items-center justify-center">
         <Button size="xxl" color="primary" lowercase>
            <div class="flex flex-row gap-2 items-center">
               <Icon icon="material-symbols:location-on-rounded" color="#f6ece7" width="40" />
               Bekijk ons op de Kaart!
            </div>
         </Button>
         <Button size="xxl" color="primary" lowercase>
            <div class="flex flex-row gap-2 items-center">
               <Icon icon="material-symbols:mark-email-read-rounded" color="#f6ece7" width="40" />
               Contacteer Ons!
            </div>
         </Button>
      </div>

      <div class="w-full h-100">
         <Map/>
      </div>
   </SectionWrapper>

   
</Main>