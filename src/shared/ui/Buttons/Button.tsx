import { cva } from "class-variance-authority";
import { cn } from "lpm/utils/cn";
import type { ButtonProps } from "./button.types";

export const ButtonVariants = cva(
  "relative link flex w-fit hover-effect rounded-md transition duration-300 ease-in-out",
  {
    variants: {
      variant: {
        sky: "bg-accent text-neutral",
        "ghost-sky": "bg-accent/10 text-accent border border-accent/50",
        dark: "bg-muted text-neutral border",
        light: "bg-neutral text-muted",
        success: "bg-success text-muted",
        danger: "bg-danger text-muted",
        link: "underline underline-offset-2",
        outline: "outline text-neutral",
        "outline-dark": "outline text-muted",
        "outline-sky": "outline outline-accent-secondary text-accent-secondary",
        "outline-success": "outline outline-success text-success",
        "outline-danger": "outline text-danger outline-danger",
        "ghost-dark": "bg-neutral/10 backrop-blur-xl text-muted",
        "ghost-light": "bg-neutral/10 backrop-blur-xl text-light",
        none: "",
      },
      hover: {
        sky: "hover:bg-accent hover:text-neutral hover:outline-accent",
        "ghost-sky":
          "hover:bg-accent/10 hover:text-accent hover:border hover:border-accent/50",
        dark: "hover:bg-muted hover:text-neutral",
        light: "hover:bg-neutral hover:hover:text-muted",
        success: "hover:hover:bg-success hover:hover:text-muted",
        danger: "hover:bg-danger hover:text-muted",
        link: "hover:underline hover:underline-offset-2",
        outline: "hover:bg-transparent hover:outline hover:text-neutral",
        "outline-dark": "hover:bg-transparent hover:outline hover:text-muted",
        "outline-sky":
          "hover:bg-transparent hover:hover:outline hover:hover:outline-accent-secondary hover:hover:text-accent-secondary",
        "outline-success":
          "hover:bg-transparent outline outline-success text-success",
        "outline-danger":
          "hover:bg-transparent hover:outline hover:text-danger hover:outline-danger",
        "ghost-dark":
          "hover:bg-neutral/10 hover:backrop-blur-xl hover:text-muted",
        "ghost-light":
          "hover:bg-neutral/10 hover:outline-none hover:backrop-blur-xl hover:text-neutral",
        none: "",
      },
      rad: {
        xs: "rounded",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        "4xl": "rounded-4xl",
      },
      pad: {
        xs: "px-1 py-0.5",
        sm: "px-2.5 py-1",
        md: "px-3.5 py-1.5",
        lg: "px-6 py-2",
        xl: "px-8 py-2.5",
        none: "",
      },
      x: {
        center: "justify-center",
        left: "justify-start",
        right: "justify-end",
      },
      y: {
        center: "items-center",
        left: "items-start",
        right: "items-end",
      },
      w: {
        full: "w-full",
        fit: "w-fit",
      },
      hoverEffect: {
        "from-top": "hover:after:animate-flow-effect from-top-effect",
        "from-bottom": "hover:after:animate-flow-effect from-bottom-effect",
        "from-left": "hover:after:animate-flow-effect from-left-effect",
        "from-right": "hover:after:animate-flow-effect from-right-effect",
      },
      effectTiming: {
        slow: "effect-slow",
        fast: "effect-fast",
        normal: "effect-normal",
      },
    },
    defaultVariants: {
      variant: "ghost-light",
      hover: "outline",
      pad: "sm",
      rad: "sm",
      effectTiming: "normal",
    },
  },
);

export function Button({
  className,
  variant,
  pad,
  hover,
  rad,
  x,
  y,
  w,
  hoverEffect,
  effectTiming,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        ButtonVariants({
          className,
          variant,
          hover,
          hoverEffect,
          effectTiming,
          pad,
          rad,
          x,
          w,
          y,
        }),
      )}
    />
  );
}
