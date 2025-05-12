import { Children, createContext, useContext, useState } from "react";

//create an context
const AuthContext = createContext();

//create Provider
export const AuthProvider = ({ children }) => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isloggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


//custom hook for easy usage
export const useAuth = () => useContext(AuthContext);
