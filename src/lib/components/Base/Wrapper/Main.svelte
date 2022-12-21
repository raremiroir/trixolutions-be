<script>
   export let klass = '';
   export let noMargin = false;
</script>

<main 
   class="
      {noMargin ? '' : 'my-20'}
      {klass}">
   <slot/>
</main>