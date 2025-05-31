import { css } from "hono/css";
import TodoForm from "./todo-form";
import TodoHeader from "./todo-header";
import TodoListContainer from "./todo-list-container";
import TodoStatsContainer from "./todo-stats-container";

export default function TodoCard() {
	return (
		<main class={styles.main}>
			<TodoHeader />
			<TodoForm />
			<TodoListContainer />
			<TodoStatsContainer />
		</main>
	);
}

const styles = {
	main: css`
		padding: 1rem;
		display: flex;
		flex-direction: column;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		border-radius: 20px;
		max-width: 500px;
		width: 100%;
		height: 80%;
		overflow: hidden;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
    `,
};
