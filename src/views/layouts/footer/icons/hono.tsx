import { css, cx } from "hono/css";
import type { CxArgType } from "../../../../types/css";
import IconContainer, { type IconVariantProp } from "./icon";

type HonoIconProps = {
	className?: CxArgType;
} & IconVariantProp;

export default function HonoIcon({ size, className }: HonoIconProps) {
	return (
		<IconContainer
			className={cx(styles.icon, className)}
			id="hono-icon"
			size={size}
			title="Hono Icon"
		>
			<path d="M12.4365 0.2520325c0.062375 -0.0080215 0.11745 0.0077075 0.16515 0.0471875 1.755075 2.142025 3.40665 4.359855 4.954725 6.65348 1.14615 1.725625 2.121325 3.550175 2.92565 5.4738 1.2845 3.426025 0.616 6.40675 -2.005475 8.9421 -2.293725 1.938575 -4.936225 2.693575 -7.927575 2.265025 -3.57555 -0.729025 -6.00575 -2.7974 -7.290525 -6.205225 -0.33465 -1.109425 -0.44475 -2.241925 -0.3303 -3.397525 0.19055 -1.9891 0.662425 -3.9081 1.415625 -5.7569 0.31385 -0.75435 0.722825 -1.4464 1.2269 -2.076275 0.411225 0.4898 0.80445 0.993175 1.179675 1.510025 0.17375 0.181625 0.354625 0.35465 0.542675 0.51905C8.728325 5.378325 10.44285 2.7201 12.4365 0.2520325Z" />
		</IconContainer>
	);
}

const styles = {
	icon: css`
		fill: var(--color-primary-text);
	`,
};
