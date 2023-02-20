<script>
   import { H2, Section } from "$comp";
   import { formatUrl } from "$utils/formatText";

   export let title = '';

</script>

<Section name={`${formatUrl(title)}-indepth`} >
   <div class="" slot="title">
       <H2 small>
         <slot name="title"/>
       </H2>
   </div>
   <slot/>
</Section>