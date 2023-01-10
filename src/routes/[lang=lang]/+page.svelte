<script lang="ts">
   
   
   // Import Components
   import { 
         Button, Main, SectionWrapper, Title, P, 
         Footer, Navbar, Loading, Reveal
      } from "$comp/core";
   import { Hero, Alert, HeroSlide } from "$comp/common";
   import { PostCard, PostGrid } from "$comp/posts";
   
   // Import globals
   import { firstLetterCase, formatUrl } from "$utils/formatText";
   

   // Import i18n
   import LL from '$i18n/i18n-svelte'
	// console.info($LL.log({ fileName: '+page.svelte' }))
   

   // Import supabase
   import supabase from "$lib/db";

   // Get category data from supabase
   const getCategoryData = async () => {
      const {data, error} = await supabase
         .from('home_pages_categories')
         .select('*')
         .order('id', { ascending: true });

      if (error) throw new Error(error.message);

      const categoryData = data;
      return categoryData;
   }
   // Get pages data from supabase
   const getPagesData = async () => {
      const {data, error} = await supabase
         .from('home_pages')
         .select(`*, category (name), hero_img (name, folder, type)`)
         .order('order', { ascending: true });
               
      if (error) throw new Error(error.message);

      const pagesData = data;
      return pagesData;
   }
</script>

<header>
   <Navbar/>

   <Hero slider>
      <HeroSlide large
         imgAlt="Trixolutions Lencioni - De Kracht van Gezonde Teams"
         imgSrc='home/kracht-gezonde-teams.webp'
         >
         <Title slot="title" type="h1" color="text-gray-100">De Kracht van Gezonde Teams</Title>
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
      </HeroSlide>

      <HeroSlide large
         imgAlt="Trixolutions Lencioni - De Beslissende Voorsprong"
         imgSrc='home/beslissende-voorsprong-2.webp'
         >
         <Title type="fake-h1" slot="title" small color="text-gray-100">Neem als Organisatie of Team de ❛Beslissende Voorsprong❜ van Patrick Lencioni!</Title>
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
      </HeroSlide>

      <HeroSlide large
         imgAlt="Trixolutions Lencioni - The 6 Types of Working Genius"
         imgSrc='home/working-genius.webp'
         >
         <Title type="fake-h1" slot="title" color="text-gray-100">The 6 Types of Working Genius</Title>
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
      </HeroSlide>
      
   </Hero>
</header>

<Main noMargin cta>
   {#await getCategoryData()}
      <Loading/>
   {:then categoryData} 
      {#each categoryData as section}
      <SectionWrapper name={formatUrl(section.name.nl)}>
         <div slot="title">
            <Reveal>
               <Title type="h2">
                  {section.name.nl}
               </Title>
            </Reveal>
         </div>
            {#await getPagesData()}
               <Loading/>
            {:then pagesData} 
               <PostGrid>
                  {#each pagesData as item}
                     {#if item.category.name.nl === section.name.nl}
                        <Reveal>
                           {@const slug = item.slug ? item.slug : `${formatUrl(section.slug.nl)}/${formatUrl(item.title.nl)}`}
                           <PostCard
                              title={item.title.nl}
                              imgSrc={`${item.hero_img.folder}/${item.hero_img.name}.${item.hero_img.type}`}
                              slug={slug}
                              excerpt={item.excerpt.nl}
                           />
                        </Reveal>
                     {/if}
                  {/each}
               </PostGrid>
            {:catch error}
               <div class="flex flex-col gap-0">
                  <Alert preset="error">
                     {firstLetterCase($LL.base.db.error_loading())}:
                  </Alert>
                  <Alert preset="error-outlined">
                     {error}
                  </Alert>
               </div>
            {/await}

         </SectionWrapper>
      {/each}
   {:catch error}
      <div class="dui-alert dui-alert-error">
         <div>
            <span>{firstLetterCase($LL.base.db.error_loading())}:</span>
            <pre>{error}</pre>
         </div>
      </div>
   {/await}
</Main>

<Footer/>