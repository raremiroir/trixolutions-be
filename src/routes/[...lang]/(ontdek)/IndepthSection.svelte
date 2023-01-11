<script>
   import { Title, SectionWrapper } from "$comp/core";
   import { formatUrl } from "$utils/formatText";

   export let title = '';

</script>

<SectionWrapper name={`${formatUrl(title)}-indepth`} >
   <div class="" slot="title">
       <Title type="h2" small>
            <slot name="title"/>
       </Title>
   </div>
   <slot/>
</SectionWrapper>