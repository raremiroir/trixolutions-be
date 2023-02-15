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

	import LL from '$i18n/i18n-svelte';
	
	// Define website object
	let {
		author,
		entity,
		facebookAuthorPage,
		facebookPage,
		siteLanguage,
		siteShortTitle,
		siteTitle,
		siteUrl,
		linkedinProfile,
	} = website;

	export let ogLanguage = 'nl-BE';
	export let article = false;
	export let breadcrumbs:any = [];
	export let entityMeta:any = undefined;
	export let lastUpdated:string;
	export let datePublished:string;
	export let metadescription:string;
	export let slug:string;
	// export let timeToRead = 0;

	export let title:string;
	const defaultAlt = 'Trixolutions - Training, Coaching, Consultancy';
	
	// imported props with fallback defaults
	export let featuredImage = {
		url: defaultFeaturedImage, alt: defaultAlt,
		width: 672, height: 448,
		caption: 'Home page',
	};
	export let ogImage = { url: defaultOgImage, alt: defaultAlt };
	export let ogSquareImage = { url: defaultOgSquareImage, alt: defaultAlt };

	$: ogLanguage = $LL.code()
	$: pageTitle = `${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`;
	$: url = `${siteUrl}${slug}`;

	$: openGraphProps = {
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
	
	$: schemaOrgProps = {
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
	<!-- Canonical link element 
		tells search engines which URL is the canonical version of the page. 
		helps prevent duplicate content issues and ensures that the correct page is indexed. -->
	<link rel="canonical" href={url} />
	<!-- sitemap link element 
		tells search engines where to find the sitemap for the website. 
		Sitemaps are XML files that contain a list of all the pages on the website and their metadata. 
		used by search engines to index the website and display it in search results. -->
	<link rel="sitemap" type="application/xml" href="https://samplesite.com/sitemap.xml">
	<!-- alternate link element 
		tells search engines where to find the RSS feed for the website. 
		RSS feeds are XML files that contain a list of the most recent posts on the website. 
		used by search engines to display the website's content in search results, as well as by RSS readers to display the website's content in a more convenient format. -->
  	<link rel="alternate" type="application/rss+xml" title="RSS" href="https://samplesite.com/rss.xml">
	<!-- search link element 
	   used by browsers to display a search box in the browser's address bar.
		allows users to search the website directly from the address bar, instead of having to navigate to the search page. -->
  	<link rel="search" type="application/opensearchdescription+xml" title="Search" href="https://samplesite.com/search.xml">
</svelte:head>

<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />