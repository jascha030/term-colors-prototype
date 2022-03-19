<script lang="ts">
	import "../app.css";
</script>

<main class="w-full h-full">
	<slot />
</main>

<style global>
	html,
	body {
    @apply w-full h-full;
		padding: 0;
		margin: 0;
	}
</style>
