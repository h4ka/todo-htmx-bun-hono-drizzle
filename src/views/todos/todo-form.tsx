import HtmxButton from "../../components/ui/button";
import HtmxForm from "../../components/ui/form";
import HtmxInput from "../../components/ui/input";

export default function TodoForm() {
	const htmxFormAttributes = {
		"hx-post": "/api/todos",
		"hx-target": "#todo-list",
		"hx-swap": "beforeend",
		"hx-on::after-request": "if(event.detail.successful) this.reset()",
	};

	return (
		<HtmxForm
			htmxProps={htmxFormAttributes}
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
	);
}
