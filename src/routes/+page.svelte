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
	<title>Portfolio | Bjarne Vrijsen</title>
	<meta
		name="description"
		content="Portfolio van Bjarne Vrijsen, frontend developer met focus op moderne webapplicaties en sterke UI."
	/>
</svelte:head>

<PortfolioHeader />
<main id="home" class="overflow-hidden">
	<HeroSection />
	<AboutSection />
	<ExperienceSection />
	<ProjectsSection />
	<ContactSection />
</main>
<PortfolioFooter />
