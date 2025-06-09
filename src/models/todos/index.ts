import { count, desc, eq, sql } from "drizzle-orm";
import { db } from "../../db";
import { type Todo, type TodoStats, todos } from "../../db/schema/todos";

export async function listTodos(): Promise<Todo[]> {
	return db.select().from(todos).orderBy(desc(todos.timestamp));
}

export function addTodo(content: string): Promise<Todo[]> {
	return db.insert(todos).values({ content }).returning();
}

export async function deleteTodo(id: number) {
	await db.delete(todos).where(eq(todos.id, id));
}

export async function toggleTodo(id: number, status: boolean): Promise<Todo[]> {
	return db
		.update(todos)
		.set({ done: status })
		.where(eq(todos.id, id))
		.returning();
}

export async function getTodoStats(): Promise<TodoStats[]> {
	return db
		.select({
			totalTodos: count(),
			activeTodos: count(sql`case when ${todos.done} = false then 1 end`),
		})
		.from(todos);
}
