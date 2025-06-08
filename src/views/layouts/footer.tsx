import { css } from "hono/css";
import BuiltWithLinks from "./footer/built-with";

export default function Footer() {
	return (
		<footer class={styles.footer}>
			<div class={styles.footerContent}>
				<p>Built with</p> <BuiltWithLinks />
			</div>
		</footer>
	);
}

const styles = {
	footer: css`
		width: 100vw;
		background: rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding: 1rem;
		text-align: center;
	`,
	footerContent: css`
		color: rgba(255, 255, 255, 0.8);
		font-size: 0.9rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	`,
};
