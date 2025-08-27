"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";
import { clearUser, getUser } from "@/components/lib/storage";

export default function DashboardPage() {
  const router = useRouter();
  const [ready, setReady] = React.useState(false);
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [picture, setPicture] = React.useState<string>("");

  React.useEffect(() => {
    const u = getUser();
    if (!u) {
      router.replace("/login");
      return;
    }
    setName(u.name);
    setEmail(u.email);
    setPicture(u.picture);
    setReady(true);
  }, [router]);

  if (!ready) return <p className="mt-16">در حال بارگذاری...</p>;

  return (
    <section className="mt-10 space-y-6">
      <div className="flex items-center gap-4">
        <img
          src={picture}
          alt="عکس کاربر"
          className="h-16 w-16 rounded-full ring-2 ring-gray-200 object-cover"
        />
        <div>
          <h1 className="text-xl font-semibold">خوش آمدید، {name} 👋</h1>
          <p className="text-sm text-gray-600">{email}</p>
        </div>
      </div>

      <Button
        variant="default"
        onClick={() => {
          clearUser();
          router.replace("/login");
        }}
      >
        خروج
      </Button>
    </section>
  );
}
