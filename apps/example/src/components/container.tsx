import { PropsWithChildren } from "react";

import { cn } from "@/utils/cn.util";

type ContainerProps = PropsWithChildren<{
  className?: string;
  label?: string;
}>;

export function Container({ children, className, label }: ContainerProps) {
  return (
    <div
      className={cn(
        "relative p-4 rounded-md border border-dashed bg-white",
        {
          "pt-6 mt-2": !!label,
        },
        className
      )}
    >
      {label && (
        <div
          className={cn(
            "absolute top-0 -translate-y-1/2 left-4 px-2",
            "bg-white text-neutral-700 text-xs font-semibold",
            "border border-dashed border-inherit rounded-full"
          )}
        >
          {label}
        </div>
      )}
      {children}
    </div>
  );
}
