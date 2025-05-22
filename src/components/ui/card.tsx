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
		<section {...htmxProps} class={cx(styles.card, style)}>
			{children}
		</section>
	);
}

const styles = {
	card: css`
		margin: 1rem;
    `,
};
