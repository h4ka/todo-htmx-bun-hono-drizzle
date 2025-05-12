import {Hono} from "hono";
import {addTodo, deleteTodo, listTodos} from "../../models/todos";
import HtmxListItem from "../../components/ui/li";

const todoRoute = new Hono()

todoRoute
    .get("/", async c => {
        const results = await listTodos()
        return c.html(
            <>
                {results.map(todo => <HtmxListItem>{todo.content}</HtmxListItem>)}
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

        return c.html(<HtmxListItem>{results[0].content}</HtmxListItem>);
    })
    .delete("/", async c => {
        const { todoId } = await c.req.json();
        await deleteTodo(todoId)
        return c.body('✔', 200, {
            'HX-Trigger': 'todo-delete',
        });
    })

export default todoRoute