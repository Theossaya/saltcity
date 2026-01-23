import { ButtonHTMLAttributes } from "react";
import Link from "next/link";

// Update props to include an optional href
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  href?: string;
};

export default function Button({
  variant = "primary",
  className = "",
  href,
  children,
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full shadow-card px-8 py-3 text-sm font-semibold transition duration-300";

  const styles =
    variant === "primary"
      ? "bg-white text-black hover:opacity-90"
      : "bg-transparent text-white ring-1 ring-white/40 hover:ring-white/70";

  const combinedClassName = `${base} ${styles} ${className}`;

  // If href is provided, render a Next.js Link
  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  // Otherwise, render a standard button
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}