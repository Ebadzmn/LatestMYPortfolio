import React from "react";
import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Tag({ className, children, ...props }: TagProps) {
  return (
    <div 
      className={cn(
        "flex items-center gap-2 border border-zinc-200 bg-white/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500 rounded-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
