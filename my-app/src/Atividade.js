
import React, { useState, useEffect } from "react";

import Modal from './modal/Modal'


function Atividade() {
    const [atividades, setAtividades] = useState([]);
    const [nomeAtividade, setNomeAtividade] = useState('');
    const [modalVisivel, setModalVisivel] = useState(false)
    const [index, setIndex] = useState("")


    useEffect(() => {
        const dadosLocalStorage = JSON.parse(localStorage.getItem('atividades'));
        if (dadosLocalStorage) {
            setAtividades(dadosLocalStorage)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('atividades', JSON.stringify(atividades));
    }, [atividades]);


    const adicionar = () => {
        setAtividades([...atividades, nomeAtividade]);
        setNomeAtividade("");
    }

    const excluir = (index) => {
        setIndex(index)
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
        <>
            <input
                type="text"
                value={nomeAtividade}
                onChange={(e) => setNomeAtividade(e.target.value)}
                placeholder="Digite o nome da atividade">
            </input>
            <hr></hr>
            <button onClick={adicionar}>Adicionar</button>

            <h2>Atividades</h2>
            <ul >
                {atividades.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => excluir(index)} >Excluir</button>
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

export default Atividade;