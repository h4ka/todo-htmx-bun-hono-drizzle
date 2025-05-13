import { css, cx } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

type HtmxListItemProps = {
	id: string;
	style?: Promise<string>;
};

export default function HtmxListItem({
	children,
	id,
	style,
}: PropsWithChildren<HtmxListItemProps>) {
	return (
		<li id={id} class={cx(styles.li, style)}>
			{children}
		</li>
	);
}

const styles = {
	li: css`
        display: flex;
    `,
};
