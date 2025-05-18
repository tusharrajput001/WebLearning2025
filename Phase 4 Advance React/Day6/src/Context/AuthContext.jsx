import { createContext, useContext } from "react";

export const AuthContext = createContext({user: "demoUser"});

export const useAuth = () => useContext(AuthContext);