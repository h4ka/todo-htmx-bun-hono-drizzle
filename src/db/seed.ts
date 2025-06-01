import delay from "../utils/delay";
import { db } from "./index";
import * as schema from "./schema/todos";

(async () => {
	console.log("Starting seeding.");

	const data = [
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
	];

	for (const todo of data) {
		console.log("Inserting: ", todo.content);
		await delay(1000); // delay inserting to avoid timestamp collision
		await db.insert(schema.todos).values(todo);
		console.log("Inserted.");
	}

	console.log("Seeding complete.");
})();
