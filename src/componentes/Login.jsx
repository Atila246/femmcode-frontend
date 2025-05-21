import Styles from '../css/Login.module.css'

function Login() {
    return(
        <>
            <div className={Styles.container}> {/* container de fundo */}

                <div className={Styles.first_column}>
                        <div className={Styles.conteudo}>
                        <h1>Login</h1>
                        <textarea name="" id=""></textarea>
                        <textarea name="" id=""></textarea>
                        <a href="#">Esqueceu a senha?</a>
                        <button className={Styles.entrar}>Entrar</button>
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