import * as schema from "./schema/todos";
import { db } from "./index";

(async () => {
	console.log("Starting seeding.");
	await db.insert(schema.todos).values([
		{
			content: "Subscribe to CodeBrew",
		},
		{
			content: "Like the video",
		},
		{
			content: "Check out the other videos",
		},
	]);

	console.log("Seeding complete.");
})();
