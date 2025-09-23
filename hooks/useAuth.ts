// hooks/useAuth.ts
"use client";

import { useEffect, useState } from "react";
import { authApi } from "@/lib/api";
import { useRouter } from "next/navigation";

export function useAuth(requireAuth: boolean = false) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await authApi.getCurrentUser();
        setUser(data.user);
      } catch (err) {
        if (requireAuth) {
          router.push("/login"); // redirect if not logged in
        }
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [requireAuth, router]);

  return { user, loading };
}
