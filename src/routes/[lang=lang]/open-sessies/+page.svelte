<script>
	import Button           from "$comp/Core/Button/Button.svelte";
	import Main             from "$comp/Base/Wrapper/Main.svelte";
   import SectionWrapper   from "$comp/Base/Wrapper/SectionWrapper.svelte";
	import Image            from "$comp/Base/Media/Image.svelte";
	import Breadcrumbs      from "$src/lib/components/Core/Breadcrumbs/Breadcrumbs.svelte";
	import Card             from "$comp/Common/Card/Card.svelte";
	import P                from "$comp/Common/Text/P.svelte";
	import Tag              from "$comp/Common/Text/Tag.svelte";
	import Title            from "$comp/Common/Text/Title.svelte";


   
   import PocketBase from "pocketbase";
   import { formatTime, formatDateFull } from "$lib/utils";
   import { pageResult, secondPageResult } from "$lib/stores";
	import NavHrefLangs from "$src/lib/components/Core/Navbar/NavHrefLangs.svelte";
   const pb = new PocketBase('http://127.0.0.1:8090')
   
   
   async function sessionsList() {
      $pageResult =  await pb.collection('info_sessions')
                     .getFullList(200 /* batch size */, {
         sort: 'created'
      });
      $secondPageResult =  await pb.collection('level_2_sessions')
                     .getFullList(200 /* batch size */, {
         sort: 'created',
      });
      console.log($pageResult);
   }
   sessionsList();

</script>

<Breadcrumbs/>
<Main cta>
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
                     {#each $pageResult as session}
                        <Tag outlined>
                           {formatDateFull(session['starts_on'])} | {formatTime(session['starts_on'])} - {formatTime(session['ends_on'])}
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
                     {#each $secondPageResult as session}
                        <Tag outlined>
                           {formatDateFull(session['starts_on'])} | {formatTime(session['starts_on'])} - {formatTime(session['ends_on'])}
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