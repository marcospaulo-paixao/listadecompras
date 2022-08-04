import { adicionar, atualizar, buscarPorNome, remover } from './produtoService';


export async function adicionarProdutoBo(produto) {
    try {
        validaNome(produto);
        if((await buscarPorNome(produto.nome))?.length > 0) {
            throw new Error("Já existe um produto cadastrado com esse nome!");
        };
        return await adicionar(produto);
    } catch (error) {
        throw error
    }
}

export async function atualizarProdutoBo(produto) {
    try {
        validaQtdPreco(produto);
        return await atualizar(produto);
    } catch (error) {
        throw error
    }
}

export async function removerProdutoBo(id) {
    try {
        await remover(produto);
    } catch (error) {
        throw error
    }
}

function validaQtdPreco(produto) {
    try {
        if (produto.qtd.trim().length === 0) {
            throw new Error("Informe a quantidade do Produto.");
        }
        if (produto.preco.trim().length === 0) {
            throw new Error("Informe o preço do Produto.");
        }
        if (!isNumber(produto.qtd)) {
            throw new Error("Quantidade inválida!\nInforme apenas números!");
        }
        if (!isNumber(produto.preco)) {
            throw new Error("Preço inválido!\nInforme apenas números!");
        }
        if (produto.qtd < 1) {
            throw new Error("Quantidade inválida!\nA quantidade deve ser maior que zero!");
        }
        if (produto.preco < 1) {
            throw new Error("Preço inválido!\nO preço deve ser maior que zero!");
        }
    } catch (error) {
        throw error;
    }
}


function validaNome(produto) {
    try {
        if (produto.nome.trim().length === 0) {
            throw new Error("Digite o nome do Produto.");
        }
        if (produto.nome.trim().length < 3 &&
            produto.nome.trim().length > 0) {
            throw new Error("O nome do produto deve conter no mínimo 3 caracteres!");
        }
    } catch (error) {
        throw error;
    }
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}