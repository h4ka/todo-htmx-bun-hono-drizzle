import {css} from 'hono/css'
import Layout from '../layouts';
import TodoList from "../components/todo/todo-list";

export default async function Home() {
    const mainStyle = css`
        width: 100%;
        flex-grow: 1;
    `
    return (
        <Layout>
            <nav>Navbar coming soon...</nav>
            <main class={mainStyle}>
                <TodoList/>
            </main>
            <footer>Footer coming soon too...</footer>
        </Layout>
    );
}

