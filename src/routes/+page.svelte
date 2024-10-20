<script lang="ts">
	import Header from './Header.svelte';
	import LayerPanel from './LayerPanel.svelte';
	import MapComponent from './MapComponent.svelte';
</script>

<body class="h-screen">
	<div class="flex flex-col h-full p-2">
		<div class="flex-none">
			<Header />
		</div>

		<div class="flex flex-grow mt-2 gap-2 h-full">
			<div class="w-2/12">
				<LayerPanel />
			</div>

			<div class="w-10/12">
				<MapComponent />
			</div>
		</div>
	</div>
</body>
