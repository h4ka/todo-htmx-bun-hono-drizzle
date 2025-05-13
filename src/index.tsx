import { Hono } from "hono";
import Home from "./views/pages/home";
import { serveStatic } from "hono/bun";
import todoRoute from "./controllers/api/todos";

const app = new Hono();

app.use(
	"/public/scripts/htmx.min.js",
	serveStatic({ path: "./public/scripts/htmx.min.js" }),
);
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
