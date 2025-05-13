import { css, cx } from "hono/css";
import type { JSX } from "hono/dist/types/jsx/base";

type HtmxListItemProps = {
	children: JSX.Element | JSX.Element[] | string;
	key: number | string;
	id: string;
	style?: Promise<string>;
};

export default function HtmxListItem({
	children,
	key,
	id,
	style,
}: HtmxListItemProps) {
	return (
		<li key={key} id={id} class={cx(styles.li, style)}>
			{children}
		</li>
	);
}

const styles = {
	li: css`
        display: flex;
    `,
};
