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
                                        <input type="text" name="senha" id="senha" className={styles.credenciais} placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div>
                            <ReactQuill value={value} onChange={setValue} />
                        </div>
                        <div>
                            <button type="submit" className={styles.btnConfirme}>Login</button>
                        </div>
                    </form>
                </section>
                <section className="registre">
                </section>
            </main>
            <Footer />
        </>
    );
};

export default MyEditor;
