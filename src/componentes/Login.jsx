import Styles from '../css/Login.module.css'
import LogoSG from '../assets/img/LogoSG.png'
import { useState, useEffect } from 'react';

function Login() {
    //-------------- FUNCIONAMENTO DO FORMS --------------
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

    //-------------- ANIMAÇÃO --------------
    const [modo, setModo] = useState("");
    const [classeAtual, setClasseAtual] = useState("");
    useEffect(() => {
        console.log("Modo atual:", modo);
        if(modo=="signin"){
            setClasseAtual(Styles.cadastra);
            console.log("Classe atual:", classeAtual);
        }
        if(modo=="signup"){
            setClasseAtual(Styles.loga);
        }
    }, [modo]);

    return (
        <>
            {/*-------------------------- CONTAINER DE FUNDO --------------------------*/}
            <div className={`${Styles.container} ${classeAtual}`}>

                {/*-------------------------- PRIMEIRO ESTADO (CADASTRO) --------------------------*/}
                <div className={`${Styles.content} ${Styles.primeiro_content}`}>
                    {/* PRIMEIRA COLUNA */}
                    <div className={Styles.primeira_coluna}>
                        <figure className={Styles.logo_login}>
                            <img src={LogoSG} alt="" />
                        </figure>
                        <h2 className={`${Styles.primeiro_titulo} ${Styles.titulo}`}>Prazer em conhecê-lo!</h2>
                        <p className={`${Styles.descricao} ${Styles.meio}`}>Crie seu perfil para participar de comunidades conosco</p>
                        <div className={Styles.botao_texto}>
                            <p className={Styles.descricao}>Já tem uma conta?</p>
                            <button
                                className={`${Styles.primeiro_botao} ${Styles.botao}`}
                                onClick={() => setModo("signup")}
                                id="signup">Entrar</button>
                        </div>
                    </div>

                    {/* SEGUNDA COLUNA */}
                    <div className={Styles.segunda_coluna}>
                        <h2 className={`${Styles.segundo_titulo} ${Styles.titulo}`}>Crie sua conta</h2>
                        <div className={Styles.social_media}>
                            <a href="#"><i className="fi fi-brands-google"></i></a>
                            <a href="#"><i className="fi fi-brands-instagram"></i></a>
                            <a href="#"><i className="fi fi-brands-google"></i></a>
                        </div>
                        <form className={Styles.form}>
                            <label>
                                <i className="far fa-user icon-modify"></i>
                                <input
                                    type="text"
                                    name="nomeCompleto"
                                    placeholder="Digite seu nome completo"
                                    value={form.nomeCompleto}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                <i className="fi fi-br-at icon-modify"></i>
                                <input
                                    type="text"
                                    name="nomeUsuario"
                                    placeholder="Digite o nome de usuário"
                                    value={form.nomeUsuario}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                <i className="fi fi-rr-envelope icon-modify"></i>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Digite seu Email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                <i className="fi fi-sr-lock icon-modify"></i>
                                <input
                                    type="password"
                                    name="senha"
                                    placeholder="Digite sua senha"
                                    value={form.senha}
                                    onChange={handleChange}
                                />
                            </label>
                            <div className={Styles.terms_container}>
                                <input className={Styles.input_terms} type="checkbox" name="terms" />
                                <label className={Styles.label_terms} htmlFor="terms">
                                    Li e aceito os <a href="#" target="_blank">Termos de Uso</a>
                                </label>
                            </div>
                            <button
                                className={`${Styles.segundo_botao} ${Styles.botao}`}
                                type="button"
                                onClick={handleSubmit}
                            >
                                Cadastrar-se
                            </button>
                        </form>
                    </div>
                </div>

                {/*-------------------------- SEGUNDO ESTADO (LOGIN) --------------------------*/}
                <div className={`${Styles.content} ${Styles.segundo_content}`}>
                    <div className={Styles.primeira_coluna}>
                        <figure className={Styles.logo_login}>
                            <img src={LogoSG} alt="" />
                        </figure>
                        <h2 className={`${Styles.primeiro_titulo} ${Styles.titulo}`}>Bem-vindo de volta!</h2>
                        <p className={`${Styles.descricao} ${Styles.meio}`}>Conecte-se para continuar explorando</p>
                        <div className={Styles.botao_texto}>
                            <p className={Styles.descricao}>Ainda não tem uma conta?</p>
                            <button
                                className={`${Styles.primeiro_botao} ${Styles.botao}`}
                                onClick={() => setModo("signin")}
                                id="signin"
                            >
                                Cadastrar
                            </button>
                        </div>
                    </div>
                    <div className={Styles.segunda_coluna}>
                        <h2 className={`${Styles.segundo_titulo} ${Styles.titulo}`}>Entrar na sua conta</h2>
                        <div className={Styles.social_media}>
                            <a href="#"><i className="fi fi-brands-google"></i></a>
                            <a href="#"><i className="fi fi-brands-instagram"></i></a>
                            <a href="#"><i className="fi fi-brands-google"></i></a>
                        </div>
                        <form className={Styles.form}>
                            <label>
                                <i className="far fa-user icon-modify"></i>
                                <input type="email" name="email" placeholder="Digite seu email" />
                            </label>
                            <label>
                                <i className="fi fi-sr-lock icon-modify"></i>
                                <input type="password" name="senha" placeholder="Digite sua senha" />
                            </label>
                            <a href="#" className={Styles.password}>Esqueceu a senha?</a>
                            <button type="button" className={`${Styles.segundo_botao} ${Styles.botao}`}>Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
