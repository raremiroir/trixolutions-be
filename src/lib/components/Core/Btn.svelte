<script lang="ts">
   let klass = '';
   export { klass as class };

   export let type = 'button';
   export let disabled = false;
   export let role = 'button';
   export let tabindex = -1;
   export let ariaLabel:string;

   // unused props
   export const href = '';
</script>

<button 
   class={klass} 
   {type} {disabled} {role} {tabindex} 
   aria-disabled={disabled} aria-label={ariaLabel}>
   <slot/>
</button>