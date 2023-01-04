<!--      -->
<!--  JS  -->
<!--      -->
<script lang="ts">

   // Name of Section
   export let name:string;

   // Extra classes on section when called
   let klass = '';
   export { klass as class };
   
</script>


<!--      -->
<!-- HTML -->
<!--      -->
<!-- Section -->
<section
   id="{name}"
   class="
      w-full md:w-11/12 lg:w-5/6 xl:w-3/4 2xl:w-2/3 mx-auto
      flex flex-col gap-8 
      pb-8 pt-4 px-4 md:px-0
      {klass}
   ">    
      <!-- Section Title -->
      <div class="m-0">
         <slot name="title"/>
      </div>
      
      <!-- Section Content -->
      <div class="m-0 flex flex-col gap-8">
         <slot/>
      </div>

</section>