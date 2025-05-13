import { Style, css } from "hono/css";
import type { JSX } from "hono/dist/types/jsx/base";

export default function Layout({
	children,
}: { children: JSX.Element | JSX.Element[] }) {
	return (
		<html lang="en">
			<head>
				<title>Demo Bun + Hono App</title>
				<script src="/public/scripts/htmx.min.js" />
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="stylesheet" href="/src/styles.css" />
				<Style />
			</head>
			<body class={styles.body}>{children}</body>
		</html>
	);
}

const styles = {
	body: css`
        margin: 0;
        padding: 1rem;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `,
};
