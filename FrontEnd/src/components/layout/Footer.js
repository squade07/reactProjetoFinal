import styles from './Footer.module.css'

import { FaLinkedinIn, FaGithub, FaFacebookF, FaInstagram, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <h3 className={styles.titulo}>SOBRE NÓS</h3>
                    <p>NEXOS é um conceito visado para resolver um problema social grave em nosso pais, que é a falta de acesso a materiais escolares, e tem como objetivo conectar as escolas para um método de RCD</p>
                    <ul className={styles.social}>
                        <li><a href="#" target="_blank" rel="external"><FaLinkedinIn /></a></li>
                        <li><a href="https://github.com/squade07/ProjetoFinal" target="_blank" rel="external"><FaGithub /></a></li>
                        <li><a href="#" target="_blank" rel="external"><FaFacebookF /></a></li>
                        <li><a href="#" target="_blank" rel="external"><FaInstagram /></a></li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <h3 className={styles.titulo}>Navegação</h3>
                    <ul>
                        <li><a href="/" rel="self">Início</a></li>
                        <li><a href="/doacoes" rel="self">Doações</a></li>
                        <li><a href="/encontrarEscola" rel="self">Encontrar Escolas</a></li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <h3 className={styles.titulo}>Contatos</h3>
                    <ul>
                        <li><FaPhone /> (41) 9 9999-9999</li>
                        <li><FaWhatsapp /> (41) 9 9999-9999</li>
                        <li><FaEnvelope /> squad07@teste.com</li>
                    </ul>
                </div>
            </div>
            <div className={styles.copy_right}>
                <p className={styles.titulo_destaque}>Nexos</p>
                <p> &copy; Copyright By @Squad 007 - 2022</p>
            </div>
        </footer>
    )
}

export default Footer