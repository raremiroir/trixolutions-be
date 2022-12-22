<script>
	import Image from "$src/lib/components/Base/Media/Image.svelte";
	import Map from "$src/lib/components/Base/Media/Map.svelte";
	import Main from "$src/lib/components/Base/Wrapper/Main.svelte";
import SectionWrapper from "$src/lib/components/Base/Wrapper/SectionWrapper.svelte";
	import Breadcrumbs from "$src/lib/components/Common/Breadcrumbs/Breadcrumbs.svelte";
	import Button from "$src/lib/components/Common/Button/Button.svelte";
	import Card from "$src/lib/components/Common/Card/Card.svelte";
	import Link from "$src/lib/components/Common/Link/Link.svelte";
	import P from "$src/lib/components/Common/Text/P.svelte";
	import Title from "$src/lib/components/Common/Text/Title.svelte";
	import Tab from "$src/lib/components/Tabs/Tab.svelte";
	import TabPanel from "$src/lib/components/Tabs/TabPanel.svelte";
	import Tabs from "$src/lib/components/Tabs/Tabs.svelte";
	import Icon from "@iconify/svelte";


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