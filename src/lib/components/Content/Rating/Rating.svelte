<!--
██████   █████  ████████ ██ ███    ██  ██████  
██   ██ ██   ██    ██    ██ ████   ██ ██       
██████  ███████    ██    ██ ██ ██  ██ ██   ███ 
██   ██ ██   ██    ██    ██ ██  ██ ██ ██    ██ 
██   ██ ██   ██    ██    ██ ██   ████  ██████  
-->

<!--
▄▄▄ ▄▄▄ 
 █  █▄
 █   ▀█
 ▀  ▀▀▀
-->
<script lang="ts">
	import Icon from "@iconify/svelte";

   let klass = '';
   export { klass as class };
   export let rating = 4;
   export let size = 'w-8'

   // Rating is 0-5, but with halves included

   // Set rating to 0-10 to get rid of halves
   rating = rating * 2;
   // console.log(rating);

   // If rating is smaller then 10, it's correct
   rating = rating <= 10 ? rating : 10;

   // Set a halfstar bool
   let halfStar = false

   // If rating is an odd number, make it even and set halfStar bool to true 
   if (rating % 2 !== 0) {
      rating = rating - 1;
      halfStar = true  
   }
   // divide rating by 2 again to get amount of stars
   const amtOfStars = rating / 2;
   // Get empty stars
   let restStars = 5 - amtOfStars;
   // If there's a half star, remove another star from empty stars.
   if (halfStar) restStars--;
   
</script>

<!--
▄  ▄ ▄▄▄ ▄▄   ▄▄ ▄
█▄▄█  █  █ █ █ █ █
█▀▀█  █  █ █ █ █ █
▀  ▀  ▀  ▀  ▀  ▀ ▀▀▀
-->
<div class="flex flex-row gap-1 {klass} text-warning">
   {#if amtOfStars > 0}
      {#each Array(amtOfStars) as star}
         <Icon icon="mdi:star" class="{size} h-auto" />
      {/each}
      {#if halfStar}
         <Icon icon="mdi:star-half-full" class="{size} h-auto" />
      {/if}
      {#if restStars > 0}
         {#each Array(restStars) as star}
            <Icon icon="mdi:star-outline" class="{size} h-auto" />
         {/each}
      {/if}
   {/if}
</div>