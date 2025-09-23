"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";

type MeResponse = { user: string };

export default function MePage() {
  const [user, setUser] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    api
      .get<MeResponse>("/auth/me")
      .then((res) => {
        if (alive) setUser(res.data.user);
      })
      .catch(() => {
        if (alive) setError("Not logged in");
      });

    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Current User</h1>
        {user ? (
          <p className="text-green-600">Logged in as {user}</p>
        ) : (
          <p className="text-red-600">{error}</p>
        )}
      </div>
    </div>
  );
}
