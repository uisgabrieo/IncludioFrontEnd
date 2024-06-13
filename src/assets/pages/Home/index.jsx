import { Link } from "react-router-dom"
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Header from "../../components/Header";
import styles from "./Home.module.css";


function Home() {
    return (
        <>
            <section className={styles.homePage}>
                <Header />
                <nav className={styles.menu}>
                    <Link to="/home"  id={styles.paginaAtual} className={styles.navegacaoMenu}>Home</Link>
                    <Link to="/home/busca" className={styles.navegacaoMenu}>Buscar</Link>
                    <Link to="/home/bug" className={styles.navegacaoMenu}>Relatar Bug</Link>
                    <i className={`bi bi-moon-fill ${styles.navegacaoMenu}`}></i>
                </nav>
                <section className={styles.campoBusca}>
                    <input type="text" id="buscar" className={styles.buscar} placeholder="Filtar" />
                    <img src="../../../../public/img/Home/undraw_filter_re_sa16.svg" alt="Ilustração de busca" className={styles.imgBusca} />
                </section>
                <section className={styles.corpoPagina}>
                    <h1 className={styles.titulo}>EXPLORAR VAGAS</h1>
                    <div id="vagas">

                    </div>
                </section>
            </section>
            <Container />
            <Footer />
        </>
    )
}

export default Home;