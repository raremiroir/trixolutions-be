<script lang="ts">
	import { fade } from "svelte/transition";


   // Define color
   // == primary | outlined       | info    | success | success-outlined | 
   // == error   | error-outlined | warning | none
   export let color = 'none';

   // Get small alert
   export let small = false

   // Define extra classes
   let klass = '';
   export { klass as class }

   // Define onClick function for alert
   export let onClick:any = undefined;
</script>

<div
   on:click={onClick}
   on:keydown={onClick}
   transition:fade={{duration:200}}
   class="
      dui-alert border-2
      { 
         color === 'primary'           ? 'bg-primary border-primary !text-gray-50 font-bold'
       : color === 'outlined'          ? 'bg-gray-50 border-2 border-primary !text-primary font-extrabold'
       : color === 'info'              ? 'dui-alert-info font-bold border-info-dark'
       : color === 'success'           ? 'dui-alert-success bg-success-d font-bold border-success-d'
       : color === 'success-outlined'  ? 'bg-gray-50 border-2 border-success-d !text-success-d font-medium'
       : color === 'error'             ? 'dui-alert-error bg-error !text-gray-50 font-medium border-error'
       : color === 'error-outlined'    ? 'bg-gray-50 border-2 border-error !text-error font-medium'
       : color === 'error-glass'       ? 'bg-error/50 backdrop-blur-xl border-2 border-error !text-gray-50 drop-shadow-lg font-semibold'
       : color === 'warning'           ? 'dui-alert-warning bg-warning-d border-warning-d font-bold'
       : color === 'none'              ? 'bg-gray-900 !text-gray-100 font-semibold border-gray-900' 
       : color
      }
      mx-auto w-fit 
      { small ? 'px-3 py-1 my-0 !text-base' : 'px-10 py-6 my-2 !text-lg' }
      font-body 
      {klass}">
   <div>
      <span><slot/></span>
   </div>
</div>