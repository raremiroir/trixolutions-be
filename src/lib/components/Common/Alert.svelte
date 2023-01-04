<script>

   // Choose preset
   export let preset = 'none';
</script>

<div class="
      dui-alert border-2
      { 
         preset === 'primary'           ? 'bg-primary border-primary text-gray-50 font-bold'
       : preset === 'outlined'          ? 'bg-gray-50 border-2 border-primary text-primary font-extrabold'
       : preset === 'info'              ? 'dui-alert-info font-bold border-info-dark'
       : preset === 'success'           ? 'dui-alert-success bg-success-d font-bold border-success-d'
       : preset === 'error'             ? 'dui-alert-error bg-error text-gray-50 font-medium border-error'
       : preset === 'error-outlined'    ? 'bg-gray-50 border-2 border-error text-error font-medium'
       : preset === 'warning'           ? 'dui-alert-warning bg-warning-d border-warning-d font-bold'
       : preset === 'none'              ? 'bg-gray-900 text-gray-100 font-semibold border-gray-900' 
       : preset
      }
      mx-auto w-fit px-10 py-6 my-2
      font-body text-lg">
   <div>
      <span><slot/></span>
   </div>
</div>