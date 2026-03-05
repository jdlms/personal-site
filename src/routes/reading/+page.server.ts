import type { PageServerLoad } from './$types';

interface Bookmark {
	id: string;
	title: string;
	summary: string;
	url: string;
	published: string;
}

function fixDate(dateString: string): string {
	// Fix malformed year 0200 -> 2025
	if (dateString.startsWith('0200-')) {
		return dateString.replace('0200-', '2025-');
	}
	return dateString;
}

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('https://get_bookmarks.jdlms.dev');
	const bookmarks: Bookmark[] = await response.json();

	// Fix malformed dates
	bookmarks.forEach(b => b.published = fixDate(b.published));

	// Sort by published date (newest first)
	const sortedBookmarks = bookmarks
		.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());

	return {
		bookmarks: sortedBookmarks
	};
};
