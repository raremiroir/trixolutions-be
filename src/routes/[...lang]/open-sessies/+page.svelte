<script>
   import { Main, SectionWrapper, Title, Button, Breadcrumbs, Tag, Card } from "$comp";
	import Image from "$comp/Common/Media/Image.svelte";
</script>

<Breadcrumbs/>
<Main cta>
   <SectionWrapper name="open-workshops">
      <Title type="h1" slot="title">Open Sessies</Title>

      <ul class="m-0 flex flex-col gap-8">
         <li>
            <Card direction="row">
               <!-- Image -->
               <Image 
                  src="http://via.placeholder.com/640x360" slot="image"
                  klass="w-full" height="h-80" />
               <!-- Prepend Inner -->
               <Tag slot="prepend-inner" small>Online Infosessie</Tag>
               <!-- Title -->
               <Title type="h2" smallest slot="title">Gratis Online Open Infosessies</Title>
               <!-- Content -->
               Een gratis, open infosessie over onze veelzijdige Lencioni 
               Teamcoaching Opleiding. Aarzel niet en schrijf je in!
               <!-- Append Inner -->
               <div class="flex flex-col gap-4" slot="append-inner">
                  <div class="flex flex-col gap-1">
                     <!-- {#each $pageResult as session}
                        <Tag outlined>
                           {formatDateFull(session['starts_on'])} | {formatTime(session['starts_on'])} - {formatTime(session['ends_on'])}
                        </Tag>
                     {/each} -->
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
            <Card direction="row-reverse">
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
               <Title type="h2" smallest slot="title">Hybride Lencioni Leertraject</Title>
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
            <Card direction="row">
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
               <Title type="h2" smallest slot="title">Lencioni DeepDive / <br/>Advanced Opleiding</Title>
               <!-- Content -->
               Een gratis, open infosessie over onze veelzijdige Lencioni 
               Teamcoaching Opleiding. Aarzel niet en schrijf je in!
               <!-- Append Inner -->
               <div class="flex flex-col gap-4" slot="append-inner">
                  <div class="flex flex-col gap-1">
                     <!-- {#each $secondPageResult as session}
                        <Tag outlined>
                           {formatDateFull(session['starts_on'])} | {formatTime(session['starts_on'])} - {formatTime(session['ends_on'])}
                        </Tag>
                     {/each} -->
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