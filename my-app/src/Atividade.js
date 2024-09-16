
import React, { useState } from "react";


function Atividade() {
    const [atividades, setAtividades] = useState([]);
    const [nomeAtividade, setNomeAtividade] = useState('');


    const adicionar = () => {
        setAtividades([atividades, nomeAtividade])
        setNomeAtividade("")
        console.log(atividades)

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
            <ul>
                {atividades.map((item, indice) => {
                    <li key={indice}>{item}</li>
                })}
            </ul>
        </>
    )

}

export default Atividade;