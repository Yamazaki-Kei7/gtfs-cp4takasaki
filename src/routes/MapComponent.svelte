<script lang="ts">
	import { MapLibre, GeoJSON, LineLayer } from 'svelte-maplibre';
</script>

<div class="h-full border-gray-600">
	<MapLibre
		style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
		class="h-full rounded-2xl border-gray-600 border-2"
		standardControls
		center={[138.915, 36.383]}
		zoom={10}
	>
		<GeoJSON id="busRoute" data="data/bus_route.geojson">
			<LineLayer
				paint={{
					'line-width': 2,
					'line-color': '#008800',
					'line-opacity': 0.7
				}}
			/>
		</GeoJSON>
	</MapLibre>
</div>
