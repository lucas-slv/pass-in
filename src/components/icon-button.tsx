import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      // className={
      //   transparent
      //     ? "border border-white/10 p-1.5 rounded-md bg-black/20"
      //     : "border border-white/10 p-1.5 rounded-md bg-white/10"
      // }

      className={twMerge(
        "border border-white/10 p-1.5 rounded-md",
        transparent ? "bg-black/20" : "bg-white/10",
        props.disabled ? "opacity-50" : null,
      )}
    />
  );
}
