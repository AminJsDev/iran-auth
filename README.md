🔐 Iranian Mobile Authentication Sample
یک پروژه فرانت‌اند نمونه برای پیاده‌سازی فرآیند احراز هویت با شماره موبایل ایرانی

## 🛠️ تکنولوژی‌ها

![React](assets/images/React.svg)
![TypeScript](assets/images/Typescript.svg) 
![TailwindCSS](assets/images/TailwindCSS.svg)
![License](assets/images/License.svg)

✨ ویژگی‌های پروژه
✅ اعتبارسنجی شماره موبایل ایرانی با regex

📞 سیستم ارسال و تأیید کد احراز

🔐 مدیریت وضعیت احراز هویت با Context API

💾 ذخیره‌سازی امن توکن در localStorage

🎨 طراحی ریسپانسیو و مدرن با TailwindCSS

🧪 تست‌های واحد برای کامپوننت‌های اصلی

🚀 بهینه‌سازی شده برای production

🚀 شروع سریع
پیش‌نیازها
Node.js 16.x یا بالاتر

npm یا yarn

مرورگر مدرن

نصب و راه‌اندازی
# 1. کلون کردن ریپازیتوری
git clone https://github.com/AminJsDev/iran-auth.git

# 2. رفتن به دایرکتوری پروژه
cd iranian-auth-sample

# 3. نصب dependencies
npm install

# 4. اجرای پروژه در حالت توسعه
npm run dev

# 5. باز کردن در مرورگر
# به آدرس http://localhost:3000 مراجعه کنید

ساخت برای Production
# ساخت bundle بهینه‌شده
npm run build

# پیش‌نمایش production build
npm run preview

📱 Flow پروژه
مرحله	توضیحات
1. صفحه ورود	کاربر شماره موبایل ایرانی خود را وارد می‌کند
2. اعتبارسنجی	بررسی صحت فرمت شماره موبایل (09xxxxxxxxx)
3. دریافت کد	ارسال کد تأیید به شماره (شبیه‌سازی شده)
4. تأیید کد	کاربر کد دریافتی را وارد می‌کند (کد پیش‌فرض: 123456)
5. ایجاد توکن	تولید و ذخیره توکن احراز هویت
6. داشبورد	انتقال کاربر به صفحه اصلی پس از ورود موفق
7. خروج	امکان خروج و پاکسازی اطلاعات کاربر


🛠️ تکنولوژی‌های استفاده شده
Framework: React 18 + TypeScript

Styling: Tailwind CSS

State Management: React Context API

Form Handling: React Hook Form + Yup

HTTP Client: Axios

Testing: Jest + React Testing Library

Build Tool: Vite

📁 ساختار پروژه
src/
├── components/          # کامپوننت‌های قابل استفاده مجدد
│   ├── ui/             # کامپوننت‌های پایه UI
│   ├── auth/           # کامپوننت‌های مرتبط با احراز هویت
│   └── layout/         # کامپوننت‌های layout
├── contexts/           # Contextهای React
│   └── AuthContext.tsx # مدیریت وضعیت احراز هویت
├── hooks/              # Hookهای سفارشی
├── services/           # سرویس‌های API و utilities
├── types/              # TypeScript type definitions
├── utils/              # توابع utility
├── pages/              # کامپوننت‌های صفحه
└── __tests__/          # تست‌های واحد

🔌 API Endpoints
پروژه از API شبیه‌سازی شده استفاده می‌کند:

ارسال شماره موبایل
POST /api/auth/login
Body: { phone: "09123456789" }
Response: { success: true, message: "کد احراز ارسال شد" }

تأیید کد احراز
POST /api/auth/verify
Body: { phone: "09123456789", code: "123456" }
Response: { 
  success: true, 
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", 
  user: { 
    id: 1, 
    name: "کاربر نمونه", 
    phone: "09123456789" 
  }
}
دریافت اطلاعات کاربر
GET /api/user/profile
Headers: { Authorization: "Bearer <token>" }
Response: { 
  user: { 
    id: 1, 
    name: "کاربر نمونه", 
    phone: "09123456789" 
  }
}
🤝 مشارکت در پروژه
پروژه را Fork کنید

Branch جدید ایجاد کنید (git checkout -b feature/feature-name)

تغییرات را Commit کنید (git commit -m 'Add new feature')

تغییرات را Push کنید (git push origin feature/feature-name)

Pull Request ایجاد کنید




📬 تماس با من
ایمیل: aminakbari.dev@gmail.com

لینکدین: [Amin Akbari](https://www.linkedin.com/in/aminjsdev/)
