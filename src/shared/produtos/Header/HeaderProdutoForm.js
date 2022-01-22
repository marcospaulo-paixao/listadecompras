import React from "react";
import {
  View,
  Image
} from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function HeaderProdutoForm() {
  const navigation = useNavigation();

  return (
    <>
      <View>
        <View style={{ height: 100, flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 15 }}>
          <View style={{ justifyContent: 'center' }}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
              <Icon
                name="arrow-back-ios"
                type="material"
                color="grey"
                size={25}
                iconStyle={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ height: '100%', justifyContent: 'center' }}>
            <Image
              style={{ height: 47, width: 190 }}
              source={{
                uri: 'https://marcospaulopaixao.com.br/inf/img/logo_lista_de_compras.png',
              }}
            />
          </View>
        </View >
      </View>
    </>
  )
}