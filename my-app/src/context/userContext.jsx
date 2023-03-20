import React, { createContext, useContext, useEffect, useState } from "react";

const user = createContext(null);

const UserContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  const login = (user) => {
    setCurrentUser(user);
  };
  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <user.Provider
      value={{
        currentUser,
        login,
        logout,
      }}>
      {children}
    </user.Provider>
  );
};

export default UserContext;

export const useUserContext = () => useContext(user);
