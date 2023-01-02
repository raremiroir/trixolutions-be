<script>
   // Import Components
   import Button           from "$comp/Core/Button/Button.svelte";
	import Main             from "$comp/Base/Wrapper/Main.svelte";
	import SectionWrapper   from "$comp/Base/Wrapper/SectionWrapper.svelte";
	import Card             from "$comp/Common/Card/Card.svelte";
	import Link             from "$comp/Common/Link/Link.svelte";
	import Title            from "$comp/Common/Text/Title.svelte";
	import P                from "$comp/Common/Text/P.svelte";
	import Hero             from "$comp/Hero/Hero.svelte";
	import Slide            from "$comp/Other/Slider/Slide.svelte";
   
	import Navbar from "$src/lib/components/Core/Navbar/Navbar.svelte";
	import Footer from "$src/lib/components/Core/Footer/Footer.svelte";
   
   // Import globals
   import { pageResult, secondPageResult } from "$lib/stores";
   import { formatUrl } from "$lib/utils";
	import { page } from "$app/stores";

   // Import i18n
   import { _ } from 'svelte-i18n';

   // Import supabase
   import supabase from "$lib/db";
	import Image from "$src/lib/components/Base/Media/Image.svelte";


   // Get category data from supabase
   const getCategoryData = async () => {
      const {data, error} = await supabase
         .from('home_pages_categories')
         .select('*');

      if (error) throw new Error(error.message);
      return data;
   }
   // Get pages data from supabase
   const getPagesData = async () => {
      const {data, error} = await supabase
         .from('home_pages')
         .select(`
            *,
            category (
               name
            )
            `);

      if (error) throw new Error(error.message);
      return data;
   }

   let heroHeight="h-160"

   // export let imageData;

	// onMount(() => {
	// 	if (browser) {
	// 		document.lazyloadInstance.update();
	// 	}
	// });

</script>

<header>
   <Navbar/>

   <Hero slider>
      <Slide hero 
         imgAlt="Trixolutions Lencioni - De Kracht van Gezonde Teams" 
         height="{heroHeight}"
         imgSrc='kracht-gezonde-teams'>
         <span slot="title">De Kracht van Gezonde Teams</span>
         <div class="flex flex-col gap-2">
            <Title type='subheader' color="text-gray-50">
              Opleiding in Teamcoaching
            </Title>
            <P thickness="font-semibold" color="text-gray-200" large>
               De kracht van een gezond team zit voornamelijk in de vaardigheid 
               van teamleden om vertrouwen op te bouwen, met elkaar respectvolle 
               conflicten te kunnen hebben, betrokkenheid bij het team te voelen, 
               elkaar aansprakelijk te durven stellen en resultaatgericht te kunnen werken.
            </P>
            <P thickness="font-bold" color="text-gray-50" large>
               Nieuwe data!! In samenwerking met de Table Group van Lencioni bundelen 
               we al onze Lencioni-expertise rond het succes model “De 5 frustraties 
               van teamwork”, in een tweedaagse Masterclass Coach-the-Coach opleiding.<br/> 
               Zie hier voor de data!
            </P>
         </div>
         <div class="flex flex-row gap-4">
            <Button size="lg" color="transparent" outlined>Meer Info</Button>
            <Button size="lg" color="primary">Over Trixolutions</Button>
         </div>
      </Slide>

      <Slide hero 
         titleType='fake-h1' titleSmall imgPos="object-top" height={heroHeight}
         imgAlt="Trixolutions Lencioni - De Beslissende Voorsprong"
         imgSrc='beslissende-voorsprong-2'>
         <span slot="title">Neem als Organisatie of Team de ❛Beslissende Voorsprong❜ van Patrick Lencioni!</span>
         <div class="flex flex-col gap-2">
            <Title type='subheader' color="text-gray-50">
              Opleiding in Teamcoaching
            </Title>
            <P thickness="font-semibold" color="text-gray-200" large>
               ❛De grootste voorsprong en competitief voordeel die een bedrijf kan nemen,
               is het creëren en hebben van een gezonde organisatie- en teamcultuur.❜<br/>
               ~ Patrick Lencioni
            </P>
         </div>
         <div class="flex flex-row gap-4">
            <Button size="lg" color="transparent" outlined>Meer Info</Button>
         </div>
      </Slide>

      <Slide hero 
         titleType='fake-h1' imgPos="object-top" height={heroHeight}
         imgAlt="Trixolutions Lencioni - The 6 Types of Working Genius"
         imgSrc='working-genius'>
         <span slot="title">The 6 Types of Working Genius</span>
         <div class="flex flex-col gap-2">
            <Title type='subheader' color="text-gray-50">
              Het Laatste Succes Assessment van Patrick Lencioni!
            </Title>
            <P thickness="font-semibold" color="text-gray-200" large>
               ❛Als je succesvol, tevreden en voldaan wil zijn als persoon, 
               teamlid of teamleader, moet je jouw energiebronnen en talenten
               aanspreken. Wat natuurlijk niet lukt als je die niet kent.❜
            </P>
         </div>
         <div class="flex flex-row gap-4">
            <Button size="lg" color="transparent" outlined>Meer Info</Button>
         </div>
      </Slide>
      
   </Hero>
