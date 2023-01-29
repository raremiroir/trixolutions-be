<script lang="ts">
   import { H3, Text, CardBase } from "$comp";
	import Icon from "@iconify/svelte";

   export let id = '';
   export let title:string;

   export let klass = '';
   export { klass as class };

   export let icon = '';
   export let iconClass = 'h-8 w-auto pb-1';

   export let hoverFx = 'minimal'
   export let altBg = false

   export let height = 'fit'
</script>

<CardBase 
   ariaLabel={title} {title} {hoverFx} {altBg}
   class={klass} {height} width="full"
   img='' compactResponsive>
   <H3 slot="title" smallest 
       class="text-center w-full border-b-2 border-primary/50">
       {#if id}<span class="text-4xl">{id}</span><br/>{/if}
       <div class="flex flex-row items-center gap-2 w-full justify-center">
         {#if icon}
            <Icon {icon} class="{iconClass}"/>
         {/if}
          <span class="whitespace-nowrap">{title}</span>
       </div>
   </H3>
   <Text>
      <slot/>
   </Text>
</CardBase>