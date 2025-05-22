import { css } from "hono/css";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Navbar from "../layouts/navbar";
import TodoCard from "../todos/todo-card";

export default function Home() {
	return (
		<Layout>
			<Navbar />
			<main class={styles.main}>
				<TodoCard />
			</main>
			<Footer />
		</Layout>
	);
}

const styles = {
	main: css`
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		border-radius: 20px;
		width: 100%;
		max-width: 500px;
		height: 80%;
		overflow: auto;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
    `,
};
