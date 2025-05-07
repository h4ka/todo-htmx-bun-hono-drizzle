import {Hono} from "hono";
import {db} from "../../db";
import {todos} from "../../db/schema/todos";
import TodoItem from "../../views/components/todo/todo-item";

const todoRoute = new Hono()

todoRoute.get("/", async c => {
    const results = await db.select().from(todos);

    return c.html(
        <>
            {results.map(todo => <TodoItem>{todo.content}</TodoItem>)}
        </>,
    );
})

export default todoRoute