<script>
   import { locale } from "svelte-i18n";

   import { Main, SectionWrapper, Breadcrumbs, Title } from "$src/lib/components/core";
   import { Alert } from "$comp/common";
   import { PostScroll } from "$comp/posts";

	import supabase from "$lib/db";

   import { _ } from "svelte-i18n";
	import { firstLetterCase } from "$/utils";

   
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
         <Alert preset="primary">
            {firstLetterCase($_('base.db.loading'))}
         </Alert>
      {:then data} 
         <PostScroll pageData={data} />
      {:catch error}
         <div class="flex flex-col gap-0">
            <Alert preset="error">
               {firstLetterCase($_('base.db.error_loading'))}
            </Alert>
            <Alert preset="error-outlined">
               {error}
            </Alert>
         </div>
      {/await}
      
   </SectionWrapper>
</Main>