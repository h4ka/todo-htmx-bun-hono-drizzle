import { css, cx } from "hono/css";
import type { Todo } from "../../../db/schema/todos";
import type { HtmxAttributes } from "../../../types/htmx";

type TodoItemProps = {
	todo: Todo;
};

export default function TodoItem({ todo }: TodoItemProps) {
	const htmxButtonAttributes: HtmxAttributes = {
		"hx-delete": "/api/todos",
		"hx-target": `#todo-${todo.id}`,
		"hx-swap": "delete",
		"hx-trigger": "click",
	};

	const htmxCheckboxAttributes: HtmxAttributes = {
		"hx-patch": "/api/todos",
		"hx-target": `#todo-${todo.id}`,
		"hx-swap": "outerHTML",
		"hx-vals": `js:{id: ${todo.id}}`,
	};

	return (
		<li
			key={todo.id}
			id={`todo-${todo.id}`}
			class={cx(styles.list, todo.done && styles.completed)}
		>
			<label class={styles.content}>
				<input
					type="checkbox"
					name="isDone"
					class={styles.checkbox}
					checked={todo.done}
					{...htmxCheckboxAttributes}
					aria-label="Mark as complete"
				/>
				<span class={cx(styles.text, todo.done && styles.completedText)}>
					{todo.content}
				</span>
			</label>

			<button
				type="button"
				class={styles.button}
				name="todoId"
				value={todo.id}
				{...htmxButtonAttributes}
			>
				❌
			</button>
		</li>
	);
}

const styles = {
	list: css`
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: var(--border-radius-global);
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all 0.3s ease;
        animation: slideIn 0.5s ease;
        cursor: pointer;
		
		button[name="todoId"] {
			opacity: 0;
		}

        &:hover {
            transform: translateY(-2px);
            box-shadow: rgba(0, 0, 0, 0.1) 0 5px 5px;

			button[name="todoId"] {
				opacity: 0.6;
			}
        }
    `,
	completed: css`
        opacity: 0.6;
        background: var(--color-disabled-surface);
    `,
	checkbox: css`
        appearance: none;
        width: 20px;
        height: 20px;
        border: 2px solid #cbd5e0;
        border-radius: var(--border-radius-global);
        margin-right: 1rem;
        margin-left: 0.5rem;
        cursor: pointer;
        position: relative;
        transition: all 0.3s ease;

        &:hover {
            border-color: #667eea;
            transform: scale(1.2);
        }

        &:checked {
            background: var(--color-primary);
            border-color: var(--color-primary);

            &::after {
                content: '✓';
                position: absolute;
                top: -4px;
                left: 1px;
                color: white;
                font-size: 1rem;
                font-weight: bold;
            }
        }
    `,
	content: css`
        display: flex;
        align-items: center;
        flex: 1;
        overflow: hidden;
    `,
	text: css`
        color: #2d3748;
        font-size: 1rem;
        line-height: 1.5;
        flex: 1;
        transition: all 0.3s ease;
        overflow: hidden;
        text-overflow: ellipsis;
    `,
	completedText: css`
        text-decoration: line-through;
        color: var(--color-disabled-text);
    `,
	button: css`
        background: none;
        border: none;
        color: var(--color-negative-surface);
        cursor: pointer;
        padding: 0.5rem;
        margin-right: 0.5rem;
        border-radius: var(--border-radius-global);
        transition: all 0.3s ease;
        transform: scale(0.8);
        font-size: 0.6rem;
        font-weight: bold;
		min-width: 30px;

        &:hover {
            opacity: 1;
            background: var(--color-negative-surface-hover);
            transform: scale(1.1);
        }
    `,
};
