import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl bg-white shadow-card p-6 ${className}`}
    >
      {children}
    </div>
  );
}
