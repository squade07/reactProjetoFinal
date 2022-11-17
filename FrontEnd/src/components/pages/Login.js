import styles from './Login.module.css'

import Undraw from '../img/undraw.png'

function Login() {
    return (

        <form className={styles.login}>

            <div className={styles.container}>
                <p>Seja bem-vindo!</p>
                <img src={Undraw} alt="Login"/>
            </div>

            <div className={styles.form}>

                <div className={styles.top_form}>
                    <h1>Login</h1>
                </div>

                <div className={styles.input_group}>

                    <div>

                        <div className={styles.input_box}>
                            <label for="email">E-mail</label>
                            <input type="email" id="email" placeholder="Digite seu E-mail" required />
                        </div>

                        <div className={styles.input_box}>
                            <label for="senha">Senha</label>
                            <input type="password" id="senha" placeholder="Digite sua senha" required />
                        </div>
                        
                    </div>

                    <div>
                        <div className={styles.input_checkbox}>
                            <input type="checkbox" name="lembrar" id="lembrar" />
                            <label for="lembrar">Lembrar senha</label>
                        </div>
                        <div className={styles.input_senha}>
                            <p><a href="#">Esqueci minha senha</a></p>
                        </div>
                    </div>
                </div>

                <div className={styles.botao_continuar}>
                    <button><a href="index.html">Continuar</a></button>
                </div>
            </div>
        </form>
    )
}

export default Login