// src/components/ui/Label.tsx
import React from "react";

export const Label: React.FC<{ htmlFor?: string; children?: React.ReactNode }> = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-white/90 mb-1">
      {children}
    </label>
  );
};
