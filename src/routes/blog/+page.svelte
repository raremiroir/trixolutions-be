<script>
   import { locale } from "svelte-i18n";

	import Breadcrumbs from "$src/lib/components/Core/Breadcrumbs/Breadcrumbs.svelte";
	import Main from "$src/lib/components/Base/Wrapper/Main.svelte";
	import Title from "$src/lib/components/Common/Text/Title.svelte";
	import SectionWrapper from "$src/lib/components/Base/Wrapper/SectionWrapper.svelte";
	import Card from "$src/lib/components/Common/Card/Card.svelte";
	import Link from "$src/lib/components/Common/Link/Link.svelte";
	import P from "$src/lib/components/Common/Text/P.svelte";
	import Image from "$src/lib/components/Base/Media/Image.svelte";
   
   import { formatUrl } from '$lib/utils'
   import { pageResult } from "$lib/stores";
	import supabase from "$lib/db";

   const getData = async () => {
      const {data, error} = await supabase
         .from('blog_posts')
         .select('*');

      if (error) throw new Error(error.message);

      console.log(data);
      return data;
   }
</script>

<Main cta>
   <Breadcrumbs/>
   <SectionWrapper name="blog">
      <Title slot="title" type='h1'>Trixolutions Blog</Title>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">

         {#await getData()}
         <div class="dui-toast dui-toast-top dui-toast-center">
            <div class="dui-alert dui-alert-info">
              <div>
                <span>Loading...</span>
              </div>
            </div>
          </div>
         {:then data}
            {#each data as blogPost}
               <Card link="./blog/{formatUrl(blogPost.title)}" equalHeight titleSmaller titleType="h3">
                  <span slot="title">{blogPost.title}</span>
                  
                  <div class="" slot="image">
                     <Image imgSrc="{blogPost.img}" height="h-40" />
                  </div>
      
                  <P klass="prose-ol:list-decimal prose-ul:list-disc prose-li:ml-6"> 
                     {#if blogPost.excerpt.first !== undefined}
                        {blogPost.excerpt.first} <br/> <br/>
                     {/if}
                     {#if blogPost.excerpt.second !== undefined}
                        {blogPost.excerpt.second} <br/> <br/>
                     {/if}
                     
                     
                     {#if blogPost.excerpt.list !== undefined}
                        <ul>
                           {#each blogPost.excerpt.list as listItem}
                              <li>{listItem}</li>
                           {/each}
                        </ul>
                     {/if}
                     {#if blogPost.excerpt.list_2 !== undefined}
                        <br/>
                        <ol>
                           {#each blogPost.excerpt.list_2 as listItem2}
                              <li>{listItem2}</li>
                           {/each}
                        </ol>
                     {/if}
                  </P>
                  <Link underlineOnHover
                     slot="append-inner" href="./blog/{formatUrl(blogPost.title)}"
                     klass='my-2 font-bold'>
                     Meer Info
                  </Link>
               </Card>
            {/each}
            
         {/await}
      </div>

      
   </SectionWrapper>
</Main>