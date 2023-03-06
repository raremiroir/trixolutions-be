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

   // Disable resizing
   export let noResize = false;


</script>


<textarea 
   {rows}
   on:focus on:blur 
   aria-label={ariaLabel}
   id={name} {name} 
   {placeholder} aria-placeholder={placeholder}
   {value} aria-valuetext={value}
   {required} aria-required={required}
   {disabled} aria-disabled={disabled}
   on:input on:change
   class="{noResize ? 'resize-none' : ''} {klass}" 
/>