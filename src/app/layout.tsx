// src/app/layout.tsx
import "./globals.css";
import React from "react";

export const metadata = {
  title: "CyberCity Auth",
  description: "Login with Iranian mobile - CyberCity theme",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-cyber-bg min-h-screen text-white antialiased">
        {/* neon grid background + container */}
        <div className="min-h-screen w-full flex items-center justify-center">
          <div className="relative w-full max-w-2xl px-4 sm:px-6 lg:px-8">
            {/* subtle glass card behind content */}
            <div className="absolute inset-0 rounded-2xl blur-3xl opacity-30 pointer-events-none" aria-hidden />
            <div className="relative z-10">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
