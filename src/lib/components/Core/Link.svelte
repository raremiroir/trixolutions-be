<!--      -->
<!--  JS  -->
<!--      -->
<script lang="ts">
   // Extra classes on link component
   let klass = '';
   export { klass as class};
   // Where does the link reference to?
   export let href:string;
   // Target of the link ( '' / '_blank' / ... )
   export let target = '';

   export let rel = '';
   export let ariaLabel:string;

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
<a {href} {target} {rel} aria-label={ariaLabel}
   class="
      group font-medium font-body
      transition-all duration-300 ease-out
      border-b-2 w-fit border-t-2
      {underline 
         ? 'border-primary-l3 group-hover:border-primary-l1 group-active:border-primary' 
         : 'border-transparent'}
      {underlineOnHover 
         ? `group-hover:border-b-primary-l1 hover:border-t-primary-l1
               active:bg-primary-l1 active:!text-gray-100 px-1`
         : 'border-transparent'}
      {color} {klass}
   ">
   <slot/>
</a>