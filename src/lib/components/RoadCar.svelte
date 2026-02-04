<script lang="ts">
	import { onMount } from 'svelte';

	const vehicles = ['🚗', '🚙', '🚚', '🚕', '🚛', '🛻'];

	type Car = {
		id: number;
		position: number;
		opacity: number;
		vehicle: string;
		showPuff: boolean;
		speed: number;
		fadeOutAt: number;
	};

	let cars = $state<Car[]>([]);
	let mounted = $state(false);
	let nextId = 0;
	let recentPuffs: boolean[] = [];

	function pickVehicle() {
		return vehicles[Math.floor(Math.random() * vehicles.length)];
	}

	function shouldShowPuff() {
		// If last 2 cars had puffs, no puff this time
		if (recentPuffs.length >= 2 && recentPuffs.slice(-2).every(Boolean)) {
			recentPuffs.push(false);
			if (recentPuffs.length > 5) recentPuffs.shift();
			return false;
		}

		const show = Math.random() > 0.4;
		recentPuffs.push(show);
		if (recentPuffs.length > 5) recentPuffs.shift();
		return show;
	}

	function spawnCar() {
		// Random start position anywhere along the road (15-95%)
		const startPosition = Math.random() * 80 + 15;
		const speed = Math.random() * 0.2 + 0.4; // 0.4-0.6 speed variation
		const visibleDuration = Math.random() * 10 + 8; // Will be visible for 8-18 units

		// Make sure fadeOutAt doesn't go below 5%
		const fadeOutAt = Math.max(5, startPosition - visibleDuration);

		const car: Car = {
			id: nextId++,
			position: startPosition,
			opacity: 0,
			vehicle: pickVehicle(),
			showPuff: shouldShowPuff(),
			speed,
			fadeOutAt
		};

		cars.push(car);

		// Fade in
		setTimeout(() => {
			const c = cars.find((x) => x.id === car.id);
			if (c) c.opacity = 1;
		}, 50);
	}

	onMount(() => {
		mounted = true;

		// Main animation loop
		const driveInterval = setInterval(() => {
			cars = cars
				.map((car) => {
					car.position -= car.speed;

					// Fade out when reaching fadeOutAt point
					if (car.position <= car.fadeOutAt && car.opacity > 0) {
						car.opacity = 0;
					}

					return car;
				})
				.filter((car) => car.position > -15 && (car.opacity > 0 || car.position > car.fadeOutAt - 5));
		}, 30);

		// Spawn cars at random intervals
		const spawnLoop = () => {
			// Only spawn if we don't have too many cars
			if (cars.length < 5) {
				spawnCar();
			}

			// Random interval between spawns (800ms - 2000ms)
			const nextSpawn = Math.random() * 1200 + 800;
			setTimeout(spawnLoop, nextSpawn);
		};

		// Start immediately
		spawnLoop();

		return () => {
			clearInterval(driveInterval);
		};
	});
</script>

{#if mounted}
	{#each cars as car (car.id)}
		<div
			class="absolute -top-5 pointer-events-none select-none text-sm transition-opacity duration-300 whitespace-nowrap flex items-center"
			style="left: {car.position}%; opacity: {car.opacity};"
		>
			<span>{car.vehicle}</span>{#if car.showPuff}<span>💨</span>{/if}
		</div>
	{/each}
{/if}
