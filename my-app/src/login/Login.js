
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import './Login.css'

import axios from "axios";


function Login() {
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")
    const [usuarios, setUsuarios] = useState([])

    const navegacao = useNavigate();

    const API_URL = "http://localhost:3001/usuarios"

    useEffect(() => {
        axios.get(API_URL).
            then((response) => {
                setUsuarios(response.data)
            }).
            catch((error) => {
                console.log(error)
            })
    }, [])

    const logar = () => {

        const usuario = usuarios.find((usuario) => usuario.login === login && usuario.senha === senha)

        if (usuario) {
            navegacao('/produtos')    
        }
        else {
            alert("Usuário/senha inválidos!")
        }
    }

    return (
        <div className="container-login" >
            <div className="login-box">
                <h2>Login</h2>
                <div className="input-group" >
                    <input
                        id="txtLogin"
                        type="text"
                        placeholder="Informe o usuário"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}>
                    </input>
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Informe a senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}>
                    </input>
                </div>
                <button className="input-group" onClick={logar}>Logar</button>
            </div>
        </div>

    )

}

export default Login;