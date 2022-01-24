import React, { createContext, useState, useEffect, useContext } from "react";

const AppContext = createContext({});

function AppProvider({children }) {
    const [loading, setLoading] = useState(false);

    return (
        <AppContext.Provider
        value={{  loading, setLoading  }}
      >
        {children}
      </AppContext.Provider>
    );
}

function useAuth() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAuth deve ser usado com o AuthProvider.");
  }

  return context;
}

export { AppProvider, useAuth };