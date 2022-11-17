import styles from './Home.module.css'

import Material from '../img/material_escolar.jpg'
import Microsoft from '../img/microsoft.jpg'
import Itau from '../img/itau.jpg'
import Recode from '../img/recode-pro.jpg'

function Home() {
    return (
        <section>
            <div className={styles.sobre}>
                <img src={Material} alt="Material escolar" />
                <div className={styles.text}>
                    <h2>SOBRE</h2>
                    <p>
                        NEXOS é um conceito visado para resolver um problema social grave em nosso pais, que é a falta de acesso a materiais escolares, e tem como objetivo conectar as escolas para um método de RCD (Recicla Compartilha e Distribuir), Recicla reutilizando materiais que iriam para o lixo para redistribuir para escolas. Mais de 580 mil professores reclamam por falta de livros nas escolas.
                        <a target="_blank" rel="external" href="https://g1.globo.com/jornal-nacional/noticia/2019/05/02/escolas-publicas-do-ensino-basico-reclamam-de-falta-de-livro-didatico.ghtml "> Saiba mais</a>
                        <br />
                        Compartilhar esses recursos por doações de pessoas, escolas e essencial para que possamos chegar em uma possível solução, sabendo que assim como falta em algumas escolas em outras sobram. <a target="_blank" rel="external" href="https://blog.elevaplataforma.com.br/logistica-de-materiais/">Posiveis soluções</a> Distribuir de uma forma correta os materiais são um pilar essencial para a solução desse problema e é aí que entra a NEXOS, conectando de forma fácil
                        as escola e doadores.
                    </p>
                </div>
            </div>
            <div className={styles.apoiadores}>
                <h2>NOSSOS APOIADORES !</h2>
                <div className={styles.container}>
                    <img src={Itau} alt="Itaú" />
                    <img src={Microsoft} alt="Microsoft" />
                    <img src={Recode} alt="Recode Pro" />
                </div>
            </div>
        </section>
    )
}

export default Home