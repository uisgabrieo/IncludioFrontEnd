import { useState, useEffect } from "react";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import styles from "./Completo.module.css";
//import { envioDados, preencherData } from "../../../../utils/Funcionario/Completo/completo";

function Completo() {
    const [cpf, setCPF] = useState("");
    const [telefone, setTelefone] = useState("");
    const [setor, setSetor] = useState("");
    const [formacao, setFormacao] = useState("");
    const [instituicao, setInstituicao] = useState("");
    const [erro, setErro] = useState("");

    // useEffect(() => {
    //     preencherData();
    // }, []);

    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.cardLocalizacao}>
                    <form id="localizacaoPage">
                        <h1>Informações Finais</h1>
                        <div>
                            <label htmlFor="dataNascimento">
                                Data de Nascimento<br />
                                <select name="dia" id="dia" className={styles.data}></select>
                                <select name="mes" id="mes" className={styles.data}></select>
                                <select name="ano" id="ano" className={styles.data}></select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="telefone">
                                Telefone<br />
                                <input type="tel" name="telefone" id="telefone" className={styles.credenciais} placeholder="(00) 0000-0000" onChange={(e) => setTelefone(e.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="setor">
                                Setor de Atuação<br />
                                <input type="text" name="setor" id="setor" className={styles.credenciais} placeholder="Educação" onChange={(e) => setSetor(e.target.value)} />
                            </label>
                        </div>
                        <p className={styles.mensagemErro} style={{ color: "red" }}>{erro}</p>
                        <div>
                            <button type="submit" className={styles.btnConfirme}>Continuar</button>
                        </div>
                    </form>
                    <section className={styles.ilustracaoLocalizacao}>
                        <img src="../../../../public/img/Funcionario/Completo/undraw_project_completed_re_jr7u.svg" alt="Representação login" className={styles.ilustracaoLocalizacao} />
                    </section>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Completo;