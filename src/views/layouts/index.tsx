import { Style, css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<head>
				<title>Demo Bun + Hono + HTMX App</title>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/png" href="/static/favicon.png" />
				<link rel="stylesheet" href="/static/styles/styles.css" />
				<script src="/static/scripts/htmx.min.js" />
				<Style />
			</head>
			<body class={styles.body}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}

const styles = {
	body: css`
        font-family: var(--fonts-global);
        background: var(--color-global-bg);
        overscroll-behavior: none;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        margin: 0;
    `,
};
