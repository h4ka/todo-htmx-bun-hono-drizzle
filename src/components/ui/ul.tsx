import { css, cx } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import type { HtmxProps } from "../../types/props/htmx";

type HtmxListProps = {
	htmxProps: HtmxProps;
	style?: Promise<string>;
	id: string;
};

export default function HtmxList({
	htmxProps,
	style,
	id,
	children,
}: HtmxListProps & PropsWithChildren) {
	return (
		<ul {...htmxProps} id={id} class={cx(styles.list, style)}>
			{children}
		</ul>
	);
}

const styles = {
	list: css`
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0;
    `,
};
