<script lang="ts">
    import type { PageData } from './$types';
    import { locale } from '$src/i18n/i18n-svelte';
	import Hero from '$src/lib/components/Hero/Hero.svelte';
	import SectionWrapper from '$comp/Base/Wrapper/SectionWrapper.svelte';
	import Title from '$src/lib/components/Common/Text/Title.svelte';
	import Image from '$src/lib/components/Base/Media/Image.svelte';
	import Accordeon from '$src/lib/components/Other/Accordeon/Accordeon.svelte';
	import Main from '$src/lib/components/Base/Wrapper/Main.svelte';
	import Breadcrumbs from '$src/lib/components/Core/Breadcrumbs/Breadcrumbs.svelte';
    
    
    let title = 'De Beslissende Voorsprong'; 
    
    const accordeonItems = [
        {
            title: '1. Een samenhangend leiderschapsteam opbouwen',
            content: ''
        },
        {
            title: '2. Helderheid scheppen',
            content: ''
        },
        {
            title: '3. De helderheid versterken',
            content: ''
        },
        {
            title: '4. Helderheid over communiceren',
            content: ''
        }
    ]

    export let data: PageData;

</script>

<!-- <svelte:head>
    <title>{title}</title>
    <html lang={$locale} />
</svelte:head> -->

<header>
    <Hero height="h-92">
        <span slot="title">{title}</span>
    </Hero>
</header>

<Breadcrumbs/>
<Main partnership cta>
    <SectionWrapper name="model">
        <div class="" slot="title">
            <Title type="h2" small>Het Model - {title}</Title>
            <Title type="subheader">by Patrick Lencioni</Title>
        </div>
        <div class="grid grid-cols-5">
            <div class="col-span-2">
                <Image />
            </div>
            <div class="grid grid-cols-1 gap-4 col-span-3">
                {#each accordeonItems as item}
                    <Accordeon titleType="h3" titleSmaller title="{item.title}">
                        {item.content}
                    </Accordeon>
                {/each}
            </div>
        </div>
    </SectionWrapper>
</Main>