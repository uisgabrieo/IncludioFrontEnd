import { Link } from "react-router-dom"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Perfil.module.css";

function Perfil() {
    return (
        <>
            <section className={styles.homePage}>
                <Header />
                <nav className={styles.menu}>
                    <Link to="" className={styles.navegacaoMenu}>Home</Link>
                    <Link to="" className={styles.navegacaoMenu}>Buscar</Link>
                    <Link to="" className={styles.navegacaoMenu}>Relatar Bug</Link>
                    <i className={`bi bi-moon-fill ${styles.navegacaoMenu}`}></i>
                </nav>
                <main className={styles.container}>
                    <section className={styles.campoPerfil}>
                        <img src="../../../../public/img/global/gato.webp" alt="" className="imgPerfil" />
                    </section>
                    <section className={styles.campoVagas}>
                        <div id={styles.vagas}></div>
                    </section>
                </main>
                <Footer />
            </section>
        </>
    )
}

export default Perfil;