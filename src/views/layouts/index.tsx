import {JSX} from "hono/dist/types/jsx/base";
import {css, Style} from "hono/css";

export default function Layout({children}: { children: JSX.Element }) {
    const bodyStyle = css`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
    `

    return (
        <html lang="en">
        <head>
            <title>Demo Bun + Hono App</title>
            <script src="/public/scripts/htmx.min.js"></script>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="/src/styles.css"/>
            <Style/>
        </head>
        <body class={bodyStyle}>{children}</body>
        </html>
    );
}