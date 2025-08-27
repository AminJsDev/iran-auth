import React from "react";

export const Label: React.FC<{
  htmlFor?: string;
  children?: React.ReactNode;
}> = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  );
};
