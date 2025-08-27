import "./globals.css";
import React from "react";

export const metadata = {
  title: "Iran Mobile Login",
  description: "Client-side auth demo (Next.js App Router + TS + Tailwind)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <main className="mx-auto max-w-md p-4 sm:p-6 lg:p-8">{children}</main>
      </body>
    </html>
  );
}
