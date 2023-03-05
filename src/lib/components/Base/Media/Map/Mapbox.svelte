<script>
   import 'mapbox-gl/dist/mapbox-gl.css';
   import mapboxgl from 'mapbox-gl';
	import { onMount } from 'svelte';

  const token = import.meta.env.VITE_MAPBOX_TOKEN;

   const mapStyles = {
      default: 'mapbox://styles/mapbox/streets-v11',
      satellite: 'mapbox://styles/mapbox/satellite-v9',
      dark: 'mapbox://styles/mapbox/dark-v10',
      light: 'mapbox://styles/mapbox/light-v10',
      outdoors: 'mapbox://styles/mapbox/outdoors-v11',
      navigation: 'mapbox://styles/mapbox/navigation-preview-day-v4',
      navigationNight: 'mapbox://styles/mapbox/navigation-preview-night-v4',
      navigationGuidanceDay: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
      navigationGuidanceNight: 'mapbox://styles/mapbox/navigation-guidance-night-v4',
      mist: 'mapbox://styles/mirostorm/cle4woprs000b01o36tzm4bhv'
   }

  const mapOptions = {
    lng: 4.424,
    lat: 51.615,
    zoom: 7.53,
    style: mapStyles.mist
  }

   onMount(() => {
      mapboxgl.accessToken = token;
      new mapboxgl.Map({
         container: 'map',                         // container ID
         style: mapOptions.style,                  // style URL
         center: [mapOptions.lng, mapOptions.lat], // starting position [lng, lat]
         zoom: mapOptions.zoom,                    // starting zoom
      });
   })

   const transition = "transition-all duration-300 ease-in-out"
</script>


<div class="
		group {transition}
		w-full h-88 sm:h-104 md:h-152 lg:h-160 xl:h-180
		border-4 border-primary overflow-hidden">
   <div 
      id="map"
      class="map w-full h-full isolate" 
   ></div>
</div>