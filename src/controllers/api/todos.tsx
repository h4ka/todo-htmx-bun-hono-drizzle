import {Hono} from "hono";
import {addTodo, deleteTodo, listTodos} from "../../models/todos";
import {invariant} from "../../utils/invariant";
import TodoItem from "../../views/todos/todo-item";

const todoRoute = new Hono()

todoRoute
    .get("/", async c => {
        const results = await listTodos()

        return c.html(
            <>
                {results.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
            </>,
        );
    })
    .post("/", async c => {
        const data = await c.req.formData();
        const content = data.get("content");
        invariant(!!content, "Todo content must be present")
        invariant(typeof content === "string", "Todo content must be a string")

        const results = await addTodo(content);

        return c.html(<TodoItem todo={results[0]} />);
    })
    .delete("/", async c => {
        const todoId = c.req.query("todoId");
        invariant(!!todoId, "todoId must be part of query")

        const id = Number.parseInt(todoId)
        invariant(!Number.isNaN(id), "Todo id must be a number")

        await deleteTodo(id)

        return c.body('✔', 200, {
            'HX-Trigger': 'todo-delete',
        });
    })

export default todoRoute