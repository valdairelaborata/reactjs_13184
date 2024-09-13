
import React, { useState } from "react";

function Produtos() {
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")
    const [desricao, setDescricao] = useState("")

    const adicionar = () => {
        console.log("Nome: " + nome + " preço: " + preco + " descricao: " + desricao)

        setNome("")
        setPreco("")
        setDescricao("")

    }

    return (
        <>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Informe o nome"        >
            </input>
            <input
                type="text"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                placeholder="Informe o preço"        >
            </input>
            <input
                type="text"
                value={desricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Informe o descrição"        >
            </input>
            <p>
                <button onClick={adicionar}>Adicionar</button>
            </p>
        </>
    )
}

export default Produtos;