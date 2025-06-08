import { css } from "hono/css";
import { CustomHtmxTrigger, type HtmxAttributes } from "../../../types/htmx";

export default function TodoStatsContainer() {
	const htmxAttributes: HtmxAttributes = {
		"hx-get": "/api/todos/stats",
		"hx-trigger": `
			load, 
			${CustomHtmxTrigger.TODO_ADD} from:body, 
			${CustomHtmxTrigger.TODO_DELETE} from:body, 
			${CustomHtmxTrigger.TODO_UPDATE} from:body
		`,
	};

	return <section {...htmxAttributes} class={styles.stats} />;
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
