<script lang="ts">
   // Is the link just a wrap (to put a link on another component)
   // or an actual text link?
   export let wrap = false;
   // If the link is a wrap, should the link fill the parent box?
   export let fill = false;
   // If the link is a wrap, should the link fit the content?
   export let fit = false;

   // Extra classes on link component
   let klass = '';
   export { klass as class};

   // Where does the link reference to?
   export let href:string;
   // Accessibility aria-label string:
   export let ariaLabel:string;
   // Accessibility title string:
   export let title:string = '';

   // Target of the link ( '' / '_blank' / ... )
   export let target = '';
   // Define rel
   // https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel
   export let rel = '';
   // Define role
   export let role = 'link';
   

   // Color of text in link
   export let color = `text-primary-l3`
   export let hoverColor = `group-hover:text-primary-l1   hover:text-primary-l1 
                            group-active:text-primary     active:text-primary`
   // Center link
   export let center = false;


   // Choose link style
   // == underline - underlineOnHover - specialUnderline - none
   export let linkStyle = 'none';

   export let disabled = false;

   export let size = 'md';

   // Unused props
   export let type = '';
   export let tabindex = -1;
   $: {type, tabindex};
</script>

<!-- Link Tag -->
<a 
   {type} {tabindex}
   {title} {href} 
   {target} {rel} {role}
   aria-label={ariaLabel}
   aria-disabled={disabled}
   
   class="
      { wrap 
         ? `${fill ? 'w-full h-full' : fit ? 'w-fit h-fit' : ''}`
         : `group font-medium font-body
            ${ center ? 'text-center mx-auto' : '' }
            ${ size === 'sm' ? 'text-base' : 'text-lg' }
            transition-all duration-300 ease-out
            border-b-2 border-transparent w-fit
            ${ linkStyle === 'underline' 
               ? 'hover:border-primary-l1 group-hover:border-primary-l1 active:border-primary group-active:border-primary' 
            : linkStyle === 'underlineOnHover' 
               ? `group-hover:border-b-primary-l1 hover:border-b-primary-l1
                  active:bg-primary-l1 active:!text-gray-100 px-1`
            : 'border-transparent'}
            ${color} ${hoverColor}`
      } {klass}">
   <slot/>
</a>