import Header from '../../components/Header';
import Footer from '../../components/Footer';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from "./AddVaga.module.css"

const MyEditor = () => {
    const [value, setValue] = useState('');

    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.cardLogin}>
                    <form id="loginPage">
                        <h1>Entrar</h1>
                        <div>
                            <label htmlFor="email">
                                <div>
                                    Email<br />
                                    <input type="email" name="email" id="email" className={styles.credenciais} placeholder="exemplo@gmail.com" onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="senha">
                                <div className={styles.caixaSenha}>
                                    Senha<br />
                                    <div className={styles.campoSenha}>
                                        <input type="password" name="senha" id="senha" className={styles.credenciais} placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
                                        <i className={`bi bi-eye-fill ${styles.olho}`} id="olho" ></i>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <p className={styles.mensagemErro} style={{ color: "red" }}></p>
                        <div>
                            <button type="submit" className={styles.btnConfirme}>Login</button>
                        </div>
                    </form>
                    <section className={styles.ilustracaoLogin}>
                        <img src="../../../../public/img/Login/undraw_undraw_undraw_undraw_sign_up_ln1s_-1-_s4bc_-1-_ee41_-1-_kf4d.svg" alt="Representação login" className={styles.ilustracaoLogin} />
                    </section>
                </section>
                <section className="registre">
                </section>
            </main>
            <Footer />
            <ReactQuill value={value} onChange={setValue} />
        </>
    );
};

export default MyEditor;
