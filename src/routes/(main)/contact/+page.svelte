<script>
   
   import { Button, Main, SectionWrapper, Breadcrumbs, Link, P, Title } from "$comp/core";
   import { Map, Card } from "$comp/common";
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

<Breadcrumbs/>
<Main cta>
   <SectionWrapper name="contact-us">
      <Title slot="title" type="h1">Contact</Title>
      <div class="flex flex-row gap-8">
         {#each places as place}
            <Card textCenter>
               <div slot="prepend-inner" class="w-full flex items-center justify-center">
                  <div class="border-4 border-primary w-fit h-fit rounded-full m-0 p-0">
                     <Icon icon="emojione:flag-for-{place.country === 'België' ? 'belgium' : place.country === 'Nederland' ? 'netherlands' : 'usa' }" width="140" />
                  </div>
               </div>
               <Title slot="title" type="h2" smallest class="text-center uppercase font-extrabold">Vestiging {place.country}</Title>
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
   </SectionWrapper>

   <SectionWrapper name="cta-buttons">

      <div class="flex flex-row gap-8 items-center justify-center">
         <Button size="xxl" color="primary" lowercase>
            <div class="flex flex-row gap-2 items-center">
               <Icon icon="material-symbols:mark-email-read-rounded" color="#f6ece7" width="40" />
               Contacteer Ons!
            </div>
         </Button>
      </div>
   </SectionWrapper>

   <SectionWrapper name="trixolutions-map">
      <Title type="h2" small slot="title">Vind ons op de kaart!</Title>
      <div class="w-full h-140">
         <Map/>
      </div>
   </SectionWrapper>

   
</Main>