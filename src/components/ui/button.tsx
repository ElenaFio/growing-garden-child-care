import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#0F8B44] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#0C7338]",
        tourPink: "bg-[#F24E86] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#DF3873]",
        tourYellow: "bg-[#F9B200] text-[#1C2B22] shadow-soft hover:-translate-y-0.5 hover:bg-[#E0A000]",
        whatsapp: "bg-[#0F8B44] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#0C7338]",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border-2 border-[#0F8B44] text-[#0F8B44] bg-background/80 hover:-translate-y-0.5 hover:bg-[#0F8B44]/10",
        secondary: "bg-[#F0F6EC] text-[#0F8B44] shadow-xs hover:bg-[#E4EFE0]",
        ghost: "hover:bg-[#F0F6EC] hover:text-[#0F8B44]",
        link: "text-[#0F8B44] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2 rounded-full",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-12 rounded-full px-8 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
