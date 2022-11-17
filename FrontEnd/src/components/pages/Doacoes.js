import styles from './Doacoes.module.css'

import Estudantes from '../img/estudantes.png'
import Escola from '../img/escola-icon.png'
import Maos from '../img/maos-icon.png'
import Voluntario from '../img/voluntario-icon.jpeg'

function Doacoes() {
    return (
        <section className={styles.doacoes}>

            <div className={styles.doacoes_informacoes}>

                <h3 className={styles.doacoes_titulo}>Formas de Contribuir</h3>

                <p className={styles.doacoes_texto}>Como voçê ou sua organização quer ser lembrada ? Se voçê deseja realmente ajudar
                    causas sociais, conte com o nosso apoio para que o seu investimento seja maximizado.
                </p>

                <img className={styles.doacoes_imagem} src={Estudantes} alt="estudantes" />

            </div>

            <div className={styles.doacoes_classes}>

                <ul>

                    <li className={styles.doacoes_lista}>

                        <img className={styles.doacoes_lista_img} src={Maos} alt="Aperto de mãos" />

                        <div>
                            <h4 className={styles.doacoes_lista_titulo}>Doações corporativas</h4>
                            <p className={styles.doacoes_lista_texto}>Faça a diferenca com sua empresa !</p>
                            <a className={styles.doacoes_classes_link} href="/cadastroDoador">saiba mais</a>
                        </div>

                    </li>

                    <li className={styles.doacoes_lista}>

                        <img className={styles.doacoes_lista_img} src={Escola} alt="Escola" />

                        <div>
                            <h4 className={styles.doacoes_lista_titulo}>Escolas</h4>
                            <p className={styles.doacoes_lista_texto}>Contribuindo para a sociedade !</p>
                            <a className={styles.doacoes_classes_link} href="/cadastroEscola">saiba mais</a>
                        </div>

                    </li>

                    <li className={styles.doacoes_lista}>

                        <img className={styles.doacoes_lista_img} src={Voluntario} alt="Voluntário" />

                        <div>
                            <h4 className={styles.doacoes_lista_titulo}>Voluntario</h4>
                            <p className={styles.doacoes_lista_texto}>Ajude a sociedade crescer !</p>
                            <a className={styles.doacoes_classes_link} href="/cadastroDoador">saiba mais</a>
                        </div>

                    </li>

                </ul>

            </div>

        </section>
    )
}

export default Doacoes