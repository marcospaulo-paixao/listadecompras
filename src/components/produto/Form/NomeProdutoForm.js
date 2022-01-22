import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { adicionarProdutoBo, MyActivityIndicator } from '../../../shared';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function NomeProdutoForm() {
    const [nomeProduto, setNomeProduto] = useState("");
    const [messageError, setMessageError] = useState("");
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    async function handleAdicionar() {
        try {
            setLoading(true);
            var produto = { id: null, nome: nomeProduto, qtd: 0, preco: 0, check: false };
            await adicionarProdutoBo(produto);
            setNomeProduto("");
            setMessageError("");
            setLoading(false);
            navigation.goBack();
        } catch (error) {
            setMessageError(error.message);
            setLoading(false);
        }
    }
    return (
        <View style={{ flex: 1 }}>
            {
                !loading ?
                    <View>
                        <View>
                            <Text style={styles.modalText}>Informe o nome do Produto:</Text>
                        </View>
                        <View style={styles.inputSection}>
                            <TextInput
                                style={{ width: '100%' }}
                                value={nomeProduto}
                                onChangeText={setNomeProduto}
                                underlineColorAndroid="transparent"
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
                            }} onPress={handleAdicionar}>
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
    );
}