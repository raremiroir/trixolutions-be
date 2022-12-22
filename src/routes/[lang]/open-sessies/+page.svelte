<script>
	import Button           from "$comp/Core/Button/Button.svelte";
	import Main             from "$comp/Base/Wrapper/Main.svelte";
   import SectionWrapper   from "$comp/Base/Wrapper/SectionWrapper.svelte";
	import Image            from "$comp/Base/Media/Image.svelte";
	import Breadcrumbs      from "$comp/Common/Breadcrumbs/Breadcrumbs.svelte";
	import Card             from "$comp/Common/Card/Card.svelte";
	import P                from "$comp/Common/Text/P.svelte";
	import Tag              from "$comp/Common/Text/Tag.svelte";
	import Title            from "$comp/Common/Text/Title.svelte";

   let infosessie_data = [
      {
         date: '02/12/2022',
         start: '11:00',
         end: '11:45'
      },
      {
         date: '13/01/2023',
         start: '11:00',
         end: '11:45'
      },
   ]
   let deepdive_data = [
      {
         date: '05/12/2022',
         start: '09:00',
         end: '17:00'
      },
   ]

</script>

<Main>
   <Breadcrumbs/>

   <SectionWrapper name="open-workshops">
      <Title type="h1" slot="title">Open Sessies</Title>
      <ul class="m-0 flex flex-col gap-8">
         <li>
            <Card direction="row" titleType="h2" titleSmallest>
               <!-- Image -->
               <Image 
                  src="http://via.placeholder.com/640x360" slot="image"
                  klass="w-full" height="h-80" />
               <!-- Prepend Inner -->
               <Tag slot="prepend-inner" small>Online Infosessie</Tag>
               <!-- Title -->
               <span slot="title">Gratis Online Open Infosessies</span>
               <!-- Content -->
               Een gratis, open infosessie over onze veelzijdige Lencioni 
               Teamcoaching Opleiding. Aarzel niet en schrijf je in!
               <!-- Append Inner -->
               <div class="flex flex-col gap-4" slot="append-inner">
                  <div class="flex flex-col gap-1">
                     {#each infosessie_data as session}
                        <Tag outlined>
                           {session.date} | {session.start} - {session.end}
                        </Tag>
                     {/each}
                  </div>

                  <div class="flex flex-row gap-2">
                     <Button color="primary" size="md">
                           Schrijf me in!
                     </Button>
                     <Button color="primary" outlined size="md">
                           Meer Info
                     </Button>
                  </div>
               </div>
            </Card>
         </li>
         <li>
            <Card direction="row-reverse" titleType="h2" titleSmallest>
               <!-- Image -->
               <Image 
                  src="http://via.placeholder.com/640x360" slot="image"
                  klass="w-full" height="h-80" />
               <!-- Prepend Inner -->
               <div class="flex flex-wrap gap-2" slot="prepend-inner">
                  <Tag small>Opleiding in Teamcoaching</Tag>
                  <Tag small>Hybride Traject</Tag>
               </div>
               <!-- Title -->
               <span slot="title">Hybride Lencioni Leertraject</span>
               <!-- Content -->
               Een gratis, open infosessie over onze veelzijdige Lencioni 
               Teamcoaching Opleiding. Aarzel niet en schrijf je in!
               <!-- Append Inner -->
               <div class="flex flex-col gap-4" slot="append-inner">
                  <div class="flex flex-col gap-1">
                     <Tag small outlined>Leertraject <b>Met</b> Tweedaagse Masterclass</Tag>
                     <Tag small outlined>Leertraject <b>Zonder</b> Tweedaagse Masterclass</Tag>
                  </div>

                  <div class="flex flex-row gap-2">
                     <Button color="primary" size="md">
                           Schrijf me in!
                     </Button>
                     <Button color="primary" outlined size="md">
                           Meer Info
                     </Button>
                  </div>
               </div>
            </Card>
         </li>
         <li>
            <Card direction="row" titleType="h2" titleSmallest>
               <!-- Image -->
               <Image 
                  src="http://via.placeholder.com/640x360" slot="image"
                  klass="max-w-full" height="h-88" />
               <!-- Prepend Inner -->
               <div class="flex flex-wrap gap-2" slot="prepend-inner">
                  <Tag small>Opleiding in Teamcoaching</Tag>
                  <Tag small>Hybride Traject</Tag>
               </div>
               <!-- Title -->
               <span slot="title">Lencioni DeepDive / <br/>Advanced Opleiding</span>
               <!-- Content -->
               Een gratis, open infosessie over onze veelzijdige Lencioni 
               Teamcoaching Opleiding. Aarzel niet en schrijf je in!
               <!-- Append Inner -->
               <div class="flex flex-col gap-4" slot="append-inner">
                  <div class="flex flex-col gap-1">
                     {#each deepdive_data as session}
                        <Tag outlined>
                           {session.date} | {session.start} - {session.end}
                        </Tag>
                     {/each}
                  </div>

                  <div class="flex flex-row gap-2">
                     <Button color="primary" size="md">
                           Schrijf me in!
                     </Button>
                     <Button color="primary" outlined size="md">
                           Meer Info
                     </Button>
                  </div>
               </div>
            </Card>
         </li>
      </ul>
      

   </SectionWrapper>
</Main>