export async function onRequestGet(context) {
  return context.env.getBookmarks.fetch(context.request);
}
