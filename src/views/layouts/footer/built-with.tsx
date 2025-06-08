import { css } from "hono/css";
import type { PropsWithChildren } from "hono/dist/types/jsx";
import BunIcon from "./icons/bun";
import DrizzleIcon from "./icons/drizzle";
import HonoIcon from "./icons/hono";
import HtmxIcon from "./icons/htmx";

function LinkWithIcon({
	children,
	href,
}: { href: string } & PropsWithChildren) {
	return (
		<a href={href} target="_blank" rel="noreferrer noopener">
			{children}
		</a>
	);
}

export default function BuiltWithLinks() {
	return (
		<nav class={styles.links}>
			<LinkWithIcon href="https://bun.sh">{<BunIcon />}</LinkWithIcon>
			{" + "}
			<LinkWithIcon href="https://hono.dev">{<HonoIcon />}</LinkWithIcon>
			{" + "}
			<LinkWithIcon href="https://htmx.org">{<HtmxIcon />}</LinkWithIcon>
			{" + "}
			<LinkWithIcon href="https://orm.drizzle.team/">
				{<DrizzleIcon />}
			</LinkWithIcon>
		</nav>
	);
}

const styles = {
	links: css`
        display: flex;
		gap: 0.5rem;
		align-items: center;
	`,
};
