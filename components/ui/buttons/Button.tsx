import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
  fullWidth?: boolean;
  target?: string;
  showShimmer?: boolean;
}

const Button = ({
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  className = "",
  children,
  target,
  showShimmer = false,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "relative inline-flex justify-center items-center gap-2 font-bold rounded-2xl transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group/btn";

  const variants = {
    primary:
      "bg-linear-to-r from-(--primary-color) to-(--primary-color)/80 text-white shadow-[0_8px_30px_rgba(9,25,49,0.2)] hover:shadow-[0_12px_40px_rgba(9,25,49,0.3)] hover:-translate-y-1",
    gold: "bg-linear-to-r from-(--gold) to-(--gold-dark) text-white shadow-[0_8px_30px_rgba(201,168,76,0.3)] hover:shadow-[0_12px_40px_rgba(201,168,76,0.5)] hover:-translate-y-1",
    secondary:
      "bg-(--primary-color)/5 text-(--primary-color) border border-(--primary-color)/10 hover:bg-(--primary-color)/10",
    outline:
      "bg-transparent border-2 border-(--primary-color)/20 text-(--primary-color) hover:border-(--primary-color) hover:bg-(--primary-color)/5",
    ghost:
      "bg-transparent text-(--primary-color)/70 hover:text-(--primary-color) hover:bg-(--primary-color)/5",
  };

  const sizes = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  const innerContent = (
    <>
      {showShimmer && (
        <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover/btn:animate-shimmer" />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClassName} target={target}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {innerContent}
    </button>
  );
};

export default Button;
