<script lang="ts">
	import { Modal, TwicPic } from "../../common";
	import { P, Title } from "../../core";

   import { breakpoints } from "$src/lib/stores";

   export let id:number;

   let innerWidth:number;
   let ratio = '5:3'
   $: if (innerWidth < $breakpoints.xs) { ratio = "2:1"; }  
      else if (innerWidth < $breakpoints.sm) { ratio = "2:1"; } 
      else if (innerWidth < $breakpoints.md) { ratio = "2:1"; } 
      else if (innerWidth < $breakpoints.lg) { ratio = "3:2"; } 
      else if (innerWidth < $breakpoints.xl) { ratio = "4:3"; } 
      else if (innerWidth < $breakpoints.xxl) { ratio = "3:2"; }
      else { ratio = "5:3"}

   export let imgSrc:string;
   export let imgAlt:string;

</script>

<svelte:window bind:innerWidth={innerWidth} />

<Modal content {id}>
   <Title type="h3" smaller slot="title">
      <slot name="title">Title</slot>
   </Title>
   <div class="grid md:grid-cols-2 gap-4 w-full">
      <div class="col-span-1">
         <slot/>
         <P class="text-primary-l1">
            <slot name="extra"/>
         </P>
      </div>
      <div class="col-span-1">
         <TwicPic 
            alt={imgAlt}
            src={imgSrc} 
            mode="cover" position="top" 
            ratio="{ratio}"
            intrinsic="600x400"/>
      </div>
   </div>
</Modal>