<script lang="ts">
	import type { Snippet } from 'svelte';

	let { icon, children }: { icon: Snippet; children: Snippet } = $props();
</script>

<div class="w-20 h-36 p-5 rounded-lg border border-link flex items-center md:w-72 md:h-28 md:p-4">
	<div class="text-highlight shrink-0 md:ml-4">
		{@render icon()}
	</div>
	<div class="text-xs font-medium ml-4 font-mono text-text-heading">
		{@render children()}
	</div>
</div>
