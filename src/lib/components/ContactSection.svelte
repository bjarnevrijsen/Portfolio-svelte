<script lang="ts">
	import { contact } from '$lib';
	import { _ } from '$lib/i18n';
</script>

<section id="contact" class="contact-section">
	<h1 class="titel">{$_('contact.title')}<span class="profile-function">.</span></h1>
	<div class="contact-card">
		<p>
			{$_('contact.introPrefix')}
			<a href="https://www.linkedin.com/in/bjarne-vrijsen-4283a31a2/" target="_blank" class="app-link" rel="noreferrer">{$_('contact.linkedinLabel')}</a>
			{$_('contact.introSuffix')}
		</p>
		<div class="contact-mail">
			<svg fill="#a9a9a9" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" class="mail-icon">
				<path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fill-rule="evenodd"></path>
			</svg>
			<a href="mailto:{contact.email}">{contact.email}</a>
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
		transition: transform 0.25s ease, background-color 0.25s ease;
		align-self: flex-start;
	}

	.hero-button:hover {
		transform: translateY(-1px);
	}
</style>
