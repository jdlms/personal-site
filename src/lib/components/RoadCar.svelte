<script lang="ts">
	import { onMount } from 'svelte';

	const vehicles = ['🚗', '🚙', '🚚', '🚕', '🚛', '🛻'];

	let position = $state(110);
	let opacity = $state(0);
	let vehicle = $state(vehicles[0]);
	let showPuff = $state(false);
	let driving = $state(false);
	let mounted = $state(false);

	function pickVehicle() {
		return vehicles[Math.floor(Math.random() * vehicles.length)];
	}

	function generateVisibilityWindows() {
		const numAppearances = Math.random() < 0.5 ? 4 : 5;
		const windows: { start: number; end: number }[] = [];
		const totalRange = 75; // 90 to 15
		const segmentSize = totalRange / numAppearances;

		for (let i = 0; i < numAppearances; i++) {
			const segmentStart = 90 - i * segmentSize;
			const segmentEnd = segmentStart - segmentSize;

			// Random start within first half of segment
			const start = segmentStart - Math.random() * (segmentSize * 0.3);
			// Visible for max 1 second (at 0.5 per 30ms = ~16 units max)
			const maxVisibleDistance = 16;
			const visibleDistance = Math.min(maxVisibleDistance, Math.random() * 10 + 6);
			const end = start - visibleDistance;

			windows.push({ start, end: Math.max(end, segmentEnd + 5) });
		}

		return windows;
	}

	onMount(() => {
		mounted = true;
		let driveInterval: ReturnType<typeof setInterval>;

		const startDrive = () => {
			if (driving) return;
			driving = true;
			position = 100;
			opacity = 1;
			vehicle = pickVehicle();
			showPuff = Math.random() > 0.4;

			const windows = generateVisibilityWindows();
			// Set first window to start at 100 so car is visible immediately
			windows[0].start = 100;
			let currentWindowIndex = 0;
			let isVisible = true;

			// Animate position
			driveInterval = setInterval(() => {
				position -= 0.5;

				// Check visibility windows
				if (currentWindowIndex < windows.length) {
					const window = windows[currentWindowIndex];

					// Fade in when entering window
					if (!isVisible && position <= window.start) {
						isVisible = true;
						opacity = 1;
						vehicle = pickVehicle();
						showPuff = Math.random() > 0.4;
					}

					// Fade out when exiting window
					if (isVisible && position <= window.end) {
						isVisible = false;
						opacity = 0;
						currentWindowIndex++;
					}
				}

				// Stop when off screen
				if (position < -10) {
					clearInterval(driveInterval);
					driving = false;
					opacity = 0;
				}
			}, 30);
		};

		// Initial delay
		const initialTimeout = setTimeout(startDrive, 1000);

		// Repeat the circuit
		const repeatInterval = setInterval(() => {
			if (!driving) {
				startDrive();
			}
		}, 5000);

		return () => {
			clearTimeout(initialTimeout);
			clearInterval(repeatInterval);
			clearInterval(driveInterval);
		};
	});
</script>

{#if mounted}
	<div
		class="absolute -top-5 pointer-events-none select-none text-sm transition-opacity duration-300 whitespace-nowrap flex items-center"
		style="left: {position}%; opacity: {opacity};"
	>
		<span>{vehicle}</span>{#if showPuff}<span>💨</span>{/if}
	</div>
{/if}
