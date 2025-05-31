import { css } from "hono/css";
import type { Todo } from "../../db/schema/todos";
import TodoItem from "./todo-item";

type TodoListResponseProps = {
	todos: Todo[];
};

export default function TodoListResponse({ todos }: TodoListResponseProps) {
	const sortTodos = (a: Todo, b: Todo) => {
		const dateA = new Date(a.timestamp);
		const dateB = new Date(b.timestamp);
		if (dateA < dateB) return -1;
		if (dateA > dateB) return 1;
		return 0;
	};

	return (
		<ul id="todo-list" class={styles.list}>
			{todos
				.sort((a: Todo, b: Todo) => sortTodos(a, b))
				.map((todo) => (
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
