// export async function onRequest(context) {
//   try {
//     let totalWaves = await context.env.KV_STORE.get(
//       "totalWaves"
//     );

//     totalWaves = totalWaves ? parseInt(totalWaves) : 0;

//     totalWaves += 1;

//     increment(context, totalWaves);

//     return new Response(totalWaves.toString());
//   } catch (error) {
//     return new Response("Error processing waves request", {
//       status: 500,
//     });
//   }
// }

// async function increment(context, waves) {
//   await context.env.KV_STORE.put(
//     "totalWaves",
//     waves.toString()
//   );
// }

export async function onRequest(context) {
  try {
    let totalWaves = await context.env.KV_STORE.get(
      "totalWaves"
    );
    totalWaves = totalWaves ? parseInt(totalWaves, 10) : 0;
    totalWaves += 1;

    context.env.KV_STORE.put(
      "totalWaves",
      totalWaves.toString()
    ).catch(console.error);

    return new Response(totalWaves.toString(), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}
