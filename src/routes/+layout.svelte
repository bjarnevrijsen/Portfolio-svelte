<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import '$lib/i18n';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
