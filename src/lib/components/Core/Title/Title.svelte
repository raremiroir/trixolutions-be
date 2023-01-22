<script lang="ts">

   import { H1, H2, H3, H4, H5, H6, Subtitle, Subheader } from "../..";

   let chosenTitle = H1;
   export let type = 'h1';

   switch (type) {
      case 'h2': chosenTitle = H2; break;
      case 'h3': chosenTitle = H3; break;
      case 'h4': chosenTitle = H4; break;
      case 'h5': chosenTitle = H5; break;
      case 'h6': chosenTitle = H6; break;
      case 'subtitle': chosenTitle = Subtitle; break;
      case 'subheader': chosenTitle = Subheader; break;
      default: chosenTitle = H1; break;
   }

   export let color = '';
   export let leading = '';
   export let thin = false;
   export let small = false;
   export let smaller = false;
   export let smallest = false;
   export let large = false;
   export let italic = false;
   export let fake = false;

   let klass = '';
   export { klass as class };

</script>


<svelte:component
   this={chosenTitle} 
   { color } { leading } { thin } 
   { small } { smaller } { smallest }
   { large } { fake } { italic }
   class={klass}
   >
   <slot/>
</svelte:component>