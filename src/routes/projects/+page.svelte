<script lang="ts">
	import type { ProjectModule, ProjectMetadata } from '$lib/types/project';

	const projectModules = import.meta.glob('$content/projects/*.md', { eager: true });

	const projects: ProjectMetadata[] = Object.entries(projectModules)
		.map(([, module]) => {
			const { metadata } = module as ProjectModule;
			return metadata;
		})
		.sort((a, b) => b.id - a.id);
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-12 pb-30">
	{#each projects as project}
		<a
			href={project.link}
			target="_blank"
			rel="noopener noreferrer"
			class="bg-desk-background border border-surface-alt rounded-lg p-5 flex flex-col justify-between hover:border-highlight transition-colors"
		>
			<div>
				<h4 class="text-link font-bold text-sm mb-2">{project.title}</h4>
				<p class="text-text text-xs">{project.blurb}</p>
			</div>
			<div class="flex flex-wrap gap-2 mt-4">
				{#each project.tags as tag}
					<span class="border border-surface-alt rounded-full px-3 py-1 text-text-muted text-xs">
						{tag}
					</span>
				{/each}
			</div>
		</a>
	{/each}
</div>
