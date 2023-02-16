<script lang="ts">
   let klass = '';
   export { klass as class };

   export let type = 'button';
   export let disabled = false;
   export let role = 'button';
   export let tabindex = -1;
   export let ariaLabel:string;
   export let title = '';
</script>

<button 
   class={klass} 
   {type} {disabled} {role} {tabindex} {title}
   aria-disabled={disabled} aria-label={ariaLabel}>
   <slot/>
</button>