<script lang='ts'>

	import { Button, Link } from "../../core";
   import { Menu } from "../../content";
	import Icon from "@iconify/svelte";

   export let name:string;
   export let link:string;
   export let dropdown = false

</script>

<li class="w-full lg:w-fit">
   {#if dropdown}
      <Menu>
         <Button 
            slot="trigger"
            color="transparent-alt" 
            flat lowercase square block
            size="text-lg px-5 pt-[14px] pb-3"
            class="font-bold font-body text-primary-d2 group-hover:text-primary-l1">
            <div class="flex flex-row gap-2 items-center">
               {name}
               <Icon icon="mdi:chevron-down" class="w-4 h-4" />
            </div>
         </Button>
         <ul class="flex flex-col gap-1 py-2">
            <slot/>
         </ul>      
   </Menu>
   {:else if !dropdown}
      <Link href={link}>
         <Button 
            color="transparent-alt" 
            flat lowercase square block
            size="text-lg px-5 pt-[14px] pb-3"
            class="font-bold font-body text-primary-d2 group-hover:text-primary-l1">
            {name}
         </Button>
      </Link>
   {/if}
</li>