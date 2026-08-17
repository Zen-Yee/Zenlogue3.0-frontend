import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null = not logged in

  return (
    <AuthContext value={{ user, setUser }}>
      {children}
    </AuthContext>
  );
};

export const useAuth = () => useContext(AuthContext);