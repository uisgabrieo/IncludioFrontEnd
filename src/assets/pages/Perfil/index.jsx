import { useEffect } from "react";
import { Link } from "react-router-dom"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Perfil.module.css";
import { rolarScroll } from "../../utils/Perfil/perfil"

function Perfil() {
    useEffect(() => {
        window.addEventListener("scroll", rolarScroll);
        return () => {
            window.removeEventListener("scroll", rolarScroll);
        };
    }, []);
    
    return (
        <>
        
        <section className={styles.homePage}>
                <section className={styles.header} id="header">
                    <Header />
                    <nav id="navMenu" className={styles.menu}>
                        <Link to="/home" id={styles.paginaAtual} className={styles.navegacaoMenu}>Home</Link>
                        <Link to="/home/busca" className={styles.navegacaoMenu}>Buscar</Link>
                        <Link to="/home/bug" className={styles.navegacaoMenu}>Relatar Bug</Link>
                        <i className={`bi bi-moon-fill ${styles.navegacaoMenu}`}></i>
                    </nav>
                </section>
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