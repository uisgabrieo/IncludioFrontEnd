import { Link } from "react-router-dom"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "../../components/Container";
import styles from "./Buscar.module.css";

function Buscar() {
    return (
        <>
            <Header />
            <nav className={styles.menu}>
                <Link to="/home" className={styles.navegacaoMenu}>Home</Link>
                <Link to="/home/busca" id={styles.paginaAtual} className={styles.navegacaoMenu}>Buscar</Link>
                <Link to="/home/bug" className={styles.navegacaoMenu}>Relatar Bug</Link>
                <i className={`bi bi-moon-fill ${styles.navegacaoMenu}`}></i>
            </nav>
            <Container>
                <section className={styles.container}>
                    <input type="text" className={styles.caixaBuscar} placeholder="Buscar"/>
                    <i class={`bi bi-search ${styles.lupa}`}></i>
                    <div className={styles.vagas}></div>
                </section>
                <section className={styles.vagas}>
                    <img src="../../../../public/img/Busca/undraw_no_data_re_kwbl.svg" alt="Vagas vazias" className={styles.imgVazio}/>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Buscar;