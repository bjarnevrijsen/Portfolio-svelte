<script lang="ts">
	import { _ } from '$lib/i18n';
</script>

<section>
	<div class="app-profile">
		<div class="app-name">
			<p>{$_('hero.intro')}<span class="profile-function">.</span></p>
		</div>
		<h2>{$_('hero.rolePrefix')} <span class="profile-function">{$_('hero.role')}</span></h2>
		<p>{$_('hero.description')}</p>
		<div class="hero-actions">
			<a href="#project" class="hero-button">{$_('hero.viewProjects')}</a>
			<a href="#contact" class="hero-secondary">{$_('hero.contact')}</a>
		</div>
	</div>
</section>

<style>
	.app-profile {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 1.5rem;
		padding: 3rem 2.5rem;
		border-radius: 32px;
		background: rgba(11, 18, 32, 0.88);
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: 0 32px 90px rgba(0, 0, 0, 0.25);
	}

	.app-name {
		font-size: clamp(2.8rem, 5vw, 4.5rem);
		font-weight: 900;
		line-height: 0.95;
	}

	.app-name p {
		margin: 0;
	}

	.app-profile h2 {
		margin: 0;
		font-size: clamp(1.7rem, 2.6vw, 2.3rem);
		line-height: 1.05;
		letter-spacing: -0.03em;
	}

	.app-profile p {
		margin: 0;
		max-width: 720px;
		color: var(--muted);
		font-size: 1rem;
		line-height: 1.85;
	}

	.profile-function {
		color: var(--accent);
		font-weight: 900;
		font-size: 1.05em;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.hero-button,
	.hero-secondary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 48px;
		padding: 0 1.5rem;
		border-radius: 999px;
		border: 1px solid transparent;
		text-decoration: none;
		color: var(--text);
		transition: transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
	}

	.hero-button {
		background: linear-gradient(135deg, #29d0b7, #35b7ff);
		color: #09101c;
		font-weight: 700;
	}

	.hero-button:hover {
		transform: translateY(-1px);
	}

	.hero-secondary {
		background: rgba(255, 255, 255, 0.08);
		border-color: rgba(255, 255, 255, 0.16);
	}

	.hero-secondary:hover {
		background: rgba(255, 255, 255, 0.14);
	}

	@media (max-width: 900px) {
		.app-profile {
			padding: 2.2rem;
		}
	}

	@media (max-width: 640px) {
		.app-name {
			font-size: 2.8rem;
		}
	}
</style>
