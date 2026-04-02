<script lang="ts">
	import cv from '$lib/assets/cv.pdf';
	import { _, currentLocale, setAppLocale } from '$lib/i18n';
	import { clickOutside } from '$lib/util';

	let isOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function scrollTo(id: string) {
		isOpen = false;
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	}

	function changeLocale(nextLocale: 'nl' | 'en') {
		setAppLocale(nextLocale);
		isOpen = false;
	}

	function closeMenu() {
		isOpen = false;
	}
</script>

<header class="app-header">
	<div class="header-left">
		<button class="header-link name-link" onclick={() => scrollTo('home')}>Bjarne Vrijsen</button>
	</div>
	<nav class="navbar" class:show={isOpen} use:clickOutside={() => (isOpen = false)}>
		<button class="header-link" onclick={() => scrollTo('about')}>{$_('header.about')}</button>
		<button class="header-link" onclick={() => scrollTo('project')}>{$_('header.projects')}</button>
		<button class="header-link" onclick={() => scrollTo('exp')}>{$_('header.experience')}</button>
		<button class="header-link" onclick={() => scrollTo('contact')}>{$_('header.contact')}</button>

		<div class="mobile-actions">
			<div class="locale-switch" aria-label={$_('header.languageLabel')}>
				<button class="locale-button" class:active={$currentLocale === 'nl'} onclick={() => changeLocale('nl')}>NL</button>
				<button class="locale-button" class:active={$currentLocale === 'en'} onclick={() => changeLocale('en')}>EN</button>
			</div>
			<a href={cv} target="_blank" rel="noreferrer" class="contact-button" onclick={closeMenu}>{$_('header.cv')}</a>
		</div>
	</nav>
	<div class="header-actions desktop-actions">
		<div class="locale-switch" aria-label={$_('header.languageLabel')}>
			<button class="locale-button" class:active={$currentLocale === 'nl'} onclick={() => setAppLocale('nl')}>NL</button>
			<button class="locale-button" class:active={$currentLocale === 'en'} onclick={() => setAppLocale('en')}>EN</button>
		</div>
		<a href={cv} target="_blank" rel="noreferrer" class="contact-button">{$_('header.cv')}</a>
	</div>
	<button class="menu-toggle" onclick={toggleMenu} aria-label="Open menu">☰</button>
</header>

<style>
	.app-header {
		position: fixed;
		top: 16px;
		left: 50%;
		transform: translateX(-50%);
		width: min(1100px, calc(100% - 40px));
		padding: 0.9rem 1.25rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		border-radius: 28px;
		background: rgba(8, 17, 32, 0.85);
		border: 1px solid rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(22px);
		box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);
		z-index: 50;
	}

	.header-left {
		display: flex;
		align-items: center;
	}

	.header-link {
		color: var(--text);
		text-decoration: none;
		padding: 0.55rem 1rem;
		font-size: 0.98rem;
		font-weight: 600;
		border-radius: 999px;
		transition: background-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
		background: none;
		border: none;
		cursor: pointer;
	}

	.header-link:hover {
		color: var(--accent);
		background-color: rgba(51, 227, 184, 0.12);
		transform: translateY(-1px);
	}

	.navbar {
		display: flex;
		justify-content: center;
		gap: 0.35rem;
	}

	.mobile-actions {
		display: none;
	}

	.menu-toggle {
		display: none;
		cursor: pointer;
		width: 42px;
		height: 42px;
		border-radius: 999px;
		font-size: 1.5rem;
		color: var(--text);
		background: rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(255, 255, 255, 0.12);
	}

	.contact-button {
		position: relative;
		border: none;
		background: linear-gradient(135deg, #2de1b6, #4d8dff);
		color: #09101c;
		padding: 0.75rem 1.35rem;
		border-radius: 999px;
		font-weight: 700;
		box-shadow: 0 18px 40px rgba(45, 225, 182, 0.22);
		cursor: pointer;
		transition: transform 0.25s ease, box-shadow 0.25s ease;
		text-decoration: none;
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.locale-switch {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.25rem;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.locale-button {
		min-width: 40px;
		height: 32px;
		border-radius: 999px;
		border: none;
		background: transparent;
		color: var(--text);
		font-size: 0.75rem;
		font-weight: 700;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}

	.locale-button.active {
		background: rgba(51, 227, 184, 0.24);
	}

	.contact-button:hover {
		transform: translateY(-1px);
	}

	@media (max-width: 850px) {
		.app-header {
			width: calc(100%);
			padding: 0.75rem 0.5rem;
			top: 0px;
			border-radius: 0;
		}
	}

	@media (max-width: 700px) {
		.desktop-actions {
			display: none;
		}

		.header-actions {
			margin-left: auto;
		}

		.navbar {
			position: fixed;
			inset: auto 20px 0 20px;
			top: 70px;
			left: 0;
			right: 0;
			width: auto;
			max-height: 320px;
			flex-direction: column;
			background: rgba(8, 17, 32, 0.96);
			border-radius: 24px;
			padding: 1rem;
			box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3);
			border: 1px solid rgba(255, 255, 255, 0.1);
			display: none;
		}

		.navbar.show {
			display: flex;
		}

		.navbar :global(button) {
			padding: 0.75rem 1rem;
			display: block;
			border-radius: 18px;
			background: rgba(255, 255, 255, 0.04);
			width: 100%;
			text-align: left;
		}

		.mobile-actions {
			display: grid;
			gap: 0.75rem;
			padding-top: 0.6rem;
			margin-top: 0.4rem;
			border-top: 1px solid rgba(255, 255, 255, 0.1);
		}

		.mobile-actions .locale-switch {
			width: fit-content;
		}

		.mobile-actions .contact-button {
			width: fit-content;
		}

		.menu-toggle {
			display: block;
		}
	}
</style>
