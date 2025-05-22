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
        width: 100%;
        flex-grow: 1;
    `,
};
