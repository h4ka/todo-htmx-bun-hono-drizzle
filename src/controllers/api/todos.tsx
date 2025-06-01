import { Hono } from "hono";

import {
	addTodo,
	deleteTodo,
	getTodoStats,
	listTodos,
} from "../../models/todos";
import { invariant } from "../../utils/invariant";
import TodoItem from "../../views/todos/todo-item";
import TodoListResponse from "../../views/todos/todo-list-response";
import TodoStatsResponse from "../../views/todos/todo-stats-response";

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
			"HX-Trigger": "todo-add",
		});
	})
	.delete(async (c) => {
		const todoId = c.req.query("todoId");
		invariant(!!todoId, "todoId must be part of query");

		const id = Number.parseInt(todoId);
		invariant(!Number.isNaN(id), "Todo id must be a number");

		await deleteTodo(id);

		return c.body("✔", 200, {
			"HX-Trigger": "todo-delete",
		});
	});

todoRoute.get("/stats", async (c) => {
	const results = await getTodoStats();
	return c.html(<TodoStatsResponse stats={results[0]} />);
});

export default todoRoute;
