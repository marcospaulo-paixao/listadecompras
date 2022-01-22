import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import styles from "./css"
import {
  listar,
  HeaderProdutoListar,
  FooterProduto,
  MyActivityIndicator,
} from "../../../shared";
import { ListarProdutoComponent } from "../../../components";

export default function ListarProdutoScreen() {
  const [total, setTotal] = useState(null);
  const [produtos, setProdutos] = useState(null);

  async function load() {
    try {
      setProdutos(await listar());
      if (produtos != null) {
        let total = 0;
        produtos.forEach((object) => {
          total += (object.qtd * object.preco)
        });
        setTotal(total.toFixed(2));
      }
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(async () => {
    try {
      await load();
    } catch (error) {
      alert(error.toString());
    }
  });

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <HeaderProdutoListar total={total} />
      <ListarProdutoComponent  produtos={produtos} load={load} />
      <FooterProduto load={load} />
    </View>
  );
}