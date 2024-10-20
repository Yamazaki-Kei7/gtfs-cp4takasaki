<script lang="ts">
	import { MapLibre } from 'svelte-maplibre';
</script>

<div class="h-full border-gray-600">
	<MapLibre
		style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
		class="h-full rounded-2xl border-gray-600 border-2"
		standardControls
		center={[139.015, 36.333]}
		zoom={10}
	/>
</div>
