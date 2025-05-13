import HtmxCard from "../../components/ui/card";
import HtmxList from "../../components/ui/ul";
import HtmxButton from "../../components/ui/button";
import HtmxForm from "../../components/ui/form";
import HtmxInput from "../../components/ui/input";
import { css } from "hono/css";

export default function TodoCard() {
	const htmxProps = {
		list: {
			"hx-get": "/api/todos",
			"hx-trigger": "load, todo-delete from:body",
		},
		form: {
			"hx-post": "/api/todos",
			"hx-target": "#todo-list",
			"hx-swap": "beforeend",
			"hx-on::after-request": "if(event.detail.successful) this.reset()",
		},
	};

	return (
		<HtmxCard>
			<HtmxForm
				htmxProps={htmxProps.form}
				enctype="application/x-www-form-urlencoded"
			>
				<HtmxInput
					id="content"
					name="content"
					type="text"
					required={true}
					placeholder="write a new task here"
				/>
				<HtmxButton type="submit">Add</HtmxButton>
			</HtmxForm>
			<HtmxList id="todo-list" htmxProps={htmxProps.list} style={styles.list} />
		</HtmxCard>
	);
}

const styles = {
	list: css`
        color: blue;
    `,
};
