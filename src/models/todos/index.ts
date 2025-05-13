import { db } from "../../db";
import { type Todo, todos } from "../../db/schema/todos";
import { eq } from "drizzle-orm";

export function listTodos(): Promise<Todo[]> {
	return db.select().from(todos);
}

export function addTodo(content: string): Promise<Todo[]> {
	return db.insert(todos).values({ content }).returning();
}

export async function deleteTodo(id: number) {
	await db.delete(todos).where(eq(todos.id, id));
}
