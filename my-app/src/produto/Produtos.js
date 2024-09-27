
import React, { useState, useEffect } from "react";
import axios from "axios";

import './Produtos.css'
import Modal from '../modal/Modal'

function Produtos() {
    const [produto, setProduto] = useState({ nome: "", preco: "", descricao: "" })
    const [produtos, setProdutos] = useState([])
    const [modalVisivel, setModalVisivel] = useState(false)
    const [excluirProduto, setExcluirProduto] = useState(undefined)
    const [mensagem, setMensagem] = useState(undefined)
    const [editando, setEditando] = useState(false)

    const API_URL = "http://localhost:3001/produtos"

    useEffect(() => {
        carregarTela();
    }, []);


    const carregarTela = async () => {
        axios.get(API_URL).
            then((response) => {
                setProdutos(response.data)
            }).
            catch((error) => {
                console.log(error)
            })
    }


    useEffect(() => {

    }, [produtos]);



    const onchangeProduto = (e) => {
        setProduto({ ...produto, [e.target.name]: e.target.value })
    }

    const tratarClick = async () => {
        try {
            if (editando) {
                await axios.put(`${API_URL}/${produto.id}`, produto)
            }
            else {
                await axios.post(API_URL, produto)
            }

            await carregarTela()

            //setProduto({ nome: "", preco: "", descricao: "" })
        }
        catch (error) {
            console.log(error)
        }

    }

    const excluir = (item) => {
        setExcluirProduto(item)
        setMensagem("Deseja realmente excluir o produto? (" + item.nome + ")")
        setModalVisivel(true)
    }

    const editar = (item) => {
        setProduto(item)
        setEditando(true)
    }

    const cancelar = () => {
        setEditando(false)
        setProduto({ nome: "", preco: "", descricao: "" })
    }

    const aoConfirmar = async () => {

        try {
            await axios.delete(`${API_URL}/${excluirProduto.id}`);
            await carregarTela();
        } catch (error) {
            console.error(error)
        }

        setModalVisivel(false)
    }

    const aoCancelar = () => {
        setModalVisivel(false)
    }

    return (
        <div className="container">
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
                <button onClick={tratarClick}>
                    {editando ? 'Salvar' : 'Adicionar'}
                </button>
                {editando === true && (
                    <button onClick={cancelar}>Cancelar</button>
                )}
            </p>

            <hr></hr>
            <h2>Produtos</h2>
            <ul >
                {produtos.map((item) => (
                    <li key={item.id}>
                        <p>
                            <strong>Nome:</strong> {item.nome} <br />
                            <strong>Preço:</strong> {item.preco}<br />
                            <strong>Descricao:</strong> {item.descricao}
                        </p>
                        <button onClick={() => excluir(item)}>Excluir</button>
                        <button onClick={() => editar(item)}>Editar</button>
                    </li>
                ))}
            </ul>

            <Modal
                ehVisivel={modalVisivel}
                aoConfirmar={aoConfirmar}
                aoCancelar={aoCancelar}
                mensagem={mensagem}>
            </Modal>
        </div>
    )
}

export default Produtos;