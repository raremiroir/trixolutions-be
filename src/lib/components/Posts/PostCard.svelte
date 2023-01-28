<script lang="ts">
	import { CardBase, Text } from '$comp';

	import LL, { locale } from '$i18n/i18n-svelte';

   export let slug:string;
	export let title: string;
	export let imgSrc: string;
   export let excerpt: any;

	export let date = '';
	export let author = '';
	export let authorImg = '';

   // Create correct slug
   $: link = `/${$locale}/${slug}`

	// Make post card compact
	export let compactResponsive = false;

   $: cardProps = {
      title: title,
      img: imgSrc,

      imgPos: "top",
      imgAlign: 'top',
      imgContain: false,
      width: 'fill',
      height: 'equal',

      href: link,
      article: false,

      ariaLabel: title,

      author: {name: author, img: authorImg, date: date },

      btn: {title: $LL.base.btn.more_info(), href: link, ariaLabel: $LL.base.btn.more_info()},
      
      badgesTop: false,
      badge: '',

      compactResponsive: compactResponsive,

      noHoverFx: false,
      noActiveFx: false,
      noFx: false,
   }
</script>


<CardBase {...cardProps}>
	<Text small class="prose-ol:list-decimal prose-ul:list-disc prose-li:ml-6">
		{#if Array.isArray(excerpt)}
			{#each excerpt as item}
				{item}<br/>
			{/each}
		{:else}
			{excerpt}<br/>	
		{/if}
	</Text>
</CardBase>