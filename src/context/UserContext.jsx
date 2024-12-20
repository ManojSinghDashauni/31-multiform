import React, { createContext, useContext, useState } from "react";

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [final, setFinal] = useState([]);
  const [selectedCard, setSelectedCard] = useState();

  function submitResult() {
    setFinal((final) => [...final, user]);
    setUser("");
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        final,
        setFinal,
        submitResult,
        selectedCard,
        setSelectedCard,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for accessing the context
export const useUserContext = () => useContext(UserContext);
