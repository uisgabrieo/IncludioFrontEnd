import { useState } from "react";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Registro.module.css";
import { mostrarSenha, mostrarSenhaConfirmar, envioDados } from "../../utils/Registro/registro";
import Button from "../../components/Button";
import Alert from "../../components/Alert";

function Registro() {
    const [nomeCompleto, setNomeCompleto] = useState("")
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [tipoConta, setTipoConta] = useState("");
    const [erro, setErro] = useState("");

    const limpar = () => {
        setErro("");
    };
    
    return (
        <>
            <Header />
            <main className={styles.main}>
            <div className={styles.alert} id="alert">
                    <Alert msg={erro} limpar={limpar} />
                </div>
                <section className={styles.cardRegistro}>
                    <form onSubmit={(e) => envioDados(e, nomeCompleto, email, senha, confirmarSenha, tipoConta, setErro)} id="registro">
                        <div className={styles.tituloEsubTitulo}>
                            <h1>Cadastrar</h1>
                            <p>Começe sua jornada no INCLUDIO</p>
                        </div>
                        <div>
                            <label htmlFor="nomeCompleto">
                                <div>
                                    Nome Completo<br />
                                    <input type="text" name="nomeCompleto" id="nomeCompleto" className={styles.credenciais} placeholder="Exemplo" onChange={(e) => setNomeCompleto(e.target.value)} />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="email">
                                <div>
                                    Email<br />
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
                        <div>
                            <label htmlFor="conta">
                                <div>
                                    Conta<br />
                                    <select name="conta" id="conta" defaultValue="" className={styles.credenciais} onChange={(e) => setTipoConta(e.target.value)}>
                                        <option value="" disabled>Escolha uma opção</option>
                                        <option value="EMPLOYER">Empresa</option>
                                        <option value="EMPLOYEE">Funcionário</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                        <div>
                            <Button type="submit" textButton={"Cadastre-se"} />
                            {/* <button type="submit" className={styles.btnConfirme}>Cadastrar-se</button> */}
                        </div>
                    </form>
                    <section>
                        <img src="../../../../public/img/Registro/undraw_sign_up_n6im.svg" alt="Ilustração Registro" className={styles.ilustracaoLogin} />
                    </section>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Registro;
