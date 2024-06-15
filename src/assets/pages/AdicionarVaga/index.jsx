import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from "./AddVaga.module.css";
import { exibirSetor, rolarScroll } from '../../utils/AdicionarVaga/AddVaga';

const AdicionarVaga = () => {
    const [requisitos, setRequisitos] = useState('');
    const [descricao, setDescricao] = useState('');
    const [areas, setSetor] = useState([]);

    const selecionarSetor = (e) => {
        exibirSetor(e, areas, setSetor);
    };

    useEffect(() => {
        window.addEventListener("scroll", rolarScroll);
        return () => {
            window.removeEventListener("scroll", rolarScroll);
        };
    }, []);

    return (
        <>
            <section className={styles.header} id="header">
                <Header />
                <nav id="navMenu" className={styles.menu}>
                    <Link to="/home" className={styles.navegacaoMenu}>Home</Link>
                    <Link to="/home/busca" className={styles.navegacaoMenu}>Buscar</Link>
                    <Link to="/home/bug" className={styles.navegacaoMenu}>Relatar Bug</Link>
                    <i className={`bi bi-moon-fill ${styles.navegacaoMenu}`}></i>
                </nav>
            </section>
            <main className={styles.main}>
                <section className={styles.cardVaga}>
                    <h1>Criar Vaga</h1>
                    <form className={styles.formVaga}>
                        <div className={styles.colunasVagas}>
                            <div>
                                <label htmlFor="vaga">
                                    <div>
                                        Vaga <br />
                                        <input type="text" name="vaga" className={styles.credenciais} id="inputVaga" />
                                    </div>
                                </label>
                                <label htmlFor="modalidade">
                                    Modalidade
                                    <select name="modalidade" id="modalidade" defaultValue="" className={styles.credenciais} >
                                        <option value="" disabled>Escolha uma opção</option>
                                        <option value="REMOTO">Remoto</option>
                                        <option value="PRESENCIAL">Presencial</option>
                                        <option value="HIBRIDO">Híbrido</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="setor">
                                    Área de Atuação<br />
                                    <select name="setor" id="setor" defaultValue="" className={styles.credenciais} onChange={selecionarSetor}>
                                        <option value="" disabled>Selecione uma área...</option>
                                        <option value="livre">Livre</option>
                                        <option value="saude">Saúde</option>
                                        <option value="educacao">Educação</option>
                                        <option value="ti">Tecnologia da Informação (TI)</option>
                                        <option value="engenharia">Engenharia</option>
                                        <option value="administracao">Administração</option>
                                        <option value="financas">Finanças</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="outro">Outro...</option>
                                    </select>
                                    <div className={styles.resultado} id="resultado">
                                        {areas.map((setor, index) => (
                                            <span
                                                key={index}>{setor}{index < areas.length - 1 ? ', ' : ''}
                                            </span>
                                        ))}
                                    </div>
                                </label>
                                <label htmlFor="requisitos">
                                    <div>
                                        <ReactQuill className={styles.descricao} id={styles.requisitos} value={requisitos} onChange={setRequisitos} />
                                    </div>
                                </label>
                            </div>
                        </div>
                        <dir>
                            <label htmlFor="sobre a vaga">
                                <div>
                                    <ReactQuill className={styles.descricao} id={styles.descricao} value={descricao} onChange={setDescricao} />
                                </div>
                            </label>
                        </dir>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default AdicionarVaga;
