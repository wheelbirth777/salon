import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    localStorage.setItem("token", token);
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    localStorage.removeItem("token");
    delete instance.defaults.headers.common["Authorization"];
  }
};

export const authApi = {
  getCurrentUser: () => instance.get("/api/auth/me").then((res) => res.data),
  login: (username: string, password: string) =>
    instance
      .post("/api/auth/login", { username, password })
      .then((res) => res.data),
  register: (username: string, email: string, password: string) =>
    instance
      .post("/api/auth/register", { username, email, password })
      .then((res) => res.data),
  logout: () => {
    setAuthToken(null);
    return instance.post("/api/auth/logout");
  },
};

export default instance;
