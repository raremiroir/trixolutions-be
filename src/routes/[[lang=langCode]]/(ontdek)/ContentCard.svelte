<script lang="ts">
   import { Title, P, Card } from "$comp";
	import Icon from "@iconify/svelte";

   export let id = '';
   export let title:string;

   export let klass = '';
   export { klass as class };

   export let icon = '';
   export let iconClass = 'h-8 w-auto pb-1';
</script>

<Card class={klass} equalHeight>
   <Title 
       type="h3" slot="title" smallest 
       class="text-center w-full border-b-2 border-primary/50">
       {#if id}<span class="text-4xl">{id}</span><br/>{/if}
       <div class="flex flex-row items-center gap-2 w-full justify-center">
         {#if icon}
            <Icon {icon} class="{iconClass}"/>
         {/if}
          <span class="whitespace-nowrap">{title}</span>
       </div>
   </Title>
   <P large>
      <slot/>
   </P>
</Card>