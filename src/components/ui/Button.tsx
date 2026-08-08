import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({ className, variant = "primary", children, ...props }: ButtonProps) {
  return (
    <button 
      className={cn(
        "flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors rounded-sm shadow-sm",
        variant === "primary" && "bg-zinc-900 text-white hover:bg-zinc-800 shadow-md",
        variant === "secondary" && "border border-zinc-900 bg-white hover:bg-zinc-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
