<script lang="ts">

   // Name of Section
   export let name:string;

   // Extra classes on section when called
   let klass = '';
   export { klass as class };
   
</script>

<section
   id="{name}"
   class="
      w-full md:w-[95%] lg:w-[90%] xl:w-5/6 2xl:w-3/4 3xl:w-2/3 mx-auto
      flex flex-col gap-8 
      pb-12 md:pb-16 
      pt-6 md:pt-8 
      px-1 xs:px-2 sm:px-4 md:px-0
      {klass}
   ">    
      <!-- Section Title -->
      <div class="m-0 p-0">
         <slot name="title"/>
      </div>
      
      <!-- Section Content -->
      <div class="m-0 flex flex-col gap-8">
         <slot/>
      </div>

</section>