
<script lang="ts">
	import "ol/ol.css"
	import Feature from 'ol/Feature';
	import Map from 'ol/Map';
	import Overlay from 'ol/Overlay';
	import Point from 'ol/geom/Point';
	import TileJSON from 'ol/source/TileJSON';
	import VectorSource from 'ol/source/Vector';
	import { Icon, Style } from 'ol/style';
	import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
	import OSM from 'ol/source/OSM';
	import View from 'ol/View';
	import { onMount } from 'svelte';

	
	onMount(() => {
		const iconFeature = new Feature({
			geometry: new Point([0, 0]),
			name: 'Trixolutions België',
			population: 4000,
			rainfall: 500,
		});
	
		const iconStyle = new Style({
			image: new Icon({
				anchor: [0.5, 46],
				anchorXUnits: 'fraction',
				anchorYUnits: 'pixels',
				src: 'data/icon.png',
			}),
		})
	
		iconFeature.setStyle(iconStyle);
	
		const vectorSource = new VectorSource({
			features: [iconFeature],
		});
		const vectorLayer = new VectorLayer({
			source: vectorSource,
		});
		const rasterLayer = new TileLayer({
			source: new TileJSON({
				// url: 'https://api.tiles.mapbox.com/v3/mapbox.geography-class.json?secure',
				url: 'https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1',
				crossOrigin: '',
			})
		});

		const map = new Map({
			target: 'map',
			layers: [rasterLayer, vectorLayer],
			view: new View({
				center: [0, 0],
				zoom: 3,
			}),
		});

		const element = document.getElementById('popup')?? undefined;
		const popup = new Overlay({
			element: element,
			positioning: 'bottom-center',
			stopEvent: false,
			offset: [0, -50],
		});

		map.addOverlay(popup);

		let popover:any;
		const disposePopover = () => {
			if (popover) {
				popover.dispose();
				popover = undefined;
			}
		}
		
		// Display popup on click
		map.on('click', (evt) => {
			const feature = map.forEachFeatureAtPixel(evt.pixel, (feature) => {
				return feature;
			});
			disposePopover()
			if (!feature) {
				return;
			}
			popup.setPosition(evt.coordinate);
			popover = new bootstrap.Popover(element, {
				placement: 'top',
				html: true,
				trigger: 'manual',
				content: feature.get('name'),
			});
			popover.show();
		});

		// Change mouse cursor when over marker
		map.on('pointermove', e => {
			const pixel = map.getEventPixel(e.originalEvent);
			const hit = map.hasFeatureAtPixel(pixel);
			map.getTargetElement().style.cursor = hit ? 'pointer' : '';
		})
		// Close popup when map is moved
		map.on('movestart', disposePopover());
		
		const zoomOut = document.getElementById('zoom-out')?? undefined;
		const zoomIn = document.getElementById('zoom-in')?? undefined;
		
		if (zoomOut && zoomIn) {
			zoomOut.onclick = function () {
				const view = map.getView();
				const zoom = view.getZoom();
				if (zoom) view.setZoom(zoom - 1);
			}
			zoomIn.onclick = function () {
				const view = map.getView();
				const zoom = view.getZoom();
				if (zoom) view.setZoom(zoom + 1);
			}
		}

	})

	const transition = "transition-all duration-300 ease-in-out"
</script>

<div class="">
	<div class="flex flex-row gap-2">
		<div id="zoom-in">ZOOM IN</div>
		<div id="zoom-out">ZOOM OUT</div>
	</div>
	<div class="relative h-88 sm:h-104 md:h-152 lg:h-160 xl:h-180">
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<div 
			id="map" 
			tabindex="0"
			class="
				map {transition}
				opacity-70 hover:opacity-80 focus:opacity-100
				w-full h-full
				border-4 border-primary
				absolute top-0 bottom-0"
		>
			<div 
				id="popup" 
				class="popup z-10 bg-primary-l3 h-10 w-20">
				Trixolutions België
			</div>
		</div>
	</div>
</div>