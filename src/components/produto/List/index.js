import React from "react";
import { FlatList, View } from "react-native";
import styles from "./styles"
import {
  ProdutoItem,
} from "../../../shared";

export default function ListarProdutoComponent({ produtos, setLoading }) {

  return (
    <View style={styles.listContent}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProdutoItem data={item} setLoading={setLoading} />
        )}
      />
    </View>
  );
}