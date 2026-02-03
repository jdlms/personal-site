<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { ACESFilmicToneMapping } from 'three';
	import DeskModel from './DeskModel.svelte';

	let { size = 'md' }: { size?: 'sm' | 'md' } = $props();

	const sizeClasses = {
		sm: 'w-[60px] h-[60px]',
		md: 'w-48 h-48'
	};
</script>

<div class="{sizeClasses[size]} rounded-full overflow-hidden shadow-inner cursor-pointer mx-auto bg-zinc-800 relative">
	<Canvas toneMapping={ACESFilmicToneMapping}>
		<DeskModel />
	</Canvas>
</div>
