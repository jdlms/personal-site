<script lang="ts">
	let { data } = $props();

	const itemsPerPage = 30;
	let currentPage = $state(1);

	let totalPages = $derived(Math.ceil(data.bookmarks.length / itemsPerPage));
	let startIndex = $derived((currentPage - 1) * itemsPerPage);
	let paginatedBookmarks = $derived(data.bookmarks.slice(startIndex, startIndex + itemsPerPage));

	function prevPage() {
		if (currentPage > 1) currentPage--;
	}

	function nextPage() {
		if (currentPage < totalPages) currentPage++;
	}

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		const month = String(date.getMonth() + 1).padStart(2, '0');
		let year = date.getFullYear();
		if (year === 200) year = 2025;
		return `${month}/${year}`;
	}
</script>

<div class="max-w-2xl mx-auto px-4 pb-20">
	<div class="flex justify-center mb-8">
		<div class="flex-1 mt-4 px-6 md:pt-2">
			<p class="text-text-heading text-sm md:text-sm font-light">
			More and more of my reading time on the web is taken up by blogs and less and less by pretty much everything else. This running, auto-updating list is an attempt to bookmark posts and projects about software development that I've found particularly interesting and want to hold on to. If you're passing through, you might find something to enjoy too.
			</p>
		</div>
	</div>

	<div class="space-y-4">
		{#each paginatedBookmarks as bookmark}
			<div class="flex items-center gap-4">
				<svg
					class="w-4 h-4 shrink-0 text-text-muted"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<a
					href={bookmark.url}
					target="_blank"
					rel="noopener noreferrer"
					class="flex-1 text-text-heading font-extralight"
				>
					{bookmark.title}
				</a>
				<span class="text-xs text-highlight shrink-0 font-mono">
					{formatDate(bookmark.published)}
				</span>
			</div>
		{/each}
	</div>

	{#if totalPages > 1}
		<div class="mt-8 flex justify-end gap-2">
			<button
				onclick={prevPage}
				disabled={currentPage === 1}
				aria-label="Previous page"
				class="p-2 rounded text-text-muted hover:text-text-heading disabled:opacity-30 disabled:cursor-not-allowed"
			>
				<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="m15 18-6-6 6-6"/>
				</svg>
			</button>
			<span class="text-text-muted text-sm flex items-center">
				{currentPage} / {totalPages}
			</span>
			<button
				onclick={nextPage}
				disabled={currentPage === totalPages}
				aria-label="Next page"
				class="p-2 rounded text-text-muted hover:text-text-heading disabled:opacity-30 disabled:cursor-not-allowed"
			>
				<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="m9 18 6-6-6-6"/>
				</svg>
			</button>
		</div>
	{/if}
</div>
