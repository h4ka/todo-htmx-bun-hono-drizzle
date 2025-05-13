import {Todo} from "../../db/schema/todos";
import HtmxListItem from "../../components/ui/li";
import HtmxButton from "../../components/ui/button";

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

    return <HtmxListItem key={todo.id} id={`todo-${todo.id}`}>
        <span>{todo.content}</span>
        <HtmxButton
            name="todoId"
            value={todo.id}
            htmxProps={htmxProps.button}
        >
            Delete
        </HtmxButton>
    </HtmxListItem>
}

