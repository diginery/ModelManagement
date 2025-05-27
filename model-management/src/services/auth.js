import API from "./api";
import { jwtDecode } from "jwt-decode";

export async function login(email, password) {
  try {
    const response = await API.post("/account/login", { email, password });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}

export function logout() {
  localStorage.removeItem("token");
}

export function isLoggedIn() {
  return !!localStorage.getItem("token");
}

export function getUserFromToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
}

export function getUserModelId() {
  const user = getUserFromToken();
  return user ? user.ModelId : null;
}

export function isManagerUser() {
  const user = getUserFromToken();
  const role = user
    ? user["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
    : null;
  return role === "Manager";
}
