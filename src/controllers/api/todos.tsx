import {Hono} from "hono";
import {addTodo, deleteTodo, listTodos} from "../../models/todos";
import TodoItem from "../../views/todos/todo-item";
import {invariant} from "../../utils/invariant";

const todoRoute = new Hono()

todoRoute
    .get("/", async c => {
        const results = await listTodos()
        return c.html(
            <>
                {results.map(todo => <TodoItem todo={todo}/>)}
            </>,
        );
    })
    .post("/", async c => {
        const data = await c.req.formData();
        const content = data.get("content");
        const results = await addTodo(content);

        if (!results || results.length < 1) {
            return c.html(<></>);
        }

        return c.html(<TodoItem todo={results[0]}></TodoItem>);
    })
    .delete("/", async c => {
        const todoId = c.req.query("todoId");
        invariant(!!todoId, "todoId must be part of query")

        const id = parseInt(todoId)
        invariant(!isNaN(id))

        await deleteTodo(id)

        return c.body('✔', 200, {
            'HX-Trigger': 'todo-delete',
        });
    })

export default todoRoute