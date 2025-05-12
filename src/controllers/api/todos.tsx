import {Hono} from "hono";
import {db} from "../../db";
import {todos} from "../../db/schema/todos";
import HtmxListItem from "../../views/components/ui/li";

const todoRoute = new Hono()

todoRoute
    .get("/", async c => {
        const results = await db.select().from(todos);

        return c.html(
            <>
                {results.map(todo => <HtmxListItem>{todo.content}</HtmxListItem>)}
            </>,
        );
    })
    .post("/", async c => {
        const {content} = await c.req.json();
        const results = await db.insert(todos).values({content}).returning();
        if (!results || results.length < 1) {
            return c.html(<></>);
        }

        return c.html(<HtmxListItem>{results[0].content}</HtmxListItem>);
    })

export default todoRoute