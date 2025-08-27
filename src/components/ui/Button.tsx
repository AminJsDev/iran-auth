"use client";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "default";
};

export const Button: React.FC<ButtonProps> = ({ variant = "primary", className = "", children, ...rest }) => {
  const base = "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const primary = "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-500";
  const def = "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 focus-visible:ring-gray-400";

  const classes = `${base} ${variant === "primary" ? primary : def} ${rest.disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};
