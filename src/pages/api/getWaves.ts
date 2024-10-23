// src/pages/api/getWaves.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals }) => {
  const { KV_STORE } = locals.runtime.env;

  if (!KV_STORE) {
    console.error('KV_STORE is not defined');
    return new Response('KV_STORE is not defined', { status: 500 });
  }

  try {
    // Retrieve the current wave count
    let totalWaves = await KV_STORE.get("totalWaves");

    // Parse the current wave count or initialize to 0
    let waveCount = totalWaves ? parseInt(totalWaves, 10) : 0;

    // Increment the wave count
    waveCount += 1;

    // Update the KV store with the new count
    await KV_STORE.put("totalWaves", waveCount.toString());

    // Return the updated count
    return new Response(JSON.stringify({ waveCount }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    console.error('Error updating waves:', error);
    return new Response(error.message || 'Internal Server Error', { status: 500 });
  }
};
