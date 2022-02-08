import React, { createContext, useState, useContext, useEffect } from "react";
import { buscarPorNome, getTotalProdutos, listar } from "../shared";

const AppContext = createContext({});

function AppProvider({ children }) {
  const [total, setTotal] = useState(null);
  const [produtos, setProdutos] = useState(null);
  const [search, setSearch] = useState("");
  const [init, setInit] = useState(true);
  const [loading, setLoading] = useState(false);
  const exports = { total, produtos, load, search, setSearch, loading, setLoading };

  async function load(nome) {
    try {
      if (nome != null && nome != undefined && nome.length > 0) {
        setProdutos(await buscarPorNome(nome));
      } else {
        setProdutos(await listar());
      }
      setTotal(await getTotalProdutos());
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(async () => {
    try {
      if (init) {
        await load(search);
        setInit(false);
      }
      if(loading){
        await load(search);
      }
    } catch (error) {
      alert(error.toString());
    }
  });


  return (
    <AppContext.Provider value={{ ...exports }} >
      {children}
    </AppContext.Provider>
  );
}

function appContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAuth deve ser usado com o AuthProvider.");
  }

  return context;
}

export { AppProvider, appContext };