import {JSX} from "hono/dist/types/jsx/base";
import {css, cx} from "hono/css";
import {HtmxProps} from "../../../types/props/htmx";

type HtmxButtonProp = {
    children?: string | JSX.Element;
    buttonStyle?: string;
    htmxProps?: HtmxProps;
    type?: "button" | "submit" | "reset";
}

export function HtmxButton({children, buttonStyle, htmxProps, type = "button"}: HtmxButtonProp) {
    return <button
        type={type}
        className={cx(styles.button, buttonStyle)}
        {...htmxProps}
    >
        {children}
    </button>
}

const styles = {
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
    `
}