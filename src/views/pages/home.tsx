import Layout from '../layouts';
import {db} from "../../db";
import {todos} from "../../db/schema/todos";
import TodoList from "../components/todo/todo-list";
import TodoItem from "../components/todo/todo-item";

export default async function Home() {
    const results = await db.select().from(todos);
    return (
        <Layout>
            <main class="mt-8 max-w-sm mx-auto">
                <TodoList>
                    {results.map(todo => {
                        return <TodoItem>
                            {todo.content}
                        </TodoItem>
                    })}
                </TodoList>
            </main>
        </Layout>
    );
}