<script>
   // Import colors scheme
   import colors from "$comp/colorScheme";

   // Extra classes on button component
   export let klass = '';
   // Type of button
   export let type = 'button';
   // Size of button
   export let size = 'md';
   // Color of button
   export let color = 'primary';
   // Color of text - leave blank for default color scheme text
   export let textColor = '';
   
   
   // --- BUTTON STATES ---
      // Disabled (greyed out)
      export let disabled = false;
      // Block (full width)
      export let block = false;
      // Lowercase
      export let lowercase = false;
      // Flat (no shadows)
      export let flat = false;
      // Outlined (border-style)
      export let outlined = false;
   // --- ROUNDING ---
      // Square
      export let square = false;
      // Full rounding
      export let rounded = false
      // Tile (only top-right and bottom-left are rounded)
      export let tile = false;

</script>

<button 
   {type} on:click
   class="
      flex flex-row items-center justify-start gap-1
      whitespace-nowrap group {klass}
      transition-all ease-out duration-300
      font-body font-semibold
   
     md:active:translate-y-0.5

      { disabled ? 'opacity-70 saturate-50' : 'opacity-100 saturate-100' } 
      { block ? 'w-full' : 'w-fit' }
      { lowercase ? '' : 'uppercase' }
      { flat ? 'shadow-none' : 'shadow-md hover:shadow-lg active:shadow-black/50' }
      
      { square  ? 'rounded-none'
      : rounded ? 'rounded-full'
      : tile    ? 'rounded-tl-xl rounded-tr-sm rounded-bl-sm rounded-br-xl'
      : 'rounded-md'}

      { size === 'xs'         ? 'text-xs      px-[10px] pt-[8px]     pb-[5px]' 
      : size === 'sm'         ? 'text-sm      px-4      pt-[14px]    pb-3    ' 
      : size === 'md'         ? 'text-base    px-5      pt-[14px]    pb-3    ' 
      : size === 'lg'         ? 'text-lg      px-8      pt-[18px]    pb-4    ' 
      : size === 'xl'         ? 'text-lg  lg:text-2xl   px-8 lg:px-12    py-3 lg:py-4                 ' 
      : size === 'xxl'        ? 'text-5xl     px-15     py-6                 ' 

      : size === 'xs-resp'    ? `   text-xs        px-2      pt-2           pb-1
                                 lg:text-sm     md:px-3   lg:pt-3        lg:pb-2` 
      : size === 'sm-resp'    ? `   text-sm        px-3      pt-3           pb-2
                                                md:px-4   md:pt-[14px]   md:pb-[10px]
                                                lg:px-5   lg:pt-4        lg:pb-3` 
      : size === 'md-resp'    ? `   text-sm        px-4      pt-[14px]      pb-[10px]    
                                 md:text-base   md:px-5   md:pt-4        md:pb-3
                                             	lg:px-6   lg:pt-[18px]   lg:pb-[14px]` 
      : size === 'lg-resp'    ? `   text-base      px-6      pt-[18px]      pb-[14px]
                                 md:text-lg     md:px-7   md:pt-[22px]   md:pb-[18px]
                                                lg:px-8   lg:pt-6        lg:pb-5` 
      : size === 'xl-resp'    ? `text-2xl    px-12     py-5` 
      : size === 'xxl-resp'   ? `text-5xl    px-15     py-6` 

      : size === 'square-xs'  ? `h-6 w-6   overflow-hidden text-[8px]` 
      : size === 'square-sm'  ? `h-10 w-10 overflow-hidden text-[8px]` 
      : size === 'square-md'  ? `h-10 w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 overflow-hidden text-xs`
      : size === 'square-lg'  ? `h-14 w-14 overflow-hidden text-sm`
      : size === 'square-xl'  ? `h-12 w-12 lg:h-16 lg:w-16 overflow-hidden text-sm`
      : size === 'square-resp'? `overflow-hidden
                                    h-10    w-10    text-[8px]
                                 md:h-12 md:w-12 md:text-xs
                                 lg:h-14 lg:w-14 lg:text-sm`
      : size}

      {
         color === 'primary'     && !outlined ? 
            `${colors.button.primary.default} ${textColor ? textColor : colors.button.primary.default_text}`
       : color === 'primary'     && outlined  ? 
            `${colors.button.primary.outline} ${textColor ? textColor : colors.button.primary.outline_text}`

       : color === 'secondary'   && !outlined ? 
            `${colors.button.secondary.default} ${textColor ? textColor : colors.button.secondary.default_text}`
       : color === 'secondary'   && outlined  ? 
            `${colors.button.secondary.outline} ${textColor ? textColor : colors.button.secondary.outline_text}`

       : color === 'transparent' && !outlined  ? 
            `${colors.button.transparent.default} ${textColor ? textColor : colors.button.transparent.default_text}`
       : color === 'transparent' && outlined ? 
            `${colors.button.transparent.outline} ${textColor ? textColor : colors.button.transparent.outline_text}`

       : color === 'transparent-alt' && !outlined ? 
            `${colors.button.transparent.alt} ${textColor ? textColor : colors.button.transparent.alt_text}`
       : color
      }
   "
   >
   <slot/>
</button>