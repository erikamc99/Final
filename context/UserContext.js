import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "usuario",
    name: "Usuario de Ejemplo",
    email: "usuario@ejemplo.com",
    password: '12345678Q',
    avatarUrl: '../assets/img/default-avatar.png',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);