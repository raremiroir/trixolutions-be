<script lang="ts">
	import { CardNew, Text } from '$comp';

	import LL, { locale } from '$i18n/i18n-svelte';

	export let slug: string;
	export let title: string;
	export let imgSrc: string;
	export let excerpt: any;

	export let date = '';
	export let author = '';
	export let authorImg = '';

	// Create correct slug
	$: link = `/${$locale}/${slug}`;

	$: cardProps = {
		title: title,
		img: imgSrc,
      
      height: 'h-96 sm:h-108 md:h-132 lg:h-140 xl:h-132 2xl:h-132 3xl:h-140',
      
		href: link,
		article: false,
		ariaLabel: title,

      hoverFx: 'full',

      badge: '',
      second_badge: '',

		author: { name: author, img: authorImg, date: date },


		btn: { title: $LL.base.btn.more_info(), href: link, ariaLabel: $LL.base.btn.more_info() },
		second_btn: { title: '', href: '', ariaLabel: '' },
		
	};
</script>

<CardNew
   {...cardProps}
>
	<Text>
		{@html excerpt}
	</Text>
</CardNew>
