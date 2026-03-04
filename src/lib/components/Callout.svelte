<script lang="ts">
	import type { Snippet } from 'svelte';

	let { icon, children }: { icon: Snippet; children: Snippet } = $props();
</script>

<div class="p-3 rounded-lg border border-link flex items-center md:p-4 md:w-72 md:h-28">
	<div class="text-highlight shrink-0 md:ml-4">
		{@render icon()}
	</div>
	<div class="text-[10px] font-medium ml-3 font-mono text-text-heading md:text-xs md:ml-4">
		{@render children()}
	</div>
</div>
