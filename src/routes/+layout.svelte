<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>jdlms.site</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Nav />
	<main class="grow max-w-2xl mx-auto px-4 py-8 w-full">
		{@render children()}
	</main>
	<div class="max-w-2xl mx-auto px-4 w-full mb-4">
		<SocialLinks />
	</div>
	<Footer />
</div>
