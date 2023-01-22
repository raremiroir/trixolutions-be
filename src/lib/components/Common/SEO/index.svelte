<script lang="ts">
	// Import featured image
	import defaultFeaturedImage from '$lib/assets/images/home/home.png';
	import defaultOgImage from '$lib/assets/images/home/home-open-graph.png';
	import defaultOgSquareImage from '$lib/assets/images/home/home-open-graph-square.png';
	// Import website config
	import { website } from '$lib/config/website';
	// Import constants
	import { VERTICAL_LINE_ENTITY } from '$lib/constants/entities';
	// Import SEO components
	import OpenGraph from './OpenGraph.svelte';
	import SchemaOrg from './SchemaOrg.svelte';
	
	// Define website object
	let {
		author,
		entity,
		facebookAuthorPage,
		facebookPage,
		ogLanguage,
		siteLanguage,
		siteShortTitle,
		siteTitle,
		siteUrl,
		linkedinProfile,
	} = website;

	export let article = false;
	export let breadcrumbs:any = [];
	export let entityMeta = undefined;
	export let lastUpdated;
	export let datePublished;
	export let metadescription:string;
	export let slug;
	// export let timeToRead = 0;

	export let title;
	const defaultAlt = 'Trixolutions - Training, Coaching, Consultancy';
	
	// imported props with fallback defaults
	export let featuredImage = {
		url: defaultFeaturedImage, alt: defaultAlt,
		width: 672, height: 448,
		caption: 'Home page',
	};
	export let ogImage = { url: defaultOgImage, alt: defaultAlt };
	export let ogSquareImage = { url: defaultOgSquareImage, alt: defaultAlt };

	let pageTitle = `${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`;
	let url = `${siteUrl}/${slug}`;

	let openGraphProps = {
		article,
		datePublished,
		lastUpdated,
		image: ogImage,
		squareImage: ogSquareImage,
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		url,
		...(article ? { datePublished, lastUpdated, facebookPage, facebookAuthorPage } : {}),
	};
	
	let schemaOrgProps = {
		article,
		author,
		breadcrumbs,
		datePublished,
		entity,
		lastUpdated,
		entityMeta,
		featuredImage,
		metadescription,
		siteLanguage,
		siteTitle,
		siteTitleAlt: siteShortTitle,
		siteUrl,
		title: pageTitle,
		url,
		facebookPage,
		linkedinProfile,
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<link rel="canonical" href={url} />
</svelte:head>

<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />