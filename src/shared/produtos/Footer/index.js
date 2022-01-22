import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { adicionar, removerTodos } from "../produtoService";
import { useNavigation } from '@react-navigation/native';
import { Alert } from "react-native";

export default function FooterProduto({ load }) {
  const navigation = useNavigation();

  const alertConfirm = () =>
    Alert.alert(
      "Atenção!",
      "Deseja remover todos os produtos?",
      [
        {
          text: "Não",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Sim", onPress: () => handleRemoverTodos() }
      ]
    );

  async function handleRemoverTodos() {
    try {
      await removerTodos();
      await load();
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleAdicionar() {
    try {
      navigation.navigate('form-produto');
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <View style={{ flexDirection: 'row', height: 100, alignItems: 'center', justifyContent: 'space-around', }}>
      <TouchableOpacity style={{
        borderColor: "red",
        borderWidth: 1,
        width: 150,
        height: 60,
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
      }} onPress={alertConfirm}>
        <Text style={{
          color: "red",
          fontSize: 25,
          marginLeft: 5,
        }}>Limpar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        borderColor: "#24C0EB",
        borderWidth: 1,
        width: 150,
        height: 60,
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
      }} onPress={handleAdicionar}>
        <Text style={{
          color: "#24C0EB",
          fontSize: 25,
          marginLeft: 5,
        }}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}