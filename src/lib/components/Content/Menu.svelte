<!--      -->
<!--  TS  -->
<!--      -->
<script lang="ts">
   // Import transition from svelte lib
   import {fade} from 'svelte/transition';

   // True if menu is open
   export let menuOpen = false;
   // Open menu when hovering over trigger instead of clicking
   export let hoverState = false;

   // Clicked on menu button --> open/close menu
   const handleMenuClick = () => {
      menuOpen = !menuOpen;
   }
   // Focus lost on menu --> close it
   const handleMenuFocusLoss = ({relatedTarget, currentTarget}) => {
      if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return
      menuOpen = false;
   }

   const openMenu = () => {menuOpen = true};
   const closeMenu = () => {menuOpen = false};

   // Add extra classes on component wrapper when called
   export let wrapClass = "";
   // Add extra classes on trigger wrapper when component is called
   let klass = "";
   export { klass as class };
   // Position of menu
   export let menuPos = '';
   // Menu padding
   export let padding = 'px-2 py-0.5';

   // Full width?
   export let block = false;

   // Define position of menu (center - left - right)
   export let position = 'center';

   const centerPosition = 'left-1/2 -translate-x-1/2'
   const leftPosition = 'left-0'
   const rightPosition = 'right-0'
   
   $: menuClass = `
         absolute z-99
         bg-white/90 backdrop-blur-lg
         rounded-lg shadow-md p-4 
         w-fit max-w-[95vw]
         ${position === 'center' ? centerPosition : position === 'left' ? leftPosition : position === 'right' ? rightPosition : ''}`
</script>

<!--      -->
<!-- HTML -->
<!--      -->

<!-- Component Wrapper -->
<div class="{block ? 'w-full' : ''} {wrapClass} relative"
     on:focusout={handleMenuFocusLoss}>


     <!-- Trigger Wrapper -->
      {#if hoverState}
         <div 
            class="group {klass}" 
            on:mouseenter={() => openMenu()}
            on:mouseleave={() => closeMenu()}
            on:mouseover={() => openMenu()}
            on:focus={() => openMenu()}
            on:blur={() => closeMenu()}>
               <slot name="trigger">Menu Trigger</slot>
         </div>
      {:else}
         <div 
            class="group {klass}" 
            on:click={handleMenuClick}
            on:keydown|preventDefault={handleMenuClick}>
               <slot name="trigger">Menu Trigger</slot>
         </div>
      {/if}
      <!-- Menu Wrapper -->
      {#if menuOpen}
         {#if hoverState}
            <div 
               transition:fade="{{duration: 200}}"
               on:mouseenter={() => openMenu()}
               on:mouseleave={() => closeMenu()}
               on:mouseover={() => openMenu()}
               on:focus={() => openMenu()}
               on:blur={() => closeMenu()}
               class="{menuPos} {padding} {menuClass}">
               <slot/>
            </div>
         {:else}
            <div 
               transition:fade="{{duration: 200}}"
               class="{menuPos} {padding} {menuClass}">
               <slot/>
            </div>
         {/if}
      {/if}
</div>

