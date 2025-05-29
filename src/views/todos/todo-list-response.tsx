import HtmxList from "../../components/ui/ul";
import type { Todo } from "../../db/schema/todos";
import TodoItem from "./todo-item";

type TodoListResponseProps = {
	todos: Todo[];
};

export default function TodoListResponse({ todos }: TodoListResponseProps) {
	return (
		<HtmxList id="todo-list">
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</HtmxList>
	);
}
