<script lang="ts">
	import { page } from '$app/stores';

	let pathname = $derived($page.url.pathname);
	let isBlogRoute = $derived(pathname === '/blog' || pathname.includes('/post'));
</script>

<nav class="flex max-w-2xl mx-auto px-4 w-full justify-between pb-5 pt-6">
	<div class="flex items-center">
		<a
			href="/"
			class="px-3 py-2 text-md text-text-muted font-extrabold font-mono border-2 rounded border-accent flex items-center gap-3"
		>
			<div class="w-15 h-15">
				{#await import('./DeskScene.svelte')}
					<div class="w-15 h-15 rounded-full bg-zinc-800"></div>
				{:then DeskScene}
					<DeskScene.default size="sm" />
				{/await}
			</div>
			jdlms
		</a>
	</div>

	{#if isBlogRoute}
		<div class="flex items-center">
			<a
				class="text-xs text-text-muted border-b border-link p-2 flex gap-2 font-bold"
				href={pathname.includes('/post/') ? '/blog' : '/'}
			>
				more
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="text-accent"
				>
					<path
						d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z"
						fill="currentColor"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z"
						fill="currentColor"
					/>
				</svg>
			</a>
		</div>
	{:else}
		<ul class="flex items-center gap-1">
			<li>
				<a
					href="/about"
					class="px-2 py-2 text-xs md:text-sm text-link font-bold underline decoration-text/20 decoration-1"
				>
					about
				</a>
			</li>
			<li>
				<a
					href="/reading"
					class="px-2 py-2 text-xs md:text-sm text-text-muted font-bold underline decoration-text/20 decoration-1"
				>
					reading
				</a>
			</li>
			<li>
				<a
					href="/blog"
					class="px-2 py-2 text-xs md:text-sm text-link font-bold underline decoration-text/20 decoration-1"
				>
					blog
				</a>
			</li>
		</ul>
	{/if}
</nav>
