<script>

	import { fade } from "svelte/transition";

</script>
<span 
  class="text-sm text-error italic font-body"
  transition:fade={{duration:200}}  >
  <slot />
</span>

