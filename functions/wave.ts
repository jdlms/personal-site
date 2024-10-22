import type { APIContext } from "astro";


export async function onRequest({ locals }: APIContext) {
  const { MY_KV } = locals.runtime.env;


  try {
    let totalWaves = await MY_KV.get(
      "totalWaves"
    );

    console.log("logging totalWaves:", totalWaves);

    totalWaves = totalWaves ? parseInt(totalWaves, 10) : 0;
    totalWaves += 1;

    let updateWaves = totalWaves.toString();

    await MY_KV.put(
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
