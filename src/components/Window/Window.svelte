<script>
	import DragBar from './Bar/DragBar.svelte';
</script>

<div class="p-20 bottom-0 absolute top-0 left-0 right-0">
	<div class="rounded-xl drop-shadow-md aspect-video bg-ansi-black ratio-1/9 text-white w-auto m-auto max-h-full min-w-fit">
		<DragBar />
		<div id="content">
			<!--<div class="absolute left-0 right-0 top-8 bottom-3/4 min-h-fit">-->
			<div class="w-full min-w-fit">
				<pre class="text-slate-200 text-center w-full min-h-fit">
_____                       _____              ______
__  /___________________ ______(_)____________ ___  /
_  __/  _ \_  ___/_  __ `__ \_  /__  __ \  __ `/_  / 
/ /_ /  __/  /   _  / / / / /  / _  / / / /_/ /_  /  
\__/ \___//_/    /_/ /_/ /_//_/  /_/ /_/\__,_/ /_/   
        </pre>
			</div>
			<!--<div class="absolute left-0 right-0 bottom-8 top-1/4">-->
			<div class="w-full flex-grow min-w-fit">
				<div class="flex flex-col h-full w-full">
					<div class="flex-grow p-2">other content</div>
					<div class="p-2">current line</div>
					<div class="p-2">statusline</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	pre {
		line-height: 1.3;
	}

  #content {
    @apply flex flex-col w-full h-full min-w-fit;
  }
</style>
