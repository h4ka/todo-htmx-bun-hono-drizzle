import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import todoRoute from "./controllers/api/todos";
import HomePage from "./views/pages/home";

const app = new Hono();

app.get(
	"/static/*",
	serveStatic({
		onFound: (_path, c) => {
			c.header("Cache-Control", "public, immutable, max-age=31536000");
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
	return c.text("Custom 404 Message", 404);
});

app.route("/api/todos", todoRoute);

export default {
	port: process.env.PORT || 3000,
	fetch: app.fetch,
};
