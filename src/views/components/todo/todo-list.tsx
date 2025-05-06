import {JSX} from "hono/dist/types/jsx/base";

export default async function TodoList({children}: { children: JSX.Element | JSX.Element[]}) {
    return <ul role="list">
        {children}
    </ul>
}