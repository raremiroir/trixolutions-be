<script lang="ts">
	import { Card, TwicPic, Link, P, Title } from '$comp';

   import { breakpoints } from '$src/lib/stores';
	import { locale } from '$src/i18n/i18n-svelte';
	import { formatDateShort, formatYear } from '$src/lib/utils';

   export let slug:string;
	export let title: string;
	export let imgSrc: string;
   export let excerpt: any;

	export let date = '';
	export let author = '';
	export let authorImg = '';

   let innerWidth:number;
   let ratio = '5:3'
   $: if (innerWidth < $breakpoints.xs) { ratio = "2:1"; }  
      else if (innerWidth < $breakpoints.sm) { ratio = "3:1"; } 
      else if (innerWidth < $breakpoints.md) { ratio = "3:2"; } 
      else if (innerWidth < $breakpoints.lg) { ratio = "1"; } 
      else if (innerWidth < $breakpoints.xl) { ratio = "3:2"; } 
      else if (innerWidth < $breakpoints.xxl) { ratio = "3:2"; }
      else { ratio = "5:3"}

	slug = `${$locale}/${slug}`
</script>

<svelte:window bind:innerWidth={innerWidth} />

<Card link="{slug}" equalHeight direction="col" article hoverFx>
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
         intrinsic="1200x900"/>
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
	<div class="flex flex-row w-full justify-between items-center" slot="append-outer">
		<Link
			underlineOnHover
			href="{slug}"
			class="my-2 font-bold"
		>
			Meer Info
		</Link>
		{#if date || author}
			<div class="flex flex-row justify-end items-center gap-2">
				<div class="flex flex-col gap-0">
					<div class="text-sm font-semibold text-gray-800">{author}</div>
					<span class="text-sm text-gray-500 text-end italic">{formatDateShort(date)}/{formatYear(date)}</span>
				</div>
				<TwicPic 
					alt={title}
					src={authorImg} 
					mode="cover" position="top" 
					ratio="1" class="h-10 w-10 rounded-full"
					intrinsic="600x400"/>
			</div>
		{/if}
	</div>
</Card>
