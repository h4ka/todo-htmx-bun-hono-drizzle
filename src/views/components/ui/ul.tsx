import {css, cx} from "hono/css";
import {HtmxProps} from "../../../types/props/htmx";

type HtmxListProps = {
    htmxProps: HtmxProps,
    containerStyle?: string,
    listStyle?: Promise<string>,
    id: string,
}

export default function HtmxList({htmxProps, containerStyle, listStyle, id}: HtmxListProps) {
    return <div class={cx(styles.container, containerStyle)}>
        <ul
            {...htmxProps}
            id={id}
            role="list"
            class={cx(styles.list, listStyle)}
        >
        </ul>
    </div>
}

const styles = {
    container: css`
        margin-top: 1rem;
    `,
    list: css`
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0;
    `
}