import Styles from '../css/Login.module.css'
import LogoSG from '../assets/img/LogoSG.png'
import React, { useState } from 'react';

function Login() {
    const [form, setForm] = useState({
        nomeCompleto: '',
        nomeUsuario: '',
        email: '',
        senha: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        console.log('Dados cadastrados:', form);
    };

    return (
        <>

            {/*-------------------------- CONTAINERZÃO DE FUNDO --------------------------*/}
            <div className={Styles.container}>

                {/*-------------------------- PRIMEIRO ESTADO (CONTENT) - CADASTRO --------------------------*/}
                <div className={Styles.primeiro_content}>

                    <div className={Styles.primeira_coluna}>
                        <figure className={Styles.logo_login}>
                            <img src={LogoSG} alt="" />
                        </figure>
                        <h2 className={Styles.primeiro_titulo}>Prazer em conhecê-lo!</h2>
                        <p className={Styles.primeiro_meio}>Crie seu perfil para participar de comunidades conosco</p>
                        <div className={Styles.botao_texto}>
                            <p className={Styles.primeira_descricao}>Já tem uma conta?</p>
                            <button className={Styles.botao_entrar}>Entrar</button>
                        </div>
                    </div>


                    <div className={Styles.segunda_coluna}>

                        <h2>Crie sua conta</h2>

                        <form>

                            <label>
                                <input
                                    type="text"
                                    name="nomeCompleto"
                                    placeholder="Digite seu nome completo"
                                    value={form.nomeCompleto}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                <input
                                    type="text"
                                    name="nomeUsuario"
                                    placeholder="Digite o nome de usuário"
                                    value={form.nomeUsuario}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Digite seu Email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </label>

                            <label>
                                <input
                                    type="password"
                                    name="senha"
                                    placeholder="Digite sua senha"
                                    value={form.senha}
                                    onChange={handleChange}
                                />
                            </label>

                            <button type="button" onClick={handleSubmit}>
                                Cadastrar-se
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login