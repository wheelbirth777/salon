"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { User, AuthResponse, AuthContextType } from "@/types/auth";
import { authApi, setAuthToken } from "@/lib/api";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      await refreshUser();
    } finally {
      setLoading(false);
    }
  };

  const refreshUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setUser(null);
        return;
      }
      const data = await authApi.getCurrentUser();
      setUser(data);
    } catch {
      setUser(null);
    }
  };

  const loginWithCredentials = async (
    username: string,
    password: string
  ): Promise<AuthResponse> => {
    try {
      const res = await authApi.login(username, password);
      if (res?.token) {
        setAuthToken(res.token);
        await refreshUser();
        return { success: true, message: "Login successful", token: res.token };
      }
      return { success: false, message: res?.message || "Invalid credentials" };
    } catch (error: any) {
      return { success: false, message: "Login failed", error: error.message };
    }
  };

  const register = async (
    username: string,
    email: string,
    password: string
  ): Promise<AuthResponse> => {
    try {
      const res = await authApi.register(username, email, password);
      if (res?.token) {
        setAuthToken(res.token);
        await refreshUser();
        return {
          success: true,
          message: "Registration successful",
          token: res.token,
        };
      }
      return { success: false, message: res?.message || "Registration failed" };
    } catch (error: any) {
      return {
        success: false,
        message: "Registration failed",
        error: error.message,
      };
    }
  };

  const logout = async () => {
    await authApi.logout();
    setAuthToken(null);
    setUser(null);
    window.location.href = "/login";
  };

  const value: AuthContextType = {
    user,
    loading,
    isAuthenticated,
    loginWithCredentials,
    register,
    logout,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
