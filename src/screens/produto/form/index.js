import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { HeaderProdutoForm } from '../../../shared';
import styles from './styles';
import { NomeProdutoForm, QtdPrecoProdutoForm } from '../../../components';

export default function FormProdutoScreens({ route }) {
    const [produto, setProduto] = useState(null);

    useEffect(() => {
        try {
            setProduto(route.params?.produto);
        } catch (error) {
            alert(error.toString());
        }
    });


    return (
        <View style={styles.container}>
            <StatusBar hidden={false} />
            <HeaderProdutoForm total={null} />
            {produto ? <QtdPrecoProdutoForm produto={produto}/> : <NomeProdutoForm />}
        </View>
    );
}