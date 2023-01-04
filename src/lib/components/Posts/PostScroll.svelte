<script lang="ts">
	import PostCard from "./PostCard.svelte";
	import PostGrid from "./PostGrid.svelte";

   import { formatUrl } from "$utils/formatText";
   export let pageData:any;
      
</script>


<PostGrid>
   {#each pageData as blogPost}
      <PostCard
         imgSrc={`${blogPost.img.folder}/${blogPost.img.name}.${blogPost.img.type}`}
         slug={`./blog/${formatUrl(blogPost.title)}`}
         title={blogPost.title}
         excerpt={blogPost.excerpt}
      />
   {/each}
</PostGrid>
