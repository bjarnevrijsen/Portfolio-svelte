<script lang="ts">
	import { experiences } from '$lib';
	import ExperienceCard from './ExperienceCard.svelte';
</script>

<section id="exp" class="border-t border-slate-800 px-6 py-20 text-slate-100">
	<div class="mx-auto max-w-6xl">
		<div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
			<div>
				<p class="text-sky-300">Ervaringen</p>
				<h2 class="mt-2 text-3xl font-semibold sm:text-4xl">Stage en werk</h2>
			</div>
			<p class="max-w-xl text-slate-400">Een overzicht van mijn praktijkervaring binnen front-end development en projectwerk.</p>
		</div>
		<div class="mt-10 grid gap-6">
			{#each experiences as exp}
				<ExperienceCard {exp} />
			{/each}
		</div>
	</div>
</section>
