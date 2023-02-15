<script>
	import Icon from "@iconify/svelte";

   // Add extra classes to component
   let klass = ''
   export { klass as class }
   // Small text?
   export let small = false;

   // Custom icon?
   export let icon = '';

   // Indent the list item ?
   export let indent = false;
   // Disable?
   export let disabled = false;

   // Alt bg?
   export let alt = false;
</script>

<li class="
      w-full
      flex flex-row items-center justify-start gap-4 sm:gap-6
      {icon ? 'list-none' : 'list-disc' }
      {indent ? 'pl-8' : 'pl-1 xs:pl-2 sm:pl-4 py-1'}
      font-body leading-relaxed font-normal tracking-tight
      { small ? 'text-base' : 'text-lg' }
      text-gray-700 
      { alt ? 'bg-gray-50' : 'bg-white'}
      {klass}">

   {#if icon}
   <div class="w-1/12">
      {#if icon === 'check'}
         <Icon 
         slot="icon" 
         class="w-7 h-6 bg-success-d/30 rounded-full text-success-d" 
         icon="material-symbols:check-circle-outline-rounded" />
      {:else if icon === 'cancel'}
         <Icon 
         slot="icon" 
         class="w-7 h-6 bg-error/30 rounded-full text-error-d" 
         icon="material-symbols:cancel-outline-rounded" />
      {:else if icon !== ''}
         <slot name="icon" />
      {/if}
   </div>
   {/if}
   <div class="{icon ? 'w-11/12' : 'w-full'} {disabled ? 'text-gray-500 line-through' : ''}">
      <slot/>
   </div>
</li>