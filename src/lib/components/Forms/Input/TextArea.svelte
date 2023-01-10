<script lang="ts">
   
   let klass = '';
   export { klass as class };

   export let name:string;
   export let ariaLabel:string;
   export let value = '';
   export let placeholder = '';
   export let required = false;
   export let disabled = false;

   export let rows = 6;


</script>


<textarea 
   {rows} {disabled}
   on:focus on:blur 
   aria-label={ariaLabel}
   id={name} {name} {placeholder} {value} {required}
   on:input on:change
   class={klass} 
/>