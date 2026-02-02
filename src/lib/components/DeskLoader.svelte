<script lang="ts">
	import { browser } from '$app/environment';
</script>

<div class="w-48 h-48 mx-auto mb-4">
	{#if browser}
		{#await import('./DeskScene.svelte')}
			<div class="w-48 h-48 rounded-full bg-zinc-800 flex items-center justify-center">
				<div class="w-10 h-10 border-4 border-zinc-600 border-t-zinc-400 rounded-full animate-spin"></div>
			</div>
		{:then DeskScene}
			<DeskScene.default />
		{/await}
	{:else}
		<div class="w-48 h-48 rounded-full bg-zinc-800 flex items-center justify-center">
			<div class="w-10 h-10 border-4 border-zinc-600 border-t-zinc-400 rounded-full animate-spin"></div>
		</div>
	{/if}
</div>
