<script lang="ts">
	import { Card, TwicPic } from '../common';
	import { Link, P, Title } from '../core';

   import { breakpoints } from '$src/lib/stores';

   export let slug:string;
	export let title: string;
	export let imgSrc: string;
   export let excerpt: any;

   let innerWidth:number;
   let ratio = '5:3'
   $: if (innerWidth < $breakpoints.xs) { ratio = "2:1"; }  
      else if (innerWidth < $breakpoints.sm) { ratio = "3:1"; } 
      else if (innerWidth < $breakpoints.md) { ratio = "3:2"; } 
      else if (innerWidth < $breakpoints.lg) { ratio = "1"; } 
      else if (innerWidth < $breakpoints.xl) { ratio = "3:2"; } 
      else if (innerWidth < $breakpoints.xxl) { ratio = "3:2"; }
      else { ratio = "5:3"}
</script>

<svelte:window bind:innerWidth={innerWidth} />

<Card link="{slug}" equalHeight direction="col">
	<Title 
		slot = "title"
		type='h3' smaller color="text-primary"
		class="flex items-start w-full">
		{title}
	</Title>

	<div class="h-fit w-full" slot="image">
		<!-- <Image imgSrc="{blogPost.img}" height="h-40" /> -->
		<TwicPic 
			alt={title}
         src={imgSrc} 
         mode="cover" position="top" 
         ratio="{ratio}"
         intrinsic="600x400"/>
	</div>

	<P class="prose-ol:list-decimal prose-ul:list-disc prose-li:ml-6">
      {#if Array.isArray(excerpt)}
			{#each excerpt as item}
				{item}<br/>
			{/each}
		{:else}
			{excerpt}<br/>	
		{/if}
	</P>
	<Link
		underlineOnHover
		slot="append-outer"
		href="{slug}"
		class="my-2 font-bold"
	>
		Meer Info
	</Link>
</Card>
