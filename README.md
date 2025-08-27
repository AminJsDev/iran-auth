# Iran Mobile Login (Next.js App Router + TypeScript + Tailwind)

یک پروژهٔ نمونه برای ورود با **شماره موبایل ایران** (کلاینت‌ساید). هدف: پیاده‌سازی flow ساده‌ی Login → fetch mock API → save in `localStorage` → Dashboard → Logout.

## Tech stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS (only)
- react-hook-form + zod (client validation)

## ساختار پروژه
src/
app/
layout.tsx
page.tsx # redirect -> /login
login/page.tsx
dashboard/page.tsx
components/
ui/ # Button, Input, Label
lib/
phone.ts
storage.ts
types.ts

## قابلیت‌ها
- اعتبارسنجی سمت کلاینت برای فرمت‌های مجاز ایران: `09xxxxxxxxx`, `+989xxxxxxxxx`, `00989xxxxxxxxx`
- نرمال‌سازی شماره به فرمت `+98...`
- ذخیره‌سازی user (name, email, picture, phone) در `localStorage`
- دسترسی: `aria-invalid`, `role="alert"`, `aria-live` و focus-visible
- موبایل-فرست (mobile-first) و Tailwind-only styling
- README با دستورالعمل‌های راه‌اندازی و دیپلوی

## راه‌اندازی محلی

1. کلون یا ایجاد پروژه (اگر از صفر):
```bash
npx create-next-app@latest iran-auth --ts --app --src-dir --import-alias "@/*"
cd iran-auth
