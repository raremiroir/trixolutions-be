<script>
   import { H2, Reveal, Section } from "$comp";
   import { formatUrl } from "$utils";

   export let title = '';

</script>

<Reveal>
   <Section name={`${formatUrl(title)}-indepth`} >
      <div class="" slot="title">
          <H2 small>
            <slot name="title"/>
          </H2>
      </div>
      <slot/>
   </Section>
</Reveal>