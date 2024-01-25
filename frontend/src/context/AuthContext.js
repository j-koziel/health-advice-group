import { createContext, useContext, useState } from "react";
import axios from "axios";

import { config } from "../settings/config";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );

  function logout() {
    return;
  }

  async function me(token, setUserData) {
    const res = await axios.get(`${config.backendUrl}/api/v1/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setUserData({ ...res.data });
    return res.data;
  }

  async function updatePassword(newPassword, token) {
    try {
      await axios.put(
        `${config.backendUrl}/api/v1/users/me/password`,
        { new_password: newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <AuthContext.Provider
      value={{ accessToken, setAccessToken, me, updatePassword, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
