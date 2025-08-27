"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button, Avatar } from "@/components/ui";
import { clearUser, getUser } from "@/components/lib/storage";

export default function DashboardPage() {
  const router = useRouter();
  const [userReady, setUserReady] = React.useState(false);
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
    setUserReady(true);
  }, [router]);

  if (!userReady) {
    return (
      <div className="card-cyber rounded-2xl glow-border p-6 card-padding-sm">
        <p className="text-white/70">Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 items-start">
      {/* left: welcome card */}
      <div className="sm:col-span-2 card-cyber rounded-2xl glow-border p-6 card-padding-sm">
        <div className="flex items-center gap-4">
          <Avatar src={picture} alt={name} size={96} />
          <div>
            <h2 className="text-2xl font-extrabold">{`Welcome, ${name}`}</h2>
            <p className="text-sm text-white/70 mt-1">{email}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm text-white/80 mb-2">Quick actions</h3>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => {
                // simulate a profile edit redirect
                alert("This is a demo — profile editing not implemented.");
              }}
            >
              Edit profile
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                // simulate another action
                alert("Demo action triggered.");
              }}
            >
              View activity
            </Button>
          </div>
        </div>

        <div className="mt-6 text-sm text-white/60">
          <p>
            This is a client-side demo. User session is stored in{" "}
            <span className="font-mono">localStorage</span>.
          </p>
        </div>
      </div>

      {/* right: stats / logout */}
      <div className="card-cyber rounded-2xl glow-border p-6 card-padding-sm">
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-sm text-white/80">Session</h4>
            <p className="mt-2 text-lg font-medium">{name}</p>
          </div>

          <div>
            <h4 className="text-sm text-white/80">Phone</h4>
            <p className="mt-2 text-sm text-white/70">
              {getUser()?.phone ?? "-"}
            </p>
          </div>

          <div className="mt-4">
            <Button
              variant="primary"
              onClick={() => {
                clearUser();
                router.replace("/login");
              }}
            >
              Logout
            </Button>
          </div>

          <div className="mt-3 text-xs text-white/50">
            <p>
              Secure: client-side demo only. Do not use for real auth flows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
