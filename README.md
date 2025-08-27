# 📱 Simple Client-Side Authentication System
![React](https://raw.githubusercontent.com/AminJsDev/iran-auth/main/assets/React.svg)
![Typescript](https://raw.githubusercontent.com/AminJsDev/iran-auth/main/assets/Typescript.svg)
![TailwindCSS](https://raw.githubusercontent.com/AminJsDev/iran-auth/main/assets/TailwindCSS.svg)
![License](https://raw.githubusercontent.com/AminJsDev/iran-auth/main/assets/License.svg)

This project is a **Next.js + TypeScript** based client-side authentication demo.  
It allows users to log in with their **Iranian mobile number**, retrieves mock user data, and stores the session on the **client-side (localStorage)**.  
A simple **Dashboard** welcomes the user after login and provides a logout option.

---

## 🚀 Features

- **Login Page** with:
  - Single input for **Iranian mobile number**
  - Client-side validation (`09xxxxxxxxx`, `+989xxxxxxxxx`)
  - "Login" button with loading & disabled states

- **Dashboard Page** with:
  - Welcome message showing the user's **name**
  - Logout button → clears localStorage & redirects to Login

- **API Handling**
  - Mock API request (`fetch`)
  - Saves user data (`name`, `email`, `picture`) to `localStorage`

- **UI**
  - Built with **Tailwind CSS** only
  - Responsive (mobile-first design)
  - Accessible (ARIA attributes, focus-visible states)

---

## 🛠️ Tech Stack

- [Next.js (App Router)](https://nextjs.org/docs/app) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- LocalStorage (for client-side session handling)

---

## 📂 Project Structure
```
├── app
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Login page
│ ├── dashboard
│ │ └── page.tsx # Dashboard page
│
├── components
│ ├── Input.tsx # Reusable input component
│ ├── Button.tsx # Reusable button component
│
├── lib
│ └── utils.ts # Helper functions (validation, etc.)
│
├── public # Static assets
│
├── styles
│ └── globals.css # Tailwind setup
│
└── README.md
```


---

## ⚙️ Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/AminJsDev/iran-auth.git
cd iran-auth
```

2. **Install dependencies** 
```bash
npm install
# or
yarn install
```

2. **Run the development server** 
```bash
npm run dev
# or
yarn dev
```

4. **Open http://localhost:3000 in your browser 🚀**

---

# 🔑 User Login and Logout Flow

## Login Process
1. **Open Login Page**  
   The user opens the login page.

2. **Enter Valid Iranian Mobile Number**  
   The user enters a valid Iranian mobile number and clicks the **Login** button.

3. **Call Mock API**  
   - The mock API is called.
   - User data is stored in `localStorage`.
   - The user is redirected to the **Dashboard**.

4. **Display Dashboard**  
   The dashboard displays a welcome message:  
   `Welcome, {user.name}`

## Logout Process
1. **Click Logout**  
   The user clicks the **Logout** button.

2. **Clear Session**  
   - The user session is cleared.
   - The user is redirected to the **Login** page.

___

# ✅ Evaluation Criteria

## Code Quality
- Code is clean, modular, and maintainable.

## TypeScript Usage
- Utilizes strong types with no usage of `any`.

## UI/UX
- Features a responsive and clean design using **Tailwind CSS**.

## Logic
- Implements proper validation, API handling, redirects, and authentication state management.

## Scalability
- Uses reusable components and a well-structured architecture.

---

# 📌 Notes

- This project does not use a backend authentication system.
- User state/session is stored entirely on the client-side using `localStorage`.
- API is simulated with a mock `fetch`.


