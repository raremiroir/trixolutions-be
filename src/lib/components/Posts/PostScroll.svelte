<script lang="ts">
	import PostCard from "./PostCard.svelte";
	import PostGrid from "./PostGrid.svelte";

   export let pageData:any;

	import { Reveal } from "$comp";
	import { formatDateFull, formatUrl } from "$utils";
   
   export let blog = false;
</script>


<PostGrid>
   {#each pageData as blogPost}
      <Reveal>
         <PostCard
            height="h-128 xs:h-124 sm:h-88 md:h-132 lg:h-180 xl:h-160 2xl:h-160 3xl:h-180"
            authorImg={blog ? `team/${blogPost.author.img}.webp` : ''}
            author={blog ? `${blogPost.author.first_name} ${blogPost.author.last_name}` : ''} 
            date={blog ? `${formatDateFull(blogPost.created_at)}` : ''}
            imgSrc={`${blogPost.img.folder}/${blogPost.img.name}.${blogPost.img.type}`}
            slug={`${blog ? 'blog/' : ''}${formatUrl(blogPost.title)}`}
            title={blogPost.title}
            excerpt={blogPost.excerpt}
         />
      </Reveal>
   {/each}
</PostGrid>
