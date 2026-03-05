import { error } from '@sveltejs/kit';
import type { PostModule } from '$lib/types/post';

export const load = async ({ params }: { params: { slug: string } }) => {
	const modules = import.meta.glob('$content/blog/*.md', { eager: true });
	const match = Object.entries(modules).find(([path]) =>
		path.endsWith(`/${params.slug}.md`)
	);

	if (!match) {
		throw error(404, 'Post not found');
	}

	const [, module] = match;
	const { metadata, default: component } = module as PostModule;

	return {
		metadata,
		component
	};
};
