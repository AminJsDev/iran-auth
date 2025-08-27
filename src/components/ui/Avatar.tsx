// src/components/ui/Avatar.tsx
import React from "react";

export const Avatar: React.FC<{
  src?: string;
  alt?: string;
  size?: number;
}> = ({ src, alt = "avatar", size = 64 }) => {
  return (
    <div
      className="rounded-full overflow-hidden ring-2 ring-white/10"
      style={{ width: size, height: size }}
    >
      <img
        src={src ?? "/avatar-placeholder.png"}
        alt={alt}
        className="object-cover w-full h-full"
      />
    </div>
  );
};
