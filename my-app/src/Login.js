
import React, { useState, useEffect } from "react";



function Login() {
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")


    useEffect(() => {
        console.log("Componente carregado!")

        const usuarios = [
            { login: "admin", senha: "123" },
            { login: "ana", senha: "456" }
        ]

        localStorage.setItem("usuarios", JSON.stringify(usuarios))

    }, [])


    const logar = () => {
        const usuarios = JSON.parse(localStorage.getItem("usuarios"))

        const usuario = usuarios.find((usuario) => usuario.login === login && usuario.senha === senha)

        if (usuario) {
            alert("Login válido!")
        }
        else {
            alert("Usuário/senha inválidos!")
        }
    }

    return (
        <div>
            <div>
                <h2>Login</h2>
                <div>
                    <input
                        type="text"
                        placeholder="Informe o usuário"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}>
                    </input>
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Informe a senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}>
                    </input>
                </div>
                <button onClick={logar}>Logar</button>
            </div>
        </div>

    )

}

export default Login;