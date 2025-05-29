import { css } from "hono/css";

export default function TodoStats() {
	return (
		<section className={styles.stats}>
			<span>3 of 5 tasks remaining</span>
		</section>
	);
}

const styles = {
	stats: css`
		margin-top: 30px;
		padding-top: 20px;
		border-top: 1px solid #e2e8f0;
		text-align: center;
		color: #718096;
		font-size: 0.9rem;
    `,
};
