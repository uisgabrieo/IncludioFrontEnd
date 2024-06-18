import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from "./AddVaga.module.css";
import { exibirSetor, rolarScroll, envioDados } from '../../utils/AdicionarVaga/AddVaga';

const AdicionarVaga = () => {
    const [vaga, setVaga] = useState('');
    const [setor, setSetor] = useState([]);
    const [modalidade, setModalidade] = useState('');
    const [pais, setPais] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [requisitos, setRequisitos] = useState('');
    const [descricao, setDescricao] = useState('');

    const selecionarSetor = (e) => {
        exibirSetor(e, setor, setSetor);
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
                    <Link to="/home/perfil" className={styles.navegacaoMenu}>Perfil</Link>
                    <Link to="/home/busca" className={styles.navegacaoMenu}>Buscar</Link>
                    <Link to="/home/bug" className={styles.navegacaoMenu}>Relatar Bug</Link>
                    <i className={`bi bi-moon-fill ${styles.navegacaoMenu}`}></i>
                </nav>
            </section>
            <main className={styles.main}>
                <section className={styles.cardVaga}>
                    <h1>Criar Vaga</h1> <br />
                    <form onSubmit={(e) => envioDados(e, vaga, setor, modalidade, pais, estado, cidade, requisitos, descricao)} className={styles.formVaga}>
                        <div className={styles.colunasVagas}>
                            <div className={styles.colunaUm}>
                                <label htmlFor="vaga">
                                    <div>
                                        Vaga <br />
                                        <input type="text" name="vaga" className={styles.credenciais} id="inputVaga" onChange={(e) => setVaga(e.target.value)}/>
                                    </div>
                                </label>
                                <label htmlFor="modalidade">
                                    Modalidade <br />
                                    <select name="modalidade" id="modalidade" defaultValue="" className={styles.credenciais} onChange={(e) => setModalidade(e.target.value)}>
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
                                        <option value="Administração">Administração</option>
                                        <option value="Finanças">Finanças</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Outro">Outro...</option>
                                    </select>
                                    <div className={styles.resultado} id="resultado">
                                        {setor.map((setor, index) => (
                                            <span
                                                key={index}>{setor}{index < setor.length - 1 ? ', ' : ''}
                                            </span>
                                        ))}
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className={styles.colunaTres}>
                            <label htmlFor="pais">
                                <div>
                                    Pais <br />
                                    <input type="text" name="pais" className={styles.credenciais} onChange={(e) => setPais(e.target.value)}/>
                                </div>
                            </label>
                            <label htmlFor="estado">
                                <div>
                                    Estado <br />
                                    <input type="text" name="estado" className={styles.credenciais} onChange={(e) => setEstado(e.target.value)}/>
                                </div>
                            </label>
                            <label htmlFor="cidade">
                                <div>
                                    Cidade <br />
                                    <input type="text" name="cidade" className={styles.credenciais} onChange={(e) => setCidade(e.target.value)}/>
                                </div>
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
