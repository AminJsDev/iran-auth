"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Label } from "@/components/ui";
import {
  isValidIranianMobile,
  normalizeIranianMobile,
} from "@/components/lib/phone";
import { saveUser } from "@/components/lib/storage";

const schema = z.object({
  phone: z
    .string()
    .nonempty({ message: "شماره موبایل لازم است" })
    .refine(isValidIranianMobile, { message: "فرمت شماره موبایل معتبر نیست" }),
});

type FormValues = z.infer<typeof schema>;

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema), mode: "onChange" });

  // if user already logged in -> redirect
  React.useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      if (raw) {
        router.replace("/dashboard");
      }
    } catch {}
  }, [router]);

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const phone = normalizeIranianMobile(values.phone);

      // Fetch mock user
      const res = await fetch(
        process.env.NEXT_PUBLIC_MOCK_API_URL ??
          "https://randomuser.me/api/?results=1",
        {
          cache: "no-store",
        }
      );
      const data = await res.json();

      const r = data?.results?.[0] ?? {};
      const name =
        [r?.name?.first, r?.name?.last].filter(Boolean).join(" ") || "کاربر";
      const email = r?.email || "user@example.com";
      const picture =
        r?.picture?.large || r?.picture?.medium || "/avatar-placeholder.png";

      saveUser({ name, email, picture, phone });

      // tiny delay to show cool animation
      setTimeout(() => {
        router.replace("/dashboard");
      }, 350);
    } catch (err) {
      console.error(err);
      alert("خطا در دریافت داده‌ی ماک — دوباره امتحان کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card-cyber relative rounded-2xl glow-border p-6 card-padding-sm bg-grid">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold neon-underline">
            CyberCity Login
          </h1>
          <p className="mt-1 text-sm text-white/70">
            Sign in with your Iranian mobile number
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          {/* small decorative neon lines */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#00e5ff] opacity-20" />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div>
          <Label htmlFor="phone">Mobile number</Label>
          <Input
            id="phone"
            inputMode="numeric"
            placeholder="09xxxxxxxxx or +989xxxxxxxxx or 00989xxxxxxxxx"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone ? (
            <p
              id="phone-error"
              role="alert"
              className="mt-2 text-sm text-rose-400"
            >
              {errors.phone.message}
            </p>
          ) : (
            <p className="mt-2 text-xs text-white/60">
              Allowed formats: <span className="font-mono">09xxxxxxxxx</span>,{" "}
              <span className="font-mono">+989xxxxxxxxx</span>
              <span className="font-mono">00989xxxxxxxxx</span>
              <span className="font-mono">+989xxxxxxxxx</span>
            </p>
          )}
        </div>

        <div className="flex items-center justify-between gap-3">
          <Button
            type="submit"
            variant="primary"
            className="flex-1"
            disabled={!isValid || loading || isSubmitting}
            aria-busy={loading || isSubmitting}
          >
            {loading || isSubmitting ? "Signing in..." : "Sign in"}
          </Button>


        </div>

        {/* footer small info */}
        <div className="mt-2 text-xs text-white/50">
          <p>
            By signing in you accept this demo's terms. This is a client-side
            demo — no real authentication.
          </p>
        </div>
      </form>

      {/* decorative bottom neon line */}
      <div className="mt-6 h-1 bg-gradient-to-r from-[#7c3aed]/50 via-[#00e5ff]/30 to-[#7c3aed]/20 rounded-full" />
    </div>
  );
}
