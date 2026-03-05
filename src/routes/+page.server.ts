import type { PageServerLoad } from './$types';

interface GitHubRepo {
	id: number;
	name: string;
	full_name: string;
	description: string | null;
	html_url: string;
	stargazers_count: number;
	language: string | null;
}

interface GitHubSearchResponse {
	items: GitHubRepo[];
}

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch(
		'https://api.github.com/search/repositories?q=stars:>10000&sort=stars&per_page=10'
	);

	if (!response.ok) {
		return { repos: [] };
	}

	const data: GitHubSearchResponse = await response.json();

	return {
		repos: data.items.map((repo) => ({
			id: repo.id,
			name: repo.name,
			fullName: repo.full_name,
			description: repo.description,
			url: repo.html_url,
			stars: repo.stargazers_count,
			language: repo.language
		}))
	};
};
