import AsyncStorage from '@react-native-async-storage/async-storage'

const ENTIDADE = "@listadecompras:produtos";

export async function adicionar(produto) {
    try {
        produto.id = new Date().toString();
        let produtos = await listar();
        produtos.push(produto);
        console.log(produtos);
        await salvarNoLocalStorage(produtos);
        return produto;
    } catch (error) {
        throw error
    }
}

export async function listar() {
    try {
        
        let produtos = JSON.parse(await AsyncStorage.getItem(ENTIDADE));
        console.log(produtos);
        if (produtos == null) {
            return [];
        }
        return produtos;
    } catch (error) {
        throw error
    }
}

export async function atualizar(produto) {
    try {
        let produtos = await listar();
        produtos.forEach((objeto, index, lista) => {
            if (tarefa.id === objeto.id) {
                lista[index] = produto;
            }
        });
        await salvarNoLocalStorage(produtos);
        return produto;
    } catch (error) {
        throw error
    }
}

export async function remover(id) {
    try {
        let produtos = await listar();
        produtos = produtos.filter(produto => produto.id !== id);
        await salvarNoLocalStorage(produtos);
    } catch (error) {
        throw error
    }
}

async function salvarNoLocalStorage(produtos) {
    try {
        await AsyncStorage.setItem(ENTIDADE, JSON.stringify(produtos));
    } catch (error) {
        throw error
    }
}
