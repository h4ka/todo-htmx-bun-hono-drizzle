import {Todo} from "../../db/schema/todos";
import HtmxListItem from "../../components/ui/li";
import HtmxButton from "../../components/ui/button";
import {css} from "hono/css";

type TodoItemProps = {
    todo: Todo
}

export default function TodoItem({todo}: TodoItemProps) {
    const htmxProps = {
        button: {
            "hx-delete": "/api/todos",
            "hx-target": `#todo-${todo.id}`,
            "hx-swap": "delete",
            "hx-trigger": "click",
        }
    }

    return <HtmxListItem key={todo.id} id={`todo-${todo.id}`} style={styles.li}>
        <span>{todo.content}</span>
        <HtmxButton
            name="todoId"
            value={todo.id}
            htmxProps={htmxProps.button}
            style={styles.button}
        >
            Delete
        </HtmxButton>
    </HtmxListItem>
}

const styles = {
    li: css`
        justify-content: space-between;
    `,
    button: css`
        background-color: lightcoral;
    `
}