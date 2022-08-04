import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import { CheckBox, Icon } from "react-native-elements";
import { removerSelecaoProdutos } from "../produtoService";

export default function HeaderProdutoListar({
  total,
  load,
  search,
  setSearch,
  setLoading
}) {
  async function handleClear() {
    try {
      setSearch("");
      await load();
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleSearch() {
    try {
      await load(search);
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleRemoverSelecaoProdutos() {
    try {
      setLoading(true);
      await removerSelecaoProdutos();
      setLoading(false);
    } catch (error) {
      alert(error.message);
    }
  }
  
  return (
    <>
      <View>
        <View
          style={{
            height: 100,
            flexDirection: "row",
            justifyContent: "space-around",
            marginHorizontal: 15,
          }}
        >
          <View style={{ height: "100%", justifyContent: "center" }}>
            <Image
              style={{ height: 70, width: 230 }}
              source={{
                uri: "https://marcospaulopaixao.com.br/inf/img/logo_lista_de_compras.png",
              }}
            />
          </View>
          <View style={{ height: "100%", justifyContent: "center" }}>
            <Text style={{ fontSize: 30 }}>Total: {total}</Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 15,
            marginRight: 20
          }}
        >
          <View style={styles.searchSection}>
            <TouchableOpacity onPress={() => handleClear()}>
              <IconMaterial
                style={styles.searchIcon}
                name="clear"
                size={20}
                color="#24C0EB"
              />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder=""
              value={search}
              onChangeText={setSearch}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity onPress={() => handleSearch()}>
              <IconFontAwesome
                style={styles.searchIcon}
                name="search"
                size={20}
                color="#24C0EB"
              />
            </TouchableOpacity>
          </View>

          <CheckBox
            right
            checkedIcon={
              <Icon
                name="indeterminate-check-box"
                type="material"
                color="green"
                size={25}
                iconStyle={{ marginRight: 10 }}
              />
            }
            checked={true}
            onPress={handleRemoverSelecaoProdutos}
          />
        </View>

        <View style={{ overflow: "hidden", paddingBottom: 5 }}>
          <View
            style={{
              backgroundColor: "#fff",
              height: 5,
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 5,
            }}
          />
        </View>
      </View>
    </>
  );
}
