import React, { createContext, useState } from "react";

export const context = createContext(null);

const UserContext = ({ children }) => {
  const [name, setName] = useState("manfree");
  return (
    <context.Provider value={name}>
      {children}

      <button onClick={() => setName("frenzo")}>Change </button>
    </context.Provider>
  );
};

export default UserContext;
