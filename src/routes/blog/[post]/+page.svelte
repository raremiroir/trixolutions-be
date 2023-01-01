<script>
	import Markup from "$src/lib/components/Base/Markup.svelte";
	import Image from "$src/lib/components/Base/Media/Image.svelte";
   import Main from "$src/lib/components/Base/Wrapper/Main.svelte";
	import SectionWrapper from "$src/lib/components/Base/Wrapper/SectionWrapper.svelte";
	import List from "$src/lib/components/Common/List/List.svelte";
	import ListItem from "$src/lib/components/Common/List/ListItem.svelte";
	import P from "$src/lib/components/Common/Text/P.svelte";
	import Tag from "$src/lib/components/Common/Text/Tag.svelte";
	import Title from "$src/lib/components/Common/Text/Title.svelte";
	import Breadcrumbs from "$src/lib/components/Core/Breadcrumbs/Breadcrumbs.svelte";
	import Hero from "$src/lib/components/Hero/Hero.svelte";

   import { titleCase, formatDateMonthFull, formatTime, formatUrl, formatYear } from "$src/lib/utils";

   export let data;
   
   const blogPost = Object(data.post);
   console.log(blogPost);

   const url = formatUrl(blogPost.title);
</script>

<header>
   <Hero height="h-92" imgSrc="{blogPost.img}" imgAlt="{blogPost.title}">
      <div slot="title">
         <Title type="subheader" color="text-gray-200">Trixolutions Blog</Title>
         <Title type="h1" color="text-gray-100">{titleCase(blogPost.title)}</Title>
         <div class="flex flex-row justify-between w-full items-center">
            <Title type="subtitle" color="text-gray-100/50">
               {blogPost.author.first_name} {blogPost.author.last_name}
            </Title>
            <Tag outlined klass="float-right !text-gray-50/70 border-gray-50/70">
               {formatDateMonthFull(blogPost.created_at)} {formatYear(blogPost.created_at)} ({formatTime(blogPost.created_at)})
            </Tag>
         </div>
      </div>
   </Hero>
</header>

<Main cta partnership>
   <Breadcrumbs/>
      <SectionWrapper name="{url}">
            <Title type="h2" slot="title">{titleCase(blogPost.title)}</Title>
            <Markup content={blogPost.content} image="{blogPost.img}" imgAlt={blogPost.title}>
            </Markup>
      </SectionWrapper>
</Main>