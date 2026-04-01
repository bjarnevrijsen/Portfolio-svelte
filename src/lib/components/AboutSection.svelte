<script lang="ts">
	import { contact } from '$lib';
</script>

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
			<div class="space-y-6 rounded-4xl border border-white/10 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/30">
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
