import { useState } from "react";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import styles from "./Localization.module.css"

function Localizacao() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.cardLocalizacao}>
                    <form id="loginPage">
                        <h1>Localização</h1>
                        <div>
                            <label htmlFor="pais">
                                <div>
                                    País<br />
                                    <input type="text" name="pais" id="pais" className={styles.credenciais} placeholder="Brasil"/>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="estado">
                                <div>
                                    Estado<br />
                                    <input type="text" name="estado" id="estado" className={styles.credenciais} placeholder="Piauí"/>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="cidade">
                                <div>
                                    Cidade<br />
                                    <input type="text" name="cidade" id="cidade" className={styles.credenciais} placeholder="Teresina"/>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="cep">
                                <div>
                                    CEP<br />
                                    <input type="text" name="cep" id="cep" className={styles.credenciais} placeholder="64999-600"/>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="complemento">
                                <div>
                                    Complemento<br />
                                    <input type="text" name="complemento" id="complemento" className={styles.credenciais} placeholder="Jokey(OPCIONAL)"/>
                                </div>
                            </label>
                        </div>
                        {/* <p className={styles.mensagemErro} style={{ color: "red" }}>{erro}</p> */}
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