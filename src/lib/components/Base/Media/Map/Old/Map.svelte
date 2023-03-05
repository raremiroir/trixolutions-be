<script lang="ts">
	import 'leaflet/dist/leaflet.css';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	import * as leaflet from 'leaflet';

	let mapElement:any;
	let map:any;

	onMount(() => {
		if (browser) {
			map = leaflet.map(mapElement).setView([51.505, -0.09], 13);

			leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);	

			leaflet.marker([51.5, -0.09]).addTo(map)
				.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
				.openPopup();
		}
	})

	onDestroy(() => {
		if (map) {
			console.log('destroying map')
			map.remove();
		}
	})

	const transition = "transition duration-300 ease-in-out"
</script>

<!-- <div class="
		group {transition}
		w-full h-88 sm:h-104 md:h-152 lg:h-160 xl:h-180
		border-4 border-primary overflow-hidden"> -->

	<div
		id="map" 
		bind:this={mapElement} 
		class=""
	/>
<!-- </div> -->

<style>
    div#map {
        height: 800px;
    }
</style>