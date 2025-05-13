import {JSX} from "hono/dist/types/jsx/base";

type HtmxListItemProps = {
    children: JSX.Element | JSX.Element[] | string;
    key: number | string;
    id: string;
}

export default function HtmxListItem({children, key, id}: HtmxListItemProps) {
    return <li key={key} id={id}>
        {children}
    </li>
}