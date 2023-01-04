<script lang="ts">
   import { setContext } from "svelte";
   import { writable } from "svelte/store";
   export let active:any = null;

   const activeStore=writable(active);
   $: activeStore.set(active);
   $: active = $activeStore;


   setContext("context", activeStore);

   let klass = '';
   export { klass as class };
</script>

<div class="
      flex flex-col gap-4
      transition-all duration-300 ease-in-out 
      {klass}">
   <slot/>
</div>