import { css, cx } from "hono/css";
import type { PropsWithChildren } from "hono/dist/types/jsx";
import type { CxArgType } from "../../../../types/css";

const sizes = {
	sm: "18px",
	md: "24px",
	lg: "32px",
	xl: "48px",
};

export type IconVariantProp = {
	size?: keyof typeof sizes;
};

type IconContainerProps = {
	id: string;
	title: string;
	className?: CxArgType;
} & PropsWithChildren &
	IconVariantProp;

export default function IconContainer({
	children,
	size = "sm",
	id,
	className,
	title,
}: IconContainerProps) {
	return (
		<svg
			role="img"
			id={id}
			fill="none"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			height={sizes[size]}
			width={sizes[size]}
			class={cx(styles.svg, className)}
		>
			<title>{title}</title>
			{children}
		</svg>
	);
}

const styles = {
	svg: css`
		fill: red;
		opacity: 0.7;
		&:hover {
			transition: all 0.3s ease;
			transform: scale(1.2);
			opacity: 0.9;
		}
	`,
};
