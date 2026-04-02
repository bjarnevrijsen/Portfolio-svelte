<script lang="ts">
	import { _ } from '$lib/i18n';
</script>

<footer class="footer">
	<div class="footer-container">
		<div>
			<h3>{$_('footer.title')}</h3>
			<p>&copy; 2026 {$_('footer.rights')}</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: rgba(9, 16, 28, 0.9);
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);
		color: var(--text);
		padding: 1.5rem 1.5rem 1.8rem;
		margin-top: 3rem;
		border-radius: 28px;
		width: min(1200px, calc(100% - 40px));
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 1rem;
	}

	.footer-container {
		width: min(1100px, calc(100% - 40px));
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.footer h3 {
		font-size: 1.1rem;
		font-weight: 700;
		margin: 0;
	}

	.footer p {
		font-size: 0.95rem;
		margin: 0.25rem 0 0;
		color: var(--muted);
	}

	@media (max-width: 680px) {
		.footer-container {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
