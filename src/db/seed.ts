import { db } from "./index";
import * as schema from "./schema/todos";

(async () => {
	console.log("Starting seeding.");
	await db.insert(schema.todos).values([
		{
			content: "Learn HTML",
			done: true,
		},
		{
			content: "Learn CSS",
		},
		{
			content: "Learn Javascript",
			done: true,
		},
		{
			content: "Learn React",
			done: true,
		},
		{
			content: "Learn HTMX",
		},
		{
			content: "Learn Bun and Hono",
		},
		{
			content: "Create Todo App",
			done: true,
		},
		{
			content: "Deploy Todo App",
		},
	]);

	console.log("Seeding complete.");
})();
