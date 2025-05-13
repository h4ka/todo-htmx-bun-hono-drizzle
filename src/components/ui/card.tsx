import {JSX} from "hono/dist/types/jsx/base";
import {css, cx} from "hono/css";
import {HtmxProps} from "../../types/props/htmx";

type HtmxCardProps = {
    children: JSX.Element | JSX.Element[];
    htmxProps?: HtmxProps;
    style?: Promise<string>;
}

export default function HtmxCard({children, style, htmxProps}: HtmxCardProps) {
    return <div
        {...htmxProps}
        class={cx(styles.card, style)}>
        {children}
    </div>
}

const styles = {
    card: css`
        background-color: #e8e6e6;
        border-radius: 5px;
        border: 1px solid gray;
        padding: 1.5rem;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
    `
}