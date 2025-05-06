import {css} from 'hono/css'
import Layout from '../layouts';
import {db} from "../../db";
import {todos} from "../../db/schema/todos";
import TodoList from "../components/todo/todo-list";
import TodoItem from "../components/todo/todo-item";

export default async function Home() {
    const results = await db.select().from(todos);

    const mainStyle = css`
        width: 75%;
        height: 100%;
    `

    return (
        <Layout>
            <main class={mainStyle}>
                <TodoList>
                    {results.map(todo => <TodoItem>{todo.content}</TodoItem>)}
                </TodoList>
            </main>
        </Layout>
    );
}

