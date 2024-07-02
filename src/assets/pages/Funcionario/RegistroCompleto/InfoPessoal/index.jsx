import { useState, useEffect } from "react";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import Alert from "../../../../components/Alert";
import styles from "./Informacoes.module.css"
import { envioDados } from "../../../../utils/Funcionario/InfoPessoal/informacao"
import Button from "../../../../components/Button";

function Informacoes() {
    const [cpf, setCPF] = useState("");
    const [telefone, setTelefone] = useState("");
    const [setor, setSetor] = useState("");
    const [formacao, setFormacao] = useState("");
    const [instituicao, setInstituicao] = useState("");
    const [erro, setErro] = useState("")

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
                <section className={styles.cardLocalizacao}>
                    <form onSubmit={(e) => envioDados(e, cpf, telefone, setor, formacao, instituicao, setErro)} id="localizacaoPage">
                        <h1>Dados</h1>
                        <div>
                            <label htmlFor="cpf">
                                <div>
                                    CPF<br />
                                    <input type="text" name="cpf" id="cpf" className={styles.credenciais} placeholder="123.456.789-10" onChange={(e) => setCPF(e.target.value)} />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="telefone">
                                <div>
                                    Telefone<br />
                                    <input type="tel" name="telefone" id="telefone" className={styles.credenciais} placeholder="(00) 0000-0000" onChange={(e) => setTelefone(e.target.value)} />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="setor">
                                <div>
                                    Setor de Atuação<br />
                                    <input type="text" name="setor" id="setor" className={styles.credenciais} placeholder="Educação" onChange={(e) => setSetor(e.target.value)} />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="formação">
                                <div>
                                    Formação Academica<br />
                                    <input type="text" name="complemento" id="complemento" className={styles.credenciais} placeholder="Engenharia de Software" onChange={(e) => setFormacao(e.target.value)} />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="instituicao">
                                <div>
                                    Intituição Acadêmica<br />
                                    <input type="text" name="instituicao" id="instituicao" className={styles.credenciais} placeholder="ICEV" onChange={(e) => setInstituicao(e.target.value)} />
                                </div>
                            </label>
                        </div>
                        <div>
                            <Button type="submit" textButton={"Continuar"} />
                            {/* <button type="submit" className={styles.btnConfirme}>Continuar</button> */}
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