import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "../../components/Container";
import styles from "./Buscar.module.css";
import { rolarScroll, buscarVagas } from "../../utils/Buscar/buscar"

function Buscar() {
    const [vaga, setVaga] = useState("");

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
                    <Link to="/home/busca" id={styles.paginaAtual} className={styles.navegacaoMenu}>Buscar</Link>
                    <Link to="/home/bug" className={styles.navegacaoMenu}>Relatar Bug</Link>
                    <i className={`bi bi-moon-fill ${styles.navegacaoMenu}`}></i>
                </nav>
            </section>
            <Container>
                <section className={styles.container}>
                    <form onSubmit={(e) => buscarVagas(e, vaga)}>
                        <div>
                            <input type="text" name="busca" className={styles.caixaBuscar} placeholder="Buscar" onChange={(e) => setVaga(e.target.value)}/>
                            <i className={`bi bi-search ${styles.lupa}`}></i>
                        </div>
                    </form>
                </section>
                <section>
                    <div className={styles.vagas} id="posts">
                        <img src="../../../../public/img/Busca/undraw_no_data_re_kwbl.svg" alt="Vagas vazias" className={styles.imgVazio} id="imgVazio"/>
                    </div>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Buscar;