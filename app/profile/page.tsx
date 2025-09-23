"use client";

import { useEffect, useState } from "react";

type User = {
  displayName: string;
  email: string;
};

function isUser(value: unknown): value is User {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return typeof v.displayName === "string" && typeof v.email === "string";
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    let alive = true;

    fetch("http://localhost:5291/auth/me", { credentials: "include" })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json() as Promise<unknown>;
      })
      .then((data) => {
        if (!alive) return;
        setUser(isUser(data) ? data : null);
      })
      .catch(() => {
        if (!alive) return;
        setUser(null);
      });

    return () => {
      alive = false;
    };
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Not logged in</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded p-6 w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold mb-2">
          Welcome, {user.displayName}
        </h1>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
}
