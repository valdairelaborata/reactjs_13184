
import React from "react";

const Modal = ({ ehVisivel, aoConfirmar, aoCancelar }) => {

    if (!ehVisivel)
        return null;

    return (
        <div>
            <div>
                <h2>Mensagem de confirmação.</h2>
                <p>Deseja realmente seguir com a ação?</p>
                <button onClick={aoConfirmar} >Confirmar</button>
                <button onClick={aoCancelar} >Cancelar</button>
            </div>
        </div>
    );
}

export default Modal;