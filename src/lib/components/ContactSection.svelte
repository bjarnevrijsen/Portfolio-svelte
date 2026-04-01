<script lang="ts">
	import { contact, socials } from '$lib';
</script>

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
			<div class="rounded-4xl border border-white/10 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20">
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
