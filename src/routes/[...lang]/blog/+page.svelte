<script>

   
   
   import supabase from "$lib/db";
   import LL, { locale } from "$i18n/i18n-svelte";
   
	import { firstLetterCase } from "$utils";
   import { Main, SectionWrapper, Breadcrumbs, Title, Loading, Alert , PostScroll } from "$comp";
   
   const getData = async () => {
      const {data, error} = await supabase
         .from('blog_posts')
         .select(`
            *, 
            img ( name, folder, type ),
            author ( first_name, last_name, img )`)
         .order('created_at', { ascending: false });

      if (error) throw new Error(error.message);

      return data;
   }
</script>

<Main cta>
   <Breadcrumbs/>
   <SectionWrapper name="blog">
      <Title slot="title" type='h1'>Trixolutions Blog</Title>
      {#await getData()}
         <Loading/>
      {:then data} 
         <PostScroll pageData={data} blog />
      {:catch error}
         <div class="flex flex-col gap-0">
            <Alert preset="error">
               {firstLetterCase($LL.base.db.error_loading())}
            </Alert>
            <Alert preset="error-outlined">
               {error}
            </Alert>
         </div>
      {/await}
      
   </SectionWrapper>
</Main>