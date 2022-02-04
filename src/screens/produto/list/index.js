import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import styles from "./styles"
import {
  HeaderProdutoListar,
  FooterProduto,
} from "../../../shared";
import { ListarProdutoComponent } from "../../../components";

import { appContext } from '../../../contexts';

export default function ListarProdutoScreen() {
  const { produtos, total,load, search, setSearch,setLoading } = appContext();

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <HeaderProdutoListar total={total} search={search} setSearch={setSearch} load={load} />
      <ListarProdutoComponent produtos={produtos} setLoading={setLoading} />
      <FooterProduto setLoading={setLoading} />
    </View>
  );
}