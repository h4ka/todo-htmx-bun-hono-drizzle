import {css, cx} from "hono/css";
import type {JSX} from "hono/dist/types/jsx/base";
import type {HtmxProps} from "../../types/props/htmx";

type HtmxFormProps = {
    children: JSX.Element | JSX.Element[];
    style?: Promise<string>;
    htmxProps?: HtmxProps;
    enctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
}

export default function HtmxForm(
    {
        children,
        style,
        htmxProps,
        enctype = "application/x-www-form-urlencoded",
    }: HtmxFormProps) {
    return (
        <form
            {...htmxProps}
            enctype={enctype}
            class={cx(styles.todoForm, style)}
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