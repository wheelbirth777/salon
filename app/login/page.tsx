"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

type LoginResult =
  | { success: true; token: string; message?: string }
  | { success: false; message: string };

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000";

function parseJwt<T = unknown>(token: string): T | null {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload) as T;
  } catch {
    return null;
  }
}

function isLoginResult(value: unknown): value is LoginResult {
  if (typeof value !== "object" || value === null) return false;
  if (!("success" in value)) return false;
  return typeof (value as { success: unknown }).success === "boolean";
}

export default function LoginPage() {
  const router = useRouter();
  const { loginWithCredentials } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token =
      typeof window !== "undefined" &&
      (localStorage.getItem("token") || sessionStorage.getItem("token"));
    if (token) router.replace("/dashboard");
  }, [router]);

  const saveToken = (token: string) => {
    if (remember) localStorage.setItem("token", token);
    else sessionStorage.setItem("token", token);

    const claims = parseJwt<{
      name?: string;
      email?: string;
      unique_name?: string;
    }>(token);
    const quickUser = {
      username: claims?.name || claims?.unique_name || "",
      email: claims?.email || "",
    };
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem("quickUser", JSON.stringify(quickUser));
  };

  const directLoginFallback = async (): Promise<LoginResult> => {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) {
      const errText = await res.text();
      return { success: false, message: errText || "Invalid credentials" };
    }
    const data: unknown = await res.json();
    const token = (data as { token?: string })?.token;
    if (!token)
      return { success: false, message: "Token missing in response." };
    return { success: true, token };
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!username.trim() || !password.trim()) {
      setMessage("Username and password are required.");
      return;
    }

    setLoading(true);
    try {
      let result: LoginResult;

      try {
        const resUnknown = await loginWithCredentials(username, password);
        if (isLoginResult(resUnknown)) {
          if (resUnknown.success && !(resUnknown as { token?: string }).token) {
            result = await directLoginFallback();
          } else {
            result = resUnknown;
          }
        } else {
          result = await directLoginFallback();
        }
      } catch {
        result = await directLoginFallback();
      }

      if (result.success) {
        saveToken(result.token);
        router.push("/dashboard");
      } else {
        setMessage(result.message);
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white relative">
      {/* orange radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.25),transparent_60%)]" />

      <div className="relative flex min-h-screen items-center justify-center px-4 py-12">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md space-y-5 rounded-2xl border border-white/10 
                     bg-white/5 p-8 backdrop-blur-md shadow-xl"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">Login</h1>
            <p className="mt-2 text-sm text-slate-300">
              Sign in with your credentials.
            </p>
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2
                         text-white placeholder-slate-400 focus:border-orange-500
                         focus:ring-2 focus:ring-orange-500 focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g., wilbert"
              autoComplete="username"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 pr-20
                           text-white placeholder-slate-400 focus:border-orange-500
                           focus:ring-2 focus:ring-orange-500 focus:outline-none"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-orange-400 hover:underline"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 accent-orange-500"
              />
              Remember me
            </label>
            <a
              href="/register"
              className="text-orange-400 hover:text-orange-300 underline"
            >
              Create account
            </a>
          </div>

          {/* Submit */}
          <button
            className="w-full rounded-full bg-orange-600 px-5 py-2.5 font-semibold 
                       text-white shadow hover:bg-orange-500 focus:outline-none 
                       focus:ring-2 focus:ring-orange-400 disabled:opacity-60
                       ring-1 ring-orange-500/50"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Login"}
          </button>

          {message && (
            <p className="mt-2 text-center text-sm text-red-400" role="alert">
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
