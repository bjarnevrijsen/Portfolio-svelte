<script lang="ts">
	import type { Project } from '$lib';
	const { project }: { project: Project } = $props()
</script>

<article class="group rounded-4xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-sky-500/20 shadow-lg shadow-slate-950/10">
	<img src={project.imageFrontSrc} alt={project.title} class="h-56 w-full rounded-3xl object-cover" />
	<h3 class="mt-6 text-xl font-semibold text-slate-100">{project.title}</h3>
	<p class="mt-4 text-slate-400 leading-7">{project.descriptionShort}</p>
	<div class="mt-5 flex flex-wrap gap-2">
		{#each project.tags as tag}
			<span class="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-400">{tag}</span>
		{/each}
	</div>
	<a href={project.link} target="_blank" rel="noreferrer" class="mt-6 inline-flex rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-sky-300 transition hover:bg-slate-800">Bekijk project</a>
</article>
