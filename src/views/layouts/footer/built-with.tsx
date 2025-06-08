import { css } from "hono/css";
import type { PropsWithChildren } from "hono/dist/types/jsx";
import BunIcon from "./icons/bun";
import DrizzleIcon from "./icons/drizzle";
import HonoIcon from "./icons/hono";
import HtmxIcon from "./icons/htmx";

function FooterLink({ children, href }: { href: string } & PropsWithChildren) {
	return (
		<a href={href} target="_blank" rel="noreferrer noopener">
			{children}
		</a>
	);
}

export default function BuiltWithLinks() {
	return (
		<div class={styles.links}>
			<FooterLink href="https://bun.sh">{<BunIcon />}</FooterLink>
			{" + "}
			<FooterLink href="https://hono.dev">{<HonoIcon />}</FooterLink>
			{" + "}
			<FooterLink href="https://htmx.org">{<HtmxIcon />}</FooterLink>
			{" + "}
			<FooterLink href="https://orm.drizzle.team/">
				{<DrizzleIcon />}
			</FooterLink>
		</div>
	);
}

const styles = {
	links: css`
        display: flex;
		gap: 0.5rem;
		align-items: center;
	`,
};
