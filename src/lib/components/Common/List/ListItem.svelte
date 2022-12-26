<script>
	import Icon from "@iconify/svelte";

   // Add extra classes to component
   export let klass = ''
   // Large text?
   export let large = false;

   // Custom icon?
   export let icon = '';

   // Indent the list item ?
   export let indent = false;
   // Disable?
   export let disabled = false;
</script>

<li class="
      w-full
      flex flex-row items-center justify-start gap-2
      {icon ? 'list-none' : 'list-disc' }
      {indent ? 'ml-8 pl-1' : 'px-2 mx-auto py-1'}
      font-body leading-relaxed font-medium tracking-tight
      { large ? 'text-lg' : 'text-base' }
      text-gray-800 
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
   <div class="{icon ? 'w-11/12' : 'w-full'} {disabled ? 'text-gray-500 line-through' : 'text-primary-d2'}">
      <slot/>
   </div>
</li>