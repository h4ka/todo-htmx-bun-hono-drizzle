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
		padding: 1rem 2rem;
		display: flex;
		flex-direction: column;
		background: var(--color-primary-surface);
		backdrop-filter: blur(10px);
		border-radius: var(--border-radius-global);
		max-width: 500px;
		width: 100%;
		height: 80%;
		overflow: hidden;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
	`,
};
