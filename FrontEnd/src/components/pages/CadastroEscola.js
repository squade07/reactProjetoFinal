import styles from './Cadastros.module.css'

import Logo from '../img/logo.png'

import { useState } from 'react'

function CadastroEscola() {

    // Objeto Escola
    const escola = {
        id: 0,
        nome: '',
        cnpj: '',
        telefone: '',
        Produto: '',
        Opinioes: ''
    }

    // UseState
    const [objEscola, setObjEscola] = useState(escola);

    // Obtendo dados
    const aoDigitar = (e) => {
        setObjEscola({ ...objEscola, [e.target.name]: e.target.value });
        //console.log(objEscola);
    }

    // Cadastrar
    const cadastrar = () => {
        fetch('http://localhost:8080/Escola/add', {
            method: 'post',
            body: JSON.stringify(objEscola),
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
                    <h1>Cadastrar Escola</h1>
                </div>

                <div className={styles.input_group}>

                    <div className={styles.input_box}>
                        <label htmlFor="escola">Nome da Instituição</label>
                        <input onChange={aoDigitar} name="nome" type="text" id="escola" placeholder="Digite o nome da escola" required />
                    </div>

                    <div className={styles.input_box}>
                        <label htmlFor="cie">Código CIE</label>
                        <input onChange={aoDigitar} name="cie" type="number" id="cie" placeholder="Digite o CIE" required />
                    </div>

                    <div className={styles.input_box}>
                        <label htmlFor="email">E-mail</label>
                        <input onChange={aoDigitar} name="email" type="email" id="email" placeholder="Digite seu E-mail" required />
                    </div>

                    <div className={styles.input_box}>
                        <label htmlFor="cnpj">CNPJ</label>
                        <input onChange={aoDigitar} name="cnpj" type="number" id="cnpj" placeholder="CNPJ" required />
                    </div>

                    <div className={styles.input_box}>
                        <label htmlFor="endereco">Endereço</label>
                        <input onChange={aoDigitar} name="endereco" type="text" id="endereco" placeholder="Endereço" required />
                    </div>

                    <div className={styles.input_box}>
                        <label htmlFor="cep">CEP</label>
                        <input onChange={aoDigitar} name="cep" type="number" id="cep" placeholder="CEP" required />
                    </div>

                    <div className={styles.input_box}>
                        <label htmlFor="password">Senha</label>
                        <input onChange={aoDigitar} name="senha" type="password" id="password" placeholder="Digite sua senha" required />
                    </div>

                    <div className={styles.input_box}>
                        <label htmlFor="confirmpassword">Confirmar senha</label>
                        <input onChange={aoDigitar} name="confirmsenha" type="password" id="confirmpassword" placeholder="Confirmar senha" required />
                    </div>

                </div>

                <div>

                    <div>
                        <p>Doações</p>
                    </div>

                    <div className={styles.genero_group}>

                        <div className={styles.input_genero}>
                            <input name="doacao" type="radio" id="receber" />
                            <label htmlFor="receber">Quero receber</label>
                        </div>

                        <div className={styles.input_genero}>
                            <input name="doacao" type="radio" id="doar" />
                            <label htmlFor="doar">Quero doar</label>
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

export default CadastroEscola