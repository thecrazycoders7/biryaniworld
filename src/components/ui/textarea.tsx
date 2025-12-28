import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[100px] w-full rounded-xl border border-zinc-700 bg-zinc-900 backdrop-blur-sm px-4 py-3 text-sm text-white ring-offset-zinc-900 placeholder:text-gray-500 transition-all duration-250 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:border-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 hover:border-zinc-600",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
