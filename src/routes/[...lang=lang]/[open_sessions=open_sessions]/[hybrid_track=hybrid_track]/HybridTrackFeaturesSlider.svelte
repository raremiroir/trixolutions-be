<script>

	import { NavSlider, FeatureSlide, ThumbnailSlide, FeaturesModalContent, Text } from "$comp";
   import { SplideTrack } from "@splidejs/svelte-splide";

   import LL from "$i18n/i18n-svelte";

   // Define features images
   const featureImages = [
      'lencioni-assets/features/1-inschrijving-hybride-tool.png',
      'lencioni-assets/features/2-integratie-deelnemers.png',
      'ratings/ctc-training-1-2.jpeg',
      'ratings/ctc-groep-be-sept-22.webp',
      'lencioni-assets/features/5-kartonnen-lencioni-piramide.webp',
      'lencioni-assets/features/6-team-assessment.png',
      'lencioni-assets/features/7-personal-assessment.png',
      'lencioni-assets/features/8-lencioni-werkboek.png',
      'lencioni-assets/features/9-bijlages-na-tweedaagse.png',
      'lencioni-assets/features/10-opvolgcoaching.webp',
      'lencioni-assets/features/11-deepdives.png',
      'lencioni-assets/features/12-vertrouwen.jpg',
      'lencioni-assets/features/13-respectvolle-conflicten.png',
      'lencioni-assets/features/14-team-betrokkenheid.png',
      'lencioni-assets/features/15-aansprakelijkheid.png',
      'lencioni-assets/features/16-resultaatgerichtheid.png',
      'lencioni-assets/features/17-bruggen-andere-modellen.webp',
   ]

</script>
<NavSlider ariaLabel={$LL.sessions.level_1.features_title()}>
   {#each Object.entries($LL.sessions.level_1.features_extended) as [key, feature]}
      <FeatureSlide 
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
   <Text>
      {#each Object.entries(feature.content) as [contentKey, content]}
            {@html content()}
      {/each}
   </Text>
   <span slot="extra" class:hidden={!feature.extra}>
         {#if feature.extra}
            {feature.extra()}
         {/if}
   </span>
</FeaturesModalContent>
{/each}