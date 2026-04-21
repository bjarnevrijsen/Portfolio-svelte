<script lang="ts">
	import { contact, socials } from '$lib';
	import { _ } from '$lib/i18n';
</script>

<section id="contact" class="contact-section">
	<h1 class="titel">{$_('contact.title')}<span class="profile-function">.</span></h1>
	<div class="contact-card">
		<p>
			{$_('contact.introPrefix')}
			<a
				href="https://www.linkedin.com/in/bjarne-vrijsen-4283a31a2/"
				target="_blank"
				class="app-link"
				rel="noreferrer">{$_('contact.linkedinLabel')}</a
			>
			{$_('contact.introSuffix')}
		</p>
		<div class="social-links" aria-label="Social links">
			{#each socials as social}
				<a
					href={social.href}
					target="_blank"
					rel="noreferrer"
					class="social-link"
					aria-label={social.label}
					title={social.label}
				>
					{#if social.icon === 'github'}
						<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
							<path
								d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.2 11.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.08 1.83 2.82 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.9 0-1.3.47-2.36 1.24-3.2-.12-.3-.54-1.52.12-3.16 0 0 1-.33 3.3 1.22a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.22 3.3-1.22.66 1.64.24 2.86.12 3.16.77.84 1.24 1.9 1.24 3.2 0 4.58-2.82 5.6-5.5 5.9.43.37.82 1.1.82 2.22v3.3c0 .32.22.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
							/>
						</svg>
					{:else if social.icon === 'linkedin'}
						<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
							<path
								d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1.01 1.83-2.08 3.77-2.08 4.03 0 4.77 2.65 4.77 6.08V21h-4v-5.62c0-1.34-.03-3.06-1.87-3.06-1.88 0-2.17 1.46-2.17 2.97V21h-4V9Z"
							/>
						</svg>
					{:else if social.icon === 'email'}
						<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
							<path
								d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
							/>
						</svg>
					{/if}
				</a>
			{/each}
		</div>

		<a href="mailto:{contact.email}" class="hero-button">{$_('contact.sendMail')}</a>
	</div>
</section>

<style>
	.contact-section {
		padding-bottom: 9rem;
	}

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

	.profile-function {
		color: var(--accent);
		font-weight: 900;
		font-size: 1.05em;
	}

	.contact-card {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		padding: 2rem;
		border-radius: 28px;
		background: rgba(12, 22, 38, 0.92);
		border: 1px solid rgba(255, 255, 255, 0.08);
	}

	.contact-card p {
		margin: 0;
		color: var(--muted);
		line-height: 1.8;
	}

	.app-link {
		color: var(--accent);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.app-link:hover {
		color: #8ef3d4;
	}

	.social-links {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.social-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 999px;
		color: var(--text);
		border: 1px solid rgba(255, 255, 255, 0.15);
		background: rgba(255, 255, 255, 0.04);
		transition:
			transform 0.2s ease,
			color 0.2s ease,
			border-color 0.2s ease;
	}

	.social-link:hover {
		transform: translateY(-1px);
		color: var(--accent);
		border-color: rgba(51, 227, 184, 0.6);
	}

	.social-link svg {
		width: 1.25rem;
		height: 1.25rem;
		fill: currentColor;
	}

	.contact-mail {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		color: var(--text);
		transition: color 0.2s ease;
	}

	.contact-mail:hover {
		color: var(--accent);
	}

	.contact-mail a {
		color: inherit;
		text-decoration: none;
	}

	.mail-icon {
		width: 2rem;
		height: 2rem;
	}

	.hero-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 48px;
		padding: 0 1.5rem;
		border-radius: 999px;
		border: 1px solid transparent;
		text-decoration: none;
		background: linear-gradient(135deg, #29d0b7, #35b7ff);
		color: #09101c;
		font-weight: 700;
		transition:
			transform 0.25s ease,
			background-color 0.25s ease;
		align-self: flex-start;
	}

	.hero-button:hover {
		transform: translateY(-1px);
	}
</style>
