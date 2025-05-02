import {JSX} from "hono/dist/types/jsx/base";

export default function Layout({children}: { children: JSX.Element }) {
    return (
        <html>
        <head>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gray-100">{children}</body>
        </html>
    );
}