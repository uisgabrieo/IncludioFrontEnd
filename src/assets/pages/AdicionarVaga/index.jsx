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
                    <h1>Criar Vaga</h1> <br /> 
                    <form className={styles.formVaga}>
                        <div className={styles.colunasVagas}>
                            <div className={styles.colunaUm}>
                                <label htmlFor="vaga">
                                    <div>
                                        Vaga <br />
                                        <input type="text" name="vaga" className={styles.credenciais} id="inputVaga" />
                                    </div>
                                </label>
                                <label htmlFor="modalidade">
                                    Modalidade <br />
                                    <select name="modalidade" id="modalidade" defaultValue="" className={styles.credenciais} >
                                        <option value="" disabled>Escolha uma opção</option>
                                        <option value="REMOTO">Remoto</option>
                                        <option value="PRESENCIAL">Presencial</option>
                                        <option value="HIBRIDO">Híbrido</option>
                                    </select>
                                </label>
                            </div>
                            <div className={styles.colunaDois}>
                                <label htmlFor="setor">
                                    Setor <br />
                                    <select name="setor" id="setor" defaultValue="" className={styles.credenciais} onChange={selecionarSetor}>
                                        <option value="" disabled>Escolha um setor</option>
                                        <option value="Livre">Livre</option>
                                        <option value="Saúde">Saúde</option>
                                        <option value="Educação">Educação</option>
                                        <option value="Tecnologia da Informação">Tecnologia da Informação (TI)</option>
                                        <option value="Engenharia">Engenharia</option>
                                        <option value="Adiministração">Administração</option>
                                        <option value="Finanças">Finanças</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Outro">Outro...</option>
                                    </select>
                                    <div className={styles.resultado} id="resultado">
                                        {areas.map((setor, index) => (
                                            <span
                                                key={index}>{setor}{index < areas.length - 1 ? ', ' : ''}
                                            </span>
                                        ))}
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className={styles.colunaTres}>
                            <label htmlFor="pais">
                                Pais<br />
                                <select name="pais" id="pais" defaultValue="" className={styles.credenciais} onChange={selecionarSetor}>
                                    <option value="" disabled>Selecione um pais</option>
                                </select>
                            </label>
                            <label htmlFor="estado">
                                Estado<br />
                                <select name="estado" id="estado" defaultValue="" className={styles.credenciais} onChange={selecionarSetor}>
                                    <option value="" disabled>Selecione um estado</option>
                                </select>
                            </label>
                        </div>
                        <div className={styles.colunaQuatro}>
                            <label htmlFor="requisitos">
                                Requisitos <br />
                                <div>
                                    <ReactQuill className={styles.requisitos} id={styles.requisitos} value={requisitos} onChange={setRequisitos} />
                                </div>
                            </label>
                            <label htmlFor="sobre a vaga">
                                Sobre a vaga <br />
                                <div>
                                    <ReactQuill className={styles.descricao} id={styles.descricao} value={descricao} onChange={setDescricao} />
                                </div>
                            </label>
                        </div>
                        <div>
                            <button type="submit" className={styles.btnConfirme}>Criar Vaga</button>
                        </div>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default AdicionarVaga;
