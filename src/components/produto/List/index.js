import React from "react";
import { FlatList, View } from "react-native";
import styles from "./styles"
import {
  ProdutoItem,
} from "../../../shared";

export default function ListarProdutoComponent({ produtos, load }) {

    return (
      <View style={styles.listContent}>
        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
           <ProdutoItem data={item} load={load} />
          )}
        />
      </View>
    );
  }