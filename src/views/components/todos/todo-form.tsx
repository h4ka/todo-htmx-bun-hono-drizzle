import { css } from "hono/css";
import type { HtmxAttributes } from "../../../types/htmx";

export default function TodoForm() {
	const htmxFormAttributes: HtmxAttributes = {
		"hx-post": "/api/todos",
		"hx-target": "#todo-list",
		"hx-swap": "afterbegin",
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
				class={styles.input}
				placeholder="write a new task here"
				required
			/>
			<button type="submit" class={styles.button}>
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
		padding-bottom: 1rem;
		border-bottom: 1px solid #e2e8f0;
		margin-bottom: 1rem;
		box-shadow: 0 1rem 1rem -1rem #d6d6d6;
	`,
	input: css`
		width: 100%;
		height: 3rem;
		padding: 0.5rem 1.5rem;
		border: 2px solid #e2e8f0;
		border-radius: var(--border-radius-global);
		font-size: 1rem;
		outline: none;
		transition: all 0.3s ease;
		background: #ffffff;

		&:focus {
			border-color: #667eea;
			box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
		}
		
		&::placeholder {
			color: #a0aec0;
		}
    `,
	button: css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--border-radius-global);
		border: none;
		background: var(--color-primary);
		color: var(--color-primary-text);
		font-size: 1rem;
        font-weight: 400;
        transition: all 0.15s ease;
        cursor: pointer;
        min-width: 80px;
		opacity: 0.8;
		
		&:hover {
			opacity: 1;
			background: var(--color-primary-hover);
			transform: scale(1.05);
			font-size: 1.2rem;
		}

		form:invalid & {
			opacity: 0.3;
			cursor: not-allowed;
			pointer-events: none;
		}
	`,
};
