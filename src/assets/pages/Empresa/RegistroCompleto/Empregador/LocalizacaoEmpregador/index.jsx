import { useState, useEffect } from "react";
import Footer from "../../../../../components/Footer";
import Header from "../../../../../components/Header";
import styles from "./Localization.module.css"
import { envioDados } from "../../../../../utils/Empresa/Empregador/LocalizacaoEmpregador/localizacao";
import Button from "../../../../../components/Button"

function Localizacao() {
    const [pais, setPais] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [cep, setCep] = useState("");
    const [complemento, setComplemento] = useState("");
    const [erro, setErro] = useState("")


    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.cardLocalizacao}>
                    <form onSubmit={(e) => envioDados(e, pais, estado, cidade, cep, complemento, setErro)} id="localizacaoPage">
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
                            <label htmlFor="complemento">
                                <div>
                                    Complemento<br />
                                    <input type="text" name="complemento" id="complemento" className={styles.credenciais} placeholder="Jokey(OPCIONAL)" onChange={(e) => setComplemento(e.target.value)}/>
                                </div>
                            </label>
                        </div>
                        <p className={styles.mensagemErro} style={{ color: "red" }}>{erro}</p>
                        <div>
                            <Button type="submit" textButton={"Continuar"} />
                            {/* <button type="submit" className={styles.btnConfirme}>Continuar</button> */}
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