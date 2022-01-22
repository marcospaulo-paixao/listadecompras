import React from "react";
import AppRoutes from "./app.routes";

//RESPONSÁVEL EM VERIFICAR PARA QUAL ROTA O USUÁRIO VAI, CASO ESTEJA LOGADO OU NÃO

export default function Routes() {
    //SIGNED = booleano ver se usuário está Logado

    //   return logged ? <AppRoutes /> : <AuthRoutes />;
    return <AppRoutes />;
}
