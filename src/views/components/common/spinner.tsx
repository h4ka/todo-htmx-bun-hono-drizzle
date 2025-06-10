import { css, cx, keyframes } from "hono/css";

type SpinnerProps = {
	size?: "sm" | "md" | "lg" | "xl";
};

export default function Spinner({ size = "md" }: SpinnerProps) {
	return (
		<div class={cx("htmx-indicator", styles.spinnerContainer)}>
			<div
				class={cx(styles.spinner, styles.spinnerSizes[size])}
				role="status"
				aria-label="Loading"
			/>
		</div>
	);
}

const animations = {
	spin: keyframes`
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	`,
};

const styles = {
	spinnerContainer: css`
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    `,
	spinner: css`
        border-radius: 50%;
        border-style: solid;
        border-color: #e5e7eb;
        border-top-color: var(--color-primary);
		animation: ${animations.spin} 1s linear infinite;
    `,
	spinnerSizes: {
		sm: css`
            width: 1.5rem;
            height: 1.5rem;
            border-width: 2px;
        `,
		md: css`
            width: 2.5rem;
            height: 2.5rem;
            border-width: 3px;
        `,
		lg: css`
            width: 3.5rem;
            height: 3.5rem;
            border-width: 4px;
        `,
		xl: css`
            width: 4.5rem;
            height: 4.5rem;
            border-width: 5px;
        `,
	},
};
