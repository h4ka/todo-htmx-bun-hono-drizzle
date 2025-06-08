import { css } from "hono/css";
import { CustomHtmxTrigger, type HtmxAttributes } from "../../../types/htmx";
import Spinner from "../common/spinner";

export default function TodoListContainer() {
	const htmxAttributes: HtmxAttributes = {
		"hx-get": "/api/todos",
		"hx-trigger": `load, ${CustomHtmxTrigger.TODO_DELETE} from:body`,
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
