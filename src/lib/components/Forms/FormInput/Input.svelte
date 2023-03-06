<script lang="ts">
   let klass = '';
   export { klass as class };

   // Define input type
   export let type = "text"
   // Define the input name
   export let name:string;
   // Define input value
   export let value = '';

   // Define placeholder
   export let placeholder = '';

   const hidden = type === 'hidden';

   export let required = false;
   export let disabled = false;
   
   const handleInput = e => {
    // in here, you can switch on type and implement
    // whatever behaviour you need
    value = type.match(/^(number|range)$/)
      ? +e.target.value
      : e.target.value;
   }

   let inputFocused = false;
</script>

   <input 
      {disabled}
      on:focus on:blur
      id={name} 
      {type}
      autocorrect="off"
      
      {value} aria-valuetext="{value}"
      {placeholder} aria-placeholder="{placeholder}"
      {required} aria-required={required}
      on:input={handleInput}
      on:change
      class="{klass} {hidden ? 'hidden' : ''}"
      />