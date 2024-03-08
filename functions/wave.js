export async function onRequest(context) {
  let totalWaves = await context.env.KV_STORE.get(
    "totalWaves"
  );

  totalWaves = totalWaves ? parseInt(totalWaves) : 0;

  totalWaves += 1;

  increment(totalWaves);

  return totalWaves.toString();
}

async function increment(context, waves) {
  await context.env.KV_STORE.put(
    "totalWaves",
    waves.toString()
  );
}
