import styles from './Cadastros.module.css'

import Logo from '../img/logo.png'

import { useState } from 'react'

function CadastroDoador() {

    // Objeto Doador
    const doador = {
        id: 0,
        nome: '',
        sobrenome: '',
        celular: '',
        email: '',
        senha: ''
    }

    // UseState
    const [objDoador, setObjDoador] = useState(doador);

    // Obtendo dados
    const aoDigitar = (e) => {
        setObjDoador({ ...objDoador, [e.target.name]: e.target.value });
        //console.log(objDoador);
    }

    // Cadastrar
    const cadastrar = () => {
        fetch('http://localhost:8080/doador/add', {
            method: 'post',
            body: JSON.stringify(objDoador),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => console.log(err))
    }

    return (
        <form className={styles.cadastro}>

            <div className={styles.imagem}>
                <img src={Logo} alt="Nexos logo" />
            </div>

            <div>

                <div className={styles.top_form}>
                    <h1>Cadastrar Doador</h1>
                </div>

                <div className={styles.input_group}>

                    <div className={styles.input_box}>
                        <label htmlFor="firstname">Nome</label>
                        <input type="text" id="firstname" name="nome" placeholder="Digite seu nome" required onChange={aoDigitar} />
                    </div>

                    <div className={styles.input_box}>
                        <label htmlFor="lastname">Sobrenome</label>
                        <input type="text" id="lastname" name="sobrenome" placeholder="Digite seu sobrenome" required onChange={aoDigitar} />
                    </div>

                    <div className={styles.input_box}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu E-mail" required onChange={aoDigitar} />
                    </div>

                    <div className={styles.input_box}>
                        <label htmlFor="number">Celular</label>
                        <input type="tel" id="number" name="celular" placeholder="Exemplo (00) 0000-0000" required onChange={aoDigitar} />
                    </div>

                    <div className={styles.input_box}>
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" name="senha" placeholder="Digite sua senha" required onChange={aoDigitar} />
                    </div>

                    <div className={styles.input_box}>
                        <label htmlFor="confirmpassword">Confirmar senha</label>
                        <input type="password" id="confirmpassword" name="confirmsenha" placeholder="Confirmar senha" required onChange={aoDigitar} />
                    </div>
                </div>

                <div className={styles.genero}>

                    <div>
                        <p>Gênero</p>
                    </div>

                    <div className={styles.genero_group}>
                        <div className={styles.input_genero}>
                            <input name="genero" type="radio" id="feminino" />
                            <label htmlFor="feminino">Feminino</label>
                        </div>
                        <div className={styles.input_genero}>
                            <input name="genero" type="radio" id="masculino" />
                            <label htmlFor="masculino">Masculino</label>
                        </div>
                        <div className={styles.input_genero}>
                            <input name="genero" type="radio" id="outro" />
                            <label htmlFor="outro">Outro</label>
                        </div>
                        <div className={styles.input_genero}>
                            <input name="genero" type="radio" id="none" />
                            <label htmlFor="none">Prefiro não dizer</label>
                        </div>
                    </div>
                </div>

                <div className={styles.botao_continuar}>
                    <button onClick={cadastrar}><a href="#">Cadastrar</a></button>
                </div>
            </div>
        </form>
    )
}

export default CadastroDoador