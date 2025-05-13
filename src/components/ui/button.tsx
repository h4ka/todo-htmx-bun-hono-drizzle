import type { JSX } from "hono/dist/types/jsx/base";
import { css, cx } from "hono/css";
import type { HtmxProps } from "../../types/props/htmx";

type HtmxButtonProp = {
	children?: string | JSX.Element;
	style?: Promise<string>;
	htmxProps?: HtmxProps;
	type?: "button" | "submit" | "reset";
	name?: string;
	value?: string | number;
};

export default function HtmxButton({
	children,
	style,
	htmxProps,
	type = "button",
	name = "default",
	value = "default",
}: HtmxButtonProp) {
	return (
		<button
			type={type}
			className={cx(styles.button, style)}
			name={name}
			value={value}
			{...htmxProps}
		>
			{children}
		</button>
	);
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
        min-width: 100px;
    `,
};
