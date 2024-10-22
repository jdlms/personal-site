import type { APIContext } from "astro";

export async function onRequest({ locals }: APIContext) {
  // the type KVNamespace comes from the @cloudflare/workers-types package
  const { MY_KV } = locals.runtime.env;

  try {
    let totalWaves = await MY_KV.get(
      "totalWaves"
    );

    totalWaves = totalWaves ? parseInt(totalWaves, 10) : 0;
    totalWaves += 1;

    let updateWaves = totalWaves.toString();

    return new Response(updateWaves, {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}
