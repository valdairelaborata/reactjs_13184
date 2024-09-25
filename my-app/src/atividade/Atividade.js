import React, { useState, useEffect } from "react";
import axios from "axios";

import './Atividade.css';
import Modal from '../modal/Modal'


function Atividade() {
    const [atividades, setAtividades] = useState([]);
    const [nomeAtividade, setNomeAtividade] = useState('');
    const [modalVisivel, setModalVisivel] = useState(false)
    const [index, setIndex] = useState("")
    const [mensagem, setMensagem] = useState(undefined)

    const API_URL = 'http://localhost:3001/atividades'

    useEffect(() => {
        axios.get(API_URL).
            then((response) => {
                console.log(response.data)
                setAtividades(response.data)
            }).
            catch((error) => {
                console.log(error)
            });

        // const dadosLocalStorage = JSON.parse(localStorage.getItem('atividades'));
        // if (dadosLocalStorage) {
        //     setAtividades(dadosLocalStorage)
        // }
    }, []);

    useEffect(() => {
        // localStorage.setItem('atividades', JSON.stringify(atividades));
    }, [atividades]);


    const adicionar = () => {
        setAtividades([...atividades, nomeAtividade]);
        setNomeAtividade("");
    }

    const excluir = (index, item) => {
        setIndex(index)
        setMensagem("Confirma excluir a atividade (" + item + ")?")
        setModalVisivel(true)
    }

    const aoConfirmar = () => {
        const atividades_temp = [...atividades]
        atividades_temp.splice(index, 1)
        setAtividades(atividades_temp)
        setModalVisivel(false)
    }

    const aoCancelar = () => {
        setModalVisivel(false)
    }

    return (
        <div className="container">
            <label className="label-atividade">
                Nome da atividade:
            </label>
            <input
                className="input-atividade"
                type="text"
                value={nomeAtividade}
                onChange={(e) => setNomeAtividade(e.target.value)}
                placeholder="Digite o nome da atividade">
            </input>
            <hr></hr>
            <button className="btn-adicionar" onClick={adicionar} >Adicionar</button>

            <h2>Atividades</h2>
            <ul className="lista-atividades" >
                {atividades.map((atividade) => (
                    <li key={atividade.id} className="item-atividade">
                        {atividade.nome}
                        <button className="btn-excluir" onClick={() => excluir(atividade.id, atividade.nome)} >Excluir</button>
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

export default Atividade;