<script lang="ts">
	import { projectsByLocale } from '$lib';
	import ProjectCard from './ProjectCard.svelte';
	import { _, currentLocale } from '$lib/i18n';
</script>

<section id="project">
	<h1 class="titel" data-pseudo="before">{$_('projects.title')}<span class="profile-function">.</span></h1>
	<div class="project-section">
		{#each projectsByLocale[$currentLocale] as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<style>
	.titel {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin: 0 0 1.8rem;
		font-size: clamp(2.4rem, 4vw, 3.6rem);
		font-weight: 900;
		letter-spacing: -0.04em;
		color: var(--text);
		position: relative;
		text-align: end;
	}

	.titel::before,
	.titel::after {
		content: '';
		flex: 1;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
	}

	.titel[data-pseudo='before']::after {
		display: none;
	}

	.profile-function {
		color: var(--accent);
		font-weight: 900;
		font-size: 1.05em;
	}

	.project-section {
		display: grid;
		width: 100%;
		gap: 2rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (max-width: 980px) {
		.project-section {
			grid-template-columns: 1fr;
		}
	}
</style>
