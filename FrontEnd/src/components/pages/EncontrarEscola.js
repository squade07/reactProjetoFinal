import styles from './EncontrarEscola.module.css'

function EncontrarEscola() {
    return (
        <section className={styles.escolas}>

            <iframe className={styles.escolas_mapa}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234107.29147340468!2d-46.447094715966635!3d-23.535026098609155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59ceb1eb771f%3A0xe904f6a669744da1!2sMuseum%20of%20Art%20of%20S%C3%A3o%20Paulo%20Assis%20Chateaubriand!5e0!3m2!1sen!2sbr!4v1657318870422!5m2!1sen!2sbr"
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <div className={styles.container}>
                <div className={styles.escola_sobre}>
                    <h3 className={styles.escola_titulo}>SOBRE A ESCOLA</h3>
                    <h4 className={styles.escola_subtitulo}>Nome:</h4>
                    <p className="text-secondary">Sua escola aqui !!</p>
                    <h4 className={styles.escola_subtitulo}>Localização:</h4>
                    <p className="text-secondary">Localização ...</p>
                    <h4 className={styles.escola_subtitulo}>Doações feitas:</h4>
                    <p className="text-secondary">Doações ....</p>
                    <h4 className={styles.escola_subtitulo}>Materiais em falta:</h4>
                    <textarea className={styles.escola_input_area} name="materiais" id="" cols="20" rows="4" readOnly>
                    </textarea>
                </div>
                <div className={styles.escola_opiniao}>
                    <h3 className={styles.escola_titulo}>OPNAR SOBRE</h3>
                    <h4 className={styles.escola_subtitulo}>Nome:</h4>
                    <input className={styles.escola_input} type="text" name="nome" placeholder="Nome escola"/>
                    <h4 className={styles.escola_subtitulo}>Localização:</h4>
                    <input className={styles.escola_input} type="text" name="local" placeholder="Localização"/>
                    <h4 className={styles.escola_subtitulo}>Meu nome:</h4>
                    <input className={styles.escola_input} type="text" name="nome" placeholder="Meu nome"/>
                    <h4 className={styles.escola_subtitulo}>Sobre a escola:</h4>
                    <textarea className={styles.escola_input_area} name="materiais" id="" cols="20" rows="4"></textarea>
                </div>
            </div>
        </section>
    )
}

export default EncontrarEscola