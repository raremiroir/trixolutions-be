<script>
   import { locale } from "$src/i18n/i18n-svelte";

   import PocketBase from "pocketbase";
   import { pageResult } from "$lib/stores";
	import Breadcrumbs from "$src/lib/components/Core/Breadcrumbs/Breadcrumbs.svelte";
	import Main from "$src/lib/components/Base/Wrapper/Main.svelte";
	import Title from "$src/lib/components/Common/Text/Title.svelte";
	import SectionWrapper from "$src/lib/components/Base/Wrapper/SectionWrapper.svelte";
	import Card from "$src/lib/components/Common/Card/Card.svelte";
	import Link from "$src/lib/components/Common/Link/Link.svelte";
	import P from "$src/lib/components/Common/Text/P.svelte";
	import Image from "$src/lib/components/Base/Media/Image.svelte";
   const pb = new PocketBase('http://127.0.0.1:8090')
   
   import { formatUrl } from '$lib/utils'
   
   
   async function postsList() {
      $pageResult =  await pb.collection('pages_blog_items')
                  .getFullList(200 /* batch size */, {
                     sort: '-initial_created',
                     expand: 'author, img'
                  });
      // console.log($pageResult);
   }
   postsList();
</script>

<Main cta>
   <Breadcrumbs/>
   <SectionWrapper name="blog">
      <Title slot="title" type='h1'>Trixolutions Blog</Title>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">

         {#await $pageResult}
         <div class="dui-toast dui-toast-top dui-toast-center">
            <div class="dui-alert dui-alert-info">
              <div>
                <span>Loading...</span>
              </div>
            </div>
          </div>
         {:then result}
            {#each result as blogPost}
               <Card link="./blog/{formatUrl(blogPost.title_nl)}" equalHeight titleSmaller titleType="h3">
                  <span slot="title">{blogPost.title_nl}</span>
                  
                  <div class="" slot="image">
                     <Image imgSrc="{blogPost['expand']['img']['name']}" height="h-40" />
                  </div>
      
                  <P klass="prose-ol:list-decimal prose-ul:list-disc prose-li:ml-6"> 
                     {#if blogPost.excerpt_nl.first !== undefined}
                        {blogPost.excerpt_nl.first} <br/> <br/>
                     {/if}
                     {#if blogPost.excerpt_nl.second !== undefined}
                        {blogPost.excerpt_nl.second} <br/> <br/>
                     {/if}
                     
                     
                     {#if blogPost.excerpt_nl.list !== undefined}
                        <ul>
                           {#each blogPost.excerpt_nl.list as listItem}
                              <li>{listItem}</li>
                           {/each}
                        </ul>
                     {/if}
                     {#if blogPost.excerpt_nl.list_2 !== undefined}
                        <br/>
                        <ol>
                           {#each blogPost.excerpt_nl.list_2 as listItem2}
                              <li>{listItem2}</li>
                           {/each}
                        </ol>
                     {/if}
                  </P>
                  <Link underlineOnHover
                     slot="append-inner" href="./blog/{formatUrl(blogPost.title_nl)}"
                     klass='my-2 font-bold'>
                     Meer Info
                  </Link>
               </Card>
            {/each}
            
         {/await}
      </div>

      
   </SectionWrapper>
</Main>