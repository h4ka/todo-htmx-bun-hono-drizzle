import {JSX} from "hono/dist/types/jsx/base";

export default async function HtmxListItem({children}: { children: JSX.Element | JSX.Element[] | string }) {
    return <li>
        {children}
    </li>
}