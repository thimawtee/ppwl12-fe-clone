import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  href,
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-[5px] transition-all duration-150 cursor-pointer select-none whitespace-nowrap";

  const variants = {
    primary: "bg-notion-black text-white hover:bg-[#333] active:bg-[#444]",
    secondary:
      "bg-white text-notion-black border border-notion-border hover:bg-notion-hover active:bg-[#EBEBEA]",
    ghost: "text-notion-black hover:bg-notion-hover active:bg-[#EBEBEA]",
    dark: "bg-notion-black text-white hover:opacity-80",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
