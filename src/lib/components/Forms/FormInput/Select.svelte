<script lang="ts">

let klass = '';
export { klass as class};

export let name:string;
export let ariaLabel:string;
export let value = '';
export let placeholder = '';
export let required = false;


</script>

<select 
   class="{klass}"
   on:focus on:blur 
   aria-label={ariaLabel}
   id={name} {name} {placeholder} {value} {required}
   on:input on:change>
   <slot/>
</select>