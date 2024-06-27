import { useState, useEffect } from "react";
import Footer from "../../../../../components/Footer";
import Header from "../../../../../components/Header";
import styles from "./Info.module.css"
import { envioDados, preencherData } from "../../../../../utils/Empresa/Empresa/InfoEmpresa/info"
import Button from "../../../../../components/Button";

function Info() {
    const [dia, setDia]  = useState("");
    const [mes, setMes]  = useState("");
    const [ano, setAno]  = useState("");
    const [cnpj, setCNPJ] = useState("");
    const [telefone, setTelefone] = useState("");
    const [website, setWebsite] = useState("");
    const [erro, setErro] = useState("")

    useEffect(() => {
        preencherData()
    }, []);

    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.cardLocalizacao}>
                    <form onSubmit={(e) => envioDados(e, dia, mes, ano, cnpj, telefone, website, setErro)} id="localizacaoPage">
                        <h1>Dados</h1>
                        <div>
                            <label htmlFor="dataNascimento">
                                Data de Fundação<br />
                                <select name="dia" id="dia" className={styles.data} onChange={(e) => setDia(e.target.value)}></select>
                                <select name="mes" id="mes" className={styles.data} onChange={(e) => setMes(e.target.value)}></select>
                                <select name="ano" id="ano" className={styles.data} onChange={(e) => setAno(e.target.value)}></select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="cnpj">
                                <div>
                                    CNPJ<br />
                                    <input type="text" name="cnpj" id="cnpj" className={styles.credenciais} placeholder="00.000.000/0000-00" onChange={(e) => setCNPJ(e.target.value)}/>
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
                            <label htmlFor="website">
                                <div>
                                    Website<br />
                                    <input type="text" name="website" id="website" className={styles.credenciais} placeholder="www.includio.com" onChange={(e) => setWebsite(e.target.value)}/>
                                </div>
                            </label>
                        </div>
                        <p className={styles.mensagemErro} style={{ color: "red" }}>{erro}</p>
                        <div>
                            <Button type="submit" textButton={"Continuar"} />
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

export default Info;