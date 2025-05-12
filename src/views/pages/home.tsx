import {css} from 'hono/css'
import Layout from '../layouts';
import {TodoCard} from "../components/todo";

export default async function Home() {
    return (
        <Layout>
            <nav>Navbar coming soon...</nav>
            <main class={styles.main}>
                <TodoCard/>
            </main>
            <footer>Footer coming soon too...</footer>
        </Layout>
    );
}

const styles = {
    main: css`
        width: 100%;
        flex-grow: 1;
    `
}

