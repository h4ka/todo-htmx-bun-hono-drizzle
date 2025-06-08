import { css } from "hono/css";
import { type IconVariantProp, sizes } from "./variants";

export default function HtmxIcon({ size = "sm" }: IconVariantProp) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			role="img"
			fill="none"
			id="htmx-icon"
			height={sizes[size]}
			width={sizes[size]}
		>
			<title>Htmx Icon</title>
			<path
				class={styles.path}
				d="M0 13.01v-2l7.09 -2.98 0.58 1.94 -5.1 2.05 5.16 2.05 -0.63 1.9Zm16.37 1.03 5.18 -2 -5.16 -2.09 0.65 -1.88L24 10.95v2.12L17 16zm-2.85 -9.98H16l-5.47 15.88H8.05Z"
			/>
		</svg>
	);
}

const styles = {
	path: css`
		fill: var(--color-primary-text);
		opacity: 0.5;
		stroke-width: 0.25;
	`,
};
