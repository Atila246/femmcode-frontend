import Styles from '../css/Login.module.css'
import { useState } from 'react';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', {
                email,
                senha
            });
            alert(`✅ Login bem-sucedido! Bem-vindo, ${response.data.usuario}`);
        } catch (err) {
            alert(`❌ Erro: ${err.response?.data?.erro || 'Erro desconhecido'}`);
        }
    };

    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.first_column}>
                    <div className={Styles.conteudo}>
                        <h1>Login</h1>
                        <form onSubmit={handleLogin}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className={Styles.input}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                                className={Styles.input}
                                required
                            />
                            <a href="#">Esqueceu a senha?</a>
                            <button type="submit" className={Styles.entrar}>Entrar</button>
                        </form>
                    </div>
                </div>

                <div className={Styles.second_column}>
                    <img src="" alt="" />
                    <div className={Styles.cadastro}>
                        <h2>Bem-vindo de volta!</h2>
                        <p>Entre com seu usuário e senha para acessar sua conta.</p>
                    </div>
                    <p>Ainda não tem uma conta?</p>
                    <button className={Styles.cadastrar}>Cadastrar</button>
                </div>
            </div>
        </>
    )
}

export default Login