<script>
   import { locale } from "svelte-i18n";

   import { Main, SectionWrapper, Breadcrumbs, Title } from "$src/lib/components/core";
   import { PostScroll } from "$comp/posts";

	import supabase from "$lib/db";

   
   const getData = async () => {
      const {data, error} = await supabase
         .from('blog_posts')
         .select(`
            *,
            img (
               name,
               folder,
               type
            )
         `);

      if (error) throw new Error(error.message);

      console.log(data);
      return data;
   }
</script>

<Main cta>
   <Breadcrumbs/>
   <SectionWrapper name="blog">
      <Title slot="title" type='h1'>Trixolutions Blog</Title>

      {#await getData()}
         loading...
      {:then data} 
         <PostScroll pageData={data} />
      {:catch error}
         Error
      {/await}
      
   </SectionWrapper>
</Main>