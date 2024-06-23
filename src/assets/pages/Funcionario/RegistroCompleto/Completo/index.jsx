import { useState, useEffect } from "react";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import styles from "./Completo.module.css";
import { envioDados, preencherData, log } from "../../../../utils/Funcionario/Completo/completo";

function Completo() {
    const [dia, setDia] = useState("");
    const [mes, setMes] = useState("");
    const [ano, setAno] = useState("");
    const [genero, setGenero] = useState("");
    const [imgPerfil, setImgPerfil] = useState("");
    const [imgDiagnostico, setImgDiagnostico] = useState("");
    const [erro, setErro] = useState("");

    useEffect(() => {
        preencherData();
        log();
    }, []);

    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.cardLocalizacao}>
                    <form id="localizacaoPage" onSubmit={(e) => envioDados(e, dia, mes, ano, genero, imgPerfil, imgDiagnostico, setErro)} encType="multipart/form-data">
                        <h1>Informações Finais</h1>
                        <div>
                            <label htmlFor="dataNascimento">
                                Data de Nascimento<br />
                                <select name="dia" id="dia" className={styles.data} onChange={(e) => setDia(e.target.value)}></select>
                                <select name="mes" id="mes" className={styles.data} onChange={(e) => setMes(e.target.value)}></select>
                                <select name="ano" id="ano" className={styles.data} onChange={(e) => setAno(e.target.value)}></select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="genero">
                                Genero<br />
                                <select name="genero" id="genero" defaultValue="" className={styles.credenciais} onChange={(e) => setGenero(e.target.value)}>
                                    <option value="" disabled>Escolha uma opção</option>
                                    <option value="HOMEM">Homem</option>
                                    <option value="MULHER">Mulher</option>
                                    <option value="OUTRO">Outro</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="foto">
                                Foto<br />
                                <label htmlFor="imagemPerfil" className={styles.btnUpload}>Insira sua Foto</label>
                                <input type="file" name="imagemPerfil" id="imagemPerfil" className={styles.credenciaisFile} accept="image/*" onChange={(e) => setImgPerfil(e.target.files[0])} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="diagnostico">
                                Laudo<br />
                                <label htmlFor="diagnostico" className={styles.btnUpload}>Insira o diagnostico</label>
                                <input type="file" name="diagnostico" id="diagnostico" className={styles.credenciaisFile} accept="image/*" onChange={(e) => setImgDiagnostico(e.target.files[0])} />
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
    );
}

export default Completo;
