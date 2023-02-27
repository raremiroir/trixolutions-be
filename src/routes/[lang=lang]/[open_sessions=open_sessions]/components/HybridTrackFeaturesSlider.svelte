<script>

	import { NavSlider, FeatureSlide, ThumbnailSlide, FeaturesModalContent, Text } from "$comp";
   import { SplideTrack } from "@splidejs/svelte-splide";

   import LL from "$i18n/i18n-svelte";

   // Define features images
   const featureImages = [
      'lencioni/features/1-inschrijving-hybride-tool.png',
      'lencioni/features/2-integratie-deelnemers.png',
      'recensies/ctc-training-1-2.jpeg',
      'recensies/ctc-groep-be-sept-22.webp',
      'lencioni/features/5-kartonnen-lencioni-piramide.webp',
      'lencioni/features/6-team-assessment.png',
      'lencioni/features/7-personal-assessment.png',
      'lencioni/features/8-lencioni-werkboek.png',
      'lencioni/features/9-bijlages-na-tweedaagse.png',
      'lencioni/features/10-opvolgcoaching.webp',
      'lencioni/features/11-deepdives.png',
      'lencioni/features/12-vertrouwen.jpg',
      'lencioni/features/13-respectvolle-conflicten.png',
      'lencioni/features/14-team-betrokkenheid.png',
      'lencioni/features/15-aansprakelijkheid.png',
      'lencioni/features/16-resultaatgerichtheid.png',
      'lencioni/features/17-bruggen-andere-modellen.webp',
   ]

</script>
<NavSlider ariaLabel={$LL.sessions.level_1.features_title()}>
   {#each Object.entries($LL.sessions.level_1.features_extended) as [key, feature]}
      <FeatureSlide 
         title={feature.title.main()}
         modalId={Number(key)+11} 
         imgSrc="{featureImages[Number(key)]}" imgAlt="{feature.title.before()} {feature.title.main()}" 
         class="!h-fit">
      <span slot="subtitle">{feature.title.before()}</span>
      <span slot="title">{feature.title.main()}</span>
      </FeatureSlide>
   {/each}

   <SplideTrack class="z-2" slot="navigation">
      {#each Object.entries($LL.sessions.level_1.features_extended) as [key, feature]}
         <ThumbnailSlide title="{feature.title.before()} {feature.title.main()}" src="{featureImages[Number(key)]}" />
      {/each}
   </SplideTrack>
</NavSlider>

{#each Object.entries($LL.sessions.level_1.features_extended) as [key, feature]}
<FeaturesModalContent id={Number(key)+11} imgSrc="{featureImages[Number(key)]}" imgAlt="{feature.title.before()} {feature.title.main()}">
   <span slot="title">
      {#each Object.entries(feature.title) as [titleKey, title]}
            {title()}&nbsp;
      {/each}
   </span>
   <Text class="prose-li:list-disc prose-ul:ml-4">
      {@html feature.content()}
   </Text>
   <span slot="extra" class:hidden={!feature.extra}>
         {#if feature.extra}
            {feature.extra()}
         {/if}
   </span>
</FeaturesModalContent>
{/each}