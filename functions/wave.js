export async function onRequest(context) {
  try {
    let totalWaves = await context.env.KV_STORE.get(
      "totalWaves"
    );
    totalWaves = totalWaves ? parseInt(totalWaves, 10) : 0;
    totalWaves += 1;

    let updateWaves = totalWaves.toString();

    await context.env.KV_STORE.put(
      "totalWaves",
      updateWaves
    ).catch(console.error);

    return new Response(totalWaves.toString(), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}
