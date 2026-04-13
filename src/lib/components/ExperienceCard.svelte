<script lang="ts">
	import type { Experience } from '$lib';
	import { _ } from '$lib/i18n';
	const { exp }: { exp: Experience } = $props();
</script>

<div class="exp-card">
	<div class="exp-header">
		<h1 class="exp-title">{$_(exp.title)}</h1>
		<p>{$_(exp.periode)}</p>
	</div>
	<div class="exp-header">
		<p class="profile-function">{$_(exp.functie)}</p>
		<p>{$_(exp.locatie)}</p>
	</div>
	<p>{$_(exp.uitleg)}</p>
	<div class="circle-container">
		{#each exp.technieken as tech}
			<span>{tech}</span>
		{/each}
	</div>
</div>

<style>
	.exp-card {
		width: 100%;
		padding: 1.8rem;
		border-radius: 28px;
		background: rgba(11, 20, 36, 0.94);
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: 0 28px 60px rgba(0, 0, 0, 0.18);
		color: var(--text);
		text-align: start;
		display: grid;
		gap: 1.1rem;
		margin-bottom: 1rem;
	}

	.exp-card h1,
	.exp-card p {
		margin: 0;
	}

	.exp-card p {
		color: var(--muted);
	}

	.exp-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.exp-title {
		font-size: 1.875rem;
		font-weight: 700;
	}

	.profile-function {
		color: var(--accent);
		font-weight: 900;
		font-size: 1.05em;
	}

	@media (max-width: 720px) {
		.exp-card {
			padding: 1.4rem;
		}
	}
</style>
