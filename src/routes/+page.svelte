<script lang="ts">
	import Header from './Header.svelte';
	import LayerPanel from './LayerPanel.svelte';
	import MapComponent from './MapComponent.svelte';
	import DateTimeSlider from './DateTimeSlider.svelte';

	let minutes: number = 0;
	let dayType: string = '';
</script>

<body class="flex flex-col h-screen p-4 -m-2">
	<!-- Header Section -->
	<div class="flex-none">
		<Header />
	</div>

	<!-- DateTimeSlider Section -->
	<div class="flex-none pt-2">
		<DateTimeSlider />
	</div>

	<!-- Main Content Section -->
	<div class="flex flex-grow pt-2 gap-2 overflow-hidden">
		<!-- Sidebar LayerPanel -->
		<div class="w-2/12 h-full">
			<LayerPanel />
		</div>

		<!-- MapComponent -->
		<div class="w-10/12 h-full overflow-hidden">
			<MapComponent />
		</div>
	</div>
</body>
