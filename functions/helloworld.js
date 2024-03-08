export async function onRequest(context) {
  const task = await context.env.KV_STORE.get("totalWaves");
  return new Response(task);
}
