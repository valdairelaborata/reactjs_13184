
import React, { useState, useEffect } from "react";
import Modal from './modal/Modal'

function Produtos() {
    const [produto, setProduto] = useState({ nome: "", preco: "", descricao: "" })
    const [produtos, setProdutos] = useState([])
    const [modalVisivel, setModalVisivel] = useState(false)

    useEffect(() => {
        const produtosLocalStorage = JSON.parse(localStorage.getItem('produtos'));
        if (produtosLocalStorage) {
            setProdutos(produtosLocalStorage)
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('produtos', JSON.stringify(produtos))
    }, [produtos]);



    const onchangeProduto = (e) => {
        setProduto({ ...produto, [e.target.name]: e.target.value })
    }

    const adicionar = () => {
        setProdutos([...produtos, produto])
    }

    const excluir = (index) => {
        // const produtos_temp = [...produtos]
        // produtos_temp.splice(index, 1)
        // setProdutos(produtos_temp)
        setModalVisivel(true)
    }

    const aoConfirmar = () => {
        alert("Confirmado!")
        setModalVisivel(false)

    }

    const aoCancelar = () => {
        alert("Cancelado!")
        setModalVisivel(false)
    }

    return (
        <>
            <input
                type="text"
                name="nome"
                value={produto.nome}
                onChange={onchangeProduto}
                placeholder="Informe o nome"        >
            </input>
            <input
                type="text"
                name="preco"
                value={produto.preco}
                onChange={onchangeProduto}
                placeholder="Informe o preço"        >
            </input>
            <input
                type="text"
                name="descricao"
                value={produto.descricao}
                onChange={onchangeProduto}
                placeholder="Informe o descrição"        >
            </input>
            <p>
                <button onClick={adicionar}>Adicionar</button>
            </p>

            <hr></hr>
            <h2>Produtos</h2>
            <ul >
                {produtos.map((item, index) => (
                    <li key={index}>
                        <p>
                            <strong>Nome:</strong> {item.nome} <br />
                            <strong>Preço:</strong> {item.preco}<br />
                            <strong>Descricao:</strong> {item.descricao}
                        </p>
                        <button onClick={() => excluir(index)}>Excluir</button>

                    </li>
                ))}
            </ul>

            <Modal
                ehVisivel={modalVisivel}
                aoConfirmar={aoConfirmar}
                aoCancelar={aoCancelar}>
            </Modal>

        </>
    )
}

export default Produtos;