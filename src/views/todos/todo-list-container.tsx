import { css } from "hono/css";

export default function TodoListContainer() {
	const htmxAttributes = {
		"hx-get": "/api/todos",
		"hx-trigger": "load, todo-delete from:body",
	};

	return <section {...htmxAttributes} class={styles.listContainer} />;
}

const styles = {
	listContainer: css`
		overflow: auto;
	`,
};
