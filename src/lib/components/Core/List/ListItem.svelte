<script>
	import Icon from "@iconify/svelte";

   // Add extra classes to component
   let klass = ''
   export { klass as class }
   // Small text?
   export let small = false;

   // Custom icon?
   export let icon = 'default';

   // Indent the list item ?
   export let indent = false;
   // Disable?
   export let disabled = false;

   // Alt bg?
   export let alt = false;
   // Transparent bg?
   export let transp = false;
</script>

<li class="
      w-full
      flex flex-row items-center justify-start gap-0
      list-none
      {indent ? 'pl-8' : 'pl-1 xs:pl-2 sm:pl-4 py-1'}
      font-body leading-relaxed font-normal tracking-tight
      { small ? 'text-base' : 'text-lg' }
      text-gray-700 
      { alt ? 'bg-gray-50' : transp ? 'bg-transparent' : 'bg-white'}
      {klass}">

   {#if icon}
   <div class="w-1/12">
      {#if icon === 'check'}
         <Icon 
         class="w-6 h-6 bg-success-d/30 rounded-full text-success-d" 
         icon="material-symbols:check-circle-outline-rounded" />
      {:else if icon === 'cancel'}
         <Icon 
         class="w-6 h-6 bg-error/30 rounded-full text-error-d" 
         icon="material-symbols:cancel-outline-rounded" />
      {:else if icon === 'default'}
         <Icon 
            class="w-3 h-3  p-0 border-primary-d3 bg-transparent rounded-full text-primary-d3" 
            icon="ph:octagon-duotone" />   
      {:else}
         <slot name="icon" />
      {/if}
   </div>
   {/if}
   <div class="w-11/12 {disabled ? 'text-gray-500 line-through' : ''}">
      <slot/>
   </div>
</li>