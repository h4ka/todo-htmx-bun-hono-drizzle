export default async function TodoList() {
    return <>
        <h3>Todos: </h3>
        <ul
            hx-get="/api/todos"
            hx-trigger="load, todo-delete from:body"
            id="todo-list"
            role="list">
        </ul>
    </>
}