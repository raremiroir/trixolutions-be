<script lang="ts">
    import { Main, Breadcrumbs, SectionWrapper, P, Title } from '$comp/core';
    import { Hero, TwicPic } from '$comp/common';
    import { Accordeon, AccordeonItem } from '$comp/content';
    
    import { titleCase, formatUrl } from '$utils';
    import { breakpoints } from '$src/lib/stores';
    
    
    //    console.log(learnPage);
    export let data;
    const pageData = data.post;

   const url = `${formatUrl(pageData.category.name.nl)}_${formatUrl(pageData.title.nl)}`;
   
   let innerWidth:number;
   let ratio = '7:5'
   $: if (innerWidth < $breakpoints.xs) { ratio = "2:1"; }  
      else if (innerWidth < $breakpoints.sm) { ratio = "7:3"; } 
      else if (innerWidth < $breakpoints.md) { ratio = "2:1"; } 
      else if (innerWidth < $breakpoints.lg) { ratio = "5:2"; } 
      else if (innerWidth < $breakpoints.xl) { ratio = "12:11"; } 
      else if (innerWidth < $breakpoints.xxl) { ratio = "8:6"; }
      else { ratio = "7:5"}


    let active:any = null;

    let content = pageData.content.nl;

    let title;
</script>

<svelte:window bind:innerWidth={innerWidth} />
<!-- <svelte:head>
    <title>{title}</title>
    <html lang={$locale} />
</svelte:head> -->

<header>
    <Hero 
        height="h-92" 
        imgSrc="{pageData.img.folder}/{pageData.img.name}.{pageData.img.type}" imgAlt="{pageData.title.nl}"
    >
       <div slot="title">
          <Title type="h1" color="text-gray-100">{titleCase(pageData.title.nl)}</Title>
       </div>
    </Hero>
 </header>

<Breadcrumbs/>
<Main partnership cta>
    <SectionWrapper name="{formatUrl(pageData.title.nl)}-intro">
        <div slot="title" class="flex flex-col gap-2">
            <Title type="h2" small>
                {content.title["1"].text[0]} - {pageData.title.nl}
            </Title>
            {#if content.title["1"].text[1]}
                <Title type="subheader">
                    {content.title["1"].text[1]}
                </Title>
            {/if}
        </div>
        <div class="
                flex flex-col lg:flex-row gap-4
                transition-all duration-300 ease-in-out ">
            <div class="
                    border-4 border-primary rounded-xl 
                    shadow-lg 
                    overflow-hidden h-fit
                    transition-all duration-300 ease-in-out 
                    { active == null 
                        ? 'w-full lg:w-5/12 ' 
                        : 'w-full lg:w-1/4' }">
                <TwicPic 
                    alt={pageData.title.nl}
                    src={`${pageData.img.folder}/${pageData.img.name}.${pageData.img.type}`}
                    mode="cover" position="top" 
                    ratio="{ratio}"
                    intrinsic="600x400"/>
            </div>
            
            {#if content.content[0].type == 'accordeon'}
                <Accordeon class="
                            { active == null 
                                ? 'w-full lg:w-7/12' 
                                : 'w-full lg:w-3/4' }" 
                    bind:active>
                    {#each content.content[0].items as item, i}
                        <AccordeonItem id={i + 1} 
                            title={`${item.title}`} titleSmallest>
                            {#each item.content as accordeonContent}
                                {#if accordeonContent.type === 'paragraph'}
                                    <P class="mb-4 last-of-type:mb-2">
                                        {#each accordeonContent.items as pItem}
                                            {pItem}<br/>
                                        {/each}
                                    </P>
                                {/if}
                            {/each}
                        </AccordeonItem>
                    {/each}
                </Accordeon>
            {/if}
        </div>
    </SectionWrapper>
</Main>