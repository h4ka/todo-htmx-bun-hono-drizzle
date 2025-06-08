import { css, cx } from "hono/css";
import type { CxArgType } from "../../../../types/css";
import IconContainer, { type IconVariantProp } from "./icon";

type HtmxIconProps = {
	className?: CxArgType;
} & IconVariantProp;

export default function HtmxIcon({ size, className }: HtmxIconProps) {
	return (
		<IconContainer
			className={cx(styles.icon, className)}
			id="htmx-icon"
			size={size}
			title="Htmx Icon"
		>
			<path d="M0 13.01v-2l7.09 -2.98 0.58 1.94 -5.1 2.05 5.16 2.05 -0.63 1.9Zm16.37 1.03 5.18 -2 -5.16 -2.09 0.65 -1.88L24 10.95v2.12L17 16zm-2.85 -9.98H16l-5.47 15.88H8.05Z" />
		</IconContainer>
	);
}

const styles = {
	icon: css`
		fill: var(--color-primary-text);
	`,
};
