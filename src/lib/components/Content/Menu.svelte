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
   export let menuPos = 'translate-y-1 -translate-x-0';
   // Menu padding
   export let padding = 'px-2 py-0.5';
</script>

<!--      -->
<!-- HTML -->
<!--      -->

<!-- Component Wrapper -->
<div class="min-w-fit {wrapClass} relative"
     on:focusout={handleMenuFocusLoss}>


     <!-- Trigger Wrapper -->
      {#if hoverState}
         <div 
            class="group {klass}" 
            on:mouseenter={() => openMenu()}
            on:mouseleave={() => closeMenu()}
            on:mouseover={() => openMenu()}
            on:focus={() => openMenu()}>
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
               class="
                  absolute {menuPos} z-99
                  bg-white rounded-lg
                  shadow-md min-w-fit lg:min-w-fit max:w-full
                  {padding}">
               <slot/>
            </div>
         {:else}
            <div 
               transition:fade="{{duration: 200}}"
               class="
                  absolute {menuPos} z-99
                  bg-white rounded-lg
                  shadow-md min-w-fit lg:min-w-fit max:w-full
                  {padding}">
               <slot/>
            </div>
         {/if}
     {/if}
   
</div>