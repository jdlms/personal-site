import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';

const highlighterPromise = createHighlighter({
	themes: ['github-dark'],
	langs: ['javascript', 'ts', 'json', 'bash', 'shell', 'html', 'css', 'svelte', 'markdown']
});

/**
 * Escape curly braces and remove tabindex for a11y
 */
function escapeSvelte(html) {
	return html
		.replace(/\{/g, '&#123;')
		.replace(/\}/g, '&#125;')
		.replace(/ tabindex="0"/g, '');
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Tell SvelteKit to also process .md files
	extensions: ['.svelte', '.md'],

	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await highlighterPromise;
					const language = highlighter.getLoadedLanguages().includes(lang) ? lang : 'text';
					const html = highlighter.codeToHtml(code, { lang: language, theme: 'github-dark' });
					return escapeSvelte(html);
				}
			}
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		}),
		alias: {
			$content: 'src/content'
		}
	}
};

export default config;
