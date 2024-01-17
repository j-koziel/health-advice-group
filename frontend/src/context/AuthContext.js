import { createContext, useContext, useState } from "react";
import axios from "axios";

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
    const res = await axios.get("http://localhost:8000/api/v1/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setUserData({ ...res.data });
    return;
  }

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, me, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
