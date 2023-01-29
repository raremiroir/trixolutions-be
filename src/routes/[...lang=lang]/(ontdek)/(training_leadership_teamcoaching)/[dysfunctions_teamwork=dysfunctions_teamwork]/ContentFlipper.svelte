<script lang="ts">
    import { Flipper } from "$comp";
	import ContentCard from "../../ContentCard.svelte";

   let klass = '';
   export { klass as class };

   export let id:string;
   export let title:string;

</script>
<Flipper class="{klass}">
   <ContentCard altBg
       slot="front" {id} {title} 
       class="border-4 border-transparent cursor-pointer">
       <slot name="front"/>
   </ContentCard>
   <ContentCard altBg
       slot="back" {id} {title} 
       hoverFx="none"
       class="border-4 border-primary/70 cursor-pointer">
       <slot name="back"/>
   </ContentCard>
</Flipper>