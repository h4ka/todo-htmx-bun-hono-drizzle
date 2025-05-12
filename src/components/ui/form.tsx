import {css, cx} from "hono/css";
import {JSX} from "hono/dist/types/jsx/base";
import {HtmxProps} from "../../types/props/htmx";

type HtmxFormProps = {
    children: JSX.Element | JSX.Element[];
    formStyle?: string;
    htmxProps?: HtmxProps;
    enctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
}

export default function HtmxForm(
    {
        children,
        formStyle,
        htmxProps,
        enctype = "application/x-www-form-urlencoded",
    }: HtmxFormProps) {
    return (
        <form
            {...htmxProps}
            enctype={enctype}
            class={cx(styles.todoForm, formStyle)}
        >
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