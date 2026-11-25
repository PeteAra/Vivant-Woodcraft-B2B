import Link from "next/link";
import { type ComponentProps, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "light" | "outlineLight";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-bg-elevated hover:bg-accent-hover",
  secondary: "border border-ink/20 text-ink hover:border-ink/50 bg-transparent",
  light: "bg-bg-elevated text-ink hover:bg-white",
  outlineLight:
    "border border-bg-elevated/70 text-bg-elevated hover:bg-bg-elevated/10",
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm tracking-wide transition-colors duration-300 disabled:opacity-50";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
} & Omit<ComponentProps<"button">, "className" | "children">;

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
