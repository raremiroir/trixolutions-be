<!-- 
 ██████  ██████  ███    ██ ████████ ███████ ███    ██ ████████ 
██      ██    ██ ████   ██    ██    ██      ████   ██    ██    
██      ██    ██ ██ ██  ██    ██    █████   ██ ██  ██    ██    
██      ██    ██ ██  ██ ██    ██    ██      ██  ██ ██    ██    
 ██████  ██████  ██   ████    ██    ███████ ██   ████    ██    
-->

<!--
▄▄▄ ▄▄▄ 
 █  █▄
 █   ▀█
 ▀  ▀▀▀
-->
<script>
   // ======= //
   // IMPORTS //
   // ======= //
   // Components
	import { P, Span } from "$comp/Core/Text";

   // -----------------------------------------------

   // =================== //
   // CHOOSE CONTENT TYPE //
   // =================== //
   export let p = true;
   export let span = false;

   // Set p to false if other type is selected:
   if (span) p = false;
   
   // Set content type depending on chosen type
   let contentComp = span ? Span : P

   // -----------------------------------------------

   // ============= //
   // GENERAL PROPS //
   // ============= //
   // Add extra classes when component is called:
   let klass = '';
   export { klass as class };

   // Color of text
   export let color = 'text-gray-800'
   
   // Smaller text:
   export let small = false
   // Center text:
   export let center = false;
   // Bold text:
   export let bold = false;
   export let semibold = false;
   // Italic text:
   export let italic = false
   
</script>

<!--
▄  ▄ ▄▄▄ ▄▄   ▄▄ ▄
█▄▄█  █  █ █ █ █ █
█▀▀█  █  █ █ █ █ █
▀  ▀  ▀  ▀  ▀  ▀ ▀▀▀
-->
<svelte:component
   this={contentComp}
   class="
      font-body
      leading-snug

      { center ? 'text-center' : '' }
      { color }
      { bold ? 'font-bold' : semibold ? 'font-semibold' : 'font-normal' }
      { small ? 'text-base' : 'text-lg' } 
      { italic ? 'italic' : '' }

      { klass }
   "
>
   <slot/>
</svelte:component>