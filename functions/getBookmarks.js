export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  url.pathname = "/api/bookmarks";

  return context.env.getBookmarks.fetch(
    url.toString(),
    context.request
  );
}
