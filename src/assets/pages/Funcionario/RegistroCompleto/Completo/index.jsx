import { useState, useEffect } from "react";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import styles from "./Completo.module.css";
import { envioDados, preencherData } from "../../../../utils/Funcionario/Completo/completo";

function Completo() {
    const [cpf, setCPF] = useState("");
    const [telefone, setTelefone] = useState("");
    const [setor, setSetor] = useState("");
    const [formacao, setFormacao] = useState("");
    const [instituicao, setInstituicao] = useState("");
    const [erro, setErro] = useState("");

    useEffect(() => {
        preencherData();
    }, []);

    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.cardLocalizacao}>
                    <form id="localizacaoPage" encType="multipart/form-data">
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
                            <label htmlFor="genero">
                                Genero<br />
                                <select name="genero" id="genero" className={styles.credenciais}>
                                    <option value="" disabled selected></option>
                                    <option value="Homem">Homem</option>
                                    <option value="Mulher">Mulher</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="foto">
                                Foto<br />
                                <label htmlFor="imagemPerfil" className={styles.btnUpload}>Insira sua Foto</label>
                                <input type="file" name="imagemPerfil" id="imagemPerfil" className={styles.credenciaisFile} accept="image/*" />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="foto">
                                Diagnostico<br />
                                <label htmlFor="diagnostico" className={styles.btnUpload}>Insira o diagnostico</label>
                                <input type="file" name="diagnostico" id="diagnostico" className={styles.credenciaisFile} accept="image/*" />
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