<script lang="ts">
	const COOLDOWN_MS = 3 * 60 * 60 * 1000; // 3 hours

	let clicked = $state(false);
	let waveNumber: number | null = $state(null);

	function canWaveAgain() {
		const lastWaveTime = localStorage.getItem('lastWaveTime');
		if (!lastWaveTime) return true;
		return Date.now() - parseInt(lastWaveTime, 10) > COOLDOWN_MS;
	}

	async function handleClick() {
		if (clicked) return;
		clicked = true;

		if (canWaveAgain()) {
			try {
				const response = await fetch('/api/waves', {
					method: 'PUT'
				});

				if (!response.ok) {
					throw new Error(`Network response was not ok: ${response.statusText}`);
				}

				const { waveCount } = await response.json();

				if (waveCount !== undefined) {
					waveNumber = waveCount;
					localStorage.setItem('waveNumber', waveCount.toString());
					localStorage.setItem('lastWaveTime', Date.now().toString());
				}
			} catch (error) {
				console.error('There was an error:', error);
				clicked = false;
			}
		} else {
			const storedWaveNumber = localStorage.getItem('waveNumber');
			if (storedWaveNumber) {
				waveNumber = parseInt(storedWaveNumber, 10);
			}
		}
	}
</script>

<button
	type="button"
	class="group bg-surface border border-accent cursor-pointer flex justify-center items-center text-text-muted font-semibold text-sm py-1.5 px-4 rounded-full gap-2 hover:border-link focus:outline-none focus:ring-2 focus:ring-gray-700 transition-colors min-w-14 min-h-10"
	onclick={handleClick}
>
	{#if clicked && waveNumber !== null}
		<span>{waveNumber}</span>
	{:else}
		<span class="text-lg inline-block origin-bottom-right group-hover:animate-wave">👋🏻</span>
	{/if}
</button>
