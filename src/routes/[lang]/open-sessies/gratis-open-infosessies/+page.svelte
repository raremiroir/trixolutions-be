<script>
	import Image from "$src/lib/components/Base/Media/Image.svelte";
	import Main from "$src/lib/components/Base/Wrapper/Main.svelte";
import SectionWrapper from "$src/lib/components/Base/Wrapper/SectionWrapper.svelte";
	import Breadcrumbs from "$src/lib/components/Common/Breadcrumbs/Breadcrumbs.svelte";
	import Button from "$src/lib/components/Common/Button/Button.svelte";
	import Card from "$src/lib/components/Common/Card/Card.svelte";
	import P from "$src/lib/components/Common/Text/P.svelte";
	import Tag from "$src/lib/components/Common/Text/Tag.svelte";
	import Title from "$src/lib/components/Common/Text/Title.svelte";

</script>

<Main>
   <Breadcrumbs/>
   
   <SectionWrapper name="open-workshops">
      <Title type="h1" slot="title">Open Sessies</Title>

      <Card direction="row" titleType="h2" titleSmallest>
         <!-- Image -->
         <Image 
            src="http://via.placeholder.com/640x360" slot="image"
            klass="max-w-full" height="max-h-full" />
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

      <Card direction="row-reverse" titleType="h2" titleSmallest>
         <!-- Image -->
         <Image 
            src="http://via.placeholder.com/640x360" slot="image"
            klass="max-w-full" height="max-h-full" />
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

      <Card direction="row" titleType="h2" titleSmallest>
         <!-- Image -->
         <Image 
            src="http://via.placeholder.com/640x360" slot="image"
            klass="max-w-full" height="max-h-full" />
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

   </SectionWrapper>
</Main>