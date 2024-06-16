import { useState } from "react";
import React from "react";
import Header from "../../../../../components/Header";
import Footer from "../../../../../components/Footer";
import styles from "./Dados.module.css";
import { mostrarSenha, mostrarSenhaConfirmar, envioDados } from "../../../../../utils/Empresa/Empresa/Dados/dados";

function Dados() {
    const [logo, setLogo] = useState("")
    const [nomeEmpresa, setNomeEmpresa] = useState("")
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [erro, setErro] = useState("");
    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.cardRegistro}>
                    <form onSubmit={(e) => envioDados(e, logo, nomeEmpresa, email, senha, confirmarSenha, setErro)} id="registro">
                        <div className={styles.tituloEsubTitulo}>
                            <h1>Cadastrar</h1>
                            <p>Começe sua jornada no INCLUDIO</p>
                        </div>
                        <div>
                            <label htmlFor="foto">
                                Logotipo<br />
                                <label htmlFor="imagemLogo" className={styles.btnUpload}>Insira sua Foto</label>
                                <input type="file" name="imagemLogo" id="imagemLogo" className={styles.credenciaisFile} accept="image/*" onChange={(e) => setLogo(e.target.files[0])} />
                            </label>
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
                        <div>
                            <label htmlFor="confirmarSenha">
                                <div className={styles.caixaSenha}>
                                    Confirmar Senha<br />
                                    <div className={styles.campoSenha}>
                                        <input type="password" name="confirmarSenha" id="confirmarSenha" className={styles.credenciais} placeholder="Confirmar Senha" onChange={(e) => setConfirmarSenha(e.target.value)} />
                                        <i className={`bi bi-eye-fill ${styles.olho}`} id="olhoConfirmar" onClick={mostrarSenhaConfirmar}></i>
                                    </div>
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
