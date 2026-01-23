import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "secondary";
};

export default function LinkButton({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: Props) {
  const base =
        "inline-flex cursor-pointer items-center justify-center rounded-pill shadow-card px-8 py-3 text-sm font-semibold transition duration-300";


  const styles =
    variant === "primary"
      ? "bg-white text-black hover:opacity-90"
      : "bg-transparent text-white ring-1 ring-white/40 hover:ring-white/70";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </Link>
  );
}

