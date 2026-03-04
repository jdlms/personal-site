import type { RequestHandler } from './$types';

interface PostMetadata {
	title: string;
	pubDatetime?: string | Date;
	date?: string | Date;
	description: string;
	draft?: boolean;
}

interface PostModule {
	metadata: PostMetadata;
}

export const prerender = true;

export const GET: RequestHandler = async () => {
	const postModules = import.meta.glob('$content/blog/*.md', { eager: true });

	const posts = Object.entries(postModules)
		.map(([path, module]) => {
			const { metadata } = module as PostModule;
			const slug = path.split('/').pop()?.replace('.md', '') ?? '';
			const dateValue = metadata.pubDatetime ?? metadata.date;
			const date = dateValue ? new Date(dateValue) : null;

			return {
				slug,
				title: metadata.title ?? slug,
				date,
				description: metadata.description ?? '',
				draft: metadata.draft ?? false
			};
		})
		.filter((post) => !post.draft)
		.sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));

	const siteUrl = 'https://jdlms.site';

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>jdlms.site</title>
    <link>${siteUrl}</link>
    <description>Joshua LaMorey-Salzmann's blog</description>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${posts[0]?.date?.toUTCString() ?? new Date().toUTCString()}</lastBuildDate>
    ${posts
      .map(
        (post) => `<item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/post/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/post/${post.slug}</guid>
      <description>${escapeXml(post.description)}</description>
      ${post.date ? `<pubDate>${post.date.toUTCString()}</pubDate>` : ''}
    </item>`
      )
      .join('\n    ')}
  </channel>
</rss>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}
