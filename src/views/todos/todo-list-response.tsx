import { css } from "hono/css";
import type { Todo } from "../../db/schema/todos";
import TodoItem from "./todo-item";

type TodoListResponseProps = {
	todos: Todo[];
};

export default function TodoListResponse({ todos }: TodoListResponseProps) {
	return (
		<ul id="todo-list" class={styles.list}>
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
}

const styles = {
	list: css`
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0;
    `,
};
