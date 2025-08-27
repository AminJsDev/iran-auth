// src/components/ui/Button.tsx
"use client";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export const Button: React.FC<ButtonProps> = ({ variant = "primary", className = "", children, ...rest }) => {
  const base = "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:ring-2 focus-visible:ring-offset-2";
  const primary = "px-5 py-3 bg-gradient-to-r from-[#7c3aed] to-[#00e5ff] text-black shadow-2xl hover:scale-[1.01] active:scale-[0.995]";
  const ghost = "px-4 py-2 border border-transparent bg-transparent text-white hover:bg-white/5";

  const classes = `${base} ${variant === "primary" ? primary : ghost} ${rest.disabled ? "opacity-60 cursor-not-allowed" : ""} ${className}`;
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};
