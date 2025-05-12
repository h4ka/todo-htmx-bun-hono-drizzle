import {css, cx} from "hono/css";
import {JSX} from "hono/dist/types/jsx/base";

type HtmxFormProps = {
    children: JSX.Element | JSX.Element[];
    formStyle?: string;
}

export default function HtmxForm({children, formStyle}: HtmxFormProps) {
    return (
        <form class={cx(styles.todoForm, formStyle)}>
            {children}
        </form>
    )
}

const styles = {
    todoForm: css`
        display: flex;
        gap: 0.5rem;
        width: 100%;
    `
}