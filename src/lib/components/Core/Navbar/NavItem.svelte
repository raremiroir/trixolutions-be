<script lang="ts">
	import { Button, Link } from "../../core";
   import { Menu } from "../../content";
	import Icon from "@iconify/svelte";

   export let name:string;
   export let link:string;
   export let dropdown = false;
</script>

<li class="w-fit">
   {#if dropdown}
      <Menu hoverState>
         <a href={link} slot="trigger" class="w-fit h-fit m-0 p-0">
            <Button 
               color="transparent" 
               flat lowercase 
               size="text-lg px-2 xl:px-5 pt-[14px] pb-3">
               {name}
               <Icon icon="mdi:chevron-down" />
            </Button>
         </a>
         <ul class="flex flex-col gap-1 py-2">
            <slot/> 
         </ul>      
     </Menu>
   {:else if !dropdown}
      <Link href={link}>
         <Button 
            color="transparent" 
            flat lowercase
            size="text-lg px-2 xl:px-5 pt-[14px] pb-3">
            {name}
         </Button>
      </Link>
   {/if}
</li>