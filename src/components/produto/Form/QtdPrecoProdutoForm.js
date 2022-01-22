import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { atualizarProdutoBo, MyActivityIndicator } from "../../../shared";
import styles from "./styles"
import { useNavigation } from '@react-navigation/native';

export default function QtdPrecoProdutoForm({ produto }) {
    const [qtdProduto, setQtdProduto] = useState("");
    const [precoProduto, setPrecoProduto] = useState("");
    const [messageError, setMessageError] = useState("");
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    async function atualizarQtdPreco() {
        try {
            setLoading(true);
            produto.qtd = qtdProduto;
            produto.preco = precoProduto;
            produto.check = true;
            await atualizarProdutoBo(produto);
            setQtdProduto("");
            setPrecoProduto("");
            setLoading(false);

            navigation.goBack();
        } catch (error) {
            setMessageError(error.message);
            setLoading(false);
        }
    }
    return (<View style={{ flex: 1 }}>
        {
            !loading ?
                <View>
                    <View>
                        <Text style={styles.modalText}>Informe a Quantidade do Produto <Text style={{ fontWeight: 'bold' }}>{produto.nome}</Text>:</Text>
                    </View>
                    <View style={styles.inputSection}>
                        <TextInput
                            style={{ width: '100%' }}
                            value={qtdProduto}
                            onChangeText={setQtdProduto}
                            underlineColorAndroid="transparent"
                            keyboardType="numeric"
                        />
                    </View>
                    <View>
                        <Text style={styles.modalText}>Informe o Preço do Produto <Text style={{ fontWeight: 'bold' }}>{produto.nome}</Text>:</Text>
                    </View>
                    <View style={styles.inputSection}>
                        <TextInput
                            style={{ width: '100%' }}
                            value={precoProduto}
                            onChangeText={setPrecoProduto}
                            underlineColorAndroid="transparent"
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: 'red' }}>
                            {messageError}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', height: 100, alignItems: 'center', justifyContent: 'space-around', }}>
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
                        }} onPress={() => { atualizarQtdPreco() }}>
                            <Text style={{
                                color: "#24C0EB",
                                fontSize: 25,
                                marginLeft: 5,
                            }}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View> :
                <MyActivityIndicator />
        }
    </View>
    )
}