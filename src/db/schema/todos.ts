import { type InferSelectModel, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todos", {
	id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
	content: text("content", { length: 256 }).notNull(),
	done: integer({ mode: "boolean" }).notNull().default(false),
	timestamp: text("timestamp").default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export type Todo = InferSelectModel<typeof todos>;

export type TodoStats = {
	totalTodos: number;
	activeTodos: number;
};
