<script lang="ts">
	import PortfolioHeader from '$lib/components/PortfolioHeader.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ExperienceSection from '$lib/components/ExperienceSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import PortfolioFooter from '$lib/components/PortfolioFooter.svelte';
</script>

<svelte:head>
	<title>Bjarne Vrijsen</title>
	<meta
		name="description"
		content="Portfolio van Bjarne Vrijsen, frontend developer met focus op moderne webapplicaties en sterke UI."
	/>
</svelte:head>

<div class="app">
	<PortfolioHeader />
	<div class="app-content">
		<div id="home" class="profile-info">
			<HeroSection />
		</div>
		<div class="main-content">
			<AboutSection />
			<ProjectsSection />
			<ExperienceSection />
			<ContactSection />
		</div>
	</div>
	<PortfolioFooter />
</div>

<style>
	.app {
		min-height: 100vh;
		padding-top: 90px;
	}

	.app-content {
		width: min(1200px, calc(100% - 40px));
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 4rem;
		padding-bottom: 4rem;
	}

	.main-content {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}

	.profile-info {
		padding-top: 120px;
	}

	@media (max-width: 900px) {
		.app-content {
			gap: 3rem;
		}
	}

	@media (max-width: 640px) {
		.app {
			padding-top: 70px;
		}

		.app-content {
			width: min(100%, calc(100% - 32px));
		}
	}
</style>
