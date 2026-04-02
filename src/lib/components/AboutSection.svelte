<script lang="ts">
	import { aboutParagraphsByLocale, freeTimeSkillsByLocale, skills } from '$lib';
	import { _, currentLocale } from '$lib/i18n';
</script>

<section id="about">
	<h1 class="titel" data-pseudo="after">{$_('about.title')}<span class="profile-function">.</span></h1>
	<div class="about-content">
		<div class="about-card">
			{#each aboutParagraphsByLocale[$currentLocale] as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
		<div class="about-skills">
			<h1>{$_('about.education')}</h1>
			<div class="circle-container">
				{#each skills as skill}
					<span>{skill}</span>
				{/each}
			</div>
			<h1>{$_('about.freeTime')}</h1>
			<div class="circle-container">
				{#each freeTimeSkillsByLocale[$currentLocale] as skill}
					<span>{skill}</span>
				{/each}
			</div>
		</div>
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

	.about-content {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
		gap: 2rem;
		align-items: start;
	}

	.about-card {
		width: 100%;
		padding: 2rem;
		border-radius: 28px;
		background: rgba(9, 17, 32, 0.88);
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
	}

	.about-card p {
		margin: 0 0 1.15rem;
		color: var(--muted);
		line-height: 1.8;
	}

	.about-skills {
		width: 100%;
		padding: 1.8rem;
		border-radius: 28px;
		background: rgba(15, 26, 47, 0.9);
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
	}

	.about-skills h1 {
		margin: 0 0 1rem;
		font-size: 1.1rem;
	}

	.circle-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
		gap: 0.75rem;
		margin-top: 1rem;
	}

	.circle-container span {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		min-height: 42px;
		padding: 0 1rem;
		background: rgba(255, 255, 255, 0.06);
		color: var(--text);
		font-size: 0.95rem;
		border-radius: 999px;
		border: 1px solid rgba(51, 227, 184, 0.18);
		transition: transform 0.25s ease, background-color 0.25s ease;
	}

	.circle-container span:hover {
		transform: translateY(-2px);
		background: rgba(51, 227, 184, 0.14);
	}

	@media (max-width: 960px) {
		.about-content {
			grid-template-columns: 1fr;
		}
	}
</style>
