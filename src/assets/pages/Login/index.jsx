import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Login.module.css";
import { envioDados, mostrarSenha } from "../../utils/Login/login";

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.cardLogin}>
                    <form onSubmit={(e) => envioDados(e, email, senha, setErro)} id="loginPage">
                        <h1>Entrar</h1>
                        <div>
                            <label htmlFor="email">
                                <div>
                                    Email<br />
                                    <input type="email" name="email" id="email" className={styles.credenciais} placeholder="exemplo@gmail.com" onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="senha">
                                <div className={styles.caixaSenha}>
                                    Senha<br />
                                    <div className={styles.campoSenha}>
                                        <input type="password" name="senha" id="senha" className={styles.credenciais} placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
                                        <i className={`bi bi-eye-fill ${styles.olho}`} id="olho" onClick={mostrarSenha}></i>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <p className={styles.mensagemErro} style={{ color: "red" }}>{erro}</p>
                        <div>
                            <button type="submit" className={styles.btnConfirme}>Login</button>
                        </div>
                    </form>
                    <section className={styles.ilustracaoLogin}>
                        <img src="../../../../public/img/Login/undraw_undraw_undraw_undraw_sign_up_ln1s_-1-_s4bc_-1-_ee41_-1-_kf4d.svg" alt="Representação login" className={styles.ilustracaoLogin} />
                    </section>
                </section>
                <section className="registre">
                    <p>Não possui cadastro? <Link to="/registro" className={styles.registroLink}>Registre-se aqui!</Link></p>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Login;
