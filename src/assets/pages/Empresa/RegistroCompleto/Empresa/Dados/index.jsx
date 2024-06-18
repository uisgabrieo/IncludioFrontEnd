import { useState, useEffect } from "react";
import React from "react";
import Header from "../../../../../components/Header";
import Footer from "../../../../../components/Footer";
import styles from "./Dados.module.css";
import { envioDados } from "../../../../../utils/Empresa/Empresa/Dados/dados";

function Dados() {
    const [nomeEmpresa, setNomeEmpresa] = useState("")
    const [email, setEmail] = useState("");
    const [erro, setErro] = useState("");

    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.cardRegistro}>
                    <form onSubmit={(e) => envioDados(e, nomeEmpresa, email, setErro)} id="registro">
                        <div className={styles.tituloEsubTitulo}>
                            <h1>Cadastrar</h1>
                            <p>Começe sua jornada no INCLUDIO</p>
                        </div>
                        <div>
                            <label htmlFor="nomeEmpresa">
                                <div>
                                    Nome da Empresa<br />
                                    <input type="text" name="nomeEmpresa" id="nomeEmpresa" className={styles.credenciais} placeholder="Exemplo" onChange={(e) => setNomeEmpresa(e.target.value)} />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="email">
                                <div>
                                    Email da Empresa<br />
                                    <input type="email" name="email" id="email" className={styles.credenciais} placeholder="exemplo@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </label>
                        </div>
                        <p className={styles.mensagemErro} style={{ color: "red" }}>{erro}</p>
                        <div>
                            <button type="submit" className={styles.btnConfirme}>Cadastrar-se</button>
                        </div>
                    </form>
                    <section>
                        <img src="../../../../public/img/Empresa/Dados/undraw_website_u6x8.svg" alt="Ilustração Registro" className={styles.ilustracaoLogin} />
                    </section>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Dados;
