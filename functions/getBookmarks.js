export async function onRequestGet(context) {
  const bookmarksUrl =
    "https://bookmarks.lamorey-joshua.workers.dev/";

  const response = await fetch(bookmarksUrl);

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
