import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import todoRoute from "./controllers/api/todos";
import NotFound from "./views/pages/404";
import HomePage from "./views/pages/home";

const app = new Hono();

app.get(
	"/static/*",
	serveStatic({
		onFound: (_path, c) => {
			c.header("Cache-Control", "public, immutable, max-age=86400"); // cache static files for 1 day
		},
		onNotFound: (path, c) => {
			console.log(`${path} is not found, you access ${c.req.path}`);
		},
	}),
);

app.get("/", (c) => {
	return c.html(<HomePage />);
});

app.notFound((c) => {
	return c.html(<NotFound />, 404);
});

app.route("/api/todos", todoRoute);

export default {
	port: process.env.PORT || 3000,
	fetch: app.fetch,
};
