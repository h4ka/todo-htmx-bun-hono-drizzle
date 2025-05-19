import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import todoRoute from "./controllers/api/todos";
import Home from "./views/pages/home";

const app = new Hono();

app.use("/public/*", serveStatic({ root: "./" }));
app.use("/src/styles.css", serveStatic({ path: "./src/styles.css" }));

app.get("/", (c) => {
	return c.html(<Home />);
});

app.notFound((c) => {
	return c.text("Custom 404 Message", 404);
});

app.route("/api/todos", todoRoute);

export default {
	port: process.env.PORT || 3000,
	fetch: app.fetch,
};
