<script lang="ts">

	import { Card, Image, Tag, H2, Button, Text } from "$comp";

   import { breakpoints } from "$lib/constants/breakpoints";

   export let title:string;
   export let img = 'home/advisor-basic.webp';

   // Reverse card layout
   export let reverse = false;

   let innerWidth:number;
   let ratio = '5:3'
   $: if (innerWidth < breakpoints.xs) { ratio = "2:1"; }  
      else if (innerWidth < breakpoints.sm) { ratio = "3:1"; } 
      else if (innerWidth < breakpoints.md) { ratio = "3:2"; } 
      else if (innerWidth < breakpoints.lg) { ratio = "1"; } 
      else if (innerWidth < breakpoints.xl) { ratio = "3:2"; } 
      else if (innerWidth < breakpoints.xxl) { ratio = "3:2"; }
      else { ratio = "5:3"}

</script>

<svelte:window bind:innerWidth={innerWidth} />

<li>
   <Card direction="{ reverse ? 'row-reverse' : 'row' }">
      <!-- Image -->
      <Image 
         slot="image"
         alt={title}
         src={img} 
         mode="cover" position="center" 
         placeholder="preview"
         ratio="{ratio}"/>
      <!-- Prepend Inner -->
      <Tag slot="prepend-inner" small><slot name="title-prepend"/></Tag>
      <!-- Title -->
      <H2 smallest slot="title">{title}</H2>
      <!-- Content -->
      <Text>
         <slot>
            Een gratis, open infosessie over onze veelzijdige Lencioni 
            Teamcoaching Opleiding. Aarzel niet en schrijf je in!
         </slot>
      </Text>
      <!-- Append Inner -->
      <div class="flex flex-col gap-4" slot="append-inner">
         <div class="flex flex-col gap-1">
            <slot name="append"/>
         </div>
   
         <div class="flex flex-row gap-2">
            <Button ariaLabel="Schrijf me in!" color="primary" size="md">
                  Schrijf me in!
            </Button>
            <Button ariaLabel="Meer Info" color="primary" outlined size="md">
                  Meer Info
            </Button>
         </div>
      </div>
   </Card>
</li>