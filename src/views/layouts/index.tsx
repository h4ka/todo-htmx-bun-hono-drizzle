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
        margin: 0;
        padding: 1rem;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `,
};
