<script lang="ts">
	import type { Locales } from "$src/i18n/i18n-types";

	import type { OGType, MediaObject, PersonObject } from "./SEOTypes"

	type mediaObjectArray = MediaObject[];


	export let siteTitle:string = 'Trixolutions'
	export let pageTitle:string = 'Home'
	export let metadescription:string = ''
	export let url:string = 'https://trixolutions.be'

	export let article = false;
	export let tags:string[] = [''];
	export let type: OGType = 'website';

	export let datePublished:string = '';
	export let lastUpdated:string = '';

	export let facebookAuthorPage = '';
	export let facebookPage = '';
	export let linkedinProfile = '';
	
	export let ogLanguage:Locales = 'nl'
	export let hasAlternateLang = true;

	export let images:mediaObjectArray = [];
	export let squareImages:mediaObjectArray = [];
	export let audios:mediaObjectArray = [];
	export let videos:mediaObjectArray = [];

	export let person:PersonObject = {};
	

	$: lang = ogLanguage === 'nl' ? 'nl_BE' : ogLanguage === 'fr' ? 'fr_BE' : 'en_GB';
	$: alt_lang_1 = ogLanguage === 'nl' ? 'fr_BE' : ogLanguage === 'fr' ? 'en_GB' : 'nl_BE';
	$: alt_lang_2 = ogLanguage === 'nl' ? 'en_GB' : ogLanguage === 'fr' ? 'nl_BE' : 'fr_BE';


	$: siteTitle;
	$: pageTitle;
	$: metadescription;
	$: url;
	
	$: article;
	$: tags;
	$: chosenType = article ? 'article' : type;

	$: datePublished;
	$: lastUpdated;

	$: facebookAuthorPage;
	$: facebookPage;
	$: linkedinProfile;
	
	$: ogLanguage;
	$: hasAlternateLang;

	$: images;
	$: squareImages;
	$: audios;
	$: videos;
	$: person;

</script>

<svelte:head>
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:url" content={url} />

	<meta property="og:locale" content={lang} />
	{#if hasAlternateLang}
		<meta property="og:locale:alternate" content={alt_lang_1} />
		<meta property="og:locale:alternate" content={alt_lang_2} />
	{/if}

	<meta property="og:type" content={chosenType} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={metadescription} />

	{#if images}
		{#each images as image}
			<meta property="og:image" content={image.url} />
			<meta property="og:image:url" content={image.url} />
			{#if image.type} <meta property="og:image:type" content={image.type} /> {/if}
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="627" />
			<meta property="og:image:alt" content={image.alt} />
		{/each}
	{/if}

	{#if squareImages}
		{#each squareImages as squareImage}
			<meta property="og:image" content={squareImage.url} />
			<meta property="og:image:width" content="400" />
			<meta property="og:image:height" content="400" />
			<meta property="og:image:alt" content={squareImage.alt} />
		{/each}
	{/if}

	{#if audios}
		{#each audios as audio}
			<meta property="og:audio" content={audio.url} />
			{#if audio.type} <meta property="og:audio:type" content={audio.type} /> {/if}
		{/each}
	{/if}

	{#if videos}
		{#each videos as video}
			<meta property="og:video" content={video.url} />
			{#if video.type} <meta property="og:video:type" content={video.type} /> {/if}
			{#if video.dimensions}
				<meta property="og:video:width" content="{`${video.dimensions.width}`}" />
				<meta property="og:video:height" content="{`${video.dimensions.height}`}" />
			{/if}
			<meta property="og:video:alt" content={video.alt} />
			<meta property="video:release_date" content={datePublished} />
			{#if video.tags}
				{#each video.tags as tag}
					<meta property="video:tag" content={tag} />
				{/each}
			{/if}
			{#if video.duration} <meta property="video:duration" content="{`${video.duration}`}" /> {/if}
		{/each}
	{/if}

	{#if article}
		<meta property="article:publisher" content={facebookPage} />
		<meta property="article:publisher" content={linkedinProfile} />
		<meta property="article:author" content={facebookAuthorPage} />
		<meta property="article:published_time" content={datePublished} />
		<meta property="article:modified_time" content={lastUpdated} />
		{#if tags}
			{#each tags as tag}
				<meta property="article:tag" content={tag} />
			{/each}
		{/if}
	{/if}
	
	{#if person.first_name && person.last_name}
		<meta property="profile:first_name" content={person.first_name} />
		<meta property="profile:last_name" content={person.last_name} />
		<!-- {#if person.username} <meta property="profile:username" content={person.username} /> {/if} -->
		{#if person.gender} <meta property="profile:gender" content={person.gender} /> {/if}
	{/if}
</svelte:head>