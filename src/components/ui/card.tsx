import { css, cx } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import type { HtmxProps } from "../../types/props/htmx";

type HtmxCardProps = {
	htmxProps?: HtmxProps;
	style?: Promise<string>;
};

export default function HtmxCard({
	children,
	style,
	htmxProps,
}: PropsWithChildren<HtmxCardProps>) {
	return (
		<div {...htmxProps} class={cx(styles.card, style)}>
			{children}
		</div>
	);
}

const styles = {
	card: css`
        background-color: #e8e6e6;
        border-radius: 5px;
        border: 1px solid gray;
        padding: 1.5rem;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
    `,
};
