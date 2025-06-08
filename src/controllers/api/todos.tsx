import { Hono } from "hono";

import {
	addTodo,
	deleteTodo,
	getTodoStats,
	listTodos,
	toggleTodo,
} from "../../models/todos";
import { CustomHtmxTrigger } from "../../types/htmx";
import { invariant } from "../../utils/invariant";
import TodoItem from "../../views/components/todos/todo-item";
import TodoListResponse from "../../views/components/todos/todo-list-response";
import TodoStatsResponse from "../../views/components/todos/todo-stats-response";

const todoRoute = new Hono();

todoRoute
	.get(async (c) => {
		const results = await listTodos();

		return c.html(<TodoListResponse todos={results} />);
	})
	.post(async (c) => {
		const data = await c.req.formData();
		const content = data.get("content");
		invariant(!!content, "Todo content must be present");
		invariant(typeof content === "string", "Todo content must be a string");

		const results = await addTodo(content);

		return c.html(<TodoItem todo={results[0]} />, 201, {
			"HX-Trigger": CustomHtmxTrigger.TODO_ADD,
		});
	})
	.patch(async (c) => {
		const data = await c.req.formData();

		const id = data.get("id");
		invariant(id !== undefined, "Todo id must be present");

		const todoId = Number.parseInt(id as string);
		invariant(
			!Number.isNaN(id),
			`Todo id must be a valid number. Found ${todoId}`,
		);

		const isDone = data.get("isDone");
		const status = isDone === "on";

		const result = await toggleTodo(todoId, status);
		invariant(
			result.length === 1,
			"Updated result array must have exactly 1 item",
		);

		return c.html(<TodoItem key={result[0].id} todo={result[0]} />, 200, {
			"HX-Trigger": CustomHtmxTrigger.TODO_UPDATE,
		});
	})
	.delete(async (c) => {
		const todoId = c.req.query("todoId");
		invariant(!!todoId, "todoId must be part of query");

		const id = Number.parseInt(todoId);
		invariant(
			!Number.isNaN(id),
			`Todo id must be a valid number. Found ${todoId}`,
		);

		await deleteTodo(id);

		return c.body("✔", 200, {
			"HX-Trigger": CustomHtmxTrigger.TODO_DELETE,
		});
	});

todoRoute.get("/stats", async (c) => {
	const results = await getTodoStats();
	return c.html(<TodoStatsResponse stats={results[0]} />);
});

export default todoRoute;
