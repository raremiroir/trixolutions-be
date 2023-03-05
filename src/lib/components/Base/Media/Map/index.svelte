<script lang="ts">
   import "leaflet/dist/leaflet.css";
   import L, { type LatLngExpression } from 'leaflet';

   // import Toolbar from './Toolbar.svelte';
   import MarkerPopup from './MarkerPopup.svelte';
   import * as markerIcons from './markers'

   import { tileLayers } from "./tileLayers";

   const tileMap = tileLayers.stadia.alidadeSmooth.map;
   const tileAttribution = tileLayers.stadia.alidadeSmooth.attribution;

   let map:any;

   interface MarkerInfo {
      [key: string]: LatLngExpression;
   }

   const markersInfo: MarkerInfo = {
      be: [51.22075867446951, 4.508167457588437],
      nl: [51.98045491950381, 4.387261284920534],
   };

   let markerLocations: LatLngExpression[] = Object.keys(markersInfo).map(k => markersInfo[k]);

   const initialView:LatLngExpression = [51.4612, 4.8675];
   const initialZoom = 8;

   const createMap = (container:any) => {
      let m = L.map(container, {
         preferCanvas: true,
      }).setView(initialView, initialZoom);
      
      L.tileLayer(
         tileMap, {
            attribution: tileAttribution,
            subdomains: 'abcd',
            maxZoom: 19,
         }
      ).addTo(m);

      return m;
   }

   // let toolbar = L.control({ position: 'topright' });
   // let toolbarComponent:any;
   // toolbar.onAdd = (map:any) => {
   //    let div = L.DomUtil.create('div');
   //    toolbarComponent = new Toolbar({
   //       target: div,
   //       props: {}
   //    })
   //    toolbarComponent.$on('showhide-markers', ({ detail }:any) => show = detail);
   //    toolbarComponent.$on('showhide-lines', ({ detail }:any) => lines = detail);
   //    toolbarComponent.$on('click-reset', () => {
   //       map.setView(initialView, initialZoom, { animate: true });
   //    })
   //    return div;
   // }

   // toolbar.onRemove = () => {
   //    if (toolbarComponent) {
   //       toolbarComponent.$destroy();
   //       toolbarComponent = null;
   //    }
   // }

   // Create popup with svelte component inside and handle removal
   const bindPopup = (marker:any, createFn:any) => {
      let popupComponent:any;
      marker.bindPopup(() => {
         let container = L.DomUtil.create('div');
         popupComponent = createFn(container);
         return container;
      });

      marker.on('popupclose', () => {
         if (popupComponent) {
            let old = popupComponent;
            popupComponent = null;
            setTimeout(() => {
               old.$destroy();
            }, 500);
         }
      });
   }

   let markers = new Map();

   const markerIcon = () => {
      let html = `
         <div class="map-marker transition-all duration-200 ease-in-out bg-primary/80 hover:bg-primary rounded-full p-1 !w-10 !h-10 flex flex-col items-center justify-center">
            <div class="w-fit">${markerIcons.trixoLogo}</div>
         </div>`;
      return L.divIcon({
         html,
         className: 'map-marker'
      })
   }

   const createMarker = (loc:LatLngExpression, country:string) => {
      let icon = markerIcon();
      let marker = L.marker(loc, { icon });
      bindPopup(marker, (m:any) => {
         let c = new MarkerPopup({
            target: m,
            props: {
               country: country,
            }
         });

         c.$on('change', ({ detail }:any) => {
            marker.setIcon(markerIcon());
         });

         return c;
      });
      return marker;
   }

   const createLines = () => {
      return L.polyline(markerLocations, {
         color: '#0b3259',
         weight: 4,
         opacity: 0.3,
         smoothFactor: 5
      });
   }

   let markerLayers:any;
   let lineLayers:any;
   const mapAction = (container:any) => {
      map = createMap(container);
      // Might add toolbar later
      // toolbar.addTo(map);

      markerLayers = L.layerGroup();

      Object.keys(markersInfo).forEach((k:string) => {
         let marker = createMarker(markersInfo[k], k);
         markerLayers.addLayer(marker);
      })

      lineLayers = createLines();

      markerLayers.addTo(map);
      lineLayers.addTo(map);

      return {
         destroy: () => {
            // toolbar.remove();
            map.remove();
            map = null;
         }
      }
   }

   const resizeMap = () => {
      if (map) map.invalidateSize();
   }

   const transition = "transition-all duration-300 ease-in-out"
</script>

<svelte:window on:resize={resizeMap} />

<div class="
		group {transition}
		w-full h-88 sm:h-104 md:h-152 lg:h-160 xl:h-180
		border-4 border-primary overflow-hidden">
   <div 
      class="map w-full h-full isolate"
      use:mapAction 
   />
</div>

<style>
   
	.map :global(.marker-text) {
		width:100%;
		text-align:center;
		font-weight:600;
		background-color:#444;
		color:#EEE;
		border-radius:0.5rem;
	}
	
	.map :global(.map-marker) {
		width:30px;
		transform:translateX(-50%) translateY(-25%);
	}
</style>