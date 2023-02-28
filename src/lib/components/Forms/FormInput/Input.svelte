<script lang="ts">
   let klass = '';
   export { klass as class };

   export let name:string;
   export let value = '';
   export let placeholder = '';
   export let type = "text"

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
      id={name} {type} {value} {placeholder} {required}
      on:input={handleInput}
      on:change
      class="{klass} {hidden ? 'hidden' : ''}"
      />