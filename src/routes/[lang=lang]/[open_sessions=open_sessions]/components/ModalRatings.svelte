<script lang="ts">
   import { Modal, Button, RatingCard, Lightbox, H3 } from "$comp";
   import { titleCase } from "$utils";
   import LL from "$i18n/i18n-svelte";

   export let ratingData:any;
   export let ratingImages:any;
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
   <div class="flex flex-wrap gap-4 justify-center">
      {#each ratingImages as img}
         <Lightbox
            alt="{img.name}"
            src="{img.folder}/{img.name}.{img.type}"
            imgWrapClass="
               rounded-xl
               shadow-lg hover:shadow-black/30
               hover:-translate-y-0.5"
            imgClass="
               w-auto h-48"
            />
      {/each}
   </div>
</Modal>