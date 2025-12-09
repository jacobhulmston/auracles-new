import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { motion } from "motion/react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none disabled:cursor-not-allowed touch-manipulation",
  {
    variants: {
      variant: {
        default:
          "disabled:opacity-50 disabled:hover:bg-primary disabled:active:bg-primary bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-foreground shadow-sm",
        gradient:
          "disabled:opacity-50 rgb-button bg-primary text-primary-foreground shadow-sm transform transition-transform duration-300",
        destructive:
          "disabled:opacity-50 bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        accent:
          "disabled:opacity-50 disabled:hover:bg-accent disabled:active:bg-accent bg-accent hover:bg-accent-hover active:bg-accent-active text-accent-foreground shadow-sm hover:text-accent-foreground",
        ghost:
          "bg-transparent disabled:opacity-50 hover:bg-foreground/15 active:bg-foreground/30 hover:text-accent-foreground",
        link: "disabled:opacity-50 text-primary underline-offset-4 hover:underline",
        toggle:
          "disabled:hover:bg-secondary bg-transparent disabled:active:bg-secondary border border-solid border-secondary-foreground hover:border-transparent hover:bg-secondary-foreground hover:bg-secondary-foreground/20 hover:text-secondary-foreground text-secondary-foreground",
        activeToggle:
          "border border-secondary-foreground hover:border-transparent hover:brightness-90 bg-secondary-foreground text-secondary",
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-6 rounded-sm px-1 text-xs font-medium",
        sm: "h-8 rounded-md px-3 text-xs font-medium",
        md: "h-8 rounded-md px-2 text-sm font-medium font-rounded",
        lg: "h-11 rounded-[10px] px-3 text-sm font-medium gap-x-2",
        xl: "h-12 rounded-[10px] px-4 text-sm font-semimedium",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  animated?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      animated = false,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const buttonContent = (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );

    return animated && !disabled ? (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {buttonContent}
      </motion.div>
    ) : (
      buttonContent
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
