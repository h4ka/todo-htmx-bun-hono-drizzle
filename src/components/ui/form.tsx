import { css, cx } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";
import type { HtmxProps } from "../../types/props/htmx";

type HtmxFormProps = {
	style?: Promise<string>;
	htmxProps?: HtmxProps;
	enctype?:
		| "application/x-www-form-urlencoded"
		| "multipart/form-data"
		| "text/plain";
};

export default function HtmxForm({
	children,
	style,
	htmxProps,
	enctype = "application/x-www-form-urlencoded",
}: PropsWithChildren<HtmxFormProps>) {
	return (
		<form {...htmxProps} enctype={enctype} class={cx(styles.todoForm, style)}>
			{children}
		</form>
	);
}

const styles = {
	todoForm: css`
        display: flex;
        gap: 0.5rem;
        width: 100%;
    `,
};
