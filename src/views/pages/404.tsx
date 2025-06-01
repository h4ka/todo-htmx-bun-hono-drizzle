import { css } from "hono/css";
import Layout from "../layouts";

export default function NotFound() {
	return (
		<Layout>
			<div className={styles.card}>
				<div className={styles.iconWrapper}>
					<div className={styles.icon}>!</div>
				</div>
				<h1 className={styles.title}>404</h1>
				<h2 className={styles.subtitle}>Page Not Found</h2>
				<p className={styles.description}>
					{"Sorry, we couldn't find the page you're looking for."}
				</p>
				<a href="/" className={styles.button}>
					<span className={styles.buttonIcon}>🏠</span>
					Go Back Home
				</a>
			</div>
		</Layout>
	);
}

const styles = {
	card: css`
		background: var(--color-primary-surface);
		border-radius: var(--border-radius-global);
		padding: 3rem 2rem;
		text-align: center;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
		max-width: 400px;
		width: 100%;
	`,
	iconWrapper: css`
		margin: 0 auto 1.5rem;
		width: 64px;
		height: 64px;
		background-color: #ebebeb;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	`,
	icon: css`
        font-size: 2rem;
        font-weight: bold;
        color: #6b7280;
    `,
	title: css`
        font-size: 3rem;
        font-weight: bold;
        margin: 0 0 0.5rem;
        color: #111827;
    `,
	subtitle: css`
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0 0 1rem;
        color: #374151;
    `,
	description: css`
        color: #6b7280;
        margin: 0 0 2rem;
        line-height: 1.5;
    `,
	button: css`
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background-color: var(--color-primary);
        color: var(--color-primary-text);
        padding: 0.75rem 1.5rem;
        border-radius: var(--border-radius-global);
        text-decoration: none;
        font-weight: 500;
        transition: background-color 0.2s ease;
        width: 60%;
		height: 3rem;
        justify-content: center;
        
        &:hover {
            background-color: var(--color-primary-hover);
        }
    `,
	buttonIcon: css`
        font-size: 1rem;
    `,
};
