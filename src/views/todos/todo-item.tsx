import { css } from "hono/css";
import HtmxButton from "../../components/ui/button";
import HtmxListItem from "../../components/ui/li";
import type { Todo } from "../../db/schema/todos";

type TodoItemProps = {
	todo: Todo;
};

export default function TodoItem({ todo }: TodoItemProps) {
	const htmxAttributes = {
		"hx-delete": "/api/todos",
		"hx-target": `#todo-${todo.id}`,
		"hx-swap": "delete",
		"hx-trigger": "click",
	};

	return (
		<HtmxListItem key={todo.id} id={`todo-${todo.id}`} style={styles.li}>
			<span>{todo.content}</span>
			<HtmxButton
				name="todoId"
				value={todo.id}
				htmxProps={htmxAttributes}
				style={styles.button}
			>
				Delete
			</HtmxButton>
		</HtmxListItem>
	);
}

const styles = {
	li: css`
        justify-content: space-between;
    `,
	button: css`
        background-color: lightcoral;
    `,
};
