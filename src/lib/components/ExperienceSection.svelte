<script lang="ts">
	// import { experiences } from '$lib';
	import ExperienceCard from './ExperienceCard.svelte';
	import { _ } from '$lib/i18n';
	import type { Experience } from '$lib';

	const experiences: Experience[] = [
	{
		title: $_('experience.items.wisemen.company'),
		periode: $_('experience.items.wisemen.period'),
		functie: $_('experience.items.wisemen.role'),
		locatie: $_('experience.items.wisemen.location'),
		uitleg: $_('experience.items.wisemen.summary'),
		technieken: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'GitHub', 'Google OAuth']
	},
	{
		title: $_('experience.items.innovoltus.company'),
		periode: $_('experience.items.innovoltus.period'),
		functie: $_('experience.items.innovoltus.role'),
		locatie: $_('experience.items.innovoltus.location'),
		uitleg: $_('experience.items.innovoltus.summary'),
		technieken: ['Svelte', 'TypeScript', 'Tailwind CSS', 'REST API', 'BitBucket', 'Jira', 'Confluence', 'PWA']
	}
];
</script>

<section id="exp">
	<h1 class="titel" data-pseudo="after">{$_('experience.title')}<span class="profile-function">.</span></h1>
	{#each experiences as exp}
		<ExperienceCard {exp} />
	{/each}
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
		text-align: start;
	}

	.titel::before,
	.titel::after {
		content: '';
		flex: 1;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
	}

	.titel[data-pseudo='after']::before {
		display: none;
	}

	.profile-function {
		color: var(--accent);
		font-weight: 900;
		font-size: 1.05em;
	}
</style>
