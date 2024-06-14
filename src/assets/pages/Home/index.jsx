import { Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Home.module.css";
import { rolarScroll, abrirCaixaFiltro, feicharCaixaFiltro } from "../../utils/Home/home";

function Home() {
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
                <section className={styles.campoBusca} id="campoBusca">
                    <div className={styles.campoFiltro} id="campoFiltro">
                        <div className={styles.lupaFiltro} id="lupaFiltro" onClick={abrirCaixaFiltro}>
                            <i className={`bi bi-filter ${styles.iconeFiltro}`} id="imgFiltro"></i>
                        </div>
                        <div className={styles.inputFiltro}>
                            <input type="text" id="filtrar" className={styles.filtrar} placeholder="Filtrar" />
                        </div>
                        <div className={styles.btnFeichar} id="ficharFiltro" onClick={feicharCaixaFiltro}>
                            <i className={`bi bi-x-circle ${styles.iconeFeichar}`} id="imgFeichar"></i>
                        </div>
                    </div>
                    <img src="../../../../public/img/Home/undraw_filter_re_sa16.svg" alt="Ilustração de busca" className={styles.imgBusca} />
                </section>
                <section className={styles.corpoPagina}>
                    {/* <Link to="/home/adicionarVaga" className={styles.linkVaga}>
                        <button className={styles.btnVaga}>
                            <i className="bi bi-plus-square-fill"></i>
                            <p>Adicionar vaga</p>
                        </button>
                    </Link> */}
                    <h1 className={styles.titulo}>EXPLORAR VAGAS</h1>
                    <div className={styles.vagas}>
                        <img src="../../../../public/img/Home/undraw_posts_1aht.svg" alt="" />
                        <img src="../../../../public/img/Home/undraw_posts_1aht.svg" alt="" />
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
}

export default Home;
