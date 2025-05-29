import { count, eq, sql } from "drizzle-orm";
import { db } from "../../db";
import { type Todo, type TodoStats, todos } from "../../db/schema/todos";

export function listTodos(): Promise<Todo[]> {
	return db.select().from(todos);
}

export function addTodo(content: string): Promise<Todo[]> {
	return db.insert(todos).values({ content }).returning();
}

export async function deleteTodo(id: number) {
	await db.delete(todos).where(eq(todos.id, id));
}

export async function getTodoStats(): Promise<TodoStats[]> {
	return db
		.select({
			totalTodos: count(),
			activeTodos: count(sql`case when ${todos.done} = false then 1 end`),
		})
		.from(todos);
}
