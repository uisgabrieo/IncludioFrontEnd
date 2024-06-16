import { useState } from "react";
import Footer from "../../../../../components/Footer";
import Header from "../../../../../components/Header";
import styles from "./Localizacao.module.css"
import { envioDados } from "../../../../../utils/Empresa/Empresa/LocalizacaoEmpresa/localizacao.js";

function Localizacao() {
    const [pais, setPais] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [cep, setCep] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
    const [numEmpresa, setNumEmpresa] = useState("");
    const [erro, setErro] = useState("")

    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.cardLocalizacao}>
                    <form onSubmit={(e) => envioDados(e, pais, estado, cidade, cep, bairro, rua, numEmpresa, setErro)} id="localizacaoPage">
                        <h1>Localização</h1>
                        <div>
                            <label htmlFor="pais">
                                <div>
                                    País<br />
                                    <input type="text" name="pais" id="pais" className={styles.credenciais} placeholder="Brasil" onChange={(e) => setPais(e.target.value)}/>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="estado">
                                <div>
                                    Estado<br />
                                    <input type="text" name="estado" id="estado" className={styles.credenciais} placeholder="Piauí" onChange={(e) => setEstado(e.target.value)}/>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="cidade">
                                <div>
                                    Cidade<br />
                                    <input type="text" name="cidade" id="cidade" className={styles.credenciais} placeholder="Teresina" onChange={(e) => setCidade(e.target.value)}/>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="cep">
                                <div>
                                    CEP<br />
                                    <input type="text" name="cep" id="cep" className={styles.credenciais} placeholder="64999-600" onChange={(e) => setCep(e.target.value)}/>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="bairro">
                                <div>
                                    Bairro<br />
                                    <input type="text" name="bairro" id="bairro" className={styles.credenciais} placeholder="Jokey" onChange={(e) => setBairro(e.target.value)}/>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="rua">
                                <div>
                                    Rua<br />
                                    <input type="text" name="rua" id="rua" className={styles.credenciais} placeholder="Rua Fidalma Martins Carvalho" onChange={(e) => setRua(e.target.value)}/>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="numeroEmpresa">
                                <div>
                                    Numero da Empresa<br />
                                    <input type="text" name="numEmpresa" id="numEmpresa" className={styles.credenciais} placeholder="111" onChange={(e) => setNumEmpresa(e.target.value)}/>
                                </div>
                            </label>
                        </div>
                        <p className={styles.mensagemErro} style={{ color: "red" }}>{erro}</p>
                        <div>
                            <button type="submit" className={styles.btnConfirme}>Continuar</button>
                        </div>
                    </form>
                    <section className={styles.ilustracaoLocalizacao}>
                        <img src="../../../../public/img/Funcionario/Localizacao/undraw_location_review_d5qn.svg" alt="Representação login" className={styles.ilustracaoLocalizacao} />
                    </section>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Localizacao;