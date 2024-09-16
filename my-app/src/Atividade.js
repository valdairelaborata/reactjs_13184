
import React, { useState } from "react";


function Atividade() {
    const [atividades, setAtividades] = useState([]);
    const [nomeAtividade, setNomeAtividade] = useState('');


    const adicionar = () => {
        setAtividades([...atividades, nomeAtividade]);
        setNomeAtividade("")
    }

    const excluir = (index) => {
        const atividades_temp = [...atividades]
        atividades_temp.splice(index, 1)
        setAtividades(atividades_temp)
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
        </>
    )

}

export default Atividade;