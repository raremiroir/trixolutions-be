<!-- 
██████   █████  ████████ ██ ███    ██  ██████       ██████  █████  ██████  ██████  
██   ██ ██   ██    ██    ██ ████   ██ ██           ██      ██   ██ ██   ██ ██   ██ 
██████  ███████    ██    ██ ██ ██  ██ ██   ███     ██      ███████ ██████  ██   ██ 
██   ██ ██   ██    ██    ██ ██  ██ ██ ██    ██     ██      ██   ██ ██   ██ ██   ██ 
██   ██ ██   ██    ██    ██ ██   ████  ██████       ██████ ██   ██ ██   ██ ██████  
 -->

<!--
▄▄▄ ▄▄▄ 
 █  █▄
 █   ▀█
 ▀  ▀▀▀
-->
<script lang="ts">
   // Import Components
	import { Card, Rating, Text } from "$comp";
   // Import entities
   import { HVY_DBL_QUOTATION_CLOSE, HVY_DBL_QUOTATION_OPEN } from "$lib/constants/entities";

   // Define amount of stars
   export let rating:number = 3
   // Define size of stars
   export let size = 'w-7'
   // Define extra class
   let klass = ''
   export { klass as class }
</script>

<!--
▄  ▄ ▄▄▄ ▄▄   ▄▄ ▄
█▄▄█  █  █ █ █ █ █
█▀▀█  █  █ █ █ █ █
▀  ▀  ▀  ▀  ▀  ▀ ▀▀▀
-->
<Card class={klass}>
   <Text italic>
      <span class="mr-1 text-2xl text-primary-d1">{HVY_DBL_QUOTATION_OPEN}</span>
      <slot/>
      <span class="ml-1 text-2xl text-primary-d1">{HVY_DBL_QUOTATION_CLOSE}</span>
   </Text>
   <Rating {rating} {size} />
</Card>