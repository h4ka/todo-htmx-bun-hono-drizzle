import { css } from "hono/css";
import { type IconVariantProp, sizes } from "./variants";

export default function DrizzleIcon({ size = "sm" }: IconVariantProp) {
	return (
		<svg
			role="img"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			id="drizzle-icon"
			height={sizes[size]}
			width={sizes[size]}
		>
			<title>Drizzle Icon</title>
			<path
				d="M5.353 11.823a1.036 1.036 0 0 0 -0.395 -1.422 1.063 1.063 0 0 0 -1.437 0.399L0.138 16.702a1.035 1.035 0 0 0 0.395 1.422 1.063 1.063 0 0 0 1.437 -0.398l3.383 -5.903Zm11.216 0a1.036 1.036 0 0 0 -0.394 -1.422 1.064 1.064 0 0 0 -1.438 0.399l-3.382 5.902a1.036 1.036 0 0 0 0.394 1.422c0.506 0.283 1.15 0.104 1.438 -0.398l3.382 -5.903Zm7.293 -4.525a1.036 1.036 0 0 0 -0.395 -1.422 1.062 1.062 0 0 0 -1.437 0.399l-3.383 5.902a1.036 1.036 0 0 0 0.395 1.422 1.063 1.063 0 0 0 1.437 -0.399l3.383 -5.902Zm-11.219 0a1.035 1.035 0 0 0 -0.394 -1.422 1.064 1.064 0 0 0 -1.438 0.398l-3.382 5.903a1.036 1.036 0 0 0 0.394 1.422c0.506 0.282 1.15 0.104 1.438 -0.399l3.382 -5.902Z"
				class={styles.path}
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
