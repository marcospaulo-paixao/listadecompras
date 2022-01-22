import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext({});

function AppProvider({children }) {
    const [loading, setLoading] = useState(false);

    return (
        <AuthContext.Provider
        value={{  loading, setLoading  }}
      >
        {children}
      </AuthContext.Provider>
    );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado com o AuthProvider.");
  }

  return context;
}

export { AppProvider, useAuth };