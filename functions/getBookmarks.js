export async function onRequest(context) {
  const ps = context.env.bookmarks.prepare(
    "SELECT * from users"
  );
  const data = await ps.all();

  return Response.json(data);
}
