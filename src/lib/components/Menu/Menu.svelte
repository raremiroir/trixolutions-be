<!--      -->
<!--  TS  -->
<!--      -->
<script lang="ts">
   // Import transition from svelte lib
   import {fade} from 'svelte/transition';

   // True if menu is open
   export let menuOpen = false;
   // Clicked on menu button --> open/close menu
   const handleMenuClick = () => {
      menuOpen = !menuOpen;
   }
   // Focus lost on menu --> close it
   const handleMenuFocusLoss = ({relatedTarget, currentTarget}) => {
      if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return
      menuOpen = false;
   }

   // Add extra classes on component wrapper when called
   export let wrapClass = "";
   // Add extra classes on trigger wrapper when component is called
   export let klass = "";
   // Position of menu
   export let menuPos = 'translate-y-1 -translate-x-0';
</script>

<!--      -->
<!-- HTML -->
<!--      -->

<!-- Component Wrapper -->
<div class="min-w-fit {wrapClass}"
     on:focusout={handleMenuFocusLoss}>

     <!-- Trigger Wrapper -->
     <div class="group {klass}" on:click={handleMenuClick}>
         <slot name="trigger">Menu Trigger</slot>
     </div>

     <!-- Menu Wrapper -->
     {#if menuOpen}
         <div 
            transition:fade="{{duration: 200}}"
            class="
               absolute {menuPos} z-50
               bg-gray-50 rounded-lg
               shadow-md min-w-fit lg:min-w-fit max:w-full
               px-2 py-0.5">
            <slot/>
         </div>
     {/if}
   
</div>