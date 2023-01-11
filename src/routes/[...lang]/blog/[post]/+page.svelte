<script lang="ts">

   
   import { titleCase, formatDateMonthFull, formatTime, formatUrl } from "$utils";
   import { Main, SectionWrapper, Title, Tag, Breadcrumbs, Markup, Hero } from "$comp";


   export let data;
   
   const blogPost = Object(data.post);
   // console.log(blogPost);

   const url = formatUrl(blogPost.title);
</script>

<header>
   <Hero imgSrc="{blogPost.img}" imgAlt="{blogPost.title}">
      <div slot="title">
         <Title type="subheader" color="text-gray-200">Trixolutions Blog</Title>
         <Title type="h1" color="text-gray-100">{titleCase(blogPost.title)}</Title>
         <div class="flex flex-row justify-between w-full items-center">
            <Title type="subtitle" color="text-gray-100/50">
               {blogPost.author.first_name} {blogPost.author.last_name}
            </Title>
            <Tag outlined class="float-right text-gray-50/70 border-gray-50/70">
               {formatDateMonthFull(blogPost.created_at)} ({formatTime(blogPost.created_at)})
            </Tag>
         </div>
      </div>
   </Hero>
</header>

<Main cta partnership>
   <Breadcrumbs/>
      <SectionWrapper name="{url}">
            <Title type="h2" slot="title">{titleCase(blogPost.title)}</Title>
            <Markup content={blogPost.content} >
            </Markup>
      </SectionWrapper>
</Main>