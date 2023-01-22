<script lang="ts">
	import { Button, Card, H3, Image, Text } from '$comp';

	import { breakpoints } from '$lib/constants/breakpoints';
	import { locale } from '$i18n/i18n-svelte';
	import { formatDateFull, formatDateShort, formatYear } from '$src/lib/utils';
	import Cardd from '../Content/Cardd.svelte';

   export let slug:string;
	export let title: string;
	export let imgSrc: string;
   export let excerpt: any;

	export let date = '';
	export let author = '';
	export let authorImg = '';

	// Make post card compact
	export let compactResponsive = false;

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

<Cardd
	{ compactResponsive }
	href="/{$locale}/{slug}" isLink
	ariaLabel={title} article equalHeight
	img={imgSrc} {title}
	btn={{title: 'Meer Info', href: `/${$locale}/${slug}`, ariaLabel: `meer info over ${title}`}}
	{author} {authorImg}
	date={ author ? formatDateFull(date) : ''}

>
	<!-- <H3 
		slot="title" smaller color="text-primary"
		class="flex items-start w-full">
		{title}
	</H3> -->

	<Text small class="prose-ol:list-decimal prose-ul:list-disc prose-li:ml-6">
      {#if Array.isArray(excerpt)}
			{#each excerpt as item}
				{item}<br/>
			{/each}
		{:else}
			{excerpt}<br/>	
		{/if}
	</Text>

</Cardd>

<!-- <Card link="/{$locale}/{slug}" equalHeight direction="col" article hoverFx>
	<H3 
		slot="title" smaller color="text-primary"
		class="flex items-start w-full">
		{title}
	</H3>

	<div class="h-fit w-full" slot="image">
		<Image 
			alt={title}
         src={imgSrc} 
         mode="cover" position="top" 
         ratio="{ratio}"
         intrinsic="1200x900"/>
	</div>

	<Text small class="prose-ol:list-decimal prose-ul:list-disc prose-li:ml-6">
      {#if Array.isArray(excerpt)}
			{#each excerpt as item}
				{item}<br/>
			{/each}
		{:else}
			{excerpt}<br/>	
		{/if}
	</Text>
	<div class="flex flex-row w-full justify-between items-center" slot="append-outer">
		<Button
			ariaLabel="Go to Page: {title}"
			color="link"
			href="/{$locale}/{slug}"
			class="font-bold"
		>
			Meer Info
		</Button>
		{#if date || author}
			<div class="flex flex-row justify-end items-center gap-2">
				<div class="flex flex-col gap-0">
					<div class="text-sm font-semibold text-gray-800">{author}</div>
					<span class="text-sm text-gray-500 text-end italic">{formatDateShort(date)}/{formatYear(date)}</span>
				</div>
				<Image 
					alt={title}
					src={authorImg} 
					mode="cover" position="top" 
					ratio="1" class="h-10 w-10 rounded-full"
					intrinsic="600x400"/>
			</div>
		{/if}
	</div>
</Card> -->
