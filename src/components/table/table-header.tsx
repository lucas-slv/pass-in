import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<"th"> {}

export function TableHeader(props: TableHeaderProps) {
  return <th {...props} className='py-3 px-5 font-semibold text-sm text-left' />
}
