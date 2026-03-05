<script>
	import Now from '$lib/components/Now.svelte';
	import Wave from '$lib/components/Wave.svelte';
</script>

<div class="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start mt-4 mb-5">
	<div class="flex-1 md:pt-2">
		<p class="text-text-heading text-sm md:text-base font-light leading-normal">
			<span class="font-normal">Hi, I'm Joshua</span>. I have a deep enthusisam for cloud-engineering, infrastructure, and automation. I value creativity, iteration, and failing fast to learn more than I knew before. This is my personal site, where I bookmark what I've been reading and try to collect what I've been learning.  🌱
		</p>
	</div>
	<div class="shrink-0 hidden md:block">
		<img
			src="/image.jpg"
			alt="Profile"
			class="w-36 h-36 rounded-full object-cover border-2 border-zinc-800"
		/>
	</div>
</div>

<div class="mb-8">
	<p class="text-text-heading text-sm md:text-base font-light leading-normal">
		Some things I'm enthusiastic about: leveraging the cloud, modular systems architecture, balancing tradeoffs, limiting dependencies, Go, Typescript, self-hosting, buildling a home lab and reducing cognitive load whenever possible. When it comes to devops and cloud technology, I stay omnivorous and hungry.
	</p>
</div>

<div class="flex flex-col items-center gap-6 my-10 md:flex-row md:justify-center md:gap-22 md:my-16">
	<Now />
	<div class="flex items-center gap-6 md:gap-22">
		<div class="md:hidden shrink-0">
			<img
				src="/image.jpg"
				alt="Profile"
				class="w-36 h-36 rounded-full object-cover border-2 border-zinc-800"
			/>
		</div>
		<Wave />
	</div>
</div>
