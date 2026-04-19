import * as React from "react";
import { cn } from "@/lib/utils";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "lead"
  | "small"
  | "muted"
  | "tiny"
  | "label"
  | "inlineCode"
  | "gradient";

const variantClasses: Record<TypographyVariant, string> = {
  h1: "scroll-m-20 text-4xl font-semibold tracking-tight sm:text-5xl",
  h2: "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6 text-pretty",
  lead: "text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-neutral-500 dark:text-neutral-400 font-normal",
  tiny: "text-xs text-neutral-500 dark:text-neutral-400 font-normal",
  label:
    "text-sm font-medium tracking-widest uppercase text-neutral-500 dark:text-neutral-400",
  inlineCode:
    "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  gradient:
    "bg-gradient-to-br from-neutral-900 via-neutral-600 to-neutral-400 bg-clip-text text-transparent dark:from-white dark:via-neutral-200 dark:to-neutral-500 font-bold",
};

type TypographyProps<T extends React.ElementType> = {
  as?: T;
  variant?: TypographyVariant;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "variant" | "className">;

const Typography = React.forwardRef(
  <T extends React.ElementType = "p">(
    { as, variant, className, children, ...props }: TypographyProps<T>,
    ref: React.ForwardedRef<any>,
  ) => {
    const Component = as || "p";

    return (
      <Component
        ref={ref}
        className={cn(variant && variantClasses[variant], className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
) as <T extends React.ElementType = "p">(
  props: TypographyProps<T> & { ref?: React.ForwardedRef<any> },
) => React.ReactNode;

(Typography as any).displayName = "Typography";

export { Typography };
