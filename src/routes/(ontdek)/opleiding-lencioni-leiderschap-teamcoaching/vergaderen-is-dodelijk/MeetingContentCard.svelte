<script>
    import { P, List } from "$comp/core";
	import ContentCard from "../../ContentCard.svelte";
</script>

<P large>
   <slot/>
</P>
<div class="grid grid-cols-3 gap-4 xl:gap-8 mt-4">
   <ContentCard 
        icon="material-symbols:nest-clock-farsight-analog-outline-rounded"
        title="Tijdsduur"
        class="
            bg-gray-50/50 w-full flex justify-center 
            col-span-3 sm:col-span-1 lg:col-span-1">
       <b><slot name="timespan"/></b>
   </ContentCard>
   <ContentCard 
        icon="mingcute:target-line"
        title="Doel"
        class="
            bg-gray-50/50 w-full flex justify-center 
            col-span-3 sm:col-span-2 lg:col-span-1">
      <slot name="target"/>
   </ContentCard>
   <ContentCard 
        icon="material-symbols:key-outline-rounded"
        title="Sleutels tot Succes"
        class="
            bg-gray-50/50 w-full flex justify-center 
            col-span-3 sm:col-span-3 lg:col-span-1">
       <List>
           <slot name="key-1"/>
           <slot name="key-2"/>
           <slot name="key-3"/>
       </List>
   </ContentCard>
</div>