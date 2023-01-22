<script lang="ts">
   import { Title, Card, Image } from "$comp";

   export let src:string;
   export let alt = '';
   export let imgMode = 'cover';
   export let name = "";
   export let position = "";

	import { breakpoints } from "$src/lib/constants/breakpoints";

   let innerWidth:number;
   $: innerWidth;
   // Change image ratio according to breakpoint
   let ratio = '3:1'
   $: if (innerWidth < breakpoints.xs) { ratio = "5:3"; } 
   else if (innerWidth < breakpoints.sm) { ratio = "2:1"; } 
   else if (innerWidth < breakpoints.md) { ratio = "3:2"; } 
   else if (innerWidth < breakpoints.lg) { ratio = "3:2"; } 
   else if (innerWidth < breakpoints.xl) { ratio = "4:3"; } 
   else if (innerWidth < breakpoints.xxl) { ratio = "4:3"; } 
   else { ratio = "4:3"; }

</script>

<svelte:window bind:innerWidth={innerWidth} />

<li class="h-fit">
   <Card>
      <Title type="h3" smaller slot="title">{name}</Title>
      <div slot="image">
         <Image
            {src}
            alt="{alt}"
            mode="{imgMode}"
            {ratio}
            {position}
            intrinsic="800:600"
            anchor={position}
         />
      </div>
      <slot/>
   </Card>
</li>