import { css } from "hono/css";
import TodoForm from "./todo-form";
import TodoHeader from "./todo-header";
import TodoListContainer from "./todo-list-container";
import TodoStatsContainer from "./todo-stats-container";

export default function TodoCard() {
	return (
		<section class={styles.card}>
			<TodoHeader />
			<TodoForm />
			<TodoListContainer />
			<TodoStatsContainer />
		</section>
	);
}

const styles = {
	card: css`
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	`,
};
