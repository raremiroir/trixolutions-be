<!--      -->
<!--  JS  -->
<!--      -->
<script>
   // Extra classes on link component
   export let klass = '';
   // Where does the link reference to?
   export let href = '#';
   // Target of the link ( '' / '_blank' / ... )
   export let target = '';

   // Color of text in link
   export let color = ` text-primary-l3 
                        group-hover:text-primary-l1   hover:text-primary-l1 
                        group-active:text-primary     active:text-primary`

   // Underline the link?
   export let underline = false;
   // Underline the link on hover? (if underline is on, nothing will happen)
   export let underlineOnHover = false;
</script>


<!--      -->
<!-- HTML -->
<!--      -->

<!-- Link Tag -->
<a {href} {target}
   class="
      group font-medium font-body
      transition-all duration-300 ease-out
      border-b-2 w-fit
      {underline ? 'border-primary-l3 group-hover:border-primary-l1 group-active:border-primary' : 'border-transparent'}
      {underlineOnHover ? 'group-hover:border-primary-l1 group-active:border-primary' : 'border-transparent'}
      {color} {klass}
   ">
   <slot/>
</a>