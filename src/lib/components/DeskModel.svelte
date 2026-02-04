<script lang="ts">
	import { T, useThrelte } from '@threlte/core';
	import { useGltf, useDraco, OrbitControls } from '@threlte/extras';
	import { Color } from 'three';

	const { renderer } = useThrelte();
	renderer.setClearColor('#262e3d');
	renderer.toneMappingExposure = 0.9;

	const dracoLoader = useDraco();
	const gltf = useGltf('/model/Desk-compressed.glb', { dracoLoader });

	$effect(() => {
		if ($gltf) {
			Object.values($gltf.materials).forEach((material: any) => {
				material.color = new Color('#efd8cb');
				material.needsUpdate = true;
			});
		}
	});
</script>

<T.PerspectiveCamera makeDefault position={[0, 7, -10]} fov={75}>
	<OrbitControls
		enableZoom={false}
		enablePan={false}
		autoRotate={true}
		autoRotateSpeed={4}
		target={[2, 2.9, 1]}
	/>
</T.PerspectiveCamera>

<T.Color attach="background" args={['#262e3d']} />

<T.AmbientLight intensity={2} />
<T.PointLight position={[0, 18, -10]} intensity={500} color="#fff5eb" distance={0} />


{#if $gltf}
	<T is={$gltf.scene} />
{/if}
