// src/pages/api/getWaves.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals }) => {
  const { KV_STORE } = locals.runtime.env;

  if (!KV_STORE) {
    console.error('KV_STORE is not defined');
    return new Response('KV_STORE is not defined', { status: 500 });
  }

  try {
    let totalWaves = await KV_STORE.get("totalWaves");
    let waveCount = totalWaves ? parseInt(totalWaves, 10) : 0;

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
