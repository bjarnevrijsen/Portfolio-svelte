<script lang="ts">
	import { contact, experiences, projects, skills, socials } from '$lib';
	import cv from '$lib/assets/cv.pdf';
</script>

<svelte:head>
	<title>Portfolio | Bjarne Vrijsen</title>
	<meta
		name="description"
		content="Portfolio van Bjarne Vrijsen, frontend developer met focus op moderne webapplicaties en sterke UI."
	/>
</svelte:head>

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

<main id="home" class="overflow-hidden">
	<section class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
				<div>
					<p class="inline-flex rounded-full bg-sky-500/10 px-4 py-1 text-sm uppercase tracking-[0.35em] text-sky-300">Front-end developer</p>
					<h1 class="mt-8 text-5xl font-extrabold leading-tight tracking-[-0.03em] sm:text-6xl">
						Hey, ik ben <span class="text-sky-300">Bjarne Vrijsen</span>.
						<br />
						En ik ben een <span class="text-sky-300">Software Developer</span>
					</h1>
					<p class="mt-6 max-w-2xl text-slate-300 leading-8">
						Ik ben gepassioneerd in het bouwen van webapplicaties die gebruiksvriendelijk, aantrekkelijk en toegankelijk zijn.
					</p>
					<div class="mt-10 flex flex-col gap-4 sm:flex-row">
						<a href="#project" class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">Bekijk projecten</a>
						<a href="#contact" class="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500">Neem contact op</a>
					</div>
				</div>
				<div class="rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-[0_30px_80px_-40px_rgba(14,165,233,0.75)]">
					<div class="space-y-4 text-slate-300">
						<div class="rounded-3xl bg-slate-950 p-6">
							<p class="text-sm uppercase tracking-[0.35em] text-sky-300">Snelle stat</p>
							<h2 class="mt-4 text-3xl font-semibold text-slate-100">4+ jaar ervaring</h2>
							<p class="mt-3 text-sm leading-6 text-slate-400">Ik werk aan schaalbare webprojecten voor productteams en kleine bedrijven.</p>
						</div>
						<div class="grid gap-4 sm:grid-cols-2">
							<div class="rounded-3xl bg-slate-950 p-5">
								<p class="text-sm uppercase tracking-[0.35em] text-slate-500">Focus</p>
								<p class="mt-3 text-xl font-semibold text-slate-100">Snelheid & toegankelijkheid</p>
							</div>
							<div class="rounded-3xl bg-slate-950 p-5">
								<p class="text-sm uppercase tracking-[0.35em] text-slate-500">Tools</p>
								<p class="mt-3 text-xl font-semibold text-slate-100">Svelte, Tailwind, TypeScript</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="about" class="border-t border-slate-800 px-6 py-20 text-slate-100">
		<div class="mx-auto max-w-6xl">
			<div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
				<div>
					<p class="text-sky-300">Over mij</p>
					<h2 class="mt-4 text-3xl font-semibold sm:text-4xl">Ik help teams met heldere interfaces en solide front-end architectuur.</h2>
					<p class="mt-6 max-w-xl leading-8 text-slate-300">
						Als front-end developer maak ik gebruik van moderne tooling om gebruikerservaringen sneller en prettiger te maken. Ik schrijf componentgebaseerde code die schaalbaar is en onderhoudsvriendelijk blijft.
					</p>
					<ul class="mt-8 grid gap-4 sm:grid-cols-2">
						<li class="rounded-3xl bg-slate-900 p-6">
							<p class="text-sm uppercase tracking-[0.35em] text-slate-500">Specialiteit</p>
							<p class="mt-3 text-lg font-semibold text-slate-100">UX-gedreven front-end development</p>
						</li>
						<li class="rounded-3xl bg-slate-900 p-6">
							<p class="text-sm uppercase tracking-[0.35em] text-slate-500">Wat ik doe</p>
							<p class="mt-3 text-lg font-semibold text-slate-100">Van prototype tot pixel-perfect UI</p>
						</li>
					</ul>
				</div>
				<div class="space-y-6 rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/30">
					<div>
						<h3 class="text-lg font-semibold text-slate-100">Wat je van mij kunt verwachten</h3>
						<p class="mt-3 text-slate-400 leading-7">
							Heldere componenten, goede toegankelijkheid en een snelle workflow. Ik houd van samenwerken met ontwerpers en productteams om een mooie gebruikerservaring te leveren.
						</p>
					</div>
					<div class="grid gap-4 sm:grid-cols-2">
						<div class="rounded-3xl bg-slate-950 p-5">
							<p class="text-sm uppercase tracking-[0.35em] text-slate-500">Locatie</p>
							<p class="mt-3 text-lg font-semibold text-slate-100">{contact.location}</p>
						</div>
						<div class="rounded-3xl bg-slate-950 p-5">
							<p class="text-sm uppercase tracking-[0.35em] text-slate-500">Contact</p>
							<p class="mt-3 text-lg font-semibold text-slate-100">{contact.email}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

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
					<article class="rounded-[32px] border border-white/10 bg-slate-900 p-8 shadow-lg shadow-slate-950/20">
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
				{/each}
			</div>
		</div>
	</section>

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
					<article class="group rounded-[32px] border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-sky-500/20 shadow-lg shadow-slate-950/10">
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
				{/each}
			</div>
		</div>
	</section>

	<section id="contact" class="border-t border-slate-800 px-6 py-20 text-slate-100">
		<div class="mx-auto max-w-6xl">
			<div class="grid gap-10 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
				<div>
					<p class="text-sky-300">Contact</p>
					<h2 class="mt-2 text-3xl font-semibold sm:text-4xl">Laten we samenwerken</h2>
					<p class="mt-6 max-w-xl text-slate-300 leading-8">Stuur een bericht voor een nieuw project, een samenwerking of een technische vraag. Ik reageer snel en denk graag mee over je front-end oplossing.</p>
					<div class="mt-8 flex flex-wrap gap-4">
						<a href={`mailto:${contact.email}`} class="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">Stuur een e-mail</a>
						<a href="https://www.linkedin.com/in/bjarne-vrijsen-4283a31a2/" target="_blank" rel="noreferrer" class="rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-slate-500">Bekijk LinkedIn</a>
					</div>
				</div>
				<div class="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20">
					<p class="text-sm uppercase tracking-[0.35em] text-sky-300">Snel contact</p>
					<div class="mt-6 space-y-4 text-slate-300">
						<div>
							<p class="text-sm text-slate-500">E-mail</p>
							<p class="mt-2 text-lg font-semibold text-slate-100">{contact.email}</p>
						</div>
						<div>
							<p class="text-sm text-slate-500">Locatie</p>
							<p class="mt-2 text-lg font-semibold text-slate-100">{contact.location}</p>
						</div>
						<div class="grid gap-3 sm:grid-cols-3">
							{#each socials as social}
								<a href={social.href} target="_blank" rel="noreferrer" class="rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-center text-sm text-slate-200 transition hover:border-sky-500/30 hover:text-sky-200">
									<span>{social.icon}</span>
									<p class="mt-2">{social.label}</p>
								</a>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<footer class="border-t border-slate-800 bg-slate-950 px-6 py-8 text-slate-500">
	<div class="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
		<p>© {new Date().getFullYear()} Front-end Developer Portfolio</p>
		<p>Gebouwd met Svelte, Tailwind CSS en moderne webstandaarden.</p>
	</div>
</footer>
