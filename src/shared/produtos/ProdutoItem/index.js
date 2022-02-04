import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

import styles from "./style"
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { CheckBox, Icon } from "react-native-elements";
import { remover, atualizar } from "../produtoService";
import { useNavigation } from '@react-navigation/native';


export default function ProdutoItem({ data, setLoading }) {
  const total = data.qtd * data.preco;
  const navigation = useNavigation();

  const alertConfirm = () =>
  Alert.alert(
    "Atenção!",
    "Deseja remover este produto?",
    [
      {
        text: "Não",
        onPress: () => null,

        style: "cancel"
      },
      { text: "Sim", onPress: () => handleRemoverProduto() }
    ]
  );

  async function handleRemoverProduto() {
    try {
      setLoading(true);
      await remover(data.id);
      setLoading(false);
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleSelection() {
    try {
      if (data.check === false) {
        navigation.navigate('form-produto',{produto: data});
      } else {
        data.check = false;
        data.preco = 0;
        data.qtd = 0;
        await atualizar(data);
      }
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <View style={styles.produto}>
      <View style={styles.produtoHeader}>
        <View>
          <Text style={styles.name}>{data.nome}</Text>
          <View>
            <Text >Quantidade: {data.qtd}</Text>
            <Text >Preço: {data.preco}</Text>
            <Text style={{ fontWeight: 'bold' }} >Total: {total.toFixed(2)}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginRight: -20, marginTop: -15}}>
          <TouchableOpacity style={{ marginHorizontal: 12, marginTop: 15 }} onPress={() => alertConfirm()}>
            <IconFontAwesome name="trash" size={25} color="red" />
          </TouchableOpacity>
          <CheckBox
            right
            checkedIcon={
              <Icon
                name="check-box"
                type="material"
                color="green"
                size={25}
                iconStyle={{ marginRight: 10 }}
              />
            }
            uncheckedIcon={
              <Icon
                name="check-box-outline-blank"
                type="material"
                color="grey"
                size={25}
                iconStyle={{ marginRight: 10 }}
              />
            }
            checked={data.check}
            onPress={() => { handleSelection(); }}
          />
        </View>
      </View>
    </View>
  );
}
