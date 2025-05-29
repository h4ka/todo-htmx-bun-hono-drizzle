import { css } from "hono/css";
import HtmxCard from "../../components/ui/card";
import TodoForm from "./todo-form";
import TodoHeader from "./todo-header";
import TodoListContainer from "./todo-list-container";
import TodoStatsContainer from "./todo-stats-container";

export default function TodoCard() {
	return (
		<HtmxCard style={styles.card}>
			<TodoHeader />
			<TodoForm />
			<TodoListContainer />
			<TodoStatsContainer />
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
