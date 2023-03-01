<script lang="ts">
import { H4, MarkProse, Subtitle } from "$comp";

import { Map, Geocoder, Marker, controls } from "@beyonk/svelte-mapbox";
const { GeolocateControl, NavigationControl, ScaleControl } = controls

import { PUBLIC_MAPBOX_TOKEN } from '$env/static/public'
const token = PUBLIC_MAPBOX_TOKEN;

let mapComponent:any;
const mapOptions = {
	lng: 4.424,
	lat: 51.615,
	zoom: 7.53,
}

interface Pins {
	[key: string]: {
		id: number,
		lat: number,
      lng: number,
      label: string,
		address: string,
      extra: string,
	}
}
const pins: Pins = {
	be: {
		id: 1,
		lat: 51.22063831056065,
		lng: 4.508149242460171,
		label: "Trixolutions België",
		address: "Krommelei 14, 2110 Wijnegem",
		extra: "",
	},
	nl: {
		id: 2,
		lat: 51.980388837210086,
		lng: 4.387250556219944,
		label: "Trixolutions Nederland",
		address: "Rotterdamseweg 205, 2629 HD Delft",
		extra: "Art Centre Delft",
	}
}

const onReady = () => {
	// Usage of methods like setCenter and flyto
	mapComponent.setCenter([mapOptions.lng,mapOptions.lat],mapOptions.zoom) // zoom is optional
	mapComponent.flyTo({center:[mapOptions.lng,mapOptions.lat], zoom: mapOptions.zoom}	) // documentation (https://docs.mapbox.com/mapbox-gl-js/example/flyto)
}


// Define this to handle `eventname` events - see [GeoLocate Events](https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol-events)
function eventHandler (e: { detail: any; }) {
	const data = e.detail
	// do something with `data`, it's the result returned from the mapbox event
}
</script>



<div class="h-180 border-4 border-primary">
	<Map
		customStylesheetUrl="mapbox://styles/mirostorm/cle4woprs000b01o36tzm4bhv"
		accessToken="pk.eyJ1IjoibWlyb3N0b3JtIiwiYSI6ImNsZTR3bWYzZTA0MnAzdXM0MmEyamFnbHgifQ.a2gKlKKn8MwX-J9faUwmVA"
		bind:this={mapComponent}
    	on:ready={onReady}
		options={{	
			scrollZoom: false
		}}
	>
		{#each Object.keys(pins) as key }
			<Marker 
				lat={pins[key].lat} lng={pins[key].lng} 
				color="#0b3259" label="Trixolutions België" 
				popupClassName="class-name">

				<div class="content" slot="popup">
					<H4 smallest>{pins[key].label}</H4>
					<hr/>
					{#if pins[key].extra}
						<span class="text-md text-gray-900/80 font-medium">{pins[key].extra}</span><br/>
					{/if}
					<span class="italic text-md text-primary/80 font-semibold">{pins[key].address}</span>
					<!-- <MarkProse source={pins.be.description} /> -->
					<!-- <img src="{pins.be.images.length > 0 ? pins.be.images[0].url : ""}" alt="{pin.be.title}"/> -->
				</div> 
				
			</Marker>
		{/each}
		<NavigationControl />
		<GeolocateControl options={{ some: 'control-option' }} on:eventname={eventHandler} />
		<ScaleControl />
	</Map>
</div>
<style global>
	/* sometimes mapbox objects don't render as expected; troubleshoot by changing the height/width to px */
	:global(.mapboxgl-map) {
		 height: 200px;
	}
</style>



<!-- <div class="w-full h-full relative bg-white p-4 rounded-lg shadow-lg">
	<iframe
		src={`https://www.google.com/maps/d/embed?mid=1liCN_arijHdcbO2WwY-cBFMYjpZtxxM&hl=${$locale}&z=8&ehbc=2E312F`}
		class="w-full h-full rounded-md shadow-inner border-4 border-[#2e312f]"
		frameborder="0"
		scrolling="no"
		marginheight="0"
		marginwidth="0"
		title="Trixolutions Vestiging België"
	/>
</div> -->