</header>

<Main noMargin cta>
   <!-- <img src="{Working_Genius}" alt=""> -->

   {#await getCategoryData()}
      <div class="dui-alert dui-alert-info">
         <div>
            <span>Posts laden...</span>
         </div>
      </div>
   {:then data} 
      {#each data as section}
         <SectionWrapper name={formatUrl(section.name.nl)}>
            <Title slot="title" type="h2">{section.name.nl}</Title>
            {#await getPagesData()}
            <div class="dui-alert dui-alert-info">
               <div>
                  <span>Posts laden...</span>
               </div>
            </div>
            {:then data} 
               <div class="
                     grid 
                     grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                     gap-4 md:gap-6 lg:gap-8">
                  {#each data as item}
                     {#if item.category.name.nl === section.name.nl}
                        <Card 
                           link="/" equalHeight 
                           titleSmaller titleType="h3" >
                           <span slot="title">{item.title.nl}</span>
   

                           <div slot="image">
                              <Image imgSrc={item.img} height="h-52" imgPos="object-center"/>
                           </div>
   
                           <P klass="prose-ol:list-decimal prose-ul:list-disc prose-li:ml-6"> 
                              {#if item.excerpt.nl.first !== undefined}
                                 {item.excerpt.nl.first} <br/> <br/>
                              {/if}
                              {#if item.excerpt.nl.second !== undefined}
                                 {item.excerpt.nl.second} <br/> <br/>
                              {/if}
                              
                              
                              <ul>
                                 {#each item.excerpt.nl.list as listItem}
                                    <li>{listItem}</li>
                                 {/each}
                              </ul>
   
                              {#if item.excerpt.nl.list_2 !== undefined}
                              <br/>
                              <ol>
                                 {#each item.excerpt.nl.list_2 as listItem2}
                                    <li>{listItem2}</li>
                                 {/each}
                              </ol>
                              {/if}
                           </P>
                           <Link underlineOnHover ariaLabel="More Info"
                              slot="append-inner" href="/"
                              klass='my-2 font-bold'>
                              Meer Info
                           </Link>
                        </Card>
                     {/if}
                  {/each}
               </div>
            {:catch error}
               <div class="dui-alert dui-alert-error">
                  <div>
                     <span>Er is iets fout gegaan bij het laden van de data:</span>
                     <pre>{error}</pre>
                  </div>
               </div>
            {/await}

         </SectionWrapper>
      {/each}
   {:catch error}
      <div class="dui-alert dui-alert-error">
         <div>
            <span>Er is iets fout gegaan bij het laden van de data:</span>
            <pre>{error}</pre>
         </div>
      </div>
   {/await}
</Main>

<Footer/>