import React from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./Login.module.css"

function Login() {
    const mostrarSenha = () => {
        // Adicione a lógica para mostrar a senha aqui
    };

    return (
        <>
            <Header />
            <Container>
                <main className="main">
                    <section className={styles.cardLogin}>
                        <h1>Entrar</h1>
                        <form action="" method="post" className={styles.dadosLogin}>
                            <div>
                                <label htmlFor="email">
                                    <div>
                                        Email<br />
                                        <input type="email" name="email" id={styles.email} className={styles.credenciais} />
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="password">
                                    <div id={styles.caixaSenha}>
                                        Password<br />
                                        <input type="password" name="password" id={styles.password} className={styles.credenciais} />
                                        <i className={`bi bi-eye-fill ${styles.botaoSenha}`} onClick={mostrarSenha}></i>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <button type="submit" className={styles.btnConfirme}>Login</button>
                            </div>
                        </form>
                        <p id={styles.mensagemErro} style={{ color: "red" }}></p>
                    </section>
                </main>
            </Container>
            <Footer />
        </>
    );
}

export default Login;
