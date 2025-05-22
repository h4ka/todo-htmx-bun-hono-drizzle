import { Style, css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<head>
				<title>Demo Bun + Hono App</title>
				<script src="/public/scripts/htmx.min.js" />
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/png" href="/public/favicon.png" />
				<link rel="stylesheet" href="/src/styles.css" />
				<Style />
			</head>
			<body class={styles.body}>{children}</body>
		</html>
	);
}

const styles = {
	body: css`
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		overscroll-behavior: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 0;
		margin: 0;
	`,
};
