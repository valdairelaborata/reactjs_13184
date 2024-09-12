
import React, { useState } from "react";


function Atividade() {
    const [nomeAtividade, setNomeAtividade] = useState('')


    const adicionar = () => {

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
        </>
    )

}

export default Atividade;