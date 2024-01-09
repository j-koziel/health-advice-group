import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [jwtToken, setJwtToken] = useState(
    JSON.parse(localStorage.getItem("jwtToken"))
  );

  return (
    <AuthContext.Provider value={{ jwtToken, setJwtToken }}>
      {children}
    </AuthContext.Provider>
  );
};
