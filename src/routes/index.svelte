<script>
	import Navbar from '../components/Menu/Navbar.svelte';
	import Sidebar from '../components/Menu/Sidebar.svelte';
	import Window from '../components/Window/Window.svelte';
</script>

<div class="w-full h-full bg-backgroundDarker">
	<Navbar />

	<div class="w-full absolute left-0 right-0 bottom-0 top-16 grid grid-cols-6">
		<div class="col col-span-1">
      <Sidebar />
    </div>
		<div class="col col-span-5 relative">
      <Window />
    </div>
	</div>
</div>
