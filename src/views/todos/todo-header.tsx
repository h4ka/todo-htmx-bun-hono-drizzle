import { css } from "hono/css";

export default function TodoHeader() {
	return (
		<section className={styles.header}>
			<h1>Todo</h1>
			<p>Stay organized, stay focused</p>
		</section>
	);
}

const styles = {
	header: css`
        text-align: center;
        margin-bottom: 40px;

        h1 {
            color: #2d3748;
            font-size: 2.5rem;
            font-weight: 300;
            letter-spacing: -1px;
        }
		
		p {
			color: #718096;
		}
    `,
};
