export async function onRequest(context) {
  const ps = context.env.bookmarks.prepare(
    "SELECT * from StarredPosts"
  );
  const data = await ps.all();

  return Response.json(data);
}
// export default {
// 	async fetch(request, env) {
// 		const { pathname } = new URL(request.url);

// 		if (pathname === '/api/bookmarks') {
// 			const { results } = await env.DB.prepare('SELECT * FROM StarredPosts').all();
// 			return Response.json(results);
// 		}

// 		return new Response('Call /api/bookmarks to see get full bookmark list');
// 	},
// };
