import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <div 
      className={cn(
        "inline-flex items-center gap-2 border border-zinc-200 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500 rounded-sm shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
