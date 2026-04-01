<script lang="ts">
	import { projects } from '$lib';
	import ProjectCard from './ProjectCard.svelte';
</script>

<section id="project" class="border-t border-slate-800 px-6 py-20 text-slate-100">
	<div class="mx-auto max-w-6xl">
		<div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
			<div>
				<p class="text-sky-300">Projecten</p>
				<h2 class="mt-2 text-3xl font-semibold sm:text-4xl">Recent werk</h2>
			</div>
			<p class="max-w-xl text-slate-400">Een selectie van projecten die laten zien hoe ik front-end design omzet naar werkende producten.</p>
		</div>
		<div class="mt-10 grid gap-6 lg:grid-cols-2">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>
