import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./css"
import { listar, adicionar, remover } from "../../shared";

export default function ListarProdutoComponent() {
  // Hooks - useState
  const [nomeProduto, setNomeProduto] = useState("");
  const [produtos, setProdutos] = useState([]);

  //SPREAD JS
  async function handleAdicionarProduto() {
    try {
      await adicionar({ nome: nomeProduto, id: null });      
      await load();
      setNomeProduto("");
    } catch (error) {
      alert(error.toString());
    }
  }

  async function handleRemoverProduto(prodRemover) {
    try {
      await remover(prodRemover.id);
      await load();
    } catch (error) {
      alert(error.toString());
    }
  }

  async function load() {
    try {
      setProdutos(await listar());      
    } catch (error) {
      alert(error.toString());
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
      <StatusBar hidden={true} />
      <Text style={styles.title}>Lista de Compras</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o produto!"
        value={nomeProduto}
        onChangeText={setNomeProduto}
      />
      <View style={styles.listContent}>
        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Produto data={item} onPress={() => handleRemoverProduto(item)} />
          )}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAdicionarProduto}>
        <Icon name="plus" size={30} color="#eee" />
      </TouchableOpacity>
    </View>
  );
}

function Produto({ data, onPress }) {
  return (
    <View style={styles.produto}>
      <View style={styles.produtoContent}>
        <View style={{ marginLeft: 15 }}>
          <Text style={styles.name}>{data.nome}</Text>
        </View>
        <View style={styles.buttonContent}>
          <TouchableOpacity style={{ marginRight: 20 }} onPress={onPress}>
            <Icon name="trash" size={30} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

