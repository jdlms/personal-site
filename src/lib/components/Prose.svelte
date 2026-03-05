<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div
	class="prose max-w-none text-text-heading text-sm md:text-base prose-h1:font-bold prose-h1:text-xl prose-h2:text-text-heading prose-h3:text-text-heading prose-a:text-link prose-p:text-justify prose-img:rounded-xl prose-h2:underline prose-strong:text-highlight"
>
	{@render children()}
</div>
