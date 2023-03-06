<script>
   import LL, { locale } from "$i18n/i18n-svelte";
	import { Hero, HeroSlide, Text, Button, H1, Subheader } from "$comp";

   import HeroKrGezTms from '$lib/assets/images/hero/kracht-gezonde-teams.webp';
   import HeroBeslVrsp from '$lib/assets/images/hero/beslissende-voorsprong-2.webp';
   import HeroWorkGeni from '$lib/assets/images/hero/working-genius.webp';

   $: heroSlides = [
      {
         title: $LL.pages.home.hero.slides[0].title(),
         subheader: $LL.pages.home.hero.slides[0].subheader(),
         content: $LL.pages.home.hero.slides[0].content(),
         extra: $LL.pages.home.hero.slides[0].extra(),
         src: HeroKrGezTms,
         link: $LL.nav.open_sessions.items.hybrid_traject.slug(),
         extra_btn: {
            title: $LL.base.btn.about_trixo(),
            link: $LL.nav.about.slug(),
         }
      },
      {
         title: $LL.pages.home.hero.slides[1].title(), title_type: 'fake',
         subheader: $LL.pages.home.hero.slides[1].subheader(),
         content: $LL.pages.home.hero.slides[1].content(),
         src: HeroBeslVrsp,
         link: $LL.nav.explore.training_leadership_teamcoaching.items.ideal_teamplayer.slug(),
      },
      {
         title: $LL.pages.home.hero.slides[2].title(), title_type: 'fake',
         subheader: $LL.pages.home.hero.slides[2].subheader(),
         content: $LL.pages.home.hero.slides[2].content(),
         src: HeroWorkGeni,
         link: $LL.nav.explore.training_leadership_teamcoaching.items.working_genius.slug(),
      },
   ];
</script>

<Hero slider>
   {#each heroSlides as slide, key}
      <HeroSlide
         imgAlt="Trixolutions Lencioni - {slide.title}"
         imgSrc='{slide.src}'
         imgSrcset=""
         >
         <H1 
            slot="title" 
            id="landing"
            fake={key !== 0} 
            small={key === 2}
            smaller={key === 1}
            color="text-gray-100">
            {slide.title}
         </H1>
         <div class="flex flex-col gap-2">
            <Subheader color="text-gray-50">
               {slide.subheader}
            </Subheader>
            <Text semibold color="text-gray-200">
               {@html slide.content}
            </Text>
            {#if slide.extra}
               <Text bold color="text-gray-50">
                  {@html slide.extra}
               </Text>
            {/if}
         </div>
         <div class="flex flex-row gap-4 items-center lg:items-start mx-auto lg:mx-0">
            <Button 
               ariaLabel={$LL.base.btn.more_info()} outlined
               size="xxl" color="secondary"
               href="/{$locale}/{slide.link}">
               {$LL.base.btn.more_info()}
            </Button>
            {#if slide.extra_btn}
               <Button 
                  ariaLabel={slide.extra_btn.title} 
                  size="xxl" color="primary"
                  href="/{$locale}/{slide.extra_btn.link}">
                  {slide.extra_btn.title}
               </Button>
            {/if}
         </div>
      </HeroSlide>
   {/each}
</Hero>