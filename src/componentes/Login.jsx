import Styles from '../css/Login.module.css'

function Login() {
    return(
        <>
            <div className={Styles.container}> {/* container de fundo */}
                <div className={Styles.first_content}>

                    <div className={Styles.first_column}>
                        {/* <figure className={Styles.logo_login}>
                            <img src="img/femmcodelogo.png" alt="">
                        </figure> */}
                                <h2>Prazer em conhecê-lo!</h2>
                                <p className={Styles.meio}>Crie seu perfil para participar de comunidades conosco</p>
                                <div className={Styles.botao_texto}>
                            <p>Já tem uma conta?</p>
                            <button id="signin">Entrar</button>
                        </div>
                    </div>
                    
                        <div className={Styles.second_column}>
                        <h2>Crie sua conta</h2>
                        <form>
                            <label>
                                {/* <i class="far fa-user icon-modify"></i>
                                <input type="text" placeholder="Digite seu nome completo" id="nome_cadastro"> */}
                            </label>

                            <label>
                                {/* <i class="fa-solid fa-at icon-modify"></i>
                                <input type="text" placeholder="Digite o nome de usuário" id="nome_usuario"> */}
                            </label>
                            
                            <label>
                                {/* <i class="far fa-envelope icon-modify"></i>
                                <input type="email" placeholder="Digite seu Email" id="email_cadastro"> */}
                            </label>
                            <label>
                                {/* <i class="fas fa-lock icon-modify"></i>
                                <input type="password" placeholder="Digite sua senha" id="senha_cadastro"> */}
                            </label>
                            
                            <div className={Styles.terms_container}>
                                {/* <input type="checkbox" id="terms" name="terms"> */}
                                <label for="terms">
                                Li e aceito os <a href="termos.html" target="_blank">Termos de Uso</a>
                                </label>
                            </div>
                            <button type="button" class="btn btn-second" id="btn-cadastro">Cadastrar-se</button>  
                            <div class="link-user">
                                <a href="login-moderador.html">Sou moderador</a>
                            </div>      
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login