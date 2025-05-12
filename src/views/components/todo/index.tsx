import HtmxCard from "../ui/card";
import HtmxList from "../ui/ul";
import {HtmxButton} from "../ui/button";
import HtmxForm from "../ui/form";
import {HtmxInput} from "../ui/input";
import {css} from "hono/css";

export function TodoCard() {
    return <HtmxCard>
        <HtmxForm>
            <HtmxInput type="text" required={true} placeholder="write a new task here"/>
            <HtmxButton type="submit">Add</HtmxButton>
        </HtmxForm>
        <HtmxList
            htmxProps={htmxProps.list}
            listStyle={styles.list}
        />
    </HtmxCard>
}

const htmxProps = {
    list: {
        "hx-get": "/api/todos",
        "hx-trigger": "load, todo-delete from:body",
        id: "todo-list",
    }
}

const styles = {
    list: css`
        color: blue;
    `
}