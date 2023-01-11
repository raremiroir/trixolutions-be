<script lang="ts">
    import { Flipper } from "$comp";
	import ContentCard from "../../ContentCard.svelte";

   let klass = '';
   export { klass as class };

   export let id:string;
   export let title:string;

   export let height = "min-h-[300px]"
</script>
<Flipper class="{klass}" {height}>
   <ContentCard 
       slot="front" {id} {title} 
       class="border-4 border-gray-50/0 !bg-gray-50/50 cursor-pointer">
       <slot name="front"/>
   </ContentCard>
   <ContentCard 
       slot="back" {id} {title} 
       class="border-4 border-primary/70 cursor-pointer">
       <slot name="back"/>
   </ContentCard>
</Flipper>