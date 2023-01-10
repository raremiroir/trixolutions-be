<script lang="ts">

   // Choose preset
   export let preset = 'none';

   // Get small alert
   export let small = false

   let klass = '';
   export { klass as class }

   export let onClick:any = undefined;
</script>

<div
   on:click={onClick}
   on:keydown={onClick}
   class="
      dui-alert border-2
      { 
         preset === 'primary'           ? 'bg-primary border-primary text-gray-50 font-bold'
       : preset === 'outlined'          ? 'bg-gray-50 border-2 border-primary text-primary font-extrabold'
       : preset === 'info'              ? 'dui-alert-info font-bold border-info-dark'
       : preset === 'success'           ? 'dui-alert-success bg-success-d font-bold border-success-d'
       : preset === 'success-outlined'  ? 'bg-gray-50 border-2 border-success-d text-success-d font-medium'
       : preset === 'error'             ? 'dui-alert-error bg-error text-gray-50 font-medium border-error'
       : preset === 'error-outlined'    ? 'bg-gray-50 border-2 border-error text-error font-medium'
       : preset === 'warning'           ? 'dui-alert-warning bg-warning-d border-warning-d font-bold'
       : preset === 'none'              ? 'bg-gray-900 text-gray-100 font-semibold border-gray-900' 
       : preset
      }
      mx-auto w-fit 
      { small ? 'px-3 py-1 my-0 text-base' : 'px-10 py-6 my-2 text-lg' }
      font-body {klass}">
   <div>
      <span><slot/></span>
   </div>
</div>