

<script lang="ts">
   // Import components
   import Btn from "../Core/Btn.svelte";
   import { Link } from "..";
   import Icon from "@iconify/svelte";

   type btnType = "button" | "submit" | "reset" | undefined;

   // Define extra classes
   let klass = '';
   export { klass as class };

   // Is the button a link ?
   export let href = '';
   // Define button type
   export let type:btnType = 'button'
   // Define tabindex
   export let tabindex = -1;

   // Onclick event
   export let onClick:any = '';

   // Define title tooltip
   export let title = '';
   // Define aria-label
   export let ariaLabel:string;
   
   // Define size:
   export let size = 'md'
   // Define color:
   export let color = 'primary';
   
   // Is btn disabled:
   export let disabled = false
   // Outlined:
   export let outlined = false
   // Glass texture:
   export let glass = false;

   // Wider btn:
   export let wide = false;
   // Block - full width:
   export let block = false;

   // Square:
   export let square = false;
   // Circle:
   export let circle = false

   // Fully rounded:
   export let rounded = false
   // No rounding:
   export let noRounding = false
   // Tile rounding:
   export let tile = false

   // Slower transition duration
   export let slow = false
   // No shadow:
   export let flat = false

   // Should the button have text?
   export let noText = false;
   // Does btn have loading anim?
   export let loading = false;

   // Does btn have icon?
   export let icon = '';
   export let iconClass = '';
   export let iconRotate = '0deg';
   // Should the icon be at the end of the btn?
   export let iconEnd = false;

   // Disable the button animation:
   export let noAnim = false

   // Is content aligned at start?
   export let alignStart = false;
   // Is text lowercase?
   export let lowercase = false;
   // Is text capitalized?
   export let capitalize = false;
   // Is text normal ?
   export let textNormalize = false;
   // Is text bold?
   export let bold = false;

   // Active state if button needs it
   export let active = false;

   // TODO: Handle size responsiveness
   // Handle size
   if      (size === 'xs')  size = 'py-1 px-[6px] rounded text-sm'
   else if (size === 'sm')  size = 'py-1 px-[6px] lg:px-4 lg:h-8 rounded-md text-sm lg:text-base'
   else if (size === 'md')  size = 'px-4 h-8 lg:px-6 lg:h-11 rounded-lg text-base lg:text-lg'
   else if (size === 'lg')  size = 'px-6 h-11 lg:px-8 lg:h-13 rounded-[10px] text-lg lg:text-xl'
   else if (size === 'xl')  size = 'px-8 h-13 lg:px-10 lg:h-15 rounded-xl text-xl lg:text-2xl'
   else if (size === 'xxl') size = 'px-6 h-11 sm:px-8 sm:h-13 md:px-10 md:h-15 xl:px-12 xl:h-18 rounded-xl text-xl md:text-2xl lg:text-3xl'
   else if (size === 'xxxl') size = 'px-8 h-13 sm:px-10 sm:h-15 md:px-12 md:h-18 xl:px-18 xl:h-24 rounded-xl text-4xl md:text-5xl lg:text-6xl'
   else  size = size;

   // Handle component type
   let btnCompType = href !== '' ? Link : Btn;

</script>



