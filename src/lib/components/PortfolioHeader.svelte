<script lang="ts">
	import cv from '$lib/assets/cv.pdf';
</script>

<header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm text-slate-200">
		<a href="#home" class="font-semibold text-white">Bjarne Vrijsen</a>
		<nav class="hidden gap-6 md:flex">
			<a href="#about" class="transition hover:text-sky-300">Over mij</a>
			<a href="#project" class="transition hover:text-sky-300">Projecten</a>
			<a href="#exp" class="transition hover:text-sky-300">Ervaring</a>
			<a href="#contact" class="transition hover:text-sky-300">Contact</a>
		</nav>
		<a
			href={cv}
			target="_blank"
			rel="noreferrer"
			class="rounded-full border border-sky-500 px-4 py-2 text-sky-300 transition hover:bg-sky-500/10"
		>
			Mijn CV
		</a>
	</div>
</header>
