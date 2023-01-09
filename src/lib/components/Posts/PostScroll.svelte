<script lang="ts">
	import PostCard from "./PostCard.svelte";
	import PostGrid from "./PostGrid.svelte";

   import { formatUrl } from "$utils/formatText";
   export let pageData:any;

   
      export let blog = false;
</script>


<PostGrid>
   {#each pageData as blogPost}
      <PostCard
         authorImg={blog ? `team/${blogPost.author.img}.webp` : ''}
         author={blog ? `${blogPost.author.first_name} ${blogPost.author.last_name}` : ''} 
         date={blog ? blogPost.created_at : ''}
         imgSrc={`${blogPost.img.folder}/${blogPost.img.name}.${blogPost.img.type}`}
         slug={`./blog/${formatUrl(blogPost.title)}`}
         title={blogPost.title}
         excerpt={blogPost.excerpt}
      />
   {/each}
</PostGrid>
