import { ComponentProps } from "react";

interface NavLinksProps extends ComponentProps<"a"> {
    children: string
}

export function NavLink(props: NavLinksProps) {
    return (
      <a {...props} className='font-medium text-sm text-zinc-300'>{props.children}</a>
    );
}