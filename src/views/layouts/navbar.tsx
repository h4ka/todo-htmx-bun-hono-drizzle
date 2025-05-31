import { css } from "hono/css";

export default function Navbar() {
	return (
		<nav class={styles.nav}>
			<a href="/" class={styles.logo}>
				TodoApp
			</a>
			<div class={styles.avatar} title="User Profile">
				AZ
			</div>
		</nav>
	);
}

const styles = {
	nav: css`
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        padding: 0 20px;
        position: sticky;
        top: 0;
        z-index: 100;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
		height: 60px;
    `,
	logo: css`
		font-size: 1.25rem;
		font-weight: 600;
		color: white;
		text-decoration: none;
	`,
	avatar: css`
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: linear-gradient(135deg, #ff6b6b, #ee5a24);
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-weight: 600;
		font-size: 0.9rem;
		cursor: pointer;
		transition: transform 0.3s ease;
		border: 2px solid rgba(255, 255, 255, 0.3);
	`,
};
