import { Link } from "react-router-dom"
import { useState } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "./Bug.module.css"
import { envioDados } from "../../utils/Bug/bug"

function Bug() {
    const [descricao, setDescricao] = useState("");
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [emial, setEmail] = useState("");
    const [erro, setErro] = useState("");


    return (
        <>
            <Header />
            <nav className={styles.menu}>
                <Link to="/home" className={styles.navegacaoMenu}>Home</Link>
                <Link to="/home/busca" className={styles.navegacaoMenu}>Buscar</Link>
                <Link to="/home/bug" id={styles.paginaAtual} className={styles.navegacaoMenu}>Relatar Bug</Link>
                <i className={`bi bi-moon-fill ${styles.navegacaoMenu}`}></i>
            </nav>
            <main className={styles.main}>
                <section className={styles.cardLogin}>
                    <form onSubmit={(e) => envioDados(e, setDescricao, setNomeCompleto, setEmail, setErro)} className={styles.formulario}>
                        <div>
                            <h1>FeedBack, Avaliação ou Relatar Bug</h1>
                        </div>
                        <div>
                            <label htmlFor="email">
                                <div>
                                    Descrição<br />
                                    <input type="email" name="email" id="email" className={styles.credenciais} placeholder="exemplo@gmail.com"
                                    />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="senha">
                                <div className={styles.caixaSenha}>
                                    Nome Completo<br />
                                    <div className={styles.campoSenha}>
                                        <input type="password" name="senha" id="senha" className={styles.credenciais} placeholder="Senha" />
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="senha">
                                    <div className={styles.caixaSenha}>
                                        Emial<br />
                                        <div className={styles.campoSenha}>
                                            <input type="password" name="senha" id="senha" className={styles.credenciais} placeholder="Senha" />
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <button type="submit" className={styles.btnConfirme}>Enviar</button>
                        </div>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Bug;