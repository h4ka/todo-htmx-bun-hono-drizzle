import { css } from "hono/css";
import type HtmxAttributes from "../../../types/htmx";
import Spinner from "../common/spinner";

export default function TodoListContainer() {
	const htmxAttributes: HtmxAttributes = {
		"hx-get": "/api/todos",
		"hx-trigger": "load, todo-delete from:body",
	};

	return (
		<section {...htmxAttributes} class={styles.listContainer}>
			<Spinner size="xl" />
		</section>
	);
}

const styles = {
	listContainer: css`
		overflow: auto;
        height: 100%;
	`,
};
