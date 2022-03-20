<script lang="ts">
	import TrafficLights from './TrafficLights.svelte';

	export let textColor: string = '#ffffff';

	$: textStyles = `color:${textColor}`;
</script>

<div class={'w-full h-8 content-center rounded-t-xl grid grid-cols-3'}>
	<TrafficLights />
	<div class="flex align-content-center justify-center">
		<p class="align-self-center" style={textStyles}>Title</p>
	</div>
	<div />
</div>
