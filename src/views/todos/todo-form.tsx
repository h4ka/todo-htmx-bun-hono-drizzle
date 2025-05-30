import { css } from "hono/css";

export default function TodoForm() {
	const htmxFormAttributes = {
		"hx-post": "/api/todos",
		"hx-target": "#todo-list",
		"hx-swap": "beforeend",
		"hx-on::after-request": "if(event.detail.successful) this.reset()",
	};

	return (
		<form
			{...htmxFormAttributes}
			enctype="application/x-www-form-urlencoded"
			class={styles.todoForm}
		>
			<input
				id="content"
				name="content"
				type="text"
				className={styles.input}
				placeholder="write a new task here"
				required
			/>
			<button type="submit" className={styles.button}>
				Add
			</button>
		</form>
	);
}

const styles = {
	todoForm: css`
        display: flex;
        gap: 0.5rem;
        width: 100%;
    `,
	input: css`
        flex: 1;
        padding: 0.5rem 0.75rem;
        background-color: transparent;
        border: 1px solid gray;
        border-radius: 5px;
        line-height: 1.5rem;
        color: inherit;
        transition: border-color 0.15s ease;
    `,
	button: css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.5rem;
        transition: all 0.15s ease;
        cursor: pointer;
        background-color: gray;
        color: white;
        border: 1px solid black;
        min-width: 100px;
    `,
};
