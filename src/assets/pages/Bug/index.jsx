import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import styles from "./Bug.module.css";
import { envioDados, rolarScroll } from "../../utils/Bug/bug";

function Bug() {
    const [descricao, setDescricao] = useState("");
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [email, setEmail] = useState("");
    const [erro, setErro] = useState("");
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

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
                <Navigation onToggleTheme={toggleTheme} />
            </section>
            <main className={darkTheme ? styles.main : styles.mainpreto}>
                <section className={styles.cardLogin}>
                    <form onSubmit={(e) => envioDados(e, descricao, nomeCompleto, email, setErro)} className={styles.formulario}>
                        <div className={styles.texto}>
                            <h1>FeedBack</h1>
                            <p>Nos relate problemas, experiência ou qualuquer outro problema</p> <br /> <br />
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
    );
}

export default Bug;
