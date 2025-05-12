import {db} from "../../db";
import {Todo, todos} from "../../db/schema/todos";

export function listTodos(): Promise<Todo[]> {
    return db.select().from(todos);
}

export function addTodo(content: any): Promise<Todo[]> {
    return db.insert(todos).values({content}).returning();
}