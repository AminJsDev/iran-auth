// src/components/ui/Input.tsx
"use client";
import React from "react";

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={`w-full rounded-lg border border-transparent bg-white/3 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-transparent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-300 outline-none ${props.className ?? ""}`}
    />
  );
};