<svelte:component
   {title}
   this={btnCompType}

   {type} wrap
   {href} on:click={() => onClick}

   role={type} {tabindex} 
   {disabled} {ariaLabel}

   class="
      transition-all { slow ? 'duration-500' : 'duration-300'} ease-in-out
      tracking-wide
      
      active:brightness-75

      flex flex-row items-center
      { square || circle ? 'relative' : '' }
      { alignStart ? 'justify-start text-start' : 'justify-center text-center' } 
      { icon ? 'gap-1' : '' }

      { noAnim   ? ''   : 'active:scale-95' }
      
      { color } { size }
      { outlined ? 'btn-outlined' : 'btn-default' }
      { disabled ? 'cursor-not-allowed opacity-50' : '' }
      
      { rounded || circle ? '!rounded-full' 
      : noRounding ? 'rounded-none'
      : tile    ? 'rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm'
      : '' }
   
      { bold ? 'font-bold' : 'font-semibold'} 
      { lowercase ? 'lowercase' : capitalize ? 'capitalize' : textNormalize ? '' : 'uppercase' }

      { flat ? 'shadow-none': 'shadow-md shadow-black/30 hover:shadow-black/50 active:shadow-black/50'}

      { glass    ? 'dui-btn-glass'    : '' }
      { wide     ? 'dui-btn-wide'   : '' }
      { block    ? '!w-full'   : 'w-fit' }
      { square || circle  ? 'aspect-square'   : '' }
      { circle   ? 'dui-btn-circle'   : '' }
      { active   ? 'dui-btn-active'   : '' }
      { loading  ? 'dui-loading'   : '' }

      { color === 'primary'   && !outlined ? `       !text-gray-50            bg-primary 
                                               hover:!text-white        hover:bg-primary-d2
                                              active:!text-white       active:bg-primary-d2`
      : color === 'secondary' && !outlined ? `       !text-gray-50            bg-secondary 
                                               hover:!text-white        hover:bg-secondary-d2
                                              active:!text-white       active:bg-secondary-d2`
      : color === 'accent'    && !outlined ? `       !text-gray-50            bg-accent 
                                               hover:!text-white        hover:bg-accent-d2
                                              active:!text-white       active:bg-accent-d2`
      : color === 'ghost'     && !outlined ? `       !text-primary              bg-transparent 
                                               hover:!text-primary-l2   hover:bg-gray-200/50 
                                              active:!text-primary-l3  active:bg-gray-300/50`
      : color === 'link'      && !outlined ? `       !text-info                 bg-transparent underline
                                               hover:!text-info-d       hover:bg-info/30 
                                              active:!text-info-d      active:bg-info/30`
      : color === 'info'      && !outlined ? `       !text-gray-50            bg-info
                                               hover:!text-white        hover:bg-info-d 
                                              active:!text-white       active:bg-info-d`
      : color === 'success'   && !outlined ? `       !text-gray-50            bg-success
                                               hover:!text-white        hover:bg-success-d 
                                              active:!text-white       active:bg-success-d`
      : color === 'error'     && !outlined ? `       !text-gray-50            bg-error
                                               hover:!text-white        hover:bg-error-d 
                                              active:!text-white       active:bg-error-d`
      : color === 'warning'   && !outlined ? `       !text-gray-50            bg-warning
                                               hover:!text-white        hover:bg-warning-d 
                                              active:!text-white       active:bg-warning-d`

      : color === 'primary'   &&  outlined ? `bg-transparent border-2 border-primary             !text-primary   
                                      hover:bg-primary/20     hover:border-primary-d2    hover:!text-primary-d2 
                                     active:bg-primary/30    active:border-primary-d3   active:!text-primary-d3`
      : color === 'secondary' &&  outlined ? `bg-transparent border-2 border-secondary           !text-gray-100 
                                      hover:bg-secondary/20   hover:border-gray-50       hover:!text-gray-50 
                                     active:bg-secondary/30  active:border-gray-50      active:!text-white`
      : color === 'accent'    &&  outlined ? `bg-transparent border-2 border-accent              !text-accent
                                      hover:bg-accent/20      hover:border-accent-d2     hover:!text-accent-d2 
                                     active:bg-accent/30     active:border-accent-d3    active:!text-accent-d3`
      : color === 'ghost'    &&   outlined ? `bg-transparent border-2 border-gray-300/50         !text-primary-l1
                                      hover:bg-primary/20     hover:border-primary-l1/50 hover:!text-primary-l2 
                                     active:bg-primary/30    active:border-primary-l1   active:!text-primary-l3`
      : color === 'link'     &&   outlined ? `bg-transparent border-2 border-info                !text-info underline
                                      hover:bg-info/30        hover:border-info-d        hover:!text-info-d 
                                     active:bg-info/30       active:border-info-d       active:!text-info-d`
      : color === 'info'     &&   outlined ? `bg-transparent border-2 border-info-d              !text-info-d
                                      hover:bg-info/20        hover:border-info-d        hover:!text-info-d 
                                     active:bg-info/30       active:border-info-d       active:!text-info-d`
      : color === 'success'  &&   outlined ? `bg-transparent border-2 border-success-d           !text-success-d
                                      hover:bg-success/20     hover:border-success-d     hover:!text-success-d 
                                     active:bg-success/30    active:border-success-d    active:!text-success-d`
      : color === 'error'    &&   outlined ? `bg-transparent border-2 border-error-d             !text-error-d
                                      hover:bg-error/20       hover:border-error-d       hover:!text-error-d 
                                     active:bg-error/30      active:border-error-d      active:!text-error-d`
      : color === 'warning'  &&   outlined ? `bg-transparent border-2 border-warning-d           !text-warning-d
                                      hover:bg-warning/20     hover:border-warning-d     hover:!text-warning-d 
                                     active:bg-warning/30    active:border-warning-d    active:!text-warning-d`
      : color}
      { klass }
      ">
   {#if !noText}
   
      {#if icon !== '' && !iconEnd}
         <Icon {icon} class="h-auto { square || circle ? 'absolute' : '' } {iconClass}" />
      {/if}

      <slot/>
      
      {#if icon !== '' && iconEnd}
         <Icon {icon} class="h-auto {iconClass}" rotate={iconRotate} />
      {/if}

   {/if}
</svelte:component>