<script lang="ts">
	import { MapLibre, GeoJSON, LineLayer, SymbolLayer, MarkerLayer } from 'svelte-maplibre';
	let clickedFeature: { name?: string } | null = null;
</script>

<div class="h-full border-gray-600">
	<MapLibre
		style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
		class="h-full rounded-2xl border-gray-600 border-2"
		standardControls
		center={[138.915, 36.383]}
		zoom={10}
		images={[{ id: 'busStopIcon', url: 'busStop.png' }]}
	>
		<!-- バスルート -->
		<GeoJSON id="busRoute" data="data/bus_route.geojson">
			<LineLayer
				paint={{
					'line-width': 2,
					'line-color': '#008800',
					'line-opacity': 0.7
				}}
			/>
		</GeoJSON>

		<!-- パス停 -->
		<GeoJSON id="busStop" data="data/stops.geojson">
			<SymbolLayer
				layout={{
					'icon-image': 'busStopIcon', // 事前に画像を定義して使用
					'icon-size': 0.5,
					'icon-allow-overlap': true, // アイコンが重なっても表示
					'text-field': '{name}', // バス停の名前を表示
					'text-offset': [0, -2], // アイコンとテキストの間隔
					'text-size': 10 // テキストのサイズ
				}}
				minzoom={12}
				on:click={(e) => (clickedFeature = e.detail.features?.[0]?.properties)}
			/>
		</GeoJSON>
	</MapLibre>
</div>

{#if clickedFeature}
	<p>バス停名: <span class="font-bold text-gray-800">{clickedFeature.name}</span></p>
{/if}
