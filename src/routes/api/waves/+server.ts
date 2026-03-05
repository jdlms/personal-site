import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ platform }) => {
	const KV_STORE = platform?.env?.KV_STORE;

	if (!KV_STORE) {
		console.error('KV_STORE is not defined');
		return new Response(JSON.stringify({ error: 'KV_STORE is not defined' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	try {
		const totalWaves = await KV_STORE.get('totalWaves');
		const waveCount = totalWaves ? parseInt(totalWaves, 10) : 0;

		return new Response(JSON.stringify({ waveCount }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : 'Internal Server Error';
		console.error('Error getting waves:', error);
		return new Response(JSON.stringify({ error: message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};

export const PUT: RequestHandler = async ({ platform }) => {
	const KV_STORE = platform?.env?.KV_STORE;

	if (!KV_STORE) {
		console.error('KV_STORE is not defined');
		return new Response(JSON.stringify({ error: 'KV_STORE is not defined' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	try {
		const totalWaves = await KV_STORE.get('totalWaves');
		let waveCount = totalWaves ? parseInt(totalWaves, 10) : 0;

		waveCount += 1;

		await KV_STORE.put('totalWaves', waveCount.toString());

		return new Response(JSON.stringify({ waveCount }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : 'Internal Server Error';
		console.error('Error updating waves:', error);
		return new Response(JSON.stringify({ error: message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
