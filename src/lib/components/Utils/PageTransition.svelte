<script>
	import { fly, fade } from "svelte/transition";

   const duration = 250
   const delay = 50
</script>

<div 
   in:fade="{{ duration: duration, delay: delay }}"
   out:fade="{{ duration: duration }}" 
>
   <div 
      in:fly="{{ y: -50, duration: duration, delay: delay }}"
      out:fly="{{ y: -50, duration: duration }}" 
      class="">
      <slot/>
   </div>
</div>