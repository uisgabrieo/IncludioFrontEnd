import { useState } from "react";
import Footer from "../../../../../components/Footer";
import Header from "../../../../../components/Header";
import styles from "./Descricao.module.css"
import { envioDados } from "../../../../../utils/Empresa/Empresa/Descricao/descricao"

function Descricao() {
    const [descricao, setDescricao] = useState("");
    const [erro, setErro] = useState("")


    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.cardLocalizacao}>
                    <form onSubmit={(e) => envioDados(e, descricao, setErro)} id="localizacaoPage">
                        <h1>Dados</h1>
                        <div>
                            <label htmlFor="website">
                                <div>
                                    Descrição<br />
                                    <input type="text" name="website" id="website" className={styles.credenciais} placeholder="Descreva sobre o que é a empresa e qual é o seu intúito" onChange={(e) => setDescricao(e.target.value)}/>
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

export default Descricao;