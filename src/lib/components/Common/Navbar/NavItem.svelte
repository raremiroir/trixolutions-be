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

   const baseBtnClass = 
      `font-bold font-body 
      text-primary-d2 group-hover:text-primary-l1 group-active:text-primary-l2
      text-lg pt-[14px] pb-3 rounded-[12px]`


   $: dropdownBtnProps = {
      color: 'ghost',
      size: "text-base px-4 pt-[14px] pb-3", 
      flat: true,
      lowercase: true,
      block: true
   }
   $: btnProps = {
      class: ` font-bold font-body 
               text-primary-d2 group-hover:text-primary-l1 group-active:text-primary-l2
               text-lg pt-[14px] pb-3 rounded-[12px]`,
      color: 'ghost',
      size: `${ mobile ? 'px-5' : 'px-2 xl:px-5' }`,
      flat: true, 
      lowercase: true,
      square: mobile,
      block: mobile,
      alignStart: mobile
   }
</script>

<li class="{mobile ? 'w-full' : 'w-fit'} transition-all duration-150 ease-in-out {klass}">
   {#if dropdown}
      <Menu hoverState={!mobile}>
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