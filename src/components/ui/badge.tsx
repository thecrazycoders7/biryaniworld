import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-250 ease-in-out backdrop-blur-sm",
  {
    variants: {
      variant: {
        default:
          "bg-orange-100/80 text-orange-700 border border-orange-200/50 hover:bg-orange-200/80 hover:border-orange-300/50",
        secondary:
          "bg-gray-100/80 text-gray-700 border border-gray-200/50 hover:bg-gray-200/80 hover:border-gray-300/50",
        destructive:
          "bg-red-100/80 text-red-700 border border-red-200/50 hover:bg-red-200/80 hover:border-red-300/50",
        outline: "text-gray-700 border border-gray-200/50 bg-white/50 hover:bg-white/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
