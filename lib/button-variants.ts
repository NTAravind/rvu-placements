import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent font-ui text-sm font-semibold whitespace-nowrap transition-colors outline-none select-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-gold text-heading hover:bg-gold-hover hover:text-white",
        gold: "bg-gold text-heading hover:bg-gold-hover hover:text-white",
        outline:
          "border-navy/20 bg-transparent text-heading hover:border-gold hover:text-navy",
        secondary: "bg-navy text-white hover:bg-navy-dark",
        ghost: "bg-transparent text-heading hover:text-gold",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "text-gold underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 gap-2 px-5",
        xs: "h-6 gap-1 px-2 text-xs",
        sm: "h-8 gap-1.5 px-3 text-xs",
        lg: "h-12 gap-2 px-7 text-xs uppercase tracking-[0.16em]",
        cta: "h-12 gap-2 px-7 text-xs uppercase tracking-[0.16em]",
        icon: "size-10",
        "icon-xs": "size-6",
        "icon-sm": "size-8",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
