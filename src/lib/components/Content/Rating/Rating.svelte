<script lang="ts">
	import Icon from "@iconify/svelte";

   let klass = '';
   export { klass as class };
   export let rating = 3;
   export let size = 'w-8'

   rating = rating * 2;
   console.log(rating);

   let halfStar = false

   if (rating % 2 !== 0) {
      rating = rating - 1;
      halfStar = true  
   }

   const amtOfStars = rating / 2;
   
</script>

<div class="flex flex-row gap-1 {klass} text-warning">
   {#if amtOfStars > 0}
      {#each Array(amtOfStars) as star}
         <Icon icon="mdi:star" class="{size} h-auto" />
      {/each}
      {#if halfStar}
         <Icon icon="mdi:star-half" class="{size} h-auto" />
      {/if}
   {/if}
</div>