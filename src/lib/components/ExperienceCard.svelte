<script lang="ts">
	import type { Experience } from '$lib';
	const { exp }: { exp: Experience } = $props();
</script>

<article class="rounded-4xl border border-white/10 bg-slate-900 p-8 shadow-lg shadow-slate-950/20">
	<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
		<div>
			<p class="text-sky-300 text-sm uppercase tracking-[0.35em]">{exp.title}</p>
			<h3 class="mt-2 text-2xl font-semibold text-white">{exp.functie}</h3>
		</div>
		<p class="text-sm text-slate-400">{exp.periode} · {exp.locatie}</p>
	</div>
	<p class="mt-6 text-slate-300 leading-7">{exp.uitleg}</p>
	<div class="mt-6 flex flex-wrap gap-2">
		{#each exp.technieken as tech}
			<span class="rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-xs uppercase tracking-[0.35em] text-slate-400">{tech}</span>
		{/each}
	</div>
</article>
