import { css } from "hono/css";
import HtmxCard from "../../components/ui/card";
import TodoForm from "./todo-form";
import TodoHeader from "./todo-header";
import TodoListContainer from "./todo-list-container";
import TodoStats from "./todo-stats";

export default function TodoCard() {
	return (
		<HtmxCard style={styles.card}>
			<TodoHeader />
			<TodoForm />
			<TodoListContainer />
			<TodoStats />
		</HtmxCard>
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
