<script lang="ts">
   // Import components
	import { Button, Link, Menu, Div } from "$comp";
	import Icon from "@iconify/svelte";

   // Import utils
	import { titleCase } from "$utils";

   // Is the navitem for mobile screens?
   export let mobile = false;

   // Whats the name of the item?
   export let name:string;

   // What's the link of the item?
   export let link:string;
   export let dropdown = false;
   export let dropdownItem = false;

   let klass = '';
   export { klass as class }

   let dropDownWrapComp = mobile ? Div : Link;

   $: dropdownBtnProps = {
      color: 'ghost',
      size: `text-base py-3 px-6 rounded-lg`,
      class: 'whitespace-nowrap', 
      flat: true,
      capitalize: true,
      block: true,
      alignStart: true
   }

   $: btnProps = {
      class: `font-bold font-body text-primary-d2 group-hover:text-primary-l1 group-active:text-primary-l2 whitespace-nowrap`,
      color: 'ghost',
      size: `text-lg py-3 rounded-xl ${ mobile ? 'px-6 max-h-10' : 'px-3 xl:px-6' }`,
      flat: true, 
      capitalize: true,
      square: mobile,
      block: mobile,
   }
</script>

<li class="
      {mobile || dropdownItem ? 'w-full' : 'w-fit'} 
      transition-all duration-150 ease-in-out 
      {klass}">
   {#if dropdown}
      <Menu hoverState={!mobile} position="{mobile ? 'center' : 'left'}">
         <svelte:component 
            this={dropDownWrapComp}
            href={link} ariaLabel="{name}" 
            slot="trigger" class="{mobile ? 'w-full' : 'w-fit'}">

            <Button ariaLabel={name} {...btnProps}>
               <div class="flex flex-row items-center justify-center {mobile ? 'gap-2 w-full' : 'gap-1 w-fit'}">
                  {titleCase(name)}
                  <Icon icon="mdi:chevron-down" class="{mobile ? 'w-4 h-4' : 'w-5 h-5'}" />
               </div>
            </Button>

         </svelte:component>
         <ul class="flex flex-col gap-1 py-2">
            <slot/> 
         </ul>      
     </Menu>
   {:else if dropdownItem}
      <Button href={link} ariaLabel={name} {...dropdownBtnProps}>
         {titleCase(name)}
      </Button>
   {:else if !dropdown && !dropdownItem}
      <div class="{mobile ? 'w-full' : 'w-fit'}">
         <Button href="{link}" ariaLabel={name} {...btnProps}>
            {titleCase(name)}
         </Button>
      </div>
   {/if}
</li>