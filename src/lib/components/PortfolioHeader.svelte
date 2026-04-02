<script lang="ts">
	import cv from '$lib/assets/cv.pdf';

	let isOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function scrollTo(id: string) {
		isOpen = false;
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<header class="app-header">
	<div class="header-left">
		<button class="menu-toggle" onclick={toggleMenu}>☰</button>
		<button class="header-link name-link" onclick={() => scrollTo('home')}>Bjarne Vrijsen</button>
	</div>
	<nav class="navbar" class:show={isOpen}>
		<ul>
			<li><button class="header-link" onclick={() => scrollTo('about')}>Over Mij</button></li>
			<li><button class="header-link" onclick={() => scrollTo('project')}>Projecten</button></li>
			<li><button class="header-link" onclick={() => scrollTo('exp')}>Ervaringen</button></li>
			<li><button class="header-link" onclick={() => scrollTo('contact')}>Contact</button></li>
		</ul>
	</nav>
	<a href={cv} target="_blank" rel="noreferrer" class="contact-button">Mijn CV</a>
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
	}

	.navbar ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 1rem;
	}

	.navbar li {
		margin: 0;
	}

	.menu-toggle {
		display: none;
		cursor: pointer;
		font-size: 1.5rem;
		color: var(--text);
		background: none;
		border: none;
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

	.contact-button:hover {
		transform: translateY(-1px);
	}

	@media (max-width: 850px) {
		.app-header {
			width: calc(100% - 30px);
			padding: 0.9rem 1rem;
		}
	}

	@media (max-width: 700px) {
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
			display: none;
		}

		.navbar.show {
			display: flex;
		}

		.navbar ul {
			flex-direction: column;
			gap: 0.75rem;
		}

		.navbar :global(button) {
			padding: 0.75rem 1rem;
			display: block;
			border-radius: 18px;
			background: rgba(255, 255, 255, 0.04);
			width: 100%;
			text-align: left;
		}

		.menu-toggle {
			display: block;
		}
	}
</style>
