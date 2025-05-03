import {JSX} from "hono/dist/types/jsx/base";

export default function Layout({children}: { children: JSX.Element }) {
    return (
        <html>
        <head>
            <title>Demo Bun + Hono App</title>
            <script src="/public/scripts/tailwind.min.js"></script>
            <script src="/public/scripts/htmx.min.js"></script>
        </head>
        <body class="bg-gray-100">{children}</body>
        </html>
    );
}