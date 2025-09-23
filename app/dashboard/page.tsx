"use client";

import { useEffect, useMemo, useState } from "react";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000";

type MeResponse = {
  username?: string | null;
  email?: string | null;
  name?: string | null;
};

function decodeJwt(token: string) {
  try {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const json = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export default function Dashboard() {
  const [token, setToken] = useState<string | null>(null);
  const [quickUser, setQuickUser] = useState<{
    username?: string;
    email?: string;
  } | null>(null);
  const [me, setMe] = useState<MeResponse | null>(null);
  const [status, setStatus] = useState<string>("boot");
  const [error, setError] = useState<string>("");

  // 1) Read token from storage
  useEffect(() => {
    const t = localStorage.getItem("token") || sessionStorage.getItem("token");
    setToken(t);
    const q =
      localStorage.getItem("quickUser") || sessionStorage.getItem("quickUser");
    if (q) setQuickUser(JSON.parse(q));
  }, []);

  // 2) Decode token for instant display
  const claims = useMemo(() => (token ? decodeJwt(token) : null), [token]);

  // 3) Call /me with Authorization header
  useEffect(() => {
    (async () => {
      if (!token) {
        setStatus("no-token");
        return;
      }
      try {
        setStatus("loading");
        const res = await fetch(`${API_BASE}/api/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 401 || res.status === 403) {
          setStatus(`unauthorized (${res.status})`);
          setError("Unauthorized. JWT rejected or expired.");
          return;
        }

        if (!res.ok) {
          const txt = await res.text();
          setStatus(`error (${res.status})`);
          setError(txt || "Failed to fetch /me.");
          return;
        }

        const data = (await res.json()) as MeResponse;
        setMe(data);
        setStatus("ok");
      } catch (e: unknown) {
        setStatus("network-error");
        setError(e instanceof Error ? e.message : "Network error.");
      }
    })();
  }, [token]);

  const displayName =
    me?.username ||
    me?.name ||
    quickUser?.username ||
    claims?.name ||
    claims?.unique_name ||
    "Guest";

  const displayEmail = me?.email || quickUser?.email || claims?.email || "";

  return (
    <div className="p-6 space-y-4 pt-56">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Welcome, {displayName}</h1>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => {
            localStorage.removeItem("token");
            sessionStorage.removeItem("token");
            localStorage.removeItem("quickUser");
            sessionStorage.removeItem("quickUser");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>

      {displayEmail && <p className="text-gray-600">{displayEmail}</p>}

      {/* Debug panel so we can SEE what's happening */}
      <div className="mt-4 rounded-xl border p-4 bg-gray-50">
        <p className="font-semibold">Debug</p>
        <ul className="text-sm leading-6">
          <li>
            <span className="font-medium">Status:</span> {status}
          </li>
          <li>
            <span className="font-medium">Token present:</span>{" "}
            {token ? "yes" : "no"}
          </li>
          {token && (
            <li>
              <span className="font-medium">Token (first 24 chars):</span>{" "}
              {token.slice(0, 24)}…
            </li>
          )}
          <li>
            <span className="font-medium">Decoded claims name/email:</span>{" "}
            {claims?.name || claims?.unique_name || "—"} /{" "}
            {claims?.email || "—"}
          </li>
          <li>
            <span className="font-medium">/me response:</span>{" "}
            {me ? JSON.stringify(me) : "—"}
          </li>
          {error && (
            <li className="text-red-600">
              <span className="font-medium">Error:</span> {error}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
