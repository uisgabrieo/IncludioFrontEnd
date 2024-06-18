import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "./Bug.module.css"
import { envioDados, rolarScroll } from "../../utils/Bug/bug"

function Bug() {
    const [descricao, setDescricao] = useState("");
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [email, setEmail] = useState("");
    const [erro, setErro] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", rolarScroll);
        return () => {
            window.removeEventListener("scroll", rolarScroll);
        };
    }, []);

    return (
        <>
            <section className={styles.header} id="header">
                <Header />
                <nav id="navMenu" className={styles.menu}>
                    <Link to="/home" className={styles.navegacaoMenu}>Home</Link>
                    <Link to="/home/perfil" className={styles.navegacaoMenu}>Perfil</Link>
                    <Link to="/home/busca" className={styles.navegacaoMenu}>Buscar</Link>
                    <Link to="/home/bug" id={styles.paginaAtual} className={styles.navegacaoMenu}>Relatar Bug</Link>
                    <i className={`bi bi-moon-fill ${styles.navegacaoMenu}`}></i>
                </nav>
            </section>
            <main className={styles.main}>
                <section className={styles.cardLogin}>
                    <form onSubmit={(e) => envioDados(e, descricao, nomeCompleto, email, setErro)} className={styles.formulario}>
                        <div>
                            <h1>FeedBack, Avaliação ou Relatar Bug</h1>
                        </div>
                        <div>
                            <label htmlFor="nomeCompleto">
                                <div>
                                    Nome Completo<br />
                                    <input type="text" name="nomeCompleto" className={styles.credenciais} placeholder="Nome Completo" onChange={(e) => setNomeCompleto(e.target.value)} />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="email">
                                <div>
                                    Email<br />
                                    <input type="email" name="email" className={styles.credenciais} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="descricao">
                                <div>
                                    Descrição<br />
                                    <textarea name="descricao" className={styles.credenciais} id={styles.descricao} placeholder="Descreva" onChange={(e) => setDescricao(e.target.value)} />
                                </div>
                            </label>
                        </div>
                        <button type="submit" className={styles.btnConfirme}>Enviar</button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Bug;