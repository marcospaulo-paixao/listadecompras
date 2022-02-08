import AsyncStorage from '@react-native-async-storage/async-storage'

const ENTIDADE = "@listadecompras:produtos";

export async function adicionar(produto) {
    try {
        produto.id = new Date().toString();
        let produtos = await listar();
        produtos.push(produto);
        await salvarNoLocalStorage(produtos);
        return produto;
    } catch (error) {
        throw error;
    }
}

export async function listar() {
    try {

        let produtos = JSON.parse(await AsyncStorage.getItem(ENTIDADE));
        if (produtos == null) {
            return [];
        }

        produtos.sort(function (a, b) {
            if (a.nome > b.nome) {
                return 1;
            }
            if (a.nome < b.nome) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

        return produtos;
    } catch (error) {
        throw error;
    }
}

export async function getTotalProdutos() {
    try {
        let produtos = await listar();
        let total = 0;
        produtos.forEach((object) => {
            total += (object.qtd * object.preco)
        });
        return total.toFixed(2);
    } catch (error) {
        throw error;
    }

}

export async function atualizar(produto) {
    try {
        let produtos = await listar();
        produtos.forEach((objeto, index, lista) => {
            if (produto.id === objeto.id) {
                lista[index] = produto;
            }
        });
        await salvarNoLocalStorage(produtos);
        return produto;
    } catch (error) {
        throw error;
    }
}

export async function buscarPorId(id) {
    try {
        let produtos = await listar();
        let produto = produtos.find((objeto) => {
            return objeto.id == id;
        });
        if (produto) {
            return produto;
        }
    } catch (error) {
        throw error;
    }
}

export async function buscarPorNome(nome) {
    try {
        let produtos = await listar();

        let retProdutos = []
        produtos.forEach((objeto) => {
            if (objeto.nome.toUpperCase().includes(nome.toUpperCase())) {
                retProdutos.push(objeto);
            }
        })
        return retProdutos;
    } catch (error) {
        throw error;
    }
}

export async function remover(id) {
    try {
        let produtos = await listar();
        produtos = produtos.filter(produto => produto.id !== id);
        await salvarNoLocalStorage(produtos);
    } catch (error) {
        throw error;
    }
}
export async function removerTodos() {
    try {
        await salvarNoLocalStorage([]);
    } catch (error) {
        throw error;
    }
}
async function salvarNoLocalStorage(produtos) {
    try {
        await AsyncStorage.setItem(ENTIDADE, JSON.stringify(produtos));
    } catch (error) {
        throw error;
    }
}

