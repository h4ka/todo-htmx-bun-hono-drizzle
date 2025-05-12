import {css, cx} from "hono/css";

type HtmxInputProps = {
    type: "text" | "password";
    required: boolean;
    inputStyle?: string;
    placeholder?: string;
    id: string;
    name: string;
}

export default function HtmxInput(
    {
        type,
        required,
        inputStyle,
        placeholder = "add custom placeholder",
        id,
        name,
    }: HtmxInputProps) {
    return <input
        id={id}
        name={name}
        type={type}
        className={cx(styles.input, inputStyle)}
        placeholder={placeholder}
        required={required}
    />
}

const styles = {
    input: css`
        flex: 1;
        padding: 0.5rem 0.75rem;
        background-color: transparent;
        border: 1px solid gray;
        border-radius: 5px;
        line-height: 1.5rem;
        color: inherit;
        transition: border-color 0.15s ease;
    `,
}