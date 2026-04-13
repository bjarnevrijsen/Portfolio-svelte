<script lang="ts">
	import type { Project } from '$lib';
	import { _ } from '$lib/i18n';
	const { project }: { project: Project } = $props();

	let isModalOpen = $state(false);

	function openModal() {
		isModalOpen = true;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		isModalOpen = false;
		document.body.style.overflow = 'auto';
	}
</script>

<div>
	<div
		class="project-card"
		role="button"
		tabindex="0"
		onclick={openModal}
		onkeydown={(e) => e.key === 'Enter' && openModal()}
	>
		<img src={project.imageFrontSrc} alt={$_(project.title)} class="project-card-image" />
	</div>
	<h3 class="project-card-title">{$_(project.title)}</h3>
	<div class="circle-container ml-3">
		{#each project.tags as tag}
			<span>{tag}</span>
		{/each}
	</div>
	<div class="project-card-description">
		<p>{$_(project.descriptionShort)}</p>
		<button class="project-card-button" onclick={openModal}>{$_('projects.readMore')}</button>
	</div>
</div>

{#if isModalOpen}
	<div
		class="modal-overlay"
		role="button"
		tabindex="0"
		onclick={closeModal}
		onkeydown={(e) => e.key === 'Escape' && closeModal()}
	>
		<button class="close-button" onclick={closeModal} aria-label={$_('projects.closeModal')}
			>X</button
		>
		<!-- svelte-ignore a11y_interactive_supports_focus -->
		<div
			class="modal-content"
			role="dialog"
			onclick={(e) => e.stopPropagation()}
			onkeydown={() => {}}
		>
			{#if project.imageSrc && project.imageSrc.length > 0}
				<img class="modal-image" src={project.imageSrc[0]} alt={$_('projects.imageAlt')} />
			{/if}
			<div class="modal-text">
				<h2 class="modal-title">{$_(project.title)}</h2>
				<div class="circle-container">
					{#each project.tags as tag}
						<span>{tag}</span>
					{/each}
				</div>
				<div class="modal-description">
					<p>{$_(project.descriptionShort)}</p>
					{#each project.descriptionLong as paragraphKey}
						<p>{$_(paragraphKey)}</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.project-card {
		font-size: 1rem;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		text-align: start;
		color: var(--text);
		border-radius: 28px;
		background: rgba(9, 18, 34, 0.88);
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: 0 30px 80px rgba(0, 0, 0, 0.22);
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease,
			border-color 0.25s ease;
		cursor: pointer;
		overflow: hidden;
	}

	.project-card:hover {
		transform: translateY(-4px);
		border-color: rgba(51, 227, 184, 0.35);
		box-shadow: 0 38px 100px rgba(0, 0, 0, 0.28);
	}

	.project-card-image {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		display: block;
	}

	.project-card-title {
		font-size: 1.5rem;
		font-weight: 800;
		margin: 1.15rem 1.25rem 0.75rem;
		color: var(--text);
	}

	.project-card-description {
		padding: 0 1.25rem 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		color: var(--muted);
	}

	.project-card-description p {
		margin: 0;
		line-height: 1.75;
	}

	.project-card-button {
		align-self: flex-start;
		background: rgba(51, 227, 184, 0.14);
		color: var(--accent);
		border: 1px solid rgba(51, 227, 184, 0.24);
		border-radius: 999px;
		padding: 0.75rem 1.2rem;
		cursor: pointer;
		transition:
			transform 0.2s ease,
			background 0.2s ease;
	}

	.project-card-button:hover {
		transform: translateY(-1px);
		background: rgba(51, 227, 184, 0.22);
	}

	/* Modal styles */
	.modal-overlay {
		position: fixed;
		inset: 0;
		background: rgba(5, 10, 18, 0.8);
		backdrop-filter: blur(18px);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		overflow-y: auto;
		padding: 2rem;
	}

	.modal-content {
		background: rgba(8, 18, 32, 0.96);
		color: var(--text);
		border-radius: 28px;
		max-width: 900px;
		width: 100%;
		margin: auto;
		position: relative;
		padding: 1.5rem;
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: 0 28px 80px rgba(0, 0, 0, 0.28);
	}

	.modal-image {
		width: 100%;
		max-height: 500px;
		object-fit: cover;
		border-radius: 22px;
		margin-bottom: 1.2rem;
	}

	.modal-title {
		font-size: clamp(1.8rem, 2.3vw, 2.4rem);
		font-weight: 800;
		color: var(--text);
		margin: 0 0 1rem;
	}

	.modal-text {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.modal-text .circle-container {
		margin: 0;
	}

	.modal-description {
		font-size: 1rem;
		line-height: 1.8;
		color: var(--muted);
	}

	.modal-description p {
		margin: 0 0 1rem;
	}

	.close-button {
		position: absolute;
		top: 18px;
		right: 18px;
		width: 44px;
		height: 44px;
		border: 1px solid rgba(255, 255, 255, 0.16);
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.05);
		color: var(--text);
		font-size: 1rem;
		cursor: pointer;
		transition: background 0.2s ease;
		z-index: 1001;
	}

	.close-button:hover {
		background: rgba(255, 255, 255, 0.12);
	}

	@media (max-width: 768px) {
		.modal-content {
			padding: 1.2rem;
		}

		.modal-title {
			font-size: 1.8rem;
		}

		.modal-description {
			font-size: 0.95rem;
		}

		.modal-image {
			max-height: 320px;
		}
	}
</style>
