// src/pages/api/updateWaves.ts
import type { APIRoute } from 'astro';

export const PUT: APIRoute = async ({ locals }) => {
    const { KV_STORE } = locals.runtime.env;

    if (!KV_STORE) {
        console.error('KV_STORE is not defined');
        return new Response(JSON.stringify({ error: 'KV_STORE is not defined' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        let totalWaves = await KV_STORE.get("totalWaves");
        let waveCount = totalWaves ? parseInt(totalWaves, 10) : 0;

        waveCount += 1;

        await KV_STORE.put("totalWaves", waveCount.toString());

        return new Response(JSON.stringify({ waveCount }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error: any) {
        console.error('Error updating waves:', error);
        return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};