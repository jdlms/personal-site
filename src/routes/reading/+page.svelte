<script lang="ts">
	let { data } = $props();
</script>

<div class="max-w-2xl mx-auto px-4 pb-20">
	<div class="flex justify-center mb-8">
		<div class="flex-1 mt-4 px-6 md:pt-2">
			<p class="text-text-heading text-sm md:text-sm font-light">
				More and more of my reading time on the web is taken up by blogs about software and systems, and less and less by, well, pretty much everything else. I often find provocative, informative, or bizarre posts that deeply resonate with me, that I want to hold on to and bookmark. This running, auto-updating list is my attempt to do that. It's just the posts, projects, and thoughts I find particularly interesting. If you're passing by, maybe you'll find something to enjoy too.
			</p>
		</div>
	</div>

	<div class="space-y-4">
		{#each data.bookmarks as bookmark}
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
			</div>
		{/each}
	</div>
</div>
