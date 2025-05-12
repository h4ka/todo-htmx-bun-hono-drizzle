import {Hono} from "hono";
import HtmxListItem from "../../views/components/ui/li";
import {addTodo, listTodos} from "../../models/todos";

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
        const {content} = await c.req.json();
        const results = await addTodo(content)
        if (!results || results.length < 1) {
            return c.html(<></>);
        }

        return c.html(<HtmxListItem>{results[0].content}</HtmxListItem>);
    })

export default todoRoute