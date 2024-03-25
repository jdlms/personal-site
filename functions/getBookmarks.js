export async function onRequest(context) {
  const ps = context.env.NORTHWIND_DB.prepare(
    "SELECT * from users"
  );
  const data = await ps.all();

  return Response.json(data);
}
