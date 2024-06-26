import { useState, useEffect } from "react";
import Footer from "../../../../../components/Footer";
import Header from "../../../../../components/Header";
import styles from "./Informacoes.module.css"
import { envioDados } from "../../../../../utils/Empresa/Empregador/InfoPessoalEmpregador/informacao"

function Informacoes() {
    const [cpf, setCPF] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cargo, setCargo] = useState("");
    const [erro, setErro] = useState("")

    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.cardLocalizacao}>
                    <form onSubmit={(e) => envioDados(e, cpf, telefone, cargo, setErro)} id="localizacaoPage">
                        <h1>Dados</h1>
                        <div>
                            <label htmlFor="cpf">
                                <div>
                                    CPF<br />
                                    <input type="text" name="cpf" id="cpf" className={styles.credenciais} placeholder="123.456.789-10" onChange={(e) => setCPF(e.target.value)}/>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="telefone">
                                <div>
                                    Telefone<br />
                                    <input type="tel" name="telefone" id="telefone" className={styles.credenciais} placeholder="(00) 0000-0000" onChange={(e) => setTelefone(e.target.value)}/>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="cargo">
                                <div>
                                    Cargo na Empresa<br />
                                    <input type="text" name="crago" id="cargo" className={styles.credenciais} placeholder="CEO" onChange={(e) => setCargo(e.target.value)}/>
                                </div>
                            </label>
                        </div>
                        <p className={styles.mensagemErro} style={{ color: "red" }}>{erro}</p>
                        <div>
                            <button type="submit" className={styles.btnConfirme}>Continuar</button>
                        </div>
                    </form>
                    <section className={styles.ilustracaoLocalizacao}>
                        <img src="../../../../public/img/Funcionario/Informacoes/undraw_personal_information_re_vw8a.svg" alt="Representação login" className={styles.ilustracaoLocalizacao} />
                    </section>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Informacoes;