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

  React.useEffect(() => {
    // اگر کاربر لاگین بود، مستقیم بفرستیم داشبورد
    try {
      const raw = localStorage.getItem("user");
      if (raw) router.replace("/dashboard");
    } catch {}
  }, [router]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema), mode: "onChange" });

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const phone = normalizeIranianMobile(values.phone);

      const res = await fetch(
        process.env.NEXT_PUBLIC_MOCK_API_URL ?? "/api/mock",
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
      router.replace("/dashboard");
    } catch (e) {
      console.error(e);
      alert("خطا در ارتباط با API ماک. لطفاً مجدد تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-16">
      <h1 className="text-2xl font-bold mb-6">ورود با موبایل</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
        aria-describedby={errors.phone ? "phone-error" : undefined}
      >
        <div className="space-y-2">
          <Label htmlFor="phone">شماره موبایل</Label>
          <Input
            id="phone"
            inputMode="numeric"
            placeholder="مثلاً 09xxxxxxxxx یا +989xxxxxxxxx"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="text-sm text-red-600" role="alert">
              {errors.phone.message}
            </p>
          )}
          <p className="text-xs text-gray-500" aria-live="polite">
            فرمت‌های مجاز: 09xxxxxxxxx ، +989xxxxxxxxx ، 00989xxxxxxxxx
          </p>
        </div>

        <Button
          type="submit"
          disabled={!isValid || loading || isSubmitting}
          className="w-full"
          aria-busy={loading || isSubmitting}
        >
          {loading || isSubmitting ? "در حال ورود..." : "ورود"}
        </Button>
      </form>
    </section>
  );
}
