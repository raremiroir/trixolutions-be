<script lang="ts">
   import { Modal, Button, RatingCard, Image, H3 } from "$comp";
   import { titleCase } from "$utils";
   import LL from "$i18n/i18n-svelte";

   export let ratingData:any;
   export let ratingImages:any = 8;
</script>

<Modal icon="mdi:star">
   <Button ariaLabel={titleCase($LL.sessions.ratings())} slot="trigger" block outlined bold size="lg" icon="mdi:star">
      {titleCase($LL.sessions.ratings())}
   </Button>
   <H3 slot="title" small>{titleCase($LL.sessions.ratings())}</H3>
   <div class="columns-1 sm:columns-2 lg:columns-3 2xl:columns-4">
      {#each ratingData as rating}
         {#if rating.session_rated === 'level_1_full'}
            <RatingCard 
               rating={rating.rating}
               class="mb-4">
               {rating.content.nl}
            </RatingCard>
         {/if}
      {/each}
   </div>
   <hr class="border-2 border-primary/30 my-4"/>
   <div class="columns-2 md:columns-3">
      {#each Array(ratingImages) as img}
         <div class="
               overflow-hidden group mb-[5%] rounded-xl 
               transition-all duration-300 ease-out
               shadow-lg shadow-black/30 
               hover:shadow-black/50
               h-auto w-full
               hover:-translate-y-0.5
               cursor-zoom-in
               ">
            <Image 
               alt="No alt"
               src="" 
               mode="cover" position="top" 
               ratio="3:2"
               intrinsic="600x400"/>
         </div>
      {/each}
   </div>
</Modal>