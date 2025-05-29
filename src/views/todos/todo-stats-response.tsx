import type { TodoStats } from "../../db/schema/todos";

type TodoStatsResponseProps = {
	stats: TodoStats;
};

export default function TodoStatsResponse({ stats }: TodoStatsResponseProps) {
	return (
		<span>
			{stats.activeTodos} of {stats.totalTodos} tasks remaining
		</span>
	);
}
