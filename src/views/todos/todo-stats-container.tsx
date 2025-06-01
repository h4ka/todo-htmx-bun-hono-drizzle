import { css } from "hono/css";

export default function TodoStatsContainer() {
	const htmxAttributes = {
		"hx-get": "/api/todos/stats",
		"hx-trigger": "load, todo-add from:body, todo-delete from:body",
	};

	return <section {...htmxAttributes} className={styles.stats} />;
}

const styles = {
	stats: css`
		margin-top: auto;
		padding-top: 1rem;
		border-top: 1px solid #e2e8f0;
		text-align: center;
		color: #718096;
		font-size: 0.9rem;
    `,
};
