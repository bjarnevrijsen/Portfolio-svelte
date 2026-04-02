<script lang="ts">
	import { experiencesByLocale } from '$lib';
	import ExperienceCard from './ExperienceCard.svelte';
	import { _, currentLocale } from '$lib/i18n';
</script>

<section id="exp">
	<h1 class="titel" data-pseudo="after">{$_('experience.title')}<span class="profile-function">.</span></h1>
	{#each experiencesByLocale[$currentLocale] as exp}
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
