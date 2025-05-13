import { css, cx } from "hono/css";
import type { HtmxProps } from "../../types/props/htmx";

type HtmxListProps = {
	htmxProps: HtmxProps;
	containerStyle?: string;
	style?: Promise<string>;
	id: string;
};

export default function HtmxList({
	htmxProps,
	containerStyle,
	style,
	id,
}: HtmxListProps) {
	return (
		<div class={cx(styles.container, containerStyle)}>
			<ul {...htmxProps} id={id} class={cx(styles.list, style)} />
		</div>
	);
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
    `,
};
