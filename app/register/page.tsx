"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

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

function hasToken(value: unknown): value is { token: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    "token" in value &&
    typeof (value as { token: unknown }).token === "string"
  );
}

export default function RegisterPage() {
  const router = useRouter();

  // form state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [remember, setRemember] = useState(true);

  // ui state
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // skip if already logged in
  useEffect(() => {
    const t =
      (typeof window !== "undefined" && localStorage.getItem("token")) ||
      (typeof window !== "undefined" && sessionStorage.getItem("token"));
    if (t) router.replace("/dashboard");
  }, [router]);

  const emailValid = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()),
    [email]
  );
  const pwStrong = useMemo(() => password.length >= 8, [password]);

  const canSubmit =
    username.trim().length >= 3 &&
    emailValid &&
    pwStrong &&
    confirm === password;

  const saveToken = (token: string) => {
    if (remember) localStorage.setItem("token", token);
    else sessionStorage.setItem("token", token);

    const claims = parseJwt<{
      name?: string;
      email?: string;
      unique_name?: string;
    }>(token);
    const quickUser = {
      username: claims?.name || claims?.unique_name || username,
      email: claims?.email || email,
    };
    const store = remember ? localStorage : sessionStorage;
    store.setItem("quickUser", JSON.stringify(quickUser));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setSuccess(false);

    if (!canSubmit) {
      setMessage("Please fix the highlighted fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (res.status === 409) {
        const txt = await res.text();
        setMessage(txt || "Username or email already exists.");
        return;
      }

      if (!res.ok) {
        const txt = await res.text();
        setMessage(txt || "Registration failed.");
        return;
      }

      let data: unknown = {};
      try {
        data = await res.json();
      } catch {}

      if (hasToken(data)) {
        saveToken(data.token);
        router.push("/dashboard");
        return;
      }

      setSuccess(true);
      setMessage("Registration successful. Please sign in.");
      setTimeout(() => router.push("/login"), 800);
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white relative">
      {/* background radial glow (orange instead of blue) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.25),transparent_60%)]" />

      <div className="relative flex min-h-screen items-center justify-center px-4 py-12">
        <form
          onSubmit={handleRegister}
          className="w-full max-w-md space-y-5 rounded-2xl border border-white/10 
                     bg-white/5 p-8 backdrop-blur-md shadow-xl"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              It only takes a minute.
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
              minLength={3}
              required
            />
            {username && username.length < 3 && (
              <p className="mt-1 text-xs text-red-400">
                Must be at least 3 characters.
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 
                         text-white placeholder-slate-400 focus:border-orange-500 
                         focus:ring-2 focus:ring-orange-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
            {email && !emailValid && (
              <p className="mt-1 text-xs text-red-400">Enter a valid email.</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 pr-20 
                           text-white placeholder-slate-400 focus:border-orange-500 
                           focus:ring-2 focus:ring-orange-500 focus:outline-none"
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPw((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-orange-400 hover:underline"
              >
                {showPw ? "Hide" : "Show"}
              </button>
            </div>
            <div className="mt-1 text-xs">
              {password ? (
                pwStrong ? (
                  <span className="text-green-400">
                    Looks good (≥ 8 chars).
                  </span>
                ) : (
                  <span className="text-red-400">
                    Use at least 8 characters.
                  </span>
                )
              ) : (
                <span className="text-slate-400">Minimum 8 characters.</span>
              )}
            </div>
          </div>

          {/* Confirm */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm password
            </label>
            <div className="relative">
              <input
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 pr-20 
                           text-white placeholder-slate-400 focus:border-orange-500 
                           focus:ring-2 focus:ring-orange-500 focus:outline-none"
                type={showConfirm ? "text" : "password"}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="••••••••"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-orange-400 hover:underline"
              >
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>
            {confirm && confirm !== password && (
              <p className="mt-1 text-xs text-red-400">
                Passwords do not match.
              </p>
            )}
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
              href="/login"
              className="text-orange-400 hover:text-orange-300 underline"
            >
              Already have an account?
            </a>
          </div>

          {/* Submit */}
          <button
            className="w-full rounded-full bg-orange-600 px-5 py-2.5 font-semibold 
                       text-white shadow hover:bg-orange-500 focus:outline-none 
                       focus:ring-2 focus:ring-orange-400 disabled:opacity-60
                       ring-1 ring-orange-500/50"
            disabled={loading || !canSubmit}
          >
            {loading ? "Creating account..." : "Create account"}
          </button>

          {message && (
            <p
              className={`mt-2 text-center text-sm ${
                success ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
